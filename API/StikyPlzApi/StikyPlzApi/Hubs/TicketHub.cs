using Backend.Interfaces;
using Backend.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StikyPlzApi.Hubs
{
    public class TicketHub : Hub
    {
        public async Task NewTicket(TicketModel ticket)
        {
            await Clients.All.SendAsync("newTicket", ticket);
        }
    }
}
