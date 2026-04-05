"use client";

import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function CarouselPreview() {
  return (
    <ComponentPreview label="Carousel">
      <div className="w-full max-w-md">
        <Carousel className="w-full">
          <CarouselContent>
            {[1, 2, 3].map((i) => (
              <CarouselItem key={i}>
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-6">
                    <span className="text-2xl font-semibold">Slide {i}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </ComponentPreview>
  );
}
