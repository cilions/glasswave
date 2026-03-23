"use client";

import { DataTable, dataTableSortHeader, type ColumnDef } from "glasswave";
import { ComponentPreview } from "@/components/component-preview";
import { useMemo } from "react";

type Row = { id: string; name: string; status: string };

export function DataTablePreview() {
  const data: Row[] = useMemo(
    () => [
      { id: "1", name: "Alpha", status: "done" },
      { id: "2", name: "Beta", status: "open" },
      { id: "3", name: "Gamma", status: "open" },
    ],
    [],
  );

  const columns: ColumnDef<Row>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => dataTableSortHeader("Name", column),
      },
      {
        accessorKey: "status",
        header: ({ column }) => dataTableSortHeader("Status", column),
      },
    ],
    [],
  );

  return (
    <ComponentPreview label="Data Table">
      <div className="w-full max-w-xl">
        <DataTable columns={columns} data={data} />
      </div>
    </ComponentPreview>
  );
}
