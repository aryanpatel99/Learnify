import Image from "next/image";
import Home1 from './pages/student/Home/page'
import CourseList from './pages/student/courselist/page'
import CourseDetails from './pages/student/coursedetails/page'
import MyEnrollments from './pages/student/myenrollments/page'
import Player from './pages/student/player/page'
import Loading from "./components/student/Loading";
import Navbar from "./components/student/Navbar";
import Hero from "./components/student/Hero";
import Companies from "./components/student/Companies";
import CoursesSection from "./components/student/CoursesSection";
import TestimonialSection from "./components/student/TestimonialSection";
import CallToAction from "./components/student/CallToAction";
import Footer from "./components/student/Footer";

export default function Home() {
  return (
   <div className="text-default min-h-screen bg-white">
    <Navbar/>
    <div className="flex flex-col items-center space-y-7 text-center">
    <Hero/>
   <Companies/>
   <CoursesSection/>
   <TestimonialSection/>
   <CallToAction/>
   <Footer/>
    </div>
   </div>
  );
}
