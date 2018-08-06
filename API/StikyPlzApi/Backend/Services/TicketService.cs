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

        public async Task<TicketModel> CreateTicket(TicketCreateModel model)
        {
            var entity = _mapper.Map<tblTicket>(model);
            entity.Status = 1;
            var ticket = await _unitOfWork.TicketRepository.Add(entity);
            await _unitOfWork.Commit();

            var result = _mapper.Map<TicketModel>(ticket);

            return result;
        }

        public async Task<bool> DeleteTicket(int ticketId)
        {
            var result = await _unitOfWork.TicketRepository.Delete(ticketId);
            await _unitOfWork.Commit();

            return result;
        }

        public async Task<TicketModel> EditTicket(TicketModel model)
        {
            var ticket = _mapper.Map<tblTicket>(model);
            var result = _unitOfWork.TicketRepository.Update(ticket);
            await _unitOfWork.Commit();

            var mapped = _mapper.Map<TicketModel>(result);
            return mapped;
        }

        public async Task<TicketModel> GetTicket(int ticketId)
        {
            var ticket = await _unitOfWork.TicketRepository.Find(ticketId);
            var model = _mapper.Map<TicketModel>(ticket);

            return model;
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
