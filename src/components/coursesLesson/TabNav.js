import styled, {css} from "styled-components";

export const TabHeaderContainer = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
    `;

export const StylizedTab = styled.button`
          color:#01487E;
          width: 100%;
          padding: 20px 0;
          font-size: 1.25rem;
          background: transparent;
          border: black;
          cursor: ${(p) => (p.disabled ? "default" : "pointer")};
          ${(p) => p.active && css`
          color: #00adb5`}
          ${(p)=> !p.active && p.inactiveStyle}
        `;


export const StyledTabPanel = styled.button`
      display: flex;
      font-size: 4rem;
      background: #393e46;
      text-align: center;
      align-content: center;
      width: 100%;
      height: 10%;
      justify-content: center;
    `;

export const TabsHolder = styled.button`
      display: flex;
    `;

export const inactiveTab = styled.button`
      opacity: 0.65;
    `;