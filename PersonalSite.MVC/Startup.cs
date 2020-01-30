using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PersonalSite.MVC.Startup))]
namespace PersonalSite.MVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
