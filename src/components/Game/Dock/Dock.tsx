import Score from "./Score";

const Dock = ({ score }: { score: number }) => {
  return (
    <>
      <Score currentScore={score} />
    </>
  );
};

export default Dock;
