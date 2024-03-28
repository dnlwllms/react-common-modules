import Cellect from "../../packages/cellect";

const Screen = () => {
  return (
    <Cellect
      size={[4, 5]}
      renderCell={({
        coordinate,
        isStartPoint,
        isSelected,
        isEndPoint,
        isFinished,
      }) => (
        <div
          style={{
            padding: 12,
            background: isSelected
              ? isEndPoint && isFinished
                ? "red"
                : isStartPoint
                ? "blue"
                : "yellow"
              : "none",
          }}
        >
          {coordinate}
        </div>
      )}
    />
  );
};

export default Screen;
