using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace Parlez_4._5._1.SignalR
{
	public class chatConnectionHub : Hub
	{
		public void RegMe(String uid)
		{
			Connections temp = Connections.Instance;
			temp.addConnection(Context.ConnectionId, uid);
			Clients.All.updateOnlineUsers(temp.getConnections());
		}

		public void SendPublicMessage(String sender, String message)
		{
			Clients.AllExcept(Context.ConnectionId).displayMessage(sender, message);
		}

		public void SendPrivateMessage(String sender, List<String> receivers, String message)
		{
			foreach (String receiver in receivers)
			{
				Clients.Client(receiver).displayMessage(sender, message);
			}
		}

		public override Task OnDisconnected()
		{
			Connections temp = Connections.Instance;
			temp.removeConnection(Context.ConnectionId);
			Clients.All.updateOnlineUsers(temp.getConnections());
			return base.OnDisconnected();
		}
	}
}