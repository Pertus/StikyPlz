using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Backend.Interfaces;

namespace StikyPlzApi.Controllers
{
  [Route("api/ticket")]
  [ApiController]
  public class TicketController : ControllerBase
  {
        private readonly ITicketService _ticketService;

        public TicketController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        [HttpGet]
        [Route("GetTicketsForProject/{projectId}")]
        public async Task<IActionResult> GetTicketsForProject(int projectId)
        {
            var result = await _ticketService.GetTicketsForProject(projectId);
            return Ok(result);
        }
  }
}
