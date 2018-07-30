using AutoMapper;
using Backend.EntityModels;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<tblTicket, Ticket>();
            CreateMap<tblProject, Project>();
        }
    }
}
