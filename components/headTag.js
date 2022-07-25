import Head from 'next/head';

export default function HeadTag() {
	return (
		<>
			<Head>
				<title>
					Fruity-ful | A collection of fruits, their characteristic, benefits
					and scientific info
				</title>
				<meta
					name='description'
					content='A collection of fruits, their characteristic, benefits and scientific info'
				/>
			</Head>
		</>
	);
}
