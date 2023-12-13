import React from "react";

const Logo = ({ fill }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.7855 25.399C43.7855 35.5842 35.3934 43.8741 25.0001 43.8741C14.6067 43.8741 6.2146 35.5842 6.2146 25.399C6.2146 15.2137 14.6067 6.9238 25.0001 6.9238C35.3934 6.9238 43.7855 15.2137 43.7855 25.399Z"
        stroke={fill || "#1B1B1B"}
        stroke-width="2.5"
      />
      <path
        d="M48.75 25.3989C48.75 38.2765 38.1358 48.75 25 48.75C11.8642 48.75 1.25 38.2765 1.25 25.3989C1.25 12.5214 11.8642 2.04788 25 2.04788C38.1358 2.04788 48.75 12.5214 48.75 25.3989Z"
        stroke={fill || "#1B1B1B"}
        stroke-width="2.5"
      />
      <path
        d="M22.1882 22.6757L33.093 17.3061L27.7234 28.2109L16.8186 33.5804L22.1882 22.6757Z"
        stroke={fill || "#1B1B1B"}
        stroke-width="2.5"
      />
      <circle
        cx="24.9114"
        cy="25.4433"
        r="3.52128"
        stroke={fill || "#1B1B1B"}
        stroke-width="2"
      />
      <rect
        x="24.4903"
        y="11.015"
        width="1.10816"
        height="2.5266"
        rx="0.554078"
        fill={fill || "#1B1B1B"}
        stroke={fill || "#1B1B1B"}
        stroke-width="1.10816"
      />
      <rect
        x="39.6055"
        y="25.0222"
        width="1.10816"
        height="2.5266"
        rx="0.554078"
        transform="rotate(90 39.6055 25.0222)"
        fill={fill || "#1B1B1B"}
        stroke={fill || "#1B1B1B"}
        stroke-width="1.10816"
      />
      <rect
        x="13.0098"
        y="25.0222"
        width="1.10816"
        height="2.5266"
        rx="0.554078"
        transform="rotate(90 13.0098 25.0222)"
        fill={fill || "#1B1B1B"}
        stroke={fill || "#1B1B1B"}
        stroke-width="1.10816"
      />
      <rect
        x="25.5985"
        y="40.1374"
        width="1.10816"
        height="2.5266"
        rx="0.554078"
        transform="rotate(-180 25.5985 40.1374)"
        fill={fill || "#1B1B1B"}
        stroke={fill || "#1B1B1B"}
        stroke-width="1.10816"
      />
    </svg>
  );
};

export default Logo;
