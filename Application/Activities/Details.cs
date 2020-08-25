using Domain;
using MediatR;
using Persistence;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            /// <summary>
            /// Retrieves a single activity according to ID
            /// </summary>
            /// <param name="request">Query</param>
            /// <param name="cancellationToken">CancellationToken</param>
            /// <returns>single activity</returns>
            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);
                return activity;
            }
        }
    }
}
