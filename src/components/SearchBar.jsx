


import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const SearchBar = ({ setSearch }) => {
    const [input, setInput] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(input);
        }, 500); // 500ms debounce

        return () => clearTimeout(timer);
    }, [input, setSearch]);

    return (
        <div className="relative w-full max-w-md my-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            <input
                type="text"
                placeholder="Search users by name..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-12 pr-4 shadow-md transition-all duration-300 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:shadow-lg"
            />
        </div>
    );
};

export default SearchBar;