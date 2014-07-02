using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMatrix.WebData;

namespace Parlez_4._5._1.Controllers
{
	public class LoginAPIController : Controller
	{
		//
		// GET: /LoginAPI/
		[AcceptVerbs(HttpVerbs.Get | HttpVerbs.Post)]
		public JsonResult Login(String username, String password)
		{
			bool tmp = WebSecurity.Login(username, password);
			return new JsonResult() { Data = new { loggedin = tmp } };
		}
	}
}