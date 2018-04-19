using Microsoft.AspNetCore.Mvc;
using NexPay.Web.Model;

namespace NexPay.Web.Controllers
{
    [Route("")]
    public class HomeController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            var model = new HomeViewModel
            {
                ApiUrl = "http://localhost:61677/"
            };
            return View(model);
        }
    }
}
