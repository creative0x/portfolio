import React from "react";

export default function SplitText({ copy, role, customClass }) {
  return (
    <span aria-label={copy} role={role}>
      {copy.split("").map(function (char, index) {
        return (
          <span aria-hidden="true" key={index} className={customClass}>
            {char}
          </span>
        );
      })}
    </span>
  );
}
