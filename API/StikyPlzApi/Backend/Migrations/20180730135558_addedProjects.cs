using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class addedProjects : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProjectId",
                table: "tblTickets",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "tblProjects",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    Modified = table.Column<DateTime>(nullable: false),
                    Deleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblProjects", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblTickets_ProjectId",
                table: "tblTickets",
                column: "ProjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblTickets_tblProjects_ProjectId",
                table: "tblTickets",
                column: "ProjectId",
                principalTable: "tblProjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblTickets_tblProjects_ProjectId",
                table: "tblTickets");

            migrationBuilder.DropTable(
                name: "tblProjects");

            migrationBuilder.DropIndex(
                name: "IX_tblTickets_ProjectId",
                table: "tblTickets");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "tblTickets");
        }
    }
}
