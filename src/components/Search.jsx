import React, { useState } from "react";
import data from "../data/Candidate.json";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="flex justify-end p-4">
        <div className="w-64">
          <h1 className="text-white text-xl">Search for candidates</h1>
          {/* <!-- searchInputContainer --> */}
          <input
            className="rounded-lg px-4 py-2"
            type="text"
            id="searchInput"
            placeholder="Search Here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="ml-4">
          {/* <!-- Template Container --> */}
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return;
              } else if (
                val.role.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div className="mb-4">
                  <div className="overflow-auto rounded-lg shadow hidden md:block">
                    <table className="w-full">
                      <thead className="bg-[#FF3465] border-b-2 border-gray-200 justify-between">
                        <tr>
                          <th className="p-3 text-lg tracking-wide text-left font-bold text-white">
                            Name
                          </th>
                          <th className="w-24 p-3 text-lg font-bold tracking-wide text-left text-white">
                            Role
                          </th>
                          <th className="w-24 p-3 text-lg font-bold tracking-wide text-left text-white">
                            Location
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="bg-gray-800">
                          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                            <h1 className="text-white">{val.name}</h1>
                          </td>
                          <td className="p-3 pr-40 px-auto text-sm text-gray-700 whitespace-nowrap">
                            <h1 className="text-white">{val.role}</h1>
                          </td>
                          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                            <h1 className="text-white">{val.location}</h1>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Search;
