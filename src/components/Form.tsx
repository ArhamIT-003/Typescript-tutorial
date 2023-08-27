import { useState } from "react";

interface UserData {
  name: string;
  email: string;
}

const Form = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [data, setData] = useState<UserData[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const userExist = data.some((existingUser) => existingUser.email === email);
    if (userExist) {
      alert("User already exist");
      return;
    }

    setData([...data, { name, email }]);
    console.log("The data is: ", data);
  };

  return (
    <>
      <h1>form without using redux</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>Submit</button>
        <div>
          {data.map((value, index) => (
            <p key={index}>
              Name: {value.name}, Email: {value.email}
            </p>
          ))}
        </div>
      </form>
    </>
  );
};

export default Form;
