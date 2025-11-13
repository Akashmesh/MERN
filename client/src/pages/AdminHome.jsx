import { useAuth } from "../store/Auth";
import { useEffect, useState } from "react";

export const AdminHome = () => {
  const { authorizationToken } = useAuth();
  const [stats, setStats] = useState({
    users: 0,
    contacts: 0,
    services: 0,
  });

  const fetchStats = async () => {
    try {
      const [usersRes, contactsRes, servicesRes] = await Promise.all([
        fetch("http://localhost:5000/api/admin/users", {
          headers: { Authorization: authorizationToken },
        }),
        fetch("http://localhost:5000/api/admin/contacts", {
          headers: { Authorization: authorizationToken },
        }),
        fetch("http://localhost:5000/api/data/service"),
      ]);

      const users = await usersRes.json();
      const contacts = await contactsRes.json();
      const services = await servicesRes.json();

      setStats({
        users: users.length || 0,
        contacts: contacts.length || 0,
        services: services.data?.length || 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="admin-home">
      <h1>Dashboard Overview</h1>

      <div className="admin-cards">
        <div className="admin-card">
          <h2>{stats.users}</h2>
          <p>Total Users</p>
        </div>

        <div className="admin-card">
          <h2>{stats.contacts}</h2>
          <p>Total Contacts</p>
        </div>

        <div className="admin-card">
          <h2>{stats.services}</h2>
          <p>Total Services</p>
        </div>
      </div>
    </div>
  );
};
