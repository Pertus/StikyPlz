using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Interfaces
{
    interface IDbEntity
    {
        DateTime Created { get; set; }
        DateTime Modified { get; set; }
        bool Deleted { get; set; }
    }
}
