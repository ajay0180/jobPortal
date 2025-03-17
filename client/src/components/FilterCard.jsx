import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    index: 1,
    FilterType: "Location",
    array: ["DelhiNCR", "Bengalore", "Mumbai", "Hyderabad", "Pune"],
  },
  {
    index: 2,
    FilterType: "Domain",
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
    index: 3,
    FilterType: "Salary",
    array: ["50k-1lac", "1lac-1.75lac", "2lac-5lac"],
  },
];

export const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data) => (
          <div key={data.index}>
            <h1 className="font-bold pt-2">{data.FilterType}</h1>
            {data.array.map((el, index) => {
              return (
                <div className="flex items-center space-x-2 my-2" key={index}>
                  <RadioGroupItem value={el} id={el} />
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
