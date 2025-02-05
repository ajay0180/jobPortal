import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    FilterType: "Location",
    array: ["DelhiNCR", "Bengalore", "Mumbai", "Hyderabad", "Pune"],
  },
  {
    FilterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Machine learning",
      "Generative AI",
      "FullStack Developer",
      "Data Analyst",
      "Data Scientist",
    ],
  },
  {
    FilterType: "Salary",
    array: ["0-40k", "40k-1lac", "1lac-5lac"],
  },
];

export const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, ind) => (
          <div key={ind}>
            <h1 className="font-bold pt-2">{data.FilterType}</h1>
            {data.array.map((el, ind) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem key={ind} value={el} />
                  <label htmlFor={el}>{el}</label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
