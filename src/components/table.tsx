import React from "react";
import { BasicsData } from "../lib/data";

function getTableRows(data: BasicsData[]): React.ReactElement[] {
  const tableRows: React.ReactElement[] = [];
  data.forEach((word, wordIndex) => {
    word.values.forEach((value, valueIndex) => {
      tableRows.push(
        <tr key={`${wordIndex}-${valueIndex}`}>
          <td>{word.definition}</td>
          <td>{value[0]}</td>
          <td>{value[1]}</td>
        </tr>
      );
    });
  });
  return tableRows;
}

interface Props {
  basicsData: BasicsData[];
}

const Table = ({ basicsData }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Definition</th>
          <th>Value</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>{getTableRows(basicsData)}</tbody>
    </table>
  );
};
export default Table;
