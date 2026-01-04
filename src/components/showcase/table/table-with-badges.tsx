"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const orders = [
  { id: "ORD001", customer: "John Doe", status: "delivered", total: "$125.00" },
  { id: "ORD002", customer: "Jane Smith", status: "processing", total: "$89.00" },
  { id: "ORD003", customer: "Bob Johnson", status: "pending", total: "$234.00" },
  { id: "ORD004", customer: "Alice Brown", status: "cancelled", total: "$56.00" },
  { id: "ORD005", customer: "Charlie Wilson", status: "delivered", total: "$178.00" },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "delivered":
      return "default";
    case "processing":
      return "secondary";
    case "pending":
      return "outline";
    case "cancelled":
      return "destructive";
    default:
      return "default";
  }
};

const TableWithBadges = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>
              <Badge variant={getStatusVariant(order.status)}>
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{order.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableWithBadges;
