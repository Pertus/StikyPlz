using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Models
{
    public class TicketCreateModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int ProjectId { get; set; }
    }
}
