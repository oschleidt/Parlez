using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Parlez_4._5._1.SignalR
{
	public class Connections
	{
		Dictionary<String, String> connections;

		private static Connections instance;

		private Connections()
		{
			connections = new Dictionary<string, string>();
		}

		public static Connections Instance
		{
			get
			{
				if (instance == null)
				{
					instance = new Connections();
				}
				return instance;
			}
		}

		public void addConnection(String connectionId, String name)
		{
			connections.Add(connectionId, name);
		}

		public void removeConnection(String connectionId)
		{
			connections.Remove(connectionId);
		}

		public String getIdByName(String name)
		{
			String tmp;
			connections.TryGetValue(name, out tmp);
			return tmp;
		}

		public Dictionary<String, String> getConnections()
		{
			return connections;
		}
	}
}