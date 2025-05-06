"use client"
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SearchBar from "@/app/components/student/SearchBar";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/student/Navbar";

const page = () => {
  const {input} = useParams()
  return (
    <>
    <Navbar/>
      <div className="relative md:px-36 px-8 pt-20 text-left">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
          <div>
          <h1 className="text-4xl font-semibold text-gray-800">Course List</h1>
          {/* <p><span>Home</span> / <span>Course List</span></p> */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem >
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Course List</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          </div>
          <SearchBar data={input}/>
        </div>
      </div>
    </>
  );
};

export default page;
