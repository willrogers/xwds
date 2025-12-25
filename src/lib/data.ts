import fs from "fs";
import path from "path";

export interface XwdData {
  title: string;
  preamble: string;
  "start-date": string; // ISO date string (YYYY-MM-DD)
  "across-size": number;
  "down-size": number;
  "black-squares": number[][];
  clues: {
    ac: Array<{
      number: string;
      clue: string;
      length: number | number[];
      "day-number": number; // Days from startDate when this clue is revealed
    }>;
    dn: Array<{
      number: string;
      clue: string;
      length: number | number[];
      "day-number": number; // Days from startDate when this clue is revealed
    }>;
  };
}

export interface AbbreviationsData {
  definition: string;
  values: Array<[string, string]>;
}

export function getXwdData(year: string): XwdData {
  const filePath = path.join(process.cwd(), "static", `xwd${year}.json`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);
  return data[0]; // The JSON files contain arrays with a single object
}

export function getAbbreviationsData(): AbbreviationsData[] {
  const filePath = path.join(process.cwd(), "static", "abbreviations.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
