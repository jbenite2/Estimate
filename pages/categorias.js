import Header from '../components/header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './categorias.scss';
import { useRouter } from 'next/router';

export default function Categorias() {
  const router = useRouter();


  return (
	<div>
		<Header />
		<div class="btnsDiv">
		  <button type="button" className="btn btn--green" onClick={() => router.push('/collections/barandas')}>Barandas</button>
		  <button type="button" className="btn btn--red">Escaleras</button>
		  <button type="button" className="btn btn--blue">Industriales</button>
		  <button type="button" className="btn btn--green">Portones</button>
		  <button type="button" className="btn btn--yellow" onClick={() => router.push('/collections/allProducts')}>Productos Decorativos</button>
		  <button type="button" className="btn btn--purple">Trelis</button>
		  <button type="button" className="btn btn--red">Verjas</button>
		</div>
	</div>
  );
}

