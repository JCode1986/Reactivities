using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            //injecting datacontext to handler; constructor
            public Handler(DataContext context)
            {
                _context = context;
            }
            /// <summary>
            /// Get all activities in database
            /// </summary>
            /// <param name="request">Query</param>
            /// <param name="cancellationToken">CancellationToken</param>
            /// <returns>list of activities</returns>
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activities = await _context.Activities.ToListAsync(cancellationToken);
                return activities;
            }
        }
    }
}
