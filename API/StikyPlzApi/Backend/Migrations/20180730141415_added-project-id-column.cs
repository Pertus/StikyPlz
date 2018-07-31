using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class addedprojectidcolumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblTickets_tblProjects_ProjectId",
                table: "tblTickets");

            migrationBuilder.AlterColumn<int>(
                name: "ProjectId",
                table: "tblTickets",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_tblTickets_tblProjects_ProjectId",
                table: "tblTickets",
                column: "ProjectId",
                principalTable: "tblProjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblTickets_tblProjects_ProjectId",
                table: "tblTickets");

            migrationBuilder.AlterColumn<int>(
                name: "ProjectId",
                table: "tblTickets",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_tblTickets_tblProjects_ProjectId",
                table: "tblTickets",
                column: "ProjectId",
                principalTable: "tblProjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
