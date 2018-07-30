using Backend.EntityModels;
using Backend.Interfaces;
using Backend.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Backend.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        public StickyPlzContext Context { get; }

        public UnitOfWork()
        {
            if(Context == null)
            {
                Context = new StickyPlzContext();
            }
        }

        private IGenericRepository<tblTicket> _ticketRepository;
        private IGenericRepository<tblProject> _projectRepository;

        public IGenericRepository<tblTicket> TicketRepository {
            get { return _ticketRepository = _ticketRepository ?? new GenericRepository<tblTicket>(Context); }
        }

        public IGenericRepository<tblProject> ProjectRepository
        {
            get { return _projectRepository = _projectRepository ?? new GenericRepository<tblProject>(Context); }
        }

        public async Task<bool> Commit()
        {
            return await Context.SaveChangesAsync() > 0;
        }

        public void Dispose()
        {
            Context.Dispose();
        }
    }
}
