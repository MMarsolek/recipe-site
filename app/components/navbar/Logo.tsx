import { Inter } from 'next/font/google'
import Image from 'next/image';
import logo_purple from "../../../public/logo_purple.svg"
const inter = Inter({ subsets: ['latin'] })


const Logo = () => {
    return (      
        <>
            <link rel="icon" href="/logo_purple.svg" sizes="any" /> 
            <Image 
            priority
            src={logo_purple}
            alt= "Purple logo showing forks and spoons"
            className='navbar_logo'
            />
        </>
    );
}
export default Logo;
