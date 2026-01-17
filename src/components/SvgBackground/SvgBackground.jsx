import React from "react";
import "./SvgBackground.css";

// 示例：多个 SVG 片段（替换成你自己的 SVG 代码即可）
const SvgElements = [
  `<svg width="821" height="611" viewBox="0 0 821 611" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M219.512 -233.946C-12.7303 -149.417 -132.476 107.378 -47.9461 339.62C-2.75693 463.777 259.396 251.791 372.979 297.623C471.861 337.522 417.534 646.419 525.62 607.079C757.863 522.55 877.608 265.755 793.079 33.5125C708.549 -198.73 451.755 -318.475 219.512 -233.946Z" fill="#568AFF"/>
</svg>
`,
];

// 纯 JS 组件（去掉 TS 类型定义）
const SvgBackground = ({
  style,
  children, // 前景内容（必传）
}) => {
  return (
    <div className="svg-background-container" style={style}>
      <svg
        width="821"
        height="611"
        viewBox="0 0 821 611"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.6"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M219.512 -233.946C-12.7303 -149.417 -132.476 107.378 -47.9461 339.62C-2.75693 463.777 259.396 251.791 372.979 297.623C471.861 337.522 417.534 646.419 525.62 607.079C757.863 522.55 877.608 265.755 793.079 33.5125C708.549 -198.73 451.755 -318.475 219.512 -233.946Z"
          fill="#568AFF"
        />
      </svg>

      <svg
        width="584"
        height="396"
        viewBox="0 0 584 396"
        fill="none"
        style={{
          position: "absolute",
          right: "0",
          top: "0",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.541829"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00418 -208.915C-41.9614 74.4538 147.249 344.675 430.618 394.64C582.106 421.352 520.974 33.6298 633.304 -54.2125C731.095 -130.685 1010.92 103.907 1034.17 -27.9738C1084.14 -311.343 894.929 -581.564 611.56 -631.529C328.191 -681.495 57.9698 -492.284 8.00418 -208.915Z"
          fill="#568AFF"
        />
      </svg>

      <svg
        width="720"
        height="585"
        viewBox="0 0 720 585"
        fill="none"
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          style={{
            position: "absolute",
            right: "0px",
            bottom: "0px",
          }}
          d="M272.5 895C519.647 895 720 694.647 720 447.5C720 315.376 401.153 424.916 310.095 343C230.823 271.687 387.523 0 272.5 0C25.3526 0 -175 200.353 -175 447.5C-175 694.647 25.3526 895 272.5 895Z"
          fill="#568AFF"
        />
      </svg>

      <svg
        width="575"
        height="706"
        viewBox="0 0 575 706"
        fill="none"
        style={{
          position: "absolute",
          right: "0px",
          bottom: "0px",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1141.36 667.565C1196.51 354.826 987.683 56.597 674.944 1.45261C507.755 -28.0274 575.224 399.881 451.251 496.828C343.324 581.227 34.4964 322.32 8.83208 467.869C-46.3123 780.609 162.51 1078.84 475.249 1133.98C787.988 1189.13 1086.22 980.304 1141.36 667.565Z"
          fill="#568AFF"
        />
      </svg>

      {/* 前景内容容器：层级高于 SVG */}
      <div className="svg-background-foreground">{children}</div>
    </div>
  );
};

export default SvgBackground;
