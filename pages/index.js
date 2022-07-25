import Image from 'next/image';
import Header from '../components/header';
import HeadTag from '../components/headTag';
import Nav from '../components/nav';

export default function Home() {
	return (
		<>
			<HeadTag />
			<Nav />
			<Header />
		</>
	);
}
