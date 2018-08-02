using Backend.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces
{
    public interface ITicketService
    {
        Task<List<TicketModel>> GetTicketsForProject(int projectId);
        Task<TicketModel> CreateTicket(TicketCreateModel model);

        Task<TicketModel> GetTicket(int ticketId);
        Task<TicketModel> EditTicket(TicketModel model);
        Task<bool> DeleteTicket(int ticketId);
    }
}
