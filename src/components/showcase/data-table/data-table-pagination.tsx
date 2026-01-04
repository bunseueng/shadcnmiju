"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Transaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "credit" | "debit";
};

const data: Transaction[] = [
  { id: "1", date: "2024-01-15", description: "Grocery Store", amount: 85.50, type: "debit" },
  { id: "2", date: "2024-01-14", description: "Salary Deposit", amount: 3500.00, type: "credit" },
  { id: "3", date: "2024-01-13", description: "Gas Station", amount: 45.00, type: "debit" },
  { id: "4", date: "2024-01-12", description: "Restaurant", amount: 62.30, type: "debit" },
  { id: "5", date: "2024-01-11", description: "Online Shopping", amount: 125.99, type: "debit" },
  { id: "6", date: "2024-01-10", description: "Coffee Shop", amount: 5.75, type: "debit" },
  { id: "7", date: "2024-01-09", description: "Freelance Payment", amount: 450.00, type: "credit" },
  { id: "8", date: "2024-01-08", description: "Electricity Bill", amount: 98.20, type: "debit" },
  { id: "9", date: "2024-01-07", description: "Bookstore", amount: 32.50, type: "debit" },
  { id: "10", date: "2024-01-06", description: "Movie Tickets", amount: 28.00, type: "debit" },
];

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const type = row.original.type;
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return (
        <div className={type === "credit" ? "text-green-600" : "text-red-600"}>
          {type === "credit" ? "+" : "-"}{formatted}
        </div>
      );
    },
  },
];

export default function DataTablePagination() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-4">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
