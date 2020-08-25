using MediatR;
using Persistence;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            /// <summary>
            /// Delete a certain activity
            /// </summary>
            /// <param name="request">Command</param>
            /// <param name="cancellationToken">CancellationToken</param>
            /// <returns></returns>
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                if (activity == null)
                {
                    throw new Exception("Could not find activity");
                }

                _context.Remove(activity);

                var success = await _context.SaveChangesAsync() > 0;

                //return something from method, rather then throwin exception
                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}
