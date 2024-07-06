import SearchIcon from "../icons/search-icon";

export default function Search() {
    return (
        <div className="bg-[#F1F1F1] flex items-center gap-2 border border-[#C31162] rounded-lg relative">
            <SearchIcon />
            <input type="text" className="bg-transparent h-10 w-full pl-16 py-8" placeholder="Search for product" />
        </div>
    )
}