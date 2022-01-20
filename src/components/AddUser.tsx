import React, { useState } from "react";
import API from "../API";

interface TypeName {
  name: string;
}

const AddUser = () => {
  const [name, changeName] = useState("");
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    changeName(target?.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    API.post("users", {
      firstName: name,
    }).then((res) => {
      console.log(res);
      console.log(res.status);
      console.log(res.data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Person Name
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
