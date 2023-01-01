import React from "react";

import Global from "./styles/global";

import Home from "./pages/Home/Home";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: 1,
    title: "Box 1",
    text: lorem,
    mg: "100px",
    bgColor: "#6565F1"
  },
  {
    id: 2,
    title: "Box 2",
    text: lorem,
    mg: "50px",
    bgColor: "#F1657C"
  },
  {
    id: 3,
    title: "Box 3",
    text: lorem,
    mg: "25px",
    bgColor: "#F1AB65"
  },
  {
    id: 4,
    title: "Box 4",
    text: lorem,
    mg: "25px",
    bgColor: "#F165AB"
  },
  {
    id: 5,
    title: "Box 5",
    text: lorem,
    mg: "30px",
    bgColor: "#AB65F1"
  },
  {
    id: 6,
    title: "Box 6",
    text: lorem,
    mg: "30px",
    bgColor: "#66F1AB"
  },
  {
    id: 7,
    title: "Box 7",
    text: lorem,
    mg: "40px",
    bgColor: "#085931"
  },
  {
    id: 8,
    title: "Box 8",
    text: lorem,
    mg: "30px",
    bgColor: "#1111B3"
  },
  {
    id: 9,
    title: "Box 9",
    text: lorem,
    mg: "30px",
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