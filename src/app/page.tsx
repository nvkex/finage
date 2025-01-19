export default function Home() {
  return (
    <div className="px-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-2">
          <button className="bg-gray-600 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded">
            Login
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
