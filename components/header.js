import './header.css';
import Link from 'next/link';

export default function Header(){
    return (
        <div className="header">
			<a><img src="/BM-Logo.png" className="logo" alt="Logo" /></a>
            <div className="button-container">
				<button className="button"> 
					<img className='book-icon' src='/book-icon.png'></img>
					<Link className='Link' href='/categorias'>Categories</Link>
				</button>
				<button className="button">
					<img className='add-icon' src='/add_icon.png'></img>
					<Link className='Link' href='/quote'>Template</Link>
				</button>
                <button className="button">
					<img className='user-icon' src='/user-icon.png'></img>
					<Link className='Link' href='/all'>All Patterns</Link>
				</button>
            </div>
		</div>
	)
}
