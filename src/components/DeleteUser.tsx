import axios from "axios";
import React, { useState } from "react";
import API from "../API";
const DeleteUser = () => {
  const [id, setId] = useState(0);
  const handleChange = (event: React.ChangeEvent) => {
    const val = (event.target as HTMLInputElement).value;
    setId(Number(val));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const res = await API.delete(`users/${id}`);
    console.log(res);
    console.log(res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input type="number" name="id" onChange={handleChange} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteUser;
