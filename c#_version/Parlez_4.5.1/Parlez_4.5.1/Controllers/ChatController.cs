using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMatrix.WebData;

namespace Parlez_4._5._1.Controllers
{
    public class ChatController : Controller
    {
        //
        // GET: /Chat/
        public ActionResult ChatView()
        {
			if(!WebSecurity.IsAuthenticated)
			{
				Response.Redirect("/Error/ErrorView", true);
			}
			return View();
        }
	}
}