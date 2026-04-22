import { Anvil, CircleUser } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const auth = false;
    return (
        <div className="w-full flex justify-between px-4 h-12">
            <Link className="flex gap-2" href="/">
                <Anvil /> <span className="font-extrabold">CMS</span>
            </Link>
            {auth ? 
                <div className="flex items-center gap-2">
                    <CircleUser size={24} />
                    <span className="text-sm">John Doe</span>
                </div>
            : 
                <Link href="/sign-in" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
                    Sign In
                </Link>
            }
        </div>
    )
}