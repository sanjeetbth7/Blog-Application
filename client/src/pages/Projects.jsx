import React from "react";
import { CallToAction } from "../Components";
export default function Projects() {
  return (
    <div className="mb-4">
      <div className="max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
        <h1 className="text-3xl font-semibold">Pojects</h1>
        <p className="text-md text-gray-500">
          Build fun and engaging projects while learning Web development!
        </p>
      </div>
      <div className=" justify-center items-center text-center">
      </div>

      <CallToAction />
    </div>
  );
}
