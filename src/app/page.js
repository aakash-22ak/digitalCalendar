'use client'


import CalendarTwo from "@/components/CalendarTwo";
import Calendar from "../components/Calendar";
import Image from "next/image";

export default function Home() {

  

  return (
      
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <CalendarTwo /> */}
    <Calendar />
    </main>
  );
}
