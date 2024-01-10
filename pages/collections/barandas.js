import '../categorias.scss';
import Header from '../../components/header';

export default function barandas() {
	return (
		<div>
			<Header />
			<div className="btnsDiv">
				<button type="button" className="btn btn--green">barandas CNC cut</button>
				<button type="button" className="btn btn--green">barandas de vidrio</button>
				<button type="button" className="btn btn--green">barandas de picket</button>
				<button type="button" className="btn btn--green">barandas horizontales</button>
				<button type="button" className="btn btn--green">barandas de cable</button>
			</div>
		</div>
	);
}
