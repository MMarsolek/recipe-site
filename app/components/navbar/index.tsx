import { Inter } from 'next/font/google'
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";


const inter = Inter({ subsets: ['latin'] })


const Navbar = () => {
    return (      
        <div className="w-full h-20 sticky top-0">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
                <div className="flex gap-x-20 items-center">
                    <Logo />
                    <h1 >Recipe Collector</h1>
                </div>
                <ul className="hidden md:flex gap-x-6">
                    <li>
                    <Link href="/about">
                        <p>About the site</p>
                    </Link>
                    </li>
                    <li>
                    <Link href="/users">
                        <p>Login / Sign up</p>
                    </Link>
                    </li>
                </ul>
                <Button />
            </div>
          </div>
        </div>
     
    )
}
export default Navbar;
