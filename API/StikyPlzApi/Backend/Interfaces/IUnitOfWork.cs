using Backend.EntityModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        StickyPlzContext Context { get; }
        Task<bool> Commit();
        IGenericRepository<tblTicket> TicketRepository { get; }
        IGenericRepository<tblProject> ProjectRepository { get; }
    }
}
