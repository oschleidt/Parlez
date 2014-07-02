using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMatrix.WebData;

namespace Parlez_4._5._1.Controllers
{
    public class RegisterAPIController : Controller
    {
        //
		// GET: /RegisterAPI/
		[AcceptVerbs(HttpVerbs.Get | HttpVerbs.Post)]
		public JsonResult Register(String username, String password)
		{
			WebSecurity.CreateUserAndAccount(username, password);
			return new JsonResult() { Data = new { loggedin = true } };
        }
	}
}