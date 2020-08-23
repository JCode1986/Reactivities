using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics;

namespace Persistence
{
    //class derived from entity framework class (DbContext)
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Value> Values { get; set; }
    }
}
