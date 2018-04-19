using System;
using Microsoft.AspNetCore.Mvc;
using NexPay.BusinessLogic.Exceptions;
using NexPay.BusinessLogic.Interfaces;
using NexPay.Views.PaymentDetailViews;

namespace NexPay.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/PaymentDetail")]
    public class PaymentDetailController : Controller
    {
        private readonly IPaymentDetailService _service;
        public PaymentDetailController(IPaymentDetailService service)
        {
            _service = service;
        }

        [HttpPost]
        [Route("[action]/")]
        public IActionResult Create([FromBody]CreatePaymentDetailView view)
        {
            try
            {
                _service.Create(view);
                return Ok();
            }
            catch (NextPayException exception)
            {
                return BadRequest(exception.Message);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
