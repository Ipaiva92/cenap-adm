import { SetStateAction, useState } from "react";

function Home () {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (event: { target: { value: SetStateAction<string>; }; }) => {
    setName(event.target.value);
  };

  const handleChangePassword = (event: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  return (
    <div className="home-container">
    <input
      type="text"
      id="message"
      name="message"
      onChange={handleChangeName}
    />

    <input
      type="text"
      id="message"
      name="message"
      onChange={handleChangePassword}
    />

    <h2>Name: {name}</h2>

    <h2>Password: {password}</h2>
  </div>
  )
}

export default Home