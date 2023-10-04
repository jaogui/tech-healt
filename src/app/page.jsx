"use client";
import React from "react";
import {ContentTabs} from './pages/ContentTabs'
import { Header } from "./components/navigation/Header";
import { Sidebar } from "./components/navigation/Sidebar";
import { ContextProvider } from "./components/hooks/ContextApp";

export default function Home() {
  return (
    <ContextProvider>
      <div className="flex flex-row w-full">
        <Sidebar />
        <div className="w-full">
          <Header />
          <ContentTabs />
        </div>
      </div>
    </ContextProvider>
  );
}
