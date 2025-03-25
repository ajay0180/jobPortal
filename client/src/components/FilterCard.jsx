import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";

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
    array: ["50k-1lac", "1lac-1.75lac", "2lac-5lac", "5lac+"],
  },
];

export const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup onValueChange={changeHandler} value={selectedValue}>
        {filterData.map((data, index) => (
          <div key={data.index}>
            <h1 className="font-bold pt-2">{data.FilterType}</h1>
            {data.array.map((el, idx) => {
              return (
                <div className="flex items-center space-x-2 my-2" key={index}>
                  <RadioGroupItem value={el} id={index - idx} />
                  <Label htmlFor={el}>{el}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
