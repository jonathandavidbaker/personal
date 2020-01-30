using PersonalSite.MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace PersonalSite.MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Contact(ContactViewModel contact)
        {
            //create the body of the email
            string body = $"Name: {contact.FirstName} {contact.LastName}<br>Email: {contact.Email}<br>Subject: {contact.Subject}<br>Message:<br>{contact.Message}";

            //create and configure the MailMessage object (using System.Net.Mail)
            MailMessage msg = new MailMessage("no-reply@jdbaker.net", //From address (MUST be an email on your server)
                                              "jon.david.baker@gmail.com", //To address (Where the message will be delivered)
                                              "Email from JDBaker.net - " + contact.Subject, //Subject of the email
                                              body); //string created above

            msg.IsBodyHtml = true;
            msg.Priority = MailPriority.High;

            //Create and configure the SmtpClient (using System.Net.Mail)
            SmtpClient client = new SmtpClient("mail.jdbaker.net");
            client.Credentials = new NetworkCredential("no-reply@jdbaker.net", "pr$aM*Y*38V");

            //Attempt to send the email
            using (client) //using allows us to make use of an object (client) and then get rid of it when we're finished, closing any open connection
            {
                try
                {
                    if (ModelState.IsValid)
                    {
                        client.Send(msg);
                    }
                    else
                    {
                        return View(contact);
                    }
                }
                catch (Exception)
                {
                    ViewBag.ErrorMessage = "There was an error sending your message.  Please try again.";
                    return View(contact);
                }
            }
            //If email is sent and validation is passed, send a confirmation view back to the user
            return View("ContactConfirmation", contact);
        }
        public ActionResult Resume()
        {
            return View();
        }

        public ActionResult Projects()
        {
            return View();
        }

        public ActionResult Links()
        {
            return View();
        }
    }
}