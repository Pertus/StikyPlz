using AutoMapper;
using Backend.EntityModels;
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

        public async Task<ProjectModel> CreateProject(ProjectCreateModel model)
        {
            var entity = _mapper.Map<tblProject>(model);
            var project = await _unitOfWork.ProjectRepository.Add(entity);
            await _unitOfWork.Commit();

            var result = _mapper.Map<ProjectModel>(project);

            return result;
        }

        public async Task<ProjectModel> GetProject(int id)
        {
            var project = await _unitOfWork.ProjectRepository.Find(id);
            var model = _mapper.Map<ProjectModel>(project);

            return model;
        }

        public async Task<List<ProjectModel>> GetProjects()
        {
            var projects = await _unitOfWork.ProjectRepository.GetList(selector: x => x, predicate: x => !x.Deleted);
            var model = _mapper.Map<List<ProjectModel>>(projects);

            return model;
        }
    }
}
