type ValidTokens = 
    "USDC" | 
    "USDT" | 
    "Wormhole_USDC" | 
    "Wormhole_USDT" |
    "Multichain_USDC"

type TypeWormhole_USDC = {
    info:{
        name:string
        symbol:string
        decimals:6
    }
    chains:{
        "moonbeam":Address,
        "polygon": Address,
    }
}
type TypeMultichain_USDC = {
    info:{
        name:string
        symbol:string
        decimals:6
    }
    chains:{
        "moonbeam":Address,
    }
}

type TypeWormhole_USDT = {
    info:{
        name:string
        symbol:string
        decimals:6
    }
    chains:{
        "polygon": Address,
    }
}
type TypeUSDT = {
    info:{
        name:string
        symbol:string
        decimals:6
    }
    chains:{
        "ethereum":Address,
        "polygon": Address,
        "avalanche": Address    
    }
}

type TypeUSDC = {
    info:{
        name:string
        symbol:string
        decimals:6
    }
    chains:{
        "ethereum":Address,
        "polygon": Address,
        "avalanche": Address    
    }
}