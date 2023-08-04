"use client";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ContentMain from "./components/ContentMain"
import { ContextProvider } from "../app/ContextApp";

export default function Home() {
  return (
    <ContextProvider>
      <div className="flex flex-row w-full">
        <Sidebar />
        <div className="w-full">
          <Header />
          <ContentMain />
        </div>
      </div>
    </ContextProvider>
  );
}
