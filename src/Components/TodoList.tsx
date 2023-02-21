import { useState } from "react";

function TodoList() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs")!);
    return storageJobs;
  });

  const handleSubmit = () => {
    setJobs((prev: any) => {
      const newJobs = [...prev, job];
      // save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };
  return (
    <>
      <div>
        <input
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="w-44 h-11 border border-gray-400 rounded-lg px-2"
          type="text"
        />
        <button
          onClick={handleSubmit}
          className="px-3 py-2 border border-gray-400 rounded-lg ml-2"
        >
          Add
        </button>
        <ul>
          {jobs.map((job: any, index: any) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default TodoList;
