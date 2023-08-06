import React from "react";
import { Search } from "lucide-react";

function InputSeach() {
  return (
    <form className="max-w-[360px] relative">
      <input
        placeholder="Pesquisar"
        type="text"
        className="w-full border border-slate-200 py-2 px-2 text-sm rounded-md focus:outline-none"
      />
      <Search size={20} className="absolute right-2 top-2" />
    </form>
  );
}

export default InputSeach;
