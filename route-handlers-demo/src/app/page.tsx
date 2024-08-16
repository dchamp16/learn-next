"use client";
import { useState, useEffect } from "react";

const Page = () => {
  const [query, setQuery] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch filtered comments based on the query
    const fetchComments = async () => {
      const response = await fetch(
        `http://localhost:3000/comments?query=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, [query]); // Fetch data when the query changes

  return (
    <div>
      <h1>Comments</h1>
      <input
        className="text-green"
        type="text"
        placeholder="Search comments"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
