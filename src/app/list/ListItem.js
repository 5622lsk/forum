"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((item, i) => (
        <div key={i} className="list-item">
          <Link href={"/detail/" + result[i]._id}>{result[i].title}</Link>

          <Link href={"/detail/" + result[i]._id}>{result[i].content}</Link>
          <Link href={"/edit/" + result[i]._id} className="list-btn">
            ✏️
          </Link>

          <button
            className="list-btn"
            onClick={(e) => {
              fetch("/api/post/delete", {
                method: "POST",
                body: result[i]._id,
              }).then(() => {
                e.target.parentElement.style.opacity = 0;
                setTimeout(() => {
                  e.target.parentElement.style.display = "none";
                }, 1000);
              });
            }}
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}
