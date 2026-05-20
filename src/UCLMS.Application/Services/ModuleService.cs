using AutoMapper;
using UCLMS.Application.Common.Exceptions;
using UCLMS.Application.DTOs.Modules;
using UCLMS.Application.Interfaces.Repositories;
using UCLMS.Application.Interfaces.Services;
using UCLMS.Domain.Entities;

namespace UCLMS.Application.Services;

public class ModuleService : IModuleService
{
    private readonly IModuleRepository _modules;
    private readonly ICourseRepository _courses;
    private readonly IMapper _mapper;

    public ModuleService(IModuleRepository modules, ICourseRepository courses, IMapper mapper)
    {
        _modules = modules;
        _courses = courses;
        _mapper = mapper;
    }

    public async Task<ModuleSummaryDto> GetByIdAsync(int id, CancellationToken ct = default)
    {
        var module = await _modules.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Module", id);

        return _mapper.Map<ModuleSummaryDto>(module);
    }

    public async Task<ModuleSummaryDto> CreateAsync(CreateModuleDto dto, CancellationToken ct = default)
    {
        if (!await _courses.ExistsAsync(c => c.Id == dto.CourseId, ct))
            throw new NotFoundException("Course", dto.CourseId);

        var nextOrder = await _modules.GetNextOrderIndexAsync(dto.CourseId, ct);

        var module = new Module
        {
            CourseId = dto.CourseId,
            Title = dto.Title,
            Description = dto.Description,
            OrderIndex = dto.OrderIndex >= 0 ? dto.OrderIndex : nextOrder
        };

        await _modules.AddAsync(module, ct);
        await _modules.SaveChangesAsync(ct);

        return _mapper.Map<ModuleSummaryDto>(module);
    }

    public async Task<ModuleSummaryDto> UpdateAsync(int id, UpdateModuleDto dto, CancellationToken ct = default)
    {
        var module = await _modules.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Module", id);

        module.Title = dto.Title;
        module.Description = dto.Description;
        module.OrderIndex = dto.OrderIndex;

        await _modules.UpdateAsync(module, ct);
        await _modules.SaveChangesAsync(ct);

        return _mapper.Map<ModuleSummaryDto>(module);
    }

    public async Task DeleteAsync(int id, CancellationToken ct = default)
    {
        var module = await _modules.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Module", id);

        await _modules.DeleteAsync(module, ct);
        await _modules.SaveChangesAsync(ct);
    }

    public async Task<ModuleSummaryDto> SetPublishedAsync(int id, bool isPublished, CancellationToken ct = default)
    {
        var module = await _modules.GetByIdAsync(id, ct)
            ?? throw new NotFoundException("Module", id);

        module.IsPublished = isPublished;
        await _modules.UpdateAsync(module, ct);
        await _modules.SaveChangesAsync(ct);

        return _mapper.Map<ModuleSummaryDto>(module);
    }

    public async Task ReorderAsync(int courseId, List<int> orderedIds, CancellationToken ct = default)
    {
        if (!await _courses.ExistsAsync(c => c.Id == courseId, ct))
            throw new NotFoundException("Course", courseId);

        var modules = (await _modules.GetByCourseAsync(courseId, ct)).ToList();

        for (int i = 0; i < orderedIds.Count; i++)
        {
            var module = modules.FirstOrDefault(m => m.Id == orderedIds[i]);
            if (module is null)
                throw new ValidationException($"Module {orderedIds[i]} does not belong to course {courseId}.");
            module.OrderIndex = i;
            await _modules.UpdateAsync(module, ct);
        }

        await _modules.SaveChangesAsync(ct);
    }
}
