namespace UCLMS.Application.Common.Exceptions;

public class ValidationException : Exception
{
    public List<string> Errors { get; }

    public ValidationException(string error) : base(error)
    {
        Errors = [error];
    }

    public ValidationException(List<string> errors) : base("One or more validation errors occurred.")
    {
        Errors = errors;
    }
}
