import styled from "styled-components";
import wallpaper from "./wallpaper.jpg";

export const Main = styled.main`
  background-image: url(${wallpaper});
  background-size: contain;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const StyledButton = styled.button`
  background-color: #ffffff9a;
  height: 40px;
  padding: 0 14px;
  border: 1px solid #fff;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
  color: #792379;
`;
