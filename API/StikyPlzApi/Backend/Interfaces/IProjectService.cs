using Backend.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces
{
    public interface IProjectService
    {
        Task<List<ProjectModel>> GetProjects();
        Task<ProjectModel> CreateProject(ProjectCreateModel model);
        Task<ProjectModel> GetProject(int id);
    }
}
