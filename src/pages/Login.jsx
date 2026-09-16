import Input from "../components/Input/Input";

export default function Login() {
  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center px-6">
      <section className="w-full max-w-md rounded-2xl bg-white border border-neutral-200 p-10 shadow-sm">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-6 h-16 w-16 rounded-2xl bg-neutral-200" />

          <h1 className="text-3xl font-bold">nexpay</h1>

          <p className="mt-2 text-center text-sm text-neutral-500">
            Financial platform for modern businesses.
          </p>
        </div>

        <div className="space-y-6">
          <Input label="Email" type="email" placeholder="you@example.com" />

          <Input label="Password" type="password" placeholder="••••••••" />
        </div>

        <button
          className="
            mt-8
            w-full
            rounded-xl
            bg-black
            py-3
            font-semibold
            text-white
            transition
            hover:opacity-90
            cursor-pointer
            hover:underline
          "
        >
          Sign In
        </button>

        <p className="mt-6 text-center text-sm text-neutral-500 cursor-pointer hover:underline">
          Forgot your password?
        </p>
      </section>
    </main>
  );
}
