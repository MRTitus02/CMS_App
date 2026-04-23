import { Anvil, CircleUser, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const auth = false;
  const tempUser = {
    name: "John Doe",
    username: "johndoe",
  }
  return (
    <div className="w-full flex justify-between px-4 h-12">
      <Link className="flex gap-2" href="/">
        <Anvil /> <span className="font-extrabold">CMS</span>
      </Link>
      {auth ? (
         <UserModalComponent user={tempUser}/>
      ) : (
        <Link
          href="/sign-in"
          className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          Sign In
        </Link>
      )}
    </div>
  );
}

const UserModalComponent = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex bg-black text-white items-center gap-2 transition-colors delay-100">
           <span>{user.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href={`/profile/${user.username}`}>
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
