using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using StikyPlzApi.Hubs;

namespace StikyPlzApi.Controllers
{
    [Route("api/project")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectService _projectService;
        private IHubContext<ProjectHub> _hubContext;
        public ProjectController(IProjectService projectService, IHubContext<ProjectHub> hubContext)
        {
            _projectService = projectService;
            _hubContext = hubContext;
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
            await this._hubContext.Clients.All.SendAsync("newProject", result);
            return Ok(result);
        }
    }
}