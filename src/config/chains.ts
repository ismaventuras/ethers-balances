import { Multichain_DAI, Multichain_USDC, Multichain_USDT, USDC, USDT, Wormhole_USDC, Wormhole_USDT, xcKSM } from "./tokens"

type ChainConstants = {
    [key in ValidChains]: string
}

export const PUBLIC_RPC:ChainConstants = {
    "ethereum":"https://eth-mainnet.public.blastapi.io",
    "moonbeam":"https://moonbeam.public.blastapi.io",
    "moonriver":"https://moonriver.public.blastapi.io",
    "polygon":"https://polygon-mainnet.public.blastapi.io",
    //"binance":"https://bsc-mainnet.public.blastapi.io",
    "avalanche":"https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc",
    //"arbitrum":"https://arbitrum-one.public.blastapi.io",
    //"optimism":"https://optimism-mainnet.public.blastapi.io"
}



const BLOCK_EXPLORERS:ChainConstants = {
    "ethereum": "https://etherscan.io",
    "moonbeam": "https://moonscan.io",
    "moonriver": "https://moonriver.moonscan.io",
    "polygon": "https://polygonscan.com",
    "avalanche": "https://snowtrace.io/",
}

const ETHER_SYMBOLS:ChainConstants = {
    "ethereum":"ETH",
    "moonbeam":"GLMR",
    "moonriver":"MOVR",
    "polygon":"MATIC",
    "avalanche":"AVAX"
}

const CHAIN_IDS:ChainConstants = {
    "ethereum": "1",
    "moonbeam": "1284",
    "moonriver": "1285",
    "polygon": "137",
    "avalanche":"43114"
}

const PUBLIC_RPC_TESTNET = {
    "sepolia":"https://eth-sepolia.public.blastapi.io",
    "moonbaseAlpha":"https://moonbase-alpha.public.blastapi.io",
    "polygonMumbai":"https://polygon-testnet.public.blastapi.io",
    "binanceTestnet":"https://bsc-testnet.public.blastapi.io",
    "avalancheFuji":"https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
    "arbitrumGoerli":"https://arbitrum-goerli.public.blastapi.io",
    "optimismGoerli":"https://optimism-goerli.public.blastapi.io",
}


export const chains:ChainList = {
    ethereum:{
        info:{
            "name":"Ethereum",
            "symbol":ETHER_SYMBOLS.ethereum,
            "blockExplorer":BLOCK_EXPLORERS.ethereum,
            "rpc":PUBLIC_RPC.ethereum,
            "chainId": CHAIN_IDS.ethereum
        },
        tokens:{
            "USDC": {
                "address":USDC.chains.ethereum!,
                "decimals": USDC.info.decimals
            },
            "USDT": {
                "address":USDT.chains.ethereum!,
                "decimals": USDT.info.decimals
            }
        }
    },
    moonbeam:{
        info:{
            "name":"Moonbeam",
            "symbol":ETHER_SYMBOLS.moonbeam,
            "blockExplorer":BLOCK_EXPLORERS.moonbeam,
            "rpc":PUBLIC_RPC.moonbeam,
            "chainId": CHAIN_IDS.moonbeam
        },
        tokens:{
            "Wormhole_USDC": {
                "address":Wormhole_USDC.chains.moonbeam!,
                "decimals": Wormhole_USDC.info.decimals
            },
            "Multichain_USDC": {
                "address":Multichain_USDC.chains.moonbeam!,
                "decimals": Multichain_USDC.info.decimals
            },
            "Multichain_USDT":{
                "address":Multichain_USDT.chains.moonbeam!,
                "decimals": Multichain_USDT.info.decimals
            },
            Multichain_DAI:{
                address:Multichain_DAI.chains.moonbeam!,
                decimals:Multichain_DAI.info.decimals
            },
        }
    },
    moonriver:{
        info:{
            "name":"Moonriver",
            "symbol":ETHER_SYMBOLS.moonriver,
            "blockExplorer":BLOCK_EXPLORERS.moonriver,
            "rpc":PUBLIC_RPC.moonriver,
            "chainId": CHAIN_IDS.moonriver
        },
        tokens:{
            Multichain_USDC:{
                address:Multichain_USDC.chains.moonriver!,
                decimals:Multichain_USDC.info.decimals
            },
            Multichain_USDT:{
                address:Multichain_USDT.chains.moonriver!,
                decimals:Multichain_USDT.info.decimals
            },
            Multichain_DAI:{
                address:Multichain_DAI.chains.moonriver!,
                decimals:Multichain_DAI.info.decimals
            },
            xcKSM:{
                address:xcKSM.chains.moonriver!,
                decimals:xcKSM.info.decimals
            }
        }
    },
    polygon:{
        info:{
            "name":"Polygon",
            "symbol":ETHER_SYMBOLS.polygon,
            "blockExplorer":BLOCK_EXPLORERS.polygon,
            "rpc":PUBLIC_RPC.polygon,
            "chainId": CHAIN_IDS.polygon
        },
        tokens:{
            "USDC": {
                "address":USDC.chains.polygon!,
                "decimals": USDC.info.decimals
            },
            "USDT": {
                "address":USDT.chains.polygon!,
                "decimals": USDT.info.decimals
            },
            "Wormhole_USDC": {
                "address":Wormhole_USDC.chains.polygon!,
                "decimals": Wormhole_USDC.info.decimals
            },
            "Wormhole_USDT": {
                "address":Wormhole_USDT.chains.polygon!,
                "decimals": Wormhole_USDT.info.decimals
            }
        }
    },
    avalanche:{
        info:{
            "name":"Avalanche C-Chain",
            "symbol":ETHER_SYMBOLS.avalanche,
            "blockExplorer":BLOCK_EXPLORERS.avalanche,
            "rpc":PUBLIC_RPC.avalanche,
            "chainId": CHAIN_IDS.avalanche
        },
        tokens:{
            "USDC": {
                "address":USDC.chains.avalanche!,
                "decimals": USDC.info.decimals
            },
            "USDT": {
                "address":USDT.chains.avalanche!,
                "decimals": USDT.info.decimals
            },
        }
    },
}


export default chains



