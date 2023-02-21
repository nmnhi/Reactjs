import { useEffect, useState } from "react";

// Được sd khi side effect: là thời điểm có những thay đổi tác động đến dữ liêu phần mềm

// Events: Add/ remove event listener
// Observer pattern: Subscribe/ Unsubscribe
// Closure
// Timers: seInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted/ Unmounted
// ===
// Call API

/**
 1. Update DOM
	- F8 blog title
	Ex:
	useEffect(() => {
    document.title = title;
  });

 2. Call API

 3. Listen DOM event
	- Scroll
	- Resize
 4. Cleanup
	- Remove listener / Unsubscribe
	- Clear timer
 */

// 1. useEffect(callback): only callback
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, []): sử dụng có đối số là mảng nhưng lại là mảng rỗng
// - Chỉ goị callback 1 lần khi mounted
// 3. useEffect(callback, [deps]): sử dụng có đối số là mảng
// - Callback sẽ được gọi lại mỗi khi deps thay đổi
// -------------------------
//  1. Callback luôn được gọi sau khi component mounted

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  //   Only callback
  useEffect(() => {
    document.title = title;
  });

  //   Call API 1 lần để lấy dữ liệu cho màn hình
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json().then((posts) => {
        setPosts(posts);
      })
    );
  }, []);

  // Call API with dynamic method
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`).then((res) =>
      res.json().then((posts) => setPosts(posts))
    );
  }, [type]);

  return (
    <div>
      {/* <h1>Hello my friend</h1> */}
      {tabs.map((tab) => (
        <button
          onClick={() => setType(tab)}
          key={tab}
          className="border border-gray-400 px-4 py-2 rounded-lg mx-2"
          style={
            type === tab ? { color: "#ffff", backgroundColor: "#333" } : {}
          }
        >
          {tab}
        </button>
      ))}
      <input
        className="w-44 h-11 border border-gray-400 rounded-lg px-2 mt-2"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
