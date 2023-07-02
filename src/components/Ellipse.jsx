import React from "react";

const Ellipse = () => {
  return (
    <div>
      <svg
        width="775"
        height="1002"
        viewBox="0 0 775 1002"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_49_47)">
          <path
            d="M474.5 770.5C474.5 1030.07 264.074 1240.5 4.5 1240.5C-255.074 1240.5 -465.5 1030.07 -465.5 770.5C-465.5 510.926 -255.074 300.5 4.5 300.5C264.074 300.5 474.5 510.926 474.5 770.5Z"
            fill="#FF3465"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_49_47"
            x="-765.5"
            y="0.5"
            width="1540"
            height="1540"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_49_47"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Ellipse;
