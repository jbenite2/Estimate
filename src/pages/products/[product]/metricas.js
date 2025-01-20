import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './extraInfo.css';

export default function Metricas() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { product } = router.query;
  const [lf, setLf] = useState(0);

  useEffect(() => {
    if (product) {
      const incrementedProduct = parseInt(product, 10);
      fetchProductData(incrementedProduct.toString());
    }
  }, [product]);

  const fetchProductData = async (product) => {
    try {
      const response = await fetch(`/api/getAllProjectInfo?index=${product}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const info = await response.json();
      setData(info);
    } catch (error) {
      console.error('Error fetching templates:', error);
    }
  };

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div className='wholePage'>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='ProductDetailsContainer'>
            <h1>Métricas</h1>
            <div className='KeyInfoContainer'>
              <input
                type='number'
                placeholder='Pies Lineares'
                onChange={(e) => setLf(parseFloat(e.target.value) || 0)}
              />
              <h3 style={{ background: 'yellow' }}>Fabricación</h3>
              <p>
                Corte: {data.corte !== undefined && data.corte !== null ? `${data.corte.toFixed(2).toLocaleString()} horas` : 'N/A'}
              </p>
              <p>
                Ensamblaje: {data.ensamblaje !== undefined && data.ensamblaje !== null ? `${data.ensamblaje.toFixed(2).toLocaleString()} horas` : 'N/A'}
              </p>
              <p>
                Soldadura: {data.soldadura !== undefined && data.soldadura !== null ? `${data.soldadura.toFixed(2).toLocaleString()} horas` : 'N/A'}
              </p>
              <p>
                Pulido: {data.pulido !== undefined && data.pulido !== null ? `${data.pulido.toFixed(2).toLocaleString()} horas` : 'N/A'}
              </p>
              <p>+  ----------------------------------------</p>
              <p>
                Total: {data.corte !== undefined && data.ensamblaje !== undefined && data.soldadura !== undefined && data.pulido !== undefined
                  ? (lf * data.corte + lf * data.ensamblaje + lf * data.soldadura + lf * data.pulido).toFixed(2).toLocaleString()
                  : 'N/A'} horas
              </p>
              <p>{data.corte !== undefined && data.ensamblaje !== undefined && data.soldadura !== undefined && data.pulido !== undefined
                ? ((data.corte + data.ensamblaje + data.soldadura + data.pulido)).toFixed(2).toLocaleString()
                : 'N/A'} horas * $19 = {data.corte !== undefined && data.ensamblaje !== undefined && data.soldadura !== undefined && data.pulido !== undefined
                  ? `$${(((data.corte + data.ensamblaje + data.soldadura + data.pulido)) * 19).toFixed(2).toLocaleString()} (costo de fabricación)`
                  : 'N/A'}
              </p>

              <p>{data.corte !== undefined && data.ensamblaje !== undefined && data.soldadura !== undefined && data.pulido !== undefined
                ? `$${(((data.corte + data.ensamblaje + data.soldadura + data.pulido)) * 19).toFixed(2).toLocaleString()}`
                : 'N/A'}/ {lf} pies lineales = {data.corte !== undefined && data.ensamblaje !== undefined && data.soldadura !== undefined && data.pulido !== undefined
                  ? `$${(((data.corte + data.ensamblaje + data.soldadura + data.pulido)) * 19 / lf).toFixed(2).toLocaleString()}`
                  : 'N/A'} (costo de fabricación por pie lineal)
              </p>


              <h3 style={{ background: 'yellow' }}>Instalación</h3>
              <p>
                Instalación: {data.instalacion !== undefined && data.instalacion !== null ? `${data.instalacion.toFixed(2).toLocaleString()} horas` : 'N/A'}
              </p>
              <p>{data.instalacion !== undefined && data.instalacion !== null ? (data.instalacion).toFixed(2).toLocaleString() : 'N/A'} horas * $27 = {data.instalacion !== undefined && data.instalacion !== null ? `$${(data.instalacion * 27).toFixed(2).toLocaleString()} (costo de instalación)` : 'N/A'}
              </p>
              <p>{data.instalacion !== undefined && data.instalacion !== null ? `$${(data.instalacion * 27).toFixed(2).toLocaleString()}` : 'N/A'}/ {lf} pies lineales = {data.instalacion !== undefined && data.instalacion !== null ? `$${(data.instalacion * 27 / lf).toFixed(2).toLocaleString()} (costo de instalación por pie lineal)` : 'N/A'}
              </p>

              <h3 style={{ marginTop: '70px', background: 'yellow' }}>Total</h3>

              <p>{data.corte !== undefined && data.ensamblaje !== undefined && data.soldadura !== undefined && data.pulido !== undefined
                ? `$${(((data.corte + data.ensamblaje + data.soldadura + data.pulido)) * 19 + data.instalacion * 27).toFixed(2).toLocaleString()}`
                : 'N/A'} (costo total)
              </p>
              <p>{data.corte !== undefined && data.ensamblaje !== undefined && data.soldadura !== undefined && data.pulido !== undefined
                ? `$${(((data.corte + data.ensamblaje + data.soldadura + data.pulido)) * 19 / lf + data.instalacion * 27 / lf).toFixed(2).toLocaleString()}`
                : 'N/A'} (costo total por pie lineal)
              </p>


              <Link href={`/products/${product}`} className='backButton'>
                Back
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

