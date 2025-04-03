import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import "./Task.css"; // Import CSS file

function Task() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const api = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(api);
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching users!");
      }
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="task-container">

      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="card-container">
          {users.map((user) => (
            <Card
              key={user.id}
              userid={user.id}
              username={user.username}
              useremail={user.email}
              phone = {user.phone}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Task;
