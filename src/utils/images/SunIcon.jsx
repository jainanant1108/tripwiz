import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function SvgIconChildren({ fontSize }) {
  return (
    <SvgIcon sx={{ fontSize }}>
      {/* credit: plus icon from https://heroicons.com/ */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
      >
        <path
          d="M35 52.5C44.665 52.5 52.5 44.665 52.5 35C52.5 25.335 44.665 17.5 35 17.5C25.335 17.5 17.5 25.335 17.5 35C17.5 44.665 25.335 52.5 35 52.5Z"
          stroke="#1C274C"
          stroke-width="4"
        />
        <path
          d="M35 5.83301V8.74967"
          stroke="#1C274C"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M35 61.25V64.1667"
          stroke="#1C274C"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M64.1667 35H61.25"
          stroke="#1C274C"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M8.75001 35H5.83334"
          stroke="#1C274C"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M55.6232 14.3779L54.4775 15.5237"
          stroke="#1C274C"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M15.5219 54.4766L14.3761 55.6225"
          stroke="#1C274C"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M55.6232 55.6213L54.4775 54.4756"
          stroke="#1C274C"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M15.5219 15.5237L14.3761 14.3779"
          stroke="#1C274C"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    </SvgIcon>
  );
}
