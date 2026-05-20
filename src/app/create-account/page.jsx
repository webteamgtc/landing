"use client";

import { Suspense } from "react";
import CreateAccountHeader from "./components/CreateAccountHeader";
import RegFormPanel from "./components/RegFormPanel";
import RegFormFooter from "./components/RegFormFooter";

export default function RegFormPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CreateAccountHeader />

      <main className="flex-1 flex flex-col items-center px-5 sm:px-8 py-6 sm:py-10">
        <Suspense fallback={<div className="w-full max-w-[480px] h-[400px]" />}>
          <RegFormPanel />
        </Suspense>
      </main>

      <RegFormFooter />
    </div>
  );
}
