import { ClueDetails, Direction, DIRNAME } from "./utils";

interface CurrentClueProps {
  clue: ClueDetails | null;
  clueText: string;
}

function getClueText(releaseDate: Date, fullClueText: string): string {
  const now = new Date();
  if (now > releaseDate) {
    return fullClueText;
  } else {
    const day = releaseDate.getDate();
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
          ? "nd"
          : day === 3 || day === 23
            ? "rd"
            : "th";
    const month = releaseDate.toLocaleDateString("en-GB", { month: "long" });
    return `Released on the ${day}${suffix} ${month}`;
  }
}

export function CurrentClue(props: CurrentClueProps) {
  let id = "";
  let text = "No clue selected.";
  if (props.clue !== null) {
    const { num, clue, releaseDate } = props.clue;
    id = `${num} ${clue.direction}`;

    text = `${getClueText(releaseDate, props.clueText)}\u00A0(${clue.length})`;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "15px",
        fontWeight: "bold",
        backgroundColor: "lightblue",
      }}
    >
      <div style={{ whiteSpace: "nowrap", fontWeight: "bold", margin: "5px" }}>
        {id}
      </div>
      <div
        style={{
          fontWeight: "bold",
          margin: "5px",
          backgroundColor: "lightblue",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export function ClueBox(props: {
  onClick: any;
  clues: { [key: number]: [string, number, Date] };
  direction: Direction;
  selectedClue: ClueDetails | null;
}) {
  function clueBoxOnClick(number: string) {
    props.onClick(number, props.direction);
  }
  let num: string | null = null;
  let direction: Direction | null = null;
  if (props.selectedClue !== null) {
    num = props.selectedClue.num;
    direction = props.selectedClue.clue.direction;
  }
  return (
    <div
      style={{
        fontWeight: "bold",
        width: "300px",
        display: "inline-block",
        verticalAlign: "top",
        margin: "5px",
      }}
    >
      <div style={{ border: "1px solid black", padding: "5px" }}>
        {DIRNAME[props.direction]}
      </div>
      {Object.entries(props.clues).map((entry) => {
        const [number, vals] = entry;
        const selected = props.direction === direction && number === num;
        const [clueText, len, releaseDate] = vals;

        const now = new Date();
        const today = now.toDateString() === releaseDate.toDateString();
        const text = getClueText(releaseDate, clueText);
        function onClick() {
          clueBoxOnClick(number);
        }
        return (
          <Clue
            key={number}
            number={number}
            clue={text}
            len={len}
            onClick={onClick}
            selected={selected}
            today={today}
          />
        );
      })}
    </div>
  );
}

interface ClueProps {
  number: string;
  clue: string;
  len: number | number[];
  onClick: () => void;
  selected: boolean;
  today: boolean;
}

export function Clue(props: ClueProps) {
  let classNames = "clue";
  if (props.today) {
    classNames = `${classNames} today`;
  }
  if (props.selected) {
    classNames = `${classNames} selected`;
  }
  return (
    <div className={classNames} onClick={props.onClick}>
      {props.number}. {props.clue} (
      {Array.isArray(props.len) ? props.len.join(",") : props.len})
    </div>
  );
}
