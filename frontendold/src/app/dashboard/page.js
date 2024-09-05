"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users", {
        withCredentials: true,
      });
      setUsers(response.data);
      setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
      setUsers([]);
      setErrorMessage(
        error.response?.data?.msg || "An error occurred while fetching users"
      );
    }
  };

  const handleLogout = async () => {
    try {
      await axios.delete(
        "http://localhost:5000/logout",
        {},
        {
          withCredentials: true,
        }
      );
      router.push("/login"); // Redirect to login page after logout
    } catch (error) {
      setErrorMessage(
        error.response?.data?.msg || "An error occurred during logout"
      );
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when component mounts
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.uuid}>
            <strong>Name:</strong> {user.name} - <strong>Email:</strong>{" "}
            {user.email} - <strong>Role:</strong> {user.role}
          </li>
        ))}
      </ul>

      <Button
        onPress={handleLogout}
        auto
        shadow
        color="error"
        style={{ marginTop: "1rem" }}
      >
        Logout
      </Button>
    </div>
  );
}
