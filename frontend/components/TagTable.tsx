import { Tag } from "@prisma/client";
import React, { useMemo } from "react";
import { FaPen, FaSave, FaTrash } from "react-icons/fa";
import {
  CellProps,
  Column,
  useRowState,
  UseRowStateLocalState,
  useTable,
} from "react-table";
import styled from "styled-components";

import { useUpdateTags } from "../hooks/tags";
import { Table } from "./Common";

type Props = {
  tags: Tag[];
};

type RowState = {
  canEdit: boolean;
  label: string;
  link: string | null;
};

const TextInput = styled.input`
  all: unset;
  width: 100%;
`;

const EditIcon = styled(FaPen)`
  cursor: pointer;
  margin-right: 0.25em;
`;

const SaveIcon = styled(FaSave)`
  cursor: pointer;
  margin-right: 0.25em;
`;

const DeleteIcon = styled(FaTrash)`
  cursor: pointer;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TagTable: React.FC<Props> = ({ tags }) => {
  const { updateTag, isLoading } = useUpdateTags();

  const columns = useMemo<Column<Tag>[]>(
    () => [
      {
        Header: "Label",
        accessor: "label",
        width: "20%",
        Cell: ({ row }: CellProps<Tag>) => {
          const { canEdit, label } = row.state as RowState;
          return (
            <TextInput
              value={label || ""}
              disabled={!canEdit || isLoading}
              onChange={(e) =>
                row.setState((prevState: RowState) => ({
                  ...prevState,
                  label: e.target.value,
                }))
              }
            />
          );
        },
      },
      {
        Header: "Link",
        accessor: "link",
        Cell: ({ row }: CellProps<Tag>) => {
          const { canEdit, link } = row.state as RowState;
          return (
            <TextInput
              value={link || ""}
              disabled={!canEdit || isLoading}
              onChange={(e) =>
                row.setState((prevState: RowState) => ({
                  ...prevState,
                  link: e.target.value,
                }))
              }
            />
          );
        },
      },
      {
        Header: "Actions",
        width: "20%",
        Cell: ({ row: { state, id, setState } }: CellProps<Tag>) => {
          const { canEdit, label, link } = state as RowState;
          return (
            <ActionsContainer>
              {canEdit ? (
                <SaveIcon onClick={() => updateTag({ id, link, label })} />
              ) : (
                <EditIcon
                  onClick={() =>
                    setState((state: RowState) => ({
                      ...state,
                      canEdit: true,
                    }))
                  }
                />
              )}
              <DeleteIcon />
            </ActionsContainer>
          );
        },
      },
    ],
    [isLoading, updateTag]
  );
  const data = useMemo(() => tags || [], [tags]);

  const rowState = data.reduce<
    Record<string, RowState & { cellState: UseRowStateLocalState<Tag> }>
  >((acc, curr) => {
    acc[curr.id] = {
      canEdit: false,
      label: curr.label,
      link: curr.link,
      cellState: {},
    };
    return acc;
  }, {});

  const getRowId = (originalRow: Tag, _relativeIndex: number) =>
    originalRow.id.toString();

  const { headerGroups, rows, prepareRow } = useTable<Tag>(
    {
      columns,
      data,
      initialState: {
        rowState,
      },
      getRowId,
    },
    useRowState
  );

  return (
    <Table>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={index}>
            {headerGroup.headers.map((column, index) => (
              <th
                {...column.getHeaderProps({
                  style: { width: column.width },
                })}
                key={index}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr key={index}>
              {row.cells.map((cell, index) => {
                return <td key={index}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TagTable;
