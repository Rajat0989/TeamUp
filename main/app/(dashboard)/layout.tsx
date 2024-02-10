import { OrgSidebar } from "./_components/org-sidebar"
import { Sidebar } from "./_components/sidebar"
import { Navbar } from "./_components/navbar"

interface DashBoardLayoutProps {
    children: React.ReactNode
}


const DashBoardLayout = (
    { children }: DashBoardLayoutProps
) => {
  return (
    <main className="h-screen">
        <Sidebar />
    <div className="h-full pl-[60px]">
        <div className="h-full flex gap-x-3">
                <OrgSidebar />
            <div className="h-full flex-1">
                <Navbar />
                {children}
            </div>
        </div>
    </div>
    </main>
  )
}

export default DashBoardLayout
