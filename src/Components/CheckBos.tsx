import { useState } from "react";

const courses = [
  { id: 1, name: "HTML, CSS" },
  { id: 2, name: "Angular" },
  { id: 3, name: "Reactjs" },
];
function CheckBox() {
  const [checked, setChecked] = useState([1]);
  console.log(checked);
  const handleCheck = (id: number) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item != id);
      } else {
        return [...prev, id];
      }
    });
  };
  const handleSubmit = () => {
    console.log(checked);
  };
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          {" "}
          <input
            checked={checked.includes(course.id)}
            type="checkbox"
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="px-3 py-2 border border-gray-400 rounded-lg"
      >
        Submit
      </button>
    </>
  );
}
export default CheckBox;
