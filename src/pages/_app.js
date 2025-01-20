import Header from '../components/header/header'


export default function MyApp({ Component, pageProps }) {
  return (
	  <>
		<Header></Header>
		<Component {...pageProps} />
	  </>
  );
}

