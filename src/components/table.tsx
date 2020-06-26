import React from "react";
import { StaticQuery, graphql } from "gatsby";

function getTableRows(data) {
  const tableRows = [];
  data.allBasicsJson.edges.forEach((word) => {
    word.node.values.forEach((value) => {
      tableRows.push(
        <tr>
          <td>{word.node.definition}</td>
          <td>{value[0]}</td>
          <td>{value[1]}</td>
        </tr>
      );
    });
  });
  return tableRows;
}

const Table = (): JSX.Element => {
  return (
    <StaticQuery
      query={graphql`
        query BasicsQuery {
          allBasicsJson {
            edges {
              node {
                definition
                values
              }
            }
          }
        }
      `}
      render={(data) => (
        <table>
          <thead>
            <tr>
              <th>Definition</th>
              <th>Value</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>{getTableRows(data)}</tbody>
        </table>
      )}
    />
  );
};
export default Table;
