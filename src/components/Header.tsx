import { Search, Bell, ChevronDown, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Blue gradient background */}
      <div
        className="w-full px-6 py-3"
        style={{
          background: "linear-gradient(90deg, #007FF2 0%, #007FF2 63.36%, #013688 158.4%)",
        }}
      >
        <div className="flex items-center justify-between gap-4 max-w-[1920px] mx-auto">
          {/* Logo Section */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Octans Care Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Search Bar with Filter */}
          <div className="flex-1 max-w-2xl">
            <div className="relative flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search providers by name or specialty..."
                  className="w-full pl-10 pr-4 bg-white border-none h-10 text-sm"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 bg-white/10 hover:bg-white/20 text-white border-none"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Section - Notification and User Menu */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Notification Button */}
            <button className="relative text-white hover:opacity-80 transition-opacity">
              <Bell className="h-5 w-5" />

            </button>

            {/* User Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2">
                <Avatar className="size-[25px]">
                  <AvatarFallback className="size-full">Us</AvatarFallback>
                  <AvatarImage src="/asdsad" alt="User Profile" />
                </Avatar>
                <div className="flex items-center gap-1">

                <p className="text-white text-xs">Mickey ACC</p>
                <ChevronDown  className="size-4 text-white"/>
                </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
