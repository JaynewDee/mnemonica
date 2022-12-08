import Score from "./Score";

const Dock = ({ score }: { score: number }) => {
  return (
    <div>
      <Score currentScore={score} />
    </div>
  );
};

export default Dock;
