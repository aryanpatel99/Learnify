"use client"
import React, { useContext, useEffect, useState } from "react";
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
import { AppContext } from "@/app/context/AppContext";
import CourseCard from "@/app/components/student/CourseCard";
import NewCourseCard from "@/app/components/student/NewCourseCard";
import SearchCourse from "@/app/components/student/SearchCourse";


const page = () => {
  // const {input} = useParams()

  const [apiCourses,setApiCourses] = useState([])
  const {fetchedCourses,allCourses} = useContext(AppContext)
  const [filteredCourse, setFilteredCourse] = useState([])
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  // useEffect(()=>{
  //   if(allCourses && allCourses.length>0){
  //     const tempCourses = allCourses.slice()
  //     input?setFilteredCourse(tempCourses.filter(item => item.courseTitle.toLowerCase().includes(searchValue.toLowerCase())))
  //     :setFilteredCourse(tempCourses)
  //   }
  // },[allCourses,searchValue])

  // Debouncing logic: will wait for some seconds
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebouncedValue(searchValue)
    },400)

    return () => clearTimeout(timer);
  },[searchValue])


  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.filter((item) =>
        item.courseTitle.toLowerCase().includes(debouncedValue.toLowerCase())
      );
      setFilteredCourse(tempCourses);
    }
  }, [allCourses, debouncedValue]);

  // useEffect(()=>{
  //   if (fetchedCourses) {
  //     try{
  //       const parsedData = JSON.parse(fetchedCourses);
  //       setApiCourses(parsedData)
  //     }catch(error){
  //       console.log('Error parsing JSON:', error);
  //     }
  //   }
  // },[fetchedCourses])
  


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
          {/* <SearchBar data={input}/> */}
          <SearchCourse value={searchValue} setValue = {setSearchValue}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
          {filteredCourse.length === 0 ? <h1 className="text-2xl font-medium text-gray-500">No course found</h1>
          
          : filteredCourse.map((course,index) => (
            <CourseCard key={index} course={course}/>
          ))}

        </div>
      </div>
    </>
  );
};

export default page;
