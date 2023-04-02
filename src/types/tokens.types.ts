type ValidTokens = 
    "USDC" | 
    "USDT" | 
    "Wormhole_USDC" | 
    "Wormhole_USDT" |
    "Multichain_USDC" | 
    "Multichain_USDT" |
    "Multichain_DAI" |
    "xcKSM"

type Token = {
    info:{
        name:string
        symbol:string
        decimals:number
    }
    chains:{
        [key in ValidChains]?: string
    }
}

// type TypeWormhole_USDC = {
//     info:{
//         name:string
//         symbol:string
//         decimals:6
//     }
//     chains:{
//         "moonbeam":string,
//         "polygon": string,
//     }
// }
// type TypeMultichain_USDC = {
//     info:{
//         name:string
//         symbol:string
//         decimals:6
//     }
//     chains:{
//         "moonbeam":string,
//         "moonriver":string
//     }
// }
// type TypeMultichain_USDT = {
//     info:{
//         name:string
//         symbol:string
//         decimals:6
//     }
//     chains:{
//         "moonriver":string,
//     }
// }
// type TypeMultichain_DAI = {
//     info:{
//         name:string
//         symbol:string
//         decimals:18
//     }
//     chains:{
//         "moonriver":string,
//     }
// }

// type TypeWormhole_USDT = {
//     info:{
//         name:string
//         symbol:string
//         decimals:6
//     }
//     chains:{
//         "polygon": string,
//     }
// }
// type TypeUSDT = {
//     info:{
//         name:string
//         symbol:string
//         decimals:6
//     }
//     chains:{
//         "ethereum":string,
//         "polygon": string,
//         "avalanche": string    
//     }
// }

// type TypeUSDC = {
//     info:{
//         name:string
//         symbol:string
//         decimals:6
//     }
//     chains:{
//         "ethereum":string,
//         "polygon": string,
//         "avalanche": string    
//     }
// }