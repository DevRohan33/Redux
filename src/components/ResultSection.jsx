import React from 'react';
import { useSelector } from 'react-redux';

const ResultSection = ({ registrationNo }) => {
  const { currentStudent, loading, error } = useSelector(state => state);

  if (loading) {
    return (
      <div className="mt-6 p-6 border-2 border-indigo-300 rounded-lg bg-white shadow-lg">
        <p className="text-indigo-600 font-medium">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 p-6 border-2 border-red-300 rounded-lg bg-white shadow-lg">
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    );
  }

  if (!currentStudent) {
    return null;
  }

  return (
    <div className="mt-6 p-6 border-2 border-indigo-300 rounded-lg bg-white shadow-lg max-w-lg w-full">
      <h2 className="text-xl font-bold text-indigo-700 mb-4">
        Result for Registration No: {registrationNo}
      </h2>
      <div className="space-y-2">
        <p className="text-gray-800">
          <strong className="text-indigo-600">Student Name:</strong> {currentStudent["Student Name"]}
        </p>
        <p className="text-gray-800">
          <strong className="text-indigo-600">Roll No:</strong> {currentStudent["Roll No"]}
        </p>
        <h3 className="mt-4 font-semibold text-indigo-700">Marks:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>English: <span className="text-green-600">{currentStudent["English"]}</span></li>
          <li>Math: <span className="text-green-600">{currentStudent["Math"]}</span></li>
          <li>Physics: <span className="text-green-600">{currentStudent["Physics"]}</span></li>
          <li>Chemistry: <span className="text-green-600">{currentStudent["Chemistry"]}</span></li>
          <li>Computer: <span className="text-green-600">{currentStudent["Computer"]}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default ResultSection;