import Link from 'next/link';
import './styling/categorias.scss';

const categories = [
	{ name: 'Barandas', path: '/collections/barandas', icon: '🏗️' },
	{ name: 'Escaleras', path: '/collections/escaleras', icon: '🪜' },
	{ name: 'Industriales', path: '/collections/industriales', icon: '🏭' },
	{ name: 'Portones', path: '/collections/portones', icon: '🚪' },
	{ name: 'Productos Decorativos', path: '/collections/allProducts', icon: '🎨' },
	{ name: 'Trelis', path: '/collections/trelis', icon: '🌿' },
	{ name: 'Verjas', path: '/collections/verjas', icon: '🏰' }
];

export default function Categorias() {
	return (
		<div className="categories-container">
			<h1>Categorías</h1>
			<div className="categories-grid">
				{categories.map((category) => (
					<Link
						key={category.name}
						href={category.path}
						className="category-card"
					>
						<span className="category-icon">{category.icon}</span>
						<span className="category-name">{category.name}</span>
					</Link>
				))}
			</div>
		</div>
	);
}

