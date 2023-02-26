import { useState, useEffect } from "react";
const lessons = [
  { id: 1, name: "SPA/MPA là gì?" },
  { id: 2, name: "ReactJS là gì? Taị sao nên học ReactJS?" },
  { id: 3, name: "Arrow function" },
];

function Chat() {
  const [lessonId, setLessonId] = useState(1);
  useEffect(() => {
    const handleComment = (e: any) => {
      console.log(e.detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            className="cursor-pointer"
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#333" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;
