"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  { name: "Widget A", category: "Electronics", price: "$29.99", stock: 150 },
  { name: "Gadget B", category: "Electronics", price: "$49.99", stock: 75 },
  { name: "Tool C", category: "Hardware", price: "$19.99", stock: 200 },
  { name: "Device D", category: "Electronics", price: "$99.99", stock: 30 },
  { name: "Item E", category: "Accessories", price: "$9.99", stock: 500 },
  { name: "Product F", category: "Hardware", price: "$39.99", stock: 85 },
];

const TableStriped = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => (
          <TableRow
            key={product.name}
            className={index % 2 === 0 ? "bg-muted/50" : ""}
          >
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell className="text-right">{product.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableStriped;
