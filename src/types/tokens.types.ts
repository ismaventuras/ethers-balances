type ValidTokens = 
    "USDC" | 
    "USDT" | 
    "Wormhole_USDC" | 
    "Wormhole_USDT" |
    "Multichain_USDC"

type Token = {
    [key in ChainNames]?:Address
}

type Tokens = {
    [key in ValidTokens]: Token
}