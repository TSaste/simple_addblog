import React from "react";

export default function Card({ x }) {
  const handleColor = (type) => {
    switch (type) {
      case "tech":
        return "bg-primary";
      case "food":
        return "bg-danger";
      case "anime":
        return "bg-info";

      default:
        return "";
    }
  };
  return (
    <>
      {x.map((item, index) => (
        <div className={handleColor(item.type)} key={index}>
          <h1>{item.heading}</h1>
          <img key={index} src={item.img} height="400px" alt={item.img} />
          <div>{item.type}</div>
          <p>{item.desc}</p>
        </div>
      ))}
    </>
  );
}
