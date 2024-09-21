
import { ReactNode } from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { gnosisChiado } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const projectId = '319551e895d670dc91f3fe4ba32ac960'

const metadata = {
  name: 'Project G',
  description: 'Supply Chain on the Blockchain',
  url: 'https://projectg.pranavms.dev',
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

const chains = [gnosisChiado] as const

const config = defaultWagmiConfig({
	chains,
	projectId,
	metadata
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export function Web3ModalProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}