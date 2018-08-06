using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.SignalR;
using StikyPlzApi.Hubs;

namespace StikyPlzApi.Controllers
{
  [Route("api/ticket")]
  [ApiController]
  public class TicketController : ControllerBase
  {
        private readonly ITicketService _ticketService;
        private IHubContext<TicketHub> _hubContext;

        public TicketController(ITicketService ticketService, IHubContext<TicketHub> hubContext)
        {
            _ticketService = ticketService;
            _hubContext = hubContext;
        }

        [HttpGet]
        [Route("GetTicketsForProject/{projectId}")]
        public async Task<IActionResult> GetTicketsForProject(int projectId)
        {
            var result = await _ticketService.GetTicketsForProject(projectId);
            return Ok(result);
        }

        [HttpPost]
        [Route("CreateTicket")]
        public async Task<IActionResult> CreateTicket(TicketCreateModel model)
        {
            var result = await _ticketService.CreateTicket(model);
            await this._hubContext.Clients.All.SendAsync("newTicket", result);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetTicket/{ticketId}")]
        public async Task<ActionResult> GetTicket(int ticketId)
        {
            var result = await _ticketService.GetTicket(ticketId);
            return Ok(result);
        }

        [HttpPost]
        [Route("EditTicket")]
        public async Task<IActionResult> EditTicket(TicketModel model)
        {
            var result = await _ticketService.EditTicket(model);
            await this._hubContext.Clients.All.SendAsync("updateTicket", result);
            return Ok(result);
        }

        [HttpGet]
        [Route("DeleteTicket/{ticketId}")]
        public async Task<ActionResult> DeleteTicket(int ticketId)
        {
            var result = await _ticketService.DeleteTicket(ticketId);
            await this._hubContext.Clients.All.SendAsync("deleteTicket", ticketId);
            return Ok(result);
        }
    }
}
