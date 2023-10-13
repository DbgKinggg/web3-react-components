import ConnectWalletBtn from "@/components/connect-wallet-btn"
import ClientOnly from '@/components/shared/client-only'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ClientOnly>
        <ConnectWalletBtn />
      </ClientOnly>
    </main>
  )
}
