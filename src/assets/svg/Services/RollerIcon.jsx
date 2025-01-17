import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="5em"
      width="5em"
      {...props}
    >
      <path d="M8 0l6.61 3h.89a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H15v7a.5.5 0 01.485.38l.5 2a.498.498 0 01-.485.62H.5a.498.498 0 01-.485-.62l.5-2A.501.501 0 011 13V6H.5a.5.5 0 01-.5-.5v-2A.5.5 0 01.5 3h.89L8 0zM3.777 3h8.447L8 1 3.777 3zM2 6v7h1V6H2zm2 0v7h2.5V6H4zm3.5 0v7h1V6h-1zm2 0v7H12V6H9.5zM13 6v7h1V6h-1zm2-1V4H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z" />
    </svg>
  );
}

export default SvgComponent;
