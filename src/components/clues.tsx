import React from "react";
import { AC, AllClues, ClueDetails, Direction, DIRNAME, DN } from "./utils";

export function CurrentClue(props) {
  let id = "";
  let text = "No clue selected.";
  if (props.clue !== null) {
    const { num, direction, clue, letters, releaseDay } = props.clue;
    id = `${num} ${direction}`;
    const now = new Date();
    const releaseDate = new Date(props.year, props.month, releaseDay);
    const words =
      now > releaseDate ? clue : `Released on December ${releaseDay}.`;
    text = `${words}\u00A0(${letters})`;
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
      <div
        style={{
          textWrap: "nowrap",
          fontWeight: "bold",
          margin: "5px",
        }}
      >
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
  clues: { [key: number]: [string, number, number] };
  direction: Direction;
  selectedClue: ClueDetails | null;
  year: number;
  month: number;
}) {
  function clueBoxOnClick(number) {
    props.onClick(number, props.direction);
  }
  let num: string | null = null;
  let direction: Direction | null = null;
  if (props.selectedClue !== null) {
    num = props.selectedClue.num;
    direction = props.selectedClue.direction;
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
        const [clueText, len, releaseDay] = vals;

        const now = new Date();
        const releaseDate = new Date(props.year, props.month, releaseDay);
        const today = now.getDate() === releaseDay;
        const text =
          now > releaseDate ? clueText : `Released on December ${releaseDay}.`;
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

export function Clue(props) {
  let classNames = "clue";
  if (props.today) {
    classNames = `${classNames} today`;
  }
  if (props.selected) {
    classNames = `${classNames} selected`;
  }
  return (
    <div className={classNames} onClick={props.onClick}>
      {props.number}. {props.clue} ({props.len.join(",")})
    </div>
  );
}
