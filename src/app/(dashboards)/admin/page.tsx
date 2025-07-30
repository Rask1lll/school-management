import AttendanceChart from "@/components/AttendanceChart";
import DateCalendar from "@/components/DateCalendar";
import FinanceChart from "@/components/FinanceChart";
import StudentsCountChart from "@/components/StudentsCountChart";
import UserCard from "@/components/UserCard";
function AdminDashboard() {
  return (
    <div className="block gap-4 lg:flex">
      {/* dashboard */}
      <div className="w-full lg:w-2/3 flex flex-col gap-5">
        {/* cards */}
        <div className="grid gap-4 justify-between grid-cols-2 md:grid-cols-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {}
        <div className="grid lg:flex gap-4">
          <div className="w-full lg:w-1/3">
            <StudentsCountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px] ">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[450px]">
          <FinanceChart />
        </div>
      </div>
      {/* additional left */}
      <div className="lg:w-1/3 md:w-full bg-white h-fit p-4 rounded-2xl">
        <DateCalendar />
      </div>
    </div>
  );
}

export default AdminDashboard;
