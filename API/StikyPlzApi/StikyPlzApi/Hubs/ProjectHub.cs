using Backend.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StikyPlzApi.Hubs
{
    public class ProjectHub : Hub
    {
        public async Task NewProject(ProjectModel project)
        {
            await Clients.All.SendAsync("newProject", project);
        }
    }
}
