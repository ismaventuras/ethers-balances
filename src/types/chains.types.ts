type ValidChains = 
    "ethereum" | 
    "moonbeam" | 
    "moonriver"|
    "polygon"  |
    "avalanche"
    
type ChainInfo = {
    name:string
    symbol:string
    blockExplorer:string
    rpc:string
    chainId:string
}

type ChainTokens = {
    [key in ValidTokens]?:{
        address:Address,
        decimals:number
    }
}
type ChainData = {
    info:ChainInfo,
    tokens:ChainTokens
}

type ChainList = {
    [key in ValidChains]: ChainData
}
