import '../../pages/styling/barandas.scss';
import Link from 'next/link';

export default function Barandas() {
	const barandaTypes = [
		{ href: '/collections/barandas/barandas_CNC_Cut', label: 'Barandas CNC Cut' },
		{ href: '/collections/barandas/barandas_Vidrio', label: 'Barandas de Vidrio' },
		{ href: '/collections/barandas/barandas_Picket', label: 'Barandas de Picket' },
		{ href: '/collections/barandas/barandas_Horizontales', label: 'Barandas Horizontales' },
		{ href: '/collections/barandas/barandas_Cable', label: 'Barandas de Cable' }
	];

	return (
		<div className="broaderDiv">
			<div className="header">
				<h1>Tipos de Barandas</h1>
			</div>
			<div className="button-container">
				{barandaTypes.map((baranda, index) => (
					<Link
						href={baranda.href}
						key={index}
						className="baranda-button"
					>
						{baranda.label}
					</Link>
				))}
			</div>
		</div>
	);
}
