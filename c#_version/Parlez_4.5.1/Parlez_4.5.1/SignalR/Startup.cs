using Microsoft.Owin;
using Owin;
[assembly: OwinStartup(typeof(Parlez_4._5._1.SignalR.Startup))]
namespace Parlez_4._5._1.SignalR
{
	public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			// Any connection or hub wire up and configuration should go here
			app.MapSignalR();
		}
	}
}