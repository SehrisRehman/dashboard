"use client";

import { Eye, Edit, Trash } from "lucide-react";

type Order = {
  id: string;
  course: string;
  date: string;
  price: string;
  status: "Completed" | "Pending" | "Failed";
};

const orders: Order[] = [
  { id: "#5401", course: "React Basics", date: "2025-05-01", price: "$49", status: "Completed" },
  { id: "#5402", course: "Advanced TypeScript", date: "2025-05-02", price: "$69", status: "Pending" },
  { id: "#5403", course: "Node.js API", date: "2025-05-03", price: "$59", status: "Failed" },
  { id: "#5404", course: "Fullstack Bootcamp", date: "2025-05-04", price: "$199", status: "Completed" },
  { id: "#5405", course: "Tailwind UI", date: "2025-05-05", price: "$39", status: "Completed" },
  { id: "#5406", course: "GraphQL Mastery", date: "2025-05-06", price: "$79", status: "Pending" },
  { id: "#5407", course: "Next.js Pro", date: "2025-05-07", price: "$89", status: "Completed" },
];

export default function OrderTable() {
  return (
    <div className="p-4">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto border border-gray-200 rounded-lg divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Order ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Course Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{order.id}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{order.course}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{order.date}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{order.price}</td>
                <td
                  className={`px-4 py-3 text-sm font-medium ${
                    order.status === "Completed"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {order.status}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <button title="View">
                      <Eye className="w-5 h-5 hover:text-blue-600" />
                    </button>
                    <button title="Edit">
                      <Edit className="w-5 h-5 hover:text-green-600" />
                    </button>
                    <button title="Delete">
                      <Trash className="w-5 h-5 hover:text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <td colSpan={6} className="px-4 py-3 text-center text-sm text-gray-500">
                Showing 1 to 7 of 7 entries
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
