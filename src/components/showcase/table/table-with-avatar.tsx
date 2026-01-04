"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  { name: "John Doe", email: "john@example.com", role: "CEO", avatar: "JD" },
  { name: "Jane Smith", email: "jane@example.com", role: "CTO", avatar: "JS" },
  { name: "Bob Johnson", email: "bob@example.com", role: "Designer", avatar: "BJ" },
  { name: "Alice Brown", email: "alice@example.com", role: "Developer", avatar: "AB" },
  { name: "Charlie Wilson", email: "charlie@example.com", role: "Marketing", avatar: "CW" },
];

const TableWithAvatar = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Member</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {team.map((member) => (
          <TableRow key={member.email}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{member.avatar}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{member.name}</span>
              </div>
            </TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell className="text-muted-foreground">{member.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableWithAvatar;
