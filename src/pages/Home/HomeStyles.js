import styled from "styled-components";
import pixel_to_viewport from "../../utils/pixel_to_viewport";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${pixel_to_viewport(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${pixel_to_viewport(320, 320)};
  min-height: ${pixel_to_viewport(200, 320)};
  flex-direction: column;
  padding: ${pixel_to_viewport(20)};
  margin: ${pixel_to_viewport(5)};
  // margin: ${props => props.mg};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media (min-width: 601px) {
    width: ${pixel_to_viewport(320, 768)};
    min-height: ${pixel_to_viewport(200, 768)};
    height: 100%;
  }

  @media (min-width: 768px) {
    width: ${pixel_to_viewport(500)};
    min-height: ${pixel_to_viewport(300)};
    height: 100%;
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