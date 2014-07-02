using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace Parlez_4._5._1.Controllers
{
    public class SendMailController : Controller
    {
        // GET: SendMail/SendMail?target=
        [AcceptVerbs(HttpVerbs.Get | HttpVerbs.Post)]
        public JsonResult SendMail(String target)
        {
            //EMAIL SENDEN
            MailMessage Email = new MailMessage();

            //Absender konfigurieren
            Email.From = new MailAddress("noreply@parlez.us");

            //Empfänger konfigurieren
            Email.To.Add(target);

            //Betreff einrichten
            Email.Subject = "Einladung zu Parlez";

            //Hinzufügen der eigentlichen Nachricht
            Email.Body = "Komm zu Parlez, hier ists toll!";

            //Ausgangsserver initialisieren
            SmtpClient MailClient = new SmtpClient("smtp.sendgrid.net", 587);
       
                MailClient.Credentials = new System.Net.NetworkCredential("app19728109@heroku.com", "pqkxj4by");

            //Email absenden
            MailClient.Send(Email);

            return new JsonResult() { Data = new { target = target } };
        }
    }
}