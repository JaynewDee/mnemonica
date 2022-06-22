import React, { KeyboardEventHandler, SetStateAction, useState } from "react";

const Instruction: React.FC<any> = (props: any) => {
  const [instruction, setInstruction] = useState({
    name: `SPACEBAR`,
    action: `begin`,
  });

  const handleSpacebar = (e: any) => {
    console.log(e);
    if (e.code === "Space") {
      props.begin();
    }
  };
  return (
    <div className="instruction">
      press{" "}
      <button
        onKeyDown={(e) => {
          handleSpacebar(e);
        }}
        autoFocus={true}
        className="instruction-name"
      >
        {instruction.name}
      </button>{" "}
      to {instruction.action}
    </div>
  );
};

export { Instruction };
