import React from 'react'

import { Header, Footer } from '~/components/common'

import s from './Layout.module.css'

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className={s.root}>
      <Header />
      <main className="mt-6">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
