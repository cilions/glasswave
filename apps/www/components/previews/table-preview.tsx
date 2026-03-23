"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function TablePreview() {
  return (
    <ComponentPreview label="Table">
      <div className="w-full max-w-lg">
        <Table>
          <TableCaption>Recent invoices</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV-001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">$199.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV-002</TableCell>
              <TableCell>Open</TableCell>
              <TableCell className="text-right">$42.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </ComponentPreview>
  );
}
