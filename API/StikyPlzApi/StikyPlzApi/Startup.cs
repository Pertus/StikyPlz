using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using AutoMapper;
using Backend.Services;
using Newtonsoft.Json.Serialization;

namespace StikyPlzApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddMvc().AddJsonOptions(opts => { opts.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver(); });

            services.AddCors(options =>
            {
                options.AddPolicy("Public",
                    builder =>
                    {
                        builder.AllowAnyHeader();
                        builder.AllowAnyOrigin();
                        builder.AllowCredentials();
                        builder.AllowAnyMethod();
                    });
            });

            services.AddAutoMapper();
            services.AddServiceCollection();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseCors("Public");
            app.UseMvc();
            
        }
    }
}
