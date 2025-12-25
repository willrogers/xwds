import { AbbreviationsData } from "../lib/data";
import styles from "./table.module.css";

function getTableRows(
  data: AbbreviationsData[],
  filterString: string
): React.ReactElement[] {
  let filterStringLower = filterString.toLowerCase();
  const tableRows: React.ReactElement[] = [];
  data.forEach((word, wordIndex) => {
    word.values.forEach((value, valueIndex) => {
      if (
        word.definition.toLowerCase().includes(filterStringLower) ||
        value[0].toLowerCase().includes(filterStringLower) ||
        value[1].toLowerCase().includes(filterStringLower)
      ) {
        tableRows.push(
          <tr key={`${wordIndex}-${valueIndex}`}>
            <td>{word.definition}</td>
            <td>{value[0]}</td>
            <td>{value[1]}</td>
          </tr>
        );
      }
    });
  });
  return tableRows;
}

interface Props {
  abbreviationsData: AbbreviationsData[];
  filterString: string;
}

const Table = ({ abbreviationsData, filterString }: Props) => {
  let rows = getTableRows(abbreviationsData, filterString);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Definition</th>
          <th>Value</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default Table;
