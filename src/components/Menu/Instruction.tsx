import React, { useState } from "react";

const Instruction: React.FC<any> = (props: any) => {
  const [instruction, setInstruction] = useState({
    name: `SPACEBAR`,
    action: `begin`,
  });

  return (
    <div className="instruction">
      press <data className="instruction-name">{instruction.name}</data> to{" "}
      {instruction.action}
    </div>
  );
};

export { Instruction };
