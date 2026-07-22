import { Eye, Pencil, Trash2 } from "lucide-react";

export default function ClientCard({
  client,
  onAccess,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold">
            {client.company}
          </h2>

          <p className="text-gray-500 mt-1">
            {client.username}
          </p>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            client.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {client.status}
        </span>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => onAccess(client)}
          className="flex-1 bg-blue-600 text-white py-2 rounded-xl"
        >
          <Eye size={18} className="inline mr-2" />
          Access
        </button>

        <button
          onClick={() => onEdit(client)}
          className="bg-yellow-500 text-white p-3 rounded-xl"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() => onDelete(client.id)}
          className="bg-red-500 text-white p-3 rounded-xl"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}
