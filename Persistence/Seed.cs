using Domain;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Persistence
{
    public class Seed
    {
        /// <summary>
        /// Drop table if there are bad data, and this method will seed datas when starting the application
        /// </summary>
        /// <param name="context"></param>
        public static void SeedData(DataContext context)
        {
            if (!context.Activities.Any())
            {
                var activities = new List<Activity>
                {
                    //Id's will be created as a Guid by EF
                    new Activity
                    {
                        Title = "Past Activity 1",
                        Date = DateTime.Now.AddMonths(-2),
                        Description = "Activity 2 months ago",
                        Category = "drinks",
                        City = "London",
                        Venue = "Pub",
                    },
                    new Activity
                    {
                        Title = "Past Activity 2",
                        Date = DateTime.Now.AddMonths(-1),
                        Description = "Activity 1 months ago",
                        Category = "culture",
                        City = "Paris",
                        Venue = "Natural History Museum"
                    },
                    new Activity
                    {
                        Title = "Future Activity 1",
                        Date = DateTime.Now.AddMonths(1),
                        Description = "Activity 1 month in future",
                        Category = "music",
                        City = "London",
                        Venue = "02 Arena"
                    },
                    new Activity
                    {
                        Title = "Future Activity 2",
                        Date = DateTime.Now.AddMonths(2),
                        Description = "Activity 2 months in future",
                        Category = "culture",
                        City = "Paris",
                        Venue = "Natural History Museum"
                    },
                    new Activity
                    {
                        Title = "Past Activity 3",
                        Date = DateTime.Now.AddMonths(3),
                        Description = "Activity 3 months in future",
                        Category = "culture",
                        City = "Arlington",
                        Venue = "Pub"
                    }
                };
                context.Activities.AddRange(activities);
                context.SaveChanges();
            }
        }
    }
}
