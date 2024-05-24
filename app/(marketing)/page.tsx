import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-6 mt-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Manajemen tugas terbaik
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Hayoo... mau ngapain?
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-sky-600 to-red-600 text-white px-4 p-2 rounded-md pb-2 w-fit">
          mulai tugas
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Berkolaborasi, kelola tugas, dan raih puncak produktivitas baru. Jika
        cara kerja tim Anda sangat unik - maka selesaikan semuanya dengan
        aplikasi{" "}
        <span className="rounded-sm bg-gradient-to-r from-sky-600 to-red-600 text-white">
          Ngapain?
        </span>{" "}
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Dapatkan secara gratis</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
