import React, { useState } from "react";
import "./Todo-list.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import typing from "../assets/491ecfcebd2192e29b758ca798717ec6.gif";

function ToDoApp() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let newUser = {
      id: `user-${new Date().getTime()}`,
      name,
    };
    setData((p) => [...p, newUser]);
    setName("");
  };

  const handleDelete = (id) => {
    let filterData = data?.filter((user) => user.id !== id);
    setData(filterData);
  };
  let cards = data?.map((user) => (
    <div key={user.id} className="box">
      <h3>{user.name}</h3>
      <button onClick={() => handleDelete(user.id)}>
        <FaRegTrashAlt />
      </button>
    </div>
  ));

  return (
    <div className="note">
      <div className="notepad">
        <form onSubmit={handleSubmit}>
          <input
            required
            placeholder="Your note"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <button>Add</button>
        </form>
        <div className="notes">
          <div>{cards}</div>
        </div>
        {data.length === 0 ? (
          <div className="type">
            <h2 className="smt">
              Type ...
              <GoPencil /> <br /> Your notes will appear here
            </h2>
            <hr />
            <img src={typing} alt="" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ToDoApp;
