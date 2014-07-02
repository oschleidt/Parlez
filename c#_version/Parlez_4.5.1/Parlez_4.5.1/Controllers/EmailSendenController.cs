using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMatrix.WebData;

namespace Parlez_4._5._1.Controllers
{
    public class EmailSendenController : Controller
    {
        // GET: EmailSenden
        public ActionResult EmailSendenView()
        {
			if(!WebSecurity.IsAuthenticated)
			{
				Response.Redirect("/Error/ErrorView", true);
			}
            return View();
        }
    }
}