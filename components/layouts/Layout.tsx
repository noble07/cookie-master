import Head from "next/head"
import { Navbar } from "@/components/ui"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Head>

      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{padding: '20px 50px'}}>
        {children}
      </main>
    </>
  )
}

export default Layout