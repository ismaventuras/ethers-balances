// File to save Tokens deployed on multiple chains


export const USDC:Token = {
    info:{
        name:"USD Coin",
        symbol:"USDC",
        decimals:6
    },
    chains:{
        "ethereum":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "polygon": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        "avalanche": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E"    
    }
}
export const USDT:Token = {
    info:{
        name:"Tether USD",
        symbol:"USDT",
        decimals:6
    },
    chains:{
        "ethereum":"0xdac17f958d2ee523a2206206994597c13d831ec7",
        "polygon": "0x170a18b9190669cda08965562745a323c907e5ec",
        "avalanche": "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7"    
    }
}
export const Wormhole_USDC:Token = {
    info:{
        name:"USD Coin",
        symbol:"USDC",
        decimals:6
    },
    chains:{
        "moonbeam":"0x931715FEE2d06333043d11F658C8CE934aC61D0c",
        "polygon": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    }
}

export const Wormhole_USDT:Token ={    
    info:{
        name:"Tether USD",
        symbol:"USDT",
        decimals:6
    },
    chains:{
        "polygon": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    }
}

export const Multichain_USDC:Token ={   
    info:{
        name:"USD Coin",
        symbol:"USDC",
        decimals:6
    },
    chains:{
        "moonbeam": "0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b",
        "moonriver": "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D",
    } 
}
export const Multichain_USDT:Token ={   
    info:{
        name:"USD Coin",
        symbol:"USDC",
        decimals:6
    },
    chains:{
        "moonbeam":"0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73",
        "moonriver": "0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
    } 
}

export const Multichain_DAI:Token = {   
    info:{
        name:"Dai Stablecoin",
        symbol:"DAI",
        decimals:18
    },
    chains:{
        "moonriver": "0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844",
        "moonbeam":"0x765277EebeCA2e31912C9946eAe1021199B39C61"
    } 
}

export const xcKSM:Token = {
    info:{
        name:"xcKSM ",
        symbol:"xcKSM",
        decimals:12
    },
    chains:{
        "moonriver": "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",
    } 
}

export const tokens: {[key in ValidTokens]:Token} = {
    USDC,
    USDT,
    Multichain_DAI,
    Multichain_USDC,
    Multichain_USDT,
    Wormhole_USDC,
    Wormhole_USDT,
    xcKSM,
}

export default tokens