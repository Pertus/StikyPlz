using Backend.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.EntityModels
{
    public class tblTicket: IDbEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        public int ProjectId { get; set; }
        public tblProject Project { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public bool Deleted { get; set; } 
    }
}
