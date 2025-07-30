import UserCard from "@/components/UserCard";
function AdminDashboard() {
  return (
    <div>
      {/* dashboard */}
      <div className="w-full lg:w-2/3">
        {/* cards */}
        <UserCard type="student" />
        <UserCard type="teacher" />
        <UserCard type="parent" />
        <UserCard type="staff" />
      </div>
      {/* additional left */}
      <div className="w-full lg:2-1/3"></div>
    </div>
  );
}

export default AdminDashboard;
