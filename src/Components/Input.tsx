import { useState } from "react";

function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({ name, email });
  };
  return (
    <>
      <div>Hello Input</div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-72 h-11 border border-gray-400 rounded-lg px-2"
        type="text"
      />
      <div className="mt-2">
        <input
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 h-11 border border-gray-400 rounded-lg px-2"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="px-3 py-2 border border-gray-400 rounded-lg ml-2 mt-2"
      >
        Submit
      </button>
    </>
  );
}
export default Input;
