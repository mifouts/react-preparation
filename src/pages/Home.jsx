import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  async function fetchUsers(user) {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/${user}`
    );
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="user-list">
            {users.map((user) => {
              <div className="user">
                <div className="user-card">
                  <div className="user-card__container">
                    <h3>{user.name}</h3>
                    <p>
                      <b>Email:</b> {user.email}
                    </p>
                    <p>
                      <b>Phone:</b> {user.phone}
                    </p>
                    <p>
                      <b>Website:</b>
                      {user.website}
                    </p>
                  </div>
                </div>
              </div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
