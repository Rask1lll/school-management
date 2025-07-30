import Image from "next/image";

const TopNavBar = () => {
  return (
    <div className="p-4 flex justify-between">
      <div>
        <div className=" hidden md:flex gap-2 items-center p-2 rounded-full ring-[1.5px] text-xs ring-gray-300 justify-center">
          <Image src="/search.png" alt="icon o search" width={14} height={14} />
          <input
            type="text"
            placeholder="Search......"
            className="border-none outline-0 w-full"
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center">
          <Image src="/message.png" width={24} height={14} alt="" />
        </div>
        <div className="flex items-center relative">
          <Image src="/announcement.png" width={24} height={14} alt="" />
          <span className="bg-purple-700 absolute -top-3 -right-3 w-5 h-5 rounded-full text-white flex text-xs justify-center items-center">
            1
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-0 text-xs ">
            <p className="font-medium text-xs leading-3">Jane Doe</p>
            <p className="text-gray-400 text-right">admin</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/avatar.png"
              width={36}
              height={36}
              className="rounded-2xl block"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
