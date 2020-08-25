using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ActivitiesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        /// <summary>
        /// Get list of activities
        /// </summary>
        /// <returns>list of activities</returns>
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        /// <summary>
        /// Returns a single activity based on id given
        /// </summary>
        /// <param name="id">Guid</param>
        /// <returns>activity</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query{Id = id});
        }

        /// <summary>
        /// Creates an activity; Unit type is an empty object
        /// </summary>
        /// <param name="command">Command class in Create class</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

     /// <summary>
     /// Edit an activity based on ID
     /// </summary>
     /// <param name="id">Guid</param>
     /// <param name="command">Command class in Edit class</param>
     /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }
    }
}
