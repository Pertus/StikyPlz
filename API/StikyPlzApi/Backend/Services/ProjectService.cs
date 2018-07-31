using AutoMapper;
using Backend.Interfaces;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class ProjectService : IProjectService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public ProjectService(IMapper mapper)
        {
            _unitOfWork = new UnitOfWork.UnitOfWork();
            _mapper = mapper;
        }

        public async Task<ProjectModel> CreateProject()
        {
            throw new NotImplementedException();
        }

        public async Task<List<ProjectModel>> GetProjects()
        {
            var projects = await _unitOfWork.ProjectRepository.GetList(selector: x => x, predicate: x => !x.Deleted);
            var model = _mapper.Map<List<ProjectModel>>(projects);

            return model;
        }
    }
}
