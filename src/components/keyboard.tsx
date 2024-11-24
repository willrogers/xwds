import React from "react";
import "./keyboard.css";
import { StaticImage } from "gatsby-plugin-image";

export const KeyboardButton = (props: {
  keyboardPressed: () => void;
}): JSX.Element => {
  return (
    <div id="keyboard-button" onClick={props.keyboardPressed}>
      <StaticImage alt="keyboard" src="../images/keyboard.png" />
    </div>
  );
};

export const KeyboardKey = (props: {
  letter: string;
  keyPressed: (letter: string) => void;
}) => {
  return (
    <div
      onClick={() => props.keyPressed(props.letter)}
      className="keyboard-key"
    >
      {props.letter}
    </div>
  );
};

export const Keyboard = (props: {
  hideKeyboardPressed: () => void;
  keyPressed: (letter: string) => void;
}): JSX.Element => {
  return (
    <div id="keyboard">
      <div className="keyboard-row">
        <KeyboardKey letter="q" keyPressed={props.keyPressed} />
        <KeyboardKey letter="w" keyPressed={props.keyPressed} />
        <KeyboardKey letter="e" keyPressed={props.keyPressed} />
        <KeyboardKey letter="r" keyPressed={props.keyPressed} />
        <KeyboardKey letter="t" keyPressed={props.keyPressed} />
        <KeyboardKey letter="y" keyPressed={props.keyPressed} />
        <KeyboardKey letter="u" keyPressed={props.keyPressed} />
        <KeyboardKey letter="i" keyPressed={props.keyPressed} />
        <KeyboardKey letter="o" keyPressed={props.keyPressed} />
        <KeyboardKey letter="p" keyPressed={props.keyPressed} />
      </div>
      <div className="keyboard-row">
        <KeyboardKey letter="a" keyPressed={props.keyPressed} />
        <KeyboardKey letter="s" keyPressed={props.keyPressed} />
        <KeyboardKey letter="d" keyPressed={props.keyPressed} />
        <KeyboardKey letter="f" keyPressed={props.keyPressed} />
        <KeyboardKey letter="g" keyPressed={props.keyPressed} />
        <KeyboardKey letter="h" keyPressed={props.keyPressed} />
        <KeyboardKey letter="j" keyPressed={props.keyPressed} />
        <KeyboardKey letter="k" keyPressed={props.keyPressed} />
        <KeyboardKey letter="l" keyPressed={props.keyPressed} />
      </div>
      <div className="keyboard-row">
        <KeyboardKey letter="z" keyPressed={props.keyPressed} />
        <KeyboardKey letter="x" keyPressed={props.keyPressed} />
        <KeyboardKey letter="c" keyPressed={props.keyPressed} />
        <KeyboardKey letter="v" keyPressed={props.keyPressed} />
        <KeyboardKey letter="b" keyPressed={props.keyPressed} />
        <KeyboardKey letter="n" keyPressed={props.keyPressed} />
        <KeyboardKey letter="m" keyPressed={props.keyPressed} />
      </div>
    </div>
  );
};
