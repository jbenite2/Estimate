import './header.css';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    const navigateTo = (path) => {
        router.push(path);
    };

    return (
        <div className="header">
            <a>
                <img src="/BM-Logo.png" className="logo" alt="Logo" />
            </a>
            <div className="button-container">
                <button 
                    className="button" 
                    onClick={() => navigateTo('/categorias')}
                >
                    <img className="book-icon" src="/book-icon.png" alt="Categories Icon" />
                    <span>Categories</span>
                </button>
                <button 
                    className="button" 
                    onClick={() => navigateTo('/quote')}
                >
                    <img className="add-icon" src="/add_icon.png" alt="Template Icon" />
                    <span>Template</span>
                </button>
                <button 
                    className="button" 
                    onClick={() => navigateTo('/all')}
                >
                    <img className="user-icon" src="/user-icon.png" alt="All Patterns Icon" />
                    <span>All Patterns</span>
                </button>
            </div>
        </div>
    );
}

