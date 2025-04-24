import React, { useState, useEffect } from "react";
import { toast } from "react-toastify"; // optional for feedback
import { AddUserLoginAPI, GetUserListAPI } from "../../api";

const UserForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    GetUserListAPI({})
      .then((res) => {
        if (res.data.status === "success") {
          setUsers(res.data.data);
        } else {
          toast.error(res.data.message || "Failed to load users.");
        }
      })
      .catch((err) => {
        console.error("❌ Error fetching users:", err);
        toast.error("Server error while fetching users.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    AddUserLoginAPI(form)
      .then((res) => {
        if (res.data.status === "success") {
          toast.success("User added successfully!");
          setForm({ name: "", email: "", password: "" });
          fetchUsers();
        } else {
          toast.error(res.data.message || "Failed to add user.");
        }
      })
      .catch((err) => {
        console.error("❌ Error adding user:", err);
        toast.error("Server error while adding user.");
      });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h3>User List</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
