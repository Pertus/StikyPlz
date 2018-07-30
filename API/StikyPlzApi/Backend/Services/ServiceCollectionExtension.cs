using Backend.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backend.Services
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddServiceCollection(this IServiceCollection services)
        {
            services.AddTransient<ITicketService, TicketService>();
            services.AddTransient<IProjectService, ProjectService>();

            return services;
        }
    }
}
