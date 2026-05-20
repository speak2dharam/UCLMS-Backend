using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UCLMS.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddCoursePagesAndModulePublish : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Certificates_Users_IssuedByUserId",
                table: "Certificates");

            migrationBuilder.DropForeignKey(
                name: "FK_LessonProgress_Lessons_LessonId",
                table: "LessonProgress");

            migrationBuilder.DropForeignKey(
                name: "FK_QuizAttemptAnswers_Questions_QuestionId",
                table: "QuizAttemptAnswers");

            migrationBuilder.AddColumn<bool>(
                name: "IsPublished",
                table: "Modules",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "FrontPageId",
                table: "Courses",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "HomePage",
                table: "Courses",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "Modules");

            migrationBuilder.AddColumn<string>(
                name: "Syllabus",
                table: "Courses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CoursePages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseId = table.Column<int>(type: "int", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Body = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsPublished = table.Column<bool>(type: "bit", nullable: false),
                    OrderIndex = table.Column<int>(type: "int", nullable: false),
                    CreatedByUserId = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoursePages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoursePages_Courses_CourseId",
                        column: x => x.CourseId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CoursePages_Users_CreatedByUserId",
                        column: x => x.CreatedByUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Courses_FrontPageId",
                table: "Courses",
                column: "FrontPageId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursePages_CourseId",
                table: "CoursePages",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_CoursePages_CreatedByUserId",
                table: "CoursePages",
                column: "CreatedByUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Certificates_Users_IssuedByUserId",
                table: "Certificates",
                column: "IssuedByUserId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Courses_CoursePages_FrontPageId",
                table: "Courses",
                column: "FrontPageId",
                principalTable: "CoursePages",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_LessonProgress_Lessons_LessonId",
                table: "LessonProgress",
                column: "LessonId",
                principalTable: "Lessons",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_QuizAttemptAnswers_Questions_QuestionId",
                table: "QuizAttemptAnswers",
                column: "QuestionId",
                principalTable: "Questions",
                principalColumn: "Id");

            // Modules now default to unpublished (Canvas-style staged release). To avoid
            // hiding content that learners can already see, publish every module that
            // belongs to a course that is already Published.
            migrationBuilder.Sql(
                @"UPDATE m SET m.IsPublished = 1
                  FROM Modules m
                  INNER JOIN Courses c ON c.Id = m.CourseId
                  WHERE c.Status = 'Published';");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Certificates_Users_IssuedByUserId",
                table: "Certificates");

            migrationBuilder.DropForeignKey(
                name: "FK_Courses_CoursePages_FrontPageId",
                table: "Courses");

            migrationBuilder.DropForeignKey(
                name: "FK_LessonProgress_Lessons_LessonId",
                table: "LessonProgress");

            migrationBuilder.DropForeignKey(
                name: "FK_QuizAttemptAnswers_Questions_QuestionId",
                table: "QuizAttemptAnswers");

            migrationBuilder.DropTable(
                name: "CoursePages");

            migrationBuilder.DropIndex(
                name: "IX_Courses_FrontPageId",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "IsPublished",
                table: "Modules");

            migrationBuilder.DropColumn(
                name: "FrontPageId",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "HomePage",
                table: "Courses");

            migrationBuilder.DropColumn(
                name: "Syllabus",
                table: "Courses");

            migrationBuilder.AddForeignKey(
                name: "FK_Certificates_Users_IssuedByUserId",
                table: "Certificates",
                column: "IssuedByUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_LessonProgress_Lessons_LessonId",
                table: "LessonProgress",
                column: "LessonId",
                principalTable: "Lessons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_QuizAttemptAnswers_Questions_QuestionId",
                table: "QuizAttemptAnswers",
                column: "QuestionId",
                principalTable: "Questions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
