'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import './header.css';

const navigationItems = [
     {
          href: '/categorias',
          icon: '/book-icon.png',
          label: 'Categories',
          alt: 'Categories Icon'
     },
     {
          href: '/quote',
          icon: '/add_icon.png',
          label: 'Add Product',
          alt: 'Template Icon'
     },
     {
          href: '/patterns',
          icon: '/user-icon.png',
          label: 'All Patterns',
          alt: 'All Patterns Icon'
     }
];

export default function Header() {
     const pathname = usePathname();

     return (
          <header className="header" role="banner">
               <div className="header-content">
                    <div className="header-left">
                         <Link href={'/categorias'} aria-label="Home">
                              <Image
                                   src="/BM-Logo.png"
                                   className="logo"
                                   alt="Logo"
                                   width={250}
                                   height={107}
                                   priority
                              />
                         </Link>
                    </div>

                    <nav className="header-right" role="navigation">
                         {navigationItems.map(({ href, icon, label, alt }) => (
                              <Link
                                   key={href}
                                   className={`nav-button ${pathname === href ? 'active' : ''}`}
                                   href={href}
                              >
                                   <Image
                                        className={`nav-icon ${label.toLowerCase()}-icon`}
                                        src={icon}
                                        alt={alt}
                                        width={20}
                                        height={20}
                                   />
                                   <span>{label}</span>
                              </Link>
                         ))}
                    </nav>
               </div>
          </header>
     );
}

