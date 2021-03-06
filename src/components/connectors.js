import { Connectors } from 'web3-react'

const { InjectedConnector, NetworkOnlyConnector } = Connectors

//Supported network is Ropsten
const MetaMask = new InjectedConnector({ supportedNetworks: [3] })

const Infura = new NetworkOnlyConnector({
    providerURL: 'https://mainnet.infura.io/v3/...'
  })
   
const connectors = { MetaMask, Infura }

export default {connectors}

