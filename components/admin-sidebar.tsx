"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { EnvelopeIcon } from "@phosphor-icons/react";
import { Home, List } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { logout } from "@/lib/logout";

interface AdminSidebarProps {
  count: number;
}

export default function AdminSidebar({count} : AdminSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="flex items-center gap-2">
                <Link href="/admin" className="flex items-center gap-2 w-full">
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="flex items-center gap-2">
                <Link
                  href="/admin/blogs"
                  className="flex items-center gap-2 w-full"
                >
                  <List className="mr-2 h-4 w-4" />
                  <span>Blogs</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton className="flex items-center gap-2">
                <Link
                  href="/admin/messages"
                  className="flex items-center gap-2 w-full"
                >
                  <EnvelopeIcon className="mr-2 h-4 w-4" />
                  <span>Messages ({count})</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              {/* <SidebarMenuButton className="flex items-center gap-2"> */}
                <form action={logout}>
                  <Button
                    type="submit"
                    className="rounded-md bg-red-500 px-4 py-2 text-white hover:cursor-pointer"
                  >
                    Logout
                  </Button>
                </form>
              {/* </SidebarMenuButton> */}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
