"use client";
import CreateFatePoolForm from "@/components/Forms/CreateFatePool";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { useRef } from "react";

export default function CreateFatePoolPage() {
  return (
    <>
      <Navbar />
      <div className="dark:bg-black bg-white">
        <CreateFatePoolForm />
      </div>
      <Footer/>
    </>
  );
}
