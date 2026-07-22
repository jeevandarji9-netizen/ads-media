import { Copy } from "lucide-react";

export default function AccessModal({
  client,
  onClose,
}) {
  if (!client) return null;

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied");
  };

  const loginLink = `https://yourdomain.com/login/${client.username}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl p-6 w-full max-w-xl">

        <h2 className="text-2xl font-bold mb-6">
          Client Access
        </h2>

        <Field
          title="Company"
          value={client.company}
          copy={copy}
        />

        <Field
          title="Login Link"
          value={loginLink}
          copy={copy}
        />

        <Field
          title="Username"
          value={client.username}
          copy={copy}
        />

        <Field
          title="Password"
          value={client.password}
          copy={copy}
        />

        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          OK
        </button>

      </div>

    </div>
  );
}

function Field({
  title,
  value,
  copy,
}) {
  return (
    <div className="flex justify-between items-center border rounded-xl p-3 mb-4">

      <div>

        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <p className="font-semibold">
          {value}
        </p>

      </div>

      <button
        onClick={() => copy(value)}
        className="bg-gray-100 px-4 py-2 rounded-lg"
      >
        <Copy size={18} />
      </button>

    </div>
  );
}
