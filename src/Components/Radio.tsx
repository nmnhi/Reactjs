import { useState } from "react";

const courses = [
  { id: 1, name: "HTML, CSS" },
  { id: 2, name: "Angular" },
  { id: 3, name: "Reactjs" },
];

function Radio() {
  const handleSubmit = () => {
    console.log({ id: checked });
  };
  const [checked, setChecked] = useState(1);

  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            checked={checked === course.id}
            type="radio"
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="px-3 py-2 mt-2 border border-gray-400 rounded-lg"
      >
        Submit
      </button>
    </>
  );
}
export default Radio;
