import { useState, useEffect } from "react";

export default function EditClientModal({
  client,
  onSave,
  onClose,
}) {
  const [form, setForm] = useState(client);

  useEffect(() => {
    setForm(client);
  }, [client]);

  if (!client) return null;

  const update = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl p-6 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6">
          Edit Client
        </h2>

        <input
          className="border w-full p-3 rounded-xl mb-4"
          value={form.company}
          onChange={(e) =>
            update("company", e.target.value)
          }
          placeholder="Company"
        />

        <input
          className="border w-full p-3 rounded-xl mb-4"
          value={form.contact}
          onChange={(e) =>
            update("contact", e.target.value)
          }
          placeholder="Contact"
        />

        <input
          className="border w-full p-3 rounded-xl mb-4"
          value={form.username}
          onChange={(e) =>
            update("username", e.target.value)
          }
          placeholder="Username"
        />

        <input
          className="border w-full p-3 rounded-xl mb-4"
          value={form.password}
          onChange={(e) =>
            update("password", e.target.value)
          }
          placeholder="Password"
        />

        <div className="flex gap-4 mt-6">

          <button
            onClick={() => onSave(form)}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl"
          >
            Save
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 py-3 rounded-xl"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}
