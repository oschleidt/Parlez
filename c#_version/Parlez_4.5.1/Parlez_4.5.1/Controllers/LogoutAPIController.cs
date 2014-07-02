using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMatrix.WebData;

namespace Parlez_4._5._1.Controllers
{
    public class LogoutAPIController : Controller
    {
        //
		// GET: /Logout/
		[AcceptVerbs(HttpVerbs.Get | HttpVerbs.Post)]
		public JsonResult Logout()
		{
			WebSecurity.Logout();
			return new JsonResult() { Data = new { loggedout = true } };
		}
	}
}