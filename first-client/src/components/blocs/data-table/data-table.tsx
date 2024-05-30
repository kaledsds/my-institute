import { ColumnProps } from "./data-table.types";

type Props<T> = {
  columns: Array<ColumnProps<T>>;
  data?: T[];
};

export const DataTable = <T,>({ data, columns }: Props<T>) => {
  const headers = columns.map((column, index) => {
    return (
      <th key={`headCell-${index}`} className="!z-0">
        {column.title}
      </th>
    );
  });

  const rows = !data?.length ? (
    <tr>
      <td colSpan={columns.length} className="text-center">
        No data
      </td>
    </tr>
  ) : (
    data?.map((row, index) => {
      return (
        <tr key={`row-${index}`}>
          {columns.map((column, index2) => {
            const value = column.render
              ? column.render(column, row as T)
              : (row[column.key as keyof typeof row] as string);
            return <td key={`cell-${index2}`}>{value}</td>;
          })}
        </tr>
      );
    })
  );

  return (
    <div className="overflow-x-auto border rounded-md overflow-hidden">
      <table className="table w-full ">
        <thead className="bg-primary text-primary-content">
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
