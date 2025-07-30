import Link from "next/link";
import Image from "next/image";
import MenuNavBar from "@/components/MenuNavBar";
import TopNavBar from "@/components/TopNavBar";

function dashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex bg-gray-50">
        {/* left bar */}
        <div className="p-2 w-[14%] md:w-[8%] xl:w-[14%] lg:w-[16%] bg-white">
          <Link href="/" className="flex gap-1">
            <Image alt="img of logo" src="/logo.png" width={32} height={32} />
            <span className="items-center pt-1 hidden lg:block">Test Name</span>
          </Link>
          <MenuNavBar />
        </div>

        {/* right dashboard */}
        <div className=" overflow-y-scroll w-[86%] md:w-[92%] xl:w-[86%] lg:w-[84%] p-3">
          <TopNavBar />
          {children}
        </div>
      </div>
    </>
  );
}

export default dashboardLayout;
