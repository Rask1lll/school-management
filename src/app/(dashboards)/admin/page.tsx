import StudentsCountChart from "@/components/StudentsCountChart";
import UserCard from "@/components/UserCard";
function AdminDashboard() {
  return (
    <div>
      {/* dashboard */}
      <div className="w-full lg:w-2/3">
        {/* cards */}
        <div className="grid gap-4 justify-between grid-cols-2 md:grid-cols-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {}
        <div className="w-full lg:w-1/3 h-[450px]">
          <StudentsCountChart />
        </div>
      </div>
      {/* additional left */}
      <div className="w-full lg:2-1/3"></div>
    </div>
  );
}

export default AdminDashboard;
