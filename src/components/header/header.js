'use client'

import './header.css';
import { useRouter } from "next/navigation";

export default function Header() {
	const router = useRouter();

    return (
        <div className="header">
            <a>
                <img src="/BM-Logo.png" className="logo" alt="Logo" />
            </a>
            <div className="button-container">
                <button 
                    className="button" 
                    onClick={() => router.push('/categorias')}
                >
                    <img className="book-icon" src="/book-icon.png" alt="Categories Icon" />
                    <span>Categories</span>
                </button>
                <button 
                    className="button" 
                    onClick={() => router.push('/quote')}
                >
                    <img className="add-icon" src="/add_icon.png" alt="Template Icon" />
                    <span>Templates</span>
                </button>
                <button 
                    className="button" 
                    onClick={() => router.push('/patterns')}
                >
                    <img className="user-icon" src="/user-icon.png" alt="All Patterns Icon" />
                    <span>All Patterns</span>
                </button>
            </div>
        </div>
    );
}

