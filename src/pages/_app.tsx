import { AppProps } from "next/app"

import "@styles/main.css"

import { Layout } from "@components/common"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
