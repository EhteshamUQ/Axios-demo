import axios from "axios";
import { useEffect, useState } from "react";
import API from "../API";
const DisplayUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    API.get(`users`)
      .then((res) => {
        const userList = res.data;
        console.log(userList);
        setUsers(userList);
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <>
      <ul>
        {users.map((user: any) => {
          return (
            <li key={user.userId}>
              {user.id}: {user.firstName}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default DisplayUsers;
