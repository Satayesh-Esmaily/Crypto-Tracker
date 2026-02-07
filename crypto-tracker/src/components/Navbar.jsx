export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
      <h1 className="font-bold text-xl">Crypto Tracker</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
