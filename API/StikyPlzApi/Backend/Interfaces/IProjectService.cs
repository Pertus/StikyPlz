using Backend.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces
{
    public interface IProjectService
    {
        Task<List<Project>> GetProjects();
        Task<Project> CreateProject();
    }
}
