import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { File, Pencil, Settings } from "lucide-react"
import Link from "next/link";


const MenuItems = [
  {
    label: "Dashboard",
    icon: File,
    url: `/`,
  },
  {
    label: "Settings",
    icon: Settings,
    url: `/settings`,
  },
  {
    label: "Profile",
    icon: Pencil,
    url: `/profile`,
  },
  {
    label: "Help",
    icon: File,
    url: `/help`,
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
          {MenuItems.map(each => {
            return(
              <Link href={each.url} className="flex items-center gap-2">
                <each.icon></each.icon>{each.label}
              </Link>
            )
          })}
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}