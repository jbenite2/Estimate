import '../categorias.scss';
import Header from '../../components/header';
import { useRouter } from 'next/router';

export default function Barandas() {
	const router = useRouter();
	return (
		<div>
			<Header />
			<div className="btnsDiv">
				<button type="button" className="btn btn--green" onClick={() => router.push('/collections/barandas/barandas_CNC_Cut')}>barandas CNC cut</button>
				<button type="button" className="btn btn--green" onClick={() => router.push('/collections/barandas/barandas_Vidrio')}>barandas de vidrio</button>
				<button type="button" className="btn btn--green" onClick={() => router.push('/collections/barandas/barandas_Picket')}>barandas de picket</button>
				<button type="button" className="btn btn--green" onClick={() => router.push('/collections/barandas/barandas_Horizontales')}>barandas horizontales</button>
				<button type="button" className="btn btn--green" onClick={() => router.push('/collections/barandas/barandas_Cable')}>barandas de cable</button>
			</div>
		</div>
	);
}
