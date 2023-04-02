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
        address:string,
        decimals:number
    }
}

type ChainList = {
    [key in ValidChains]: {
        info:ChainInfo,
        tokens:ChainTokens
    }
}
