"use client";

import { Button } from "@/components/ui/button";
import PageHeader from "../_components/PageHeader";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminProductsPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>;
        <Button asChild>
          {/* asChild makes sure it renders as a link instead of a button component... */}
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>

      <ProductsTable />

      <style jsx>{`
        .flex {
          display: flex;
        }
      `}</style>
    </>
  );
}

function ProductsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available For Purchase</span>
          </TableHead>
          <TableHead className="text-white">Name</TableHead>
          <TableHead className="text-white">Price</TableHead>
          <TableHead className="text-white">Orders</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
    </Table>
  );
}
