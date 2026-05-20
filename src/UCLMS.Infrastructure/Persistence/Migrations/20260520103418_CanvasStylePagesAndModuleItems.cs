using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UCLMS.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class CanvasStylePagesAndModuleItems : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LessonProgress");

            migrationBuilder.DropTable(
                name: "Lessons");

            migrationBuilder.AddColumn<int>(
                name: "ContentType",
                table: "CoursePages",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "DurationMinutes",
                table: "CoursePages",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FileUrl",
                table: "CoursePages",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "VideoUrl",
                table: "CoursePages",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ModuleItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModuleId = table.Column<int>(type: "int", nullable: false),
                    ItemType = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    PageId = table.Column<int>(type: "int", nullable: true),
                    QuizId = table.Column<int>(type: "int", nullable: true),
                    AssignmentId = table.Column<int>(type: "int", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true),
                    OrderIndex = table.Column<int>(type: "int", nullable: false),
                    IsPublished = table.Column<bool>(type: "bit", nullable: false),
                    IsRequired = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ModuleItems_Assignments_AssignmentId",
                        column: x => x.AssignmentId,
                        principalTable: "Assignments",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ModuleItems_CoursePages_PageId",
                        column: x => x.PageId,
                        principalTable: "CoursePages",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ModuleItems_Modules_ModuleId",
                        column: x => x.ModuleId,
                        principalTable: "Modules",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ModuleItems_Quizzes_QuizId",
                        column: x => x.QuizId,
                        principalTable: "Quizzes",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ModuleItemProgress",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EnrollmentId = table.Column<int>(type: "int", nullable: false),
                    ModuleItemId = table.Column<int>(type: "int", nullable: false),
                    CompletedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TimeSpentMinutes = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ModuleItemProgress", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ModuleItemProgress_CourseEnrollments_EnrollmentId",
                        column: x => x.EnrollmentId,
                        principalTable: "CourseEnrollments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ModuleItemProgress_ModuleItems_ModuleItemId",
                        column: x => x.ModuleItemId,
                        principalTable: "ModuleItems",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ModuleItemProgress_EnrollmentId_ModuleItemId",
                table: "ModuleItemProgress",
                columns: new[] { "EnrollmentId", "ModuleItemId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ModuleItemProgress_ModuleItemId",
                table: "ModuleItemProgress",
                column: "ModuleItemId");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleItems_AssignmentId",
                table: "ModuleItems",
                column: "AssignmentId");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleItems_ModuleId_OrderIndex",
                table: "ModuleItems",
                columns: new[] { "ModuleId", "OrderIndex" });

            migrationBuilder.CreateIndex(
                name: "IX_ModuleItems_PageId",
                table: "ModuleItems",
                column: "PageId");

            migrationBuilder.CreateIndex(
                name: "IX_ModuleItems_QuizId",
                table: "ModuleItems",
                column: "QuizId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ModuleItemProgress");

            migrationBuilder.DropTable(
                name: "ModuleItems");

            migrationBuilder.DropColumn(
                name: "ContentType",
                table: "CoursePages");

            migrationBuilder.DropColumn(
                name: "DurationMinutes",
                table: "CoursePages");

            migrationBuilder.DropColumn(
                name: "FileUrl",
                table: "CoursePages");

            migrationBuilder.DropColumn(
                name: "VideoUrl",
                table: "CoursePages");

            migrationBuilder.CreateTable(
                name: "Lessons",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModuleId = table.Column<int>(type: "int", nullable: false),
                    ContentBody = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContentType = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DurationMinutes = table.Column<int>(type: "int", nullable: true),
                    FileUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    IsRequired = table.Column<bool>(type: "bit", nullable: false),
                    OrderIndex = table.Column<int>(type: "int", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    VideoUrl = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lessons", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Lessons_Modules_ModuleId",
                        column: x => x.ModuleId,
                        principalTable: "Modules",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LessonProgress",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EnrollmentId = table.Column<int>(type: "int", nullable: false),
                    LessonId = table.Column<int>(type: "int", nullable: false),
                    CompletedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    IsCompleted = table.Column<bool>(type: "bit", nullable: false),
                    TimeSpentMinutes = table.Column<int>(type: "int", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LessonProgress", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LessonProgress_CourseEnrollments_EnrollmentId",
                        column: x => x.EnrollmentId,
                        principalTable: "CourseEnrollments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LessonProgress_Lessons_LessonId",
                        column: x => x.LessonId,
                        principalTable: "Lessons",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_LessonProgress_EnrollmentId",
                table: "LessonProgress",
                column: "EnrollmentId");

            migrationBuilder.CreateIndex(
                name: "IX_LessonProgress_LessonId",
                table: "LessonProgress",
                column: "LessonId");

            migrationBuilder.CreateIndex(
                name: "IX_Lessons_ModuleId",
                table: "Lessons",
                column: "ModuleId");
        }
    }
}
