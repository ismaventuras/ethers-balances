// File to save Tokens deployed on multiple chains

export const USDC:Token = {
    "ethereum":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "polygon": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    "avalanche": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"
}
export const USDT:Token = {
    "ethereum":"0xdac17f958d2ee523a2206206994597c13d831ec7",
    "avalanche":"0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
    "polygon":"0x170a18b9190669cda08965562745a323c907e5ec"
}

export const Wormhole_USDC:Token ={
    "moonbeam":"0x931715FEE2d06333043d11F658C8CE934aC61D0c",
    "polygon":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
}

export const Wormhole_USDT:Token ={    
    "polygon":"0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
}
export const Multichain_USDC:Token ={    
    "moonbeam":"0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b",
}

export const tokens:Tokens = {
    USDT,
    USDC,
    Multichain_USDC,
    Wormhole_USDC,
    Wormhole_USDT
}

export default tokens
