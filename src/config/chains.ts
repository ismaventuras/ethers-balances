export const PUBLIC_RPC = {
    "ethereum":"https://eth-mainnet.public.blastapi.io",
    "moonbeam":"https://moonbeam.public.blastapi.io",
    "moonriver":"https://moonriver.public.blastapi.io",
    "polygon":"https://polygon-mainnet.public.blastapi.io",
    "binance":"https://bsc-mainnet.public.blastapi.io",
    "avalanche":"https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc",
    "arbitrum":"https://arbitrum-one.public.blastapi.io",
    "optimism":"https://optimism-mainnet.public.blastapi.io"
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

const chains = {
    ethereum:{
        "name":"Ethereum",
        "symbol":"ETH",
        "blockExplorer":"https://etherscan.io",
        "rpc":PUBLIC_RPC.ethereum,
        "chainId":"1"
    },
    moonbeam:{
        "symbol":"GLMR",
        "name":"Moonbeam",
        "blockExplorer":"https://moonscan.io",
        "rpc":PUBLIC_RPC.moonbeam,
        "chainId":"1284"
    },
    polygon:{
        "symbol":"MATIC",
        "name":"Polygon",
        "blockExplorer":"https://polygonscan.com",
        "rpc":PUBLIC_RPC.polygon,
        "chainId":"137"
    },
}
export default chains



