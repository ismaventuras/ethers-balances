type ValidChains = "ethereum" | "moonbeam" | "polygon";
type ChainNames = "ethereum" | "moonbeam" | "polygon" | "avalanche" | "arbitrum"

type ChainInfo = {
    name:string
    symbol:string
    blockExplorer:string
    rpc:string
    chainId:string
}

type Chains = {
    [key in ValidChains]:ChainInfo    
}
