import { JsonRpcProvider } from "ethers"
import {chains} from "./config"
import type { Providers } from "./types/providers.types"


function getProvider(rpcUrl: string): JsonRpcProvider {
    return new JsonRpcProvider(rpcUrl)
}

export function getAllProviders(): Providers{
    const providers:Providers = Object.assign({}, ...Object.keys(chains).map((key ) => {
        const chain = chains[key as ValidChains]
        return {[key as ValidChains]:getProvider(chain.rpc)}
    }))
    
    return providers
}