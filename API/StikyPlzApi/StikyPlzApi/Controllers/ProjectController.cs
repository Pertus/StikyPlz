using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace StikyPlzApi.Controllers
{
    [Route("api/project")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectService _projectService;
        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpGet]
        [Route("GetProjects")]
        public async Task<IActionResult> GetProjects()
        {
            var result = await _projectService.GetProjects();
            return Ok(result);
        }

        [HttpGet]
        [Route("GetProject/{id}")]
        public async Task<IActionResult> GetProject(int id)
        {
            var result = await _projectService.GetProject(id);
            return Ok(result);
        }

        [HttpPost]
        [Route("CreateProject")]
        public async Task<IActionResult> CreateProject(ProjectCreateModel model)
        {
            var result = await _projectService.CreateProject(model);
            return Ok(result);
        }
    }
}