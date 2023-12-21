import Header from '../components/Header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './categorias.scss';
import { useRouter } from 'next/router';

export default function Categorias() {
  const [directories, setDirectories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchDirectories() {
      try {
        const response = await fetch('/api/categorias');
        if (response.ok) {
          const data = await response.json();
          setDirectories(data.directories);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchDirectories();

  }, []);

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

