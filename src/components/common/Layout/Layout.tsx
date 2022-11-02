import React from "react"

import { Navbar } from "@components/common"

const Layout: React.FC<{
	children: React.ReactNode
}> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	)
}

export default Layout
