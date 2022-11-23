import { FC } from 'react'

import { Header, Footer } from '~/components/common'

import s from './Layout.module.css'

export const Layout: FC<{
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
