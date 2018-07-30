using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.EntityModels
{
    public class tblProject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public bool Deleted { get; set; }
    }
}
