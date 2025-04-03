import { useState } from "react";
import { useDispatch } from "react-redux";
import ResultSection from "./ResultSection";
import Note from "./Note";
import { searchStudent } from "../redux/actions";

const SearchBar = () => {
  const [registrationNo, setRegistrationNo] = useState("");
  const [showNote, setShowNote] = useState(true);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (registrationNo.trim() !== "") {
      dispatch(searchStudent(registrationNo));
      setShowNote(false);
    } else {
      alert("Please Enter a Valid Registration Number!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="flex items-center gap-2">
        <label className="text-xl font-semibold text-indigo-700">Registration No:</label>
        <input
          type="text"
          placeholder="Enter Registration No"
          value={registrationNo}
          onChange={(e) => setRegistrationNo(e.target.value)}
          onKeyDown={handleKeyPress}
          className="border border-gray-300 p-2 rounded-md w-80 focus:outline-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md"
        >
          Enter
        </button>
      </div>
      {showNote && <Note />}
      <ResultSection registrationNo={registrationNo} />
    </div>
  );
};

export default SearchBar;