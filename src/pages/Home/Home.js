import React from "react";
import {useState} from 'react';
import randomColor from "randomcolor";
import { Container, Box, BoxTitle, BoxText } from "./HomeStyles";

export default function Home({boxData}) {
  const [isActive, setIsActive] = useState(false);
  let color = randomColor();
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
    return (

     <Container>
      {boxData.map(box => (
        <Box key={box.id} bgColor={box.bgColor} onClick={handleClick} style={{backgroundColor: isActive ? color : '' }} className={`item-${box.id}`}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container>

  );
}