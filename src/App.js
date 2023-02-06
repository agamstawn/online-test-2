import React from "react";

import Global from "./styles/global";

import Home from "./pages/Home/Home";

// const lorem =
  // "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";
const lorem = ""
const data = [
  {
    id: 1,
    title: "Box 1",
    text: lorem,
    bgColor: "#6565F1"
  },
  {
    id: 2,
    title: "Box 2",
    text: lorem,
    bgColor: "#F1657C"
  },
  {
    id: 3,
    title: "Box 3",
    text: lorem,
    bgColor: "#F1AB65"
  },
  {
    id: 4,
    title: "Box 4",
    text: lorem,
    bgColor: "#F165AB"
  },
  {
    id: 5,
    title: "Box 5",
    text: lorem,
    bgColor: "#AB65F1"
  },
  {
    id: 6,
    title: "Box 6",
    text: lorem,
    bgColor: "#66F1AB"
  },
  {
    id: 7,
    title: "Box 7",
    text: lorem,
    bgColor: "#085931"
  },
  {
    id: 8,
    title: "Box 8",
    text: lorem,
    bgColor: "#1111B3"
  },
  {
    id: 9,
    title: "Box 9",
    text: lorem,
    bgColor: "#ABABAB"
  }

];

function App() {
  return (
    <>
      <Global />
      <Home boxData={data} />
    </>
  );
}

export default App;