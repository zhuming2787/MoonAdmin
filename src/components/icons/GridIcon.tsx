import styled from "@emotion/styled";
import React from "react";

interface GridIconProps {
  size?: number;
  color?: string;
  hoverColor?: string; // hover颜色
}

const StyledSvg = styled.svg<GridIconProps>`
  transition: fill 0.2s ease;
  &:hover {
    fill: ${(props) => props.hoverColor || props.color};
  }
`;

const GridIcon: React.FC<GridIconProps> = ({
  size = 16,
  color = "#4c4c4c",
  hoverColor = "#3b82f6",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H0.6875H14.4375H15.125V0.6875V14.4375V15.125H14.4375H0.6875H0V14.4375V0.6875V0ZM1.375 1.375V6.875H6.875V1.375H1.375ZM8.25 1.375V6.875H13.75V1.375H8.25ZM1.375 8.25V13.75H6.875V8.25H1.375ZM8.25 8.25V13.75H13.75V8.25H8.25Z"
        fill={hoverColor}
      />
    </svg>
  );
};

export default GridIcon;
export type { GridIconProps };
