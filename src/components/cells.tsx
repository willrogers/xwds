export function FilledCell(props: {
  h: number;
  v: number;
  x: number;
  y: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: props.h + 1 + "px",
        height: props.v + 1 + "px",
        top: props.y + "px",
        left: props.x + "px",
      }}
      className="black-cell"
    ></div>
  );
}
export function EmptyCell(props: {
  h: number;
  v: number;
  x: number;
  y: number;
  number: string;
  contents: string | undefined;
  selected: boolean;
  highlight: boolean;
  onClick: () => void;
}) {
  const backgroundColor = props.selected
    ? "cyan"
    : props.highlight
      ? "lightblue"
      : "white";

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: props.h - 1 + "px",
          height: props.v - 1 + "px",
          top: props.y + "px",
          left: props.x + "px",
          backgroundColor: backgroundColor,
        }}
        onClick={props.onClick}
        className="white-cell"
      >
        {props.contents}
      </div>
      <div
        className="clue-number"
        style={{
          position: "absolute",
          width: props.h - 1 + "px",
          height: props.v - 1 + "px",
          top: props.y + "px",
          left: props.x + 2 + "px",
        }}
      >
        {props.number}
      </div>
    </>
  );
}
