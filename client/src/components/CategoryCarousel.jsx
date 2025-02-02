import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Machine learning",
  "Frontend Developer",
  "GenerativeAI",
  "Data Science",
  "Graphic designer",
  "Full Stack",
  "Backend Developer",
  "DevOps",
];

export const CategoryCarousel = () => {
  return (
    <div className="max-w-[45%] mx-auto">
      <Carousel className="max-w-full my-20 flex items-center">
        <CarouselContent>
          {category.map((cat, ind) => (
            <CarouselItem key={ind}>
              <Button>{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
