import { SiteHeader } from "@/components/site-header"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <footer className="py-10 text-center text-sm text-gray-500">
        All rights reserved © Rifaldhi AW {new Date().getFullYear()}
      </footer>
    </>
  )
}
