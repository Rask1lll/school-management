import Link from "next/link";
import Image from "next/image";
import MenuNavBar from "@/components/MenuNavBar";
import TopNavBar from "@/components/TopNavBar";

function dashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-screen flex bg-gray-50 gap-1.5">
        {/* left bar */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 mr-2 bg-white">
          <Link href="/" className="flex gap-1">
            <Image alt="img of logo" src="/logo.png" width={32} height={32} />
            <span className="items-center pt-1 hidden lg:block">Test Name</span>
          </Link>
          <MenuNavBar />
        </div>

        {/* right dashboard */}
        <div className=" w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
          <TopNavBar />
          {children}
        </div>
      </div>
    </>
  );
}

export default dashboardLayout;
