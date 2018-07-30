using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.EntityModels
{
    public class StickyPlzContext : DbContext
    {
        public DbSet<tblTicket> tblTickets { get; set; }
        public DbSet<tblProject> tblProjects { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=PWN\SQLSERVER;Database=StikyPlz;Trusted_Connection=True");
        }
    }
}
