using Backend.EntityModels;
using Backend.Interfaces;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Backend.UnitOfWork;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class TicketService : ITicketService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public TicketService(IMapper mapper)
        {
            _unitOfWork = new UnitOfWork.UnitOfWork();
            _mapper = mapper;
        }

        public async Task<List<TicketModel>> GetTicketsForProject(int projectId)
        {
            var tickets = await _unitOfWork.TicketRepository.GetList(selector: x => x, include: x => x.Include(y => y.Project), 
                predicate: x => x.ProjectId == projectId && !x.Deleted);
            var model = _mapper.Map<List<TicketModel>>(tickets);

            return model;
            
        }
    }
}
