
import AdminHeader from "../components/admin_header/admin_header"
import AdminSidebar from "../components/admin_sidebar/admin_sidebar"



const AdminPanel = () => {
    return (
        <div>
            <div className="">
            <AdminHeader />
            </div>
            <div className="relative bottom-[88px]">
            <AdminSidebar />
            </div>
        </div>

    )
}

export default AdminPanel