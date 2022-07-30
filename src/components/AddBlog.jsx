import React, { useState } from "react";
import Card from "./Card";

export default function AddBlog() {
  const [data, setdata] = useState([]);
  const [inp, setinp] = useState();
  const [title, settitle] = useState();
  const [desc, setdesc] = useState();
  const [category, setcategory] = useState("tech");

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setinp(e.target.value);
        }}
        placeholder="Insert Image Link Here"
      />

      <br />
      <input
        type="text"
        placeholder="Enter Title"
        onChange={(e) => settitle(e.target.value)}
      />
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="Description"
        onChange={(e) => setdesc(e.target.value)}
      ></textarea>
      <br />
      <select onChange={(e) => setcategory(e.target.value)}>
        <option value="tech">Tech</option>
        <option value="food">Food</option>
        <option value="anime">Anime</option>
      </select>
      <br />

      <button
        onClick={(e) =>
          setdata([
            ...data,
            { img: inp, heading: title, desc: desc, type: category },
          ])
        }
      >
        Add Blog
      </button>
      {/* below line is how one must use map method */}
      {/* {data.map((item) => (
        <h1>{item}</h1>s
      ))} */}

      <Card x={data} />
    </>
  );
}
