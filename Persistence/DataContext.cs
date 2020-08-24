using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics;
using Activity = Domain.Activity;

namespace Persistence
{
    //class derived from entity framework class (DbContext)
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        //Entities
        public DbSet<Value> Values { get; set; }
        public DbSet<Activity> Activity { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>()
                .HasData(
                    new Value { Id = 1, Name = "Value 101" },
                    new Value { Id = 2, Name = "Value 102" },
                    new Value { Id = 3, Name = "Value 103" }
                );
        }
    }
}
