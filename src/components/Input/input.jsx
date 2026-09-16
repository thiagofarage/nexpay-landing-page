export default function Input({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-neutral-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
      />
    </div>
  );
}
