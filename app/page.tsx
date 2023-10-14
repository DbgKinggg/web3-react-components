import ConnectWalletBtn from "@/components/connect-wallet-btn"
import ClientOnly from '@/components/shared/client-only'
import SwapToken from "@/components/swap-tokens/swap-tokens"
import ThemeToggle from "@/components/shared/theme-toggle"

export default function Home() {
  return (
    <>
      <header className="py-3 px-3 flex">
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center gap-y-20 px-2">
        <ClientOnly>
          <ConnectWalletBtn />
        </ClientOnly>
        <SwapToken />
      </main>
    </>
  )
}
