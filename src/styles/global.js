import { createGlobalStyle } from "styled-components";
import pixel_to_viewport from "../utils/pixel_to_viewport";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${pixel_to_viewport(24)};

      @media (min-width: 601px) {
        font-size: ${pixel_to_viewport(18)};
      }

      @media (min-width: 768px) {
        font-size: ${pixel_to_viewport(16)};
      }
    }
`;

export default Global;