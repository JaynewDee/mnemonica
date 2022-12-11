import Score from "./Score";

const Dock = ({ scoreState }: { scoreState: number }) => {
  return (
    <>
      <Score currentScore={scoreState} />
    </>
  );
};

export default Dock;
