"use client"
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'

type Web3ModalProviderType = {
    children: React.ReactNode
};

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

const Web3ModalProvider = ({ children }: Web3ModalProviderType) => {
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                {children}
            </WagmiConfig>
        </>
    )
}

export default Web3ModalProvider