import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/formSlice";
import { useState } from "react";
import { RootState } from "../store/store";

const ReduxForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.form.user);

  console.log(data);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { name, email };
    dispatch(addUser({ user }));
    setName("");
    setEmail("");
  };

  return (
    <>
      <h1>form using redux</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <button type="submit">Submit</button>
        <div></div>
      </form>
    </>
  );
};

export default ReduxForm;
