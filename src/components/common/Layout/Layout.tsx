import React from 'react'

import { Header, Footer } from '@components/common'

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
