import React, { useState, useEffect } from "react";

const Effect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <div>
          <h1>{post.name}</h1>
          <h2>{post.id}</h2>
        </div>
      ))}
    </div>
  );
};

export default Effect;
