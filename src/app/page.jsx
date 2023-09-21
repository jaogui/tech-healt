"use client";
import React from "react";
import {ContentTabs} from './components/ContentTabs'
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { ContextProvider } from "./utils/ContextApp";

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
