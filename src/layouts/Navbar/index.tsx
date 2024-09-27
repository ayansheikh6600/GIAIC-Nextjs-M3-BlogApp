"use client"
// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion';

import Link from 'next/link';
import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { DropdownMenuContent, DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"


const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blogs', href: '/blogs' },
];


const Navbar = () => {
  const pathname = usePathname()
  const [selectedCategory, setSelectedCategory] = useState<string>('/');




  console.log(pathname);


  return (
    <div className='flex justify-between items-center p-2 bg-gray-100 shadow-lg '>
      <div>
        LOGO
      </div>
      <nav className="relative flex justify-center space-x-8 p-2 bg-black rounded-3xl">
        {navItems.map((item) => {

          return (
            <Link key={item.name} href={item.href} onClick={() => setSelectedCategory(item?.href)} className='p-2 relative'>


              <span
                className={`relative z-10 px-4 py-6 font-medium hover:text-indigo-500 
                ${selectedCategory === item?.href
                    ? 'text-white hover:text-white'
                    : 'text-gray-400 hover:text-indigo-500'
                  }
                `}
              >
                {item.name}


              </span>
              {selectedCategory === item?.href && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-[#1e064b] rounded-full"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}



            </Link>
          );
        })}
      </nav>

      <div className=' w-10 rounded-lg'>

        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage className='rounded-xl' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-gray-100 p-2 rounded-md mr-3">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              
            </DropdownMenuGroup>
              
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>




      </div>
    </div>

  );
};

export default Navbar;
