import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser  } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (        
       <div className="navBar">
         <div className="logo">
             <Image 
                src= "/image/Logo.png"
                alt="Logo"
                width={65.4}
                height={22.87}
             />
              </div>
              <div className="searchBar">
              <span className="searchIcon">
               <FontAwesomeIcon icon={faSearch} />
               </span>
             <input type="text" placeholder="Search..." />
            </div>
              <div className="navBtn">
                <ul className="navList">
                    <Link href={"/"}>
                       <li>Home</li>
                    </Link>
                    <Link href={"/about"}>
                       <li>About</li>
                    </Link>
                    <Link href={"/contact-us"}>
                    <li>Contact Us</li>
                    </Link>
                    <Link href={"/blog"}>
                       <li>Blog</li>
                    </Link>
                </ul>
           </div>
           <div className="iconContainer">
                <FontAwesomeIcon icon={faHeart} className="navIcon" />
                <FontAwesomeIcon icon={faShoppingCart} className="navIcon" />
                <FontAwesomeIcon icon={faUser} className="navIcon" />
            </div>
        </div>
    )
}