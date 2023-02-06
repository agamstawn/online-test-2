import styled from "styled-components";
import pixel_to_viewport from "../../utils/pixel_to_viewport";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Box = styled.div`
  background-color: ${props => props.bgColor};
  
  margin: 0.1rem;
  border: 1px solid;
  &.item-1 {
    grid-column: 1 / 3;
    grid-row: 1 / span 2 ;
  }
  &.item-2 {
    grid-column: 3 / span 3;
    grid-row: 1 / 2;
  }
  &.item-3 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
  &.item-4 {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }
  &.item-5 {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  &.item-6 {
    grid-column: 1 / 2;
    grid-row: 4 / 6;
  }
  &.item-7 {
    grid-column: 2 / span 2;
    grid-row: 3 / span 2;
  }
  &.item-8 {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
  }
  &.item-9 {
    grid-column: 4 / 5;
    grid-row: 4 / 5;
  }
  @media only screen and (max-width: 600px) {
    &.item-1 {
      grid-column: 1 / span 4;
      grid-row: 1 / 2;
    }
    &.item-2 {
      grid-column: 1 / span 4;
      grid-row: 3 / 4 ;
    }
    &.item-3 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    &.item-4 {
      grid-column: 2 / 4;
      grid-row: 2 / 3;
    }
    &.item-5 {
      grid-row: 5 / 6;
    }
    &.item-6 {
      grid-row: 6 / 7;
    }
    &.item-7 {
      grid-column: 1 / span 4;
      grid-row: 4 / 5;

    }
    &.item-8 {
      grid-column-start: 2;
      grid-row: 5 / 6;
    }
    &.item-9 {
      grid-row: 6 / 7;
      grid-column-start: 2;
    }
  }
`;

export const BoxTitle = styled.h3`
  color: #FFF;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${pixel_to_viewport(20)};
  color: #FFF;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const BoxCl = styled.p`
  margin-top: ${pixel_to_viewport(20)};
  color: #FFF;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;