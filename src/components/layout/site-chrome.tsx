"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"
import { Footer } from "./footer"
import { LazyChat } from "@/components/chat/lazy-chat"

/**
 * Renders the main-site chrome (Header, Footer, chat widget, grain overlay)
 * for every route EXCEPT /roa, which ships its own self-contained ROA chrome
 * via src/app/roa/layout.tsx.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isRoa = pathname?.startsWith("/roa")

  if (isRoa) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      {/* AI Chat Widget - lazy loaded client-side */}
      <LazyChat />
      {/* Premium grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />
    </>
  )
}
