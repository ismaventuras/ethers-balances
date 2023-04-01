import { JsonRpcProvider } from "ethers"
import type { Providers } from "../types/providers.types"
import chains from "../config/chains"


export function getProvider(rpc: string): JsonRpcProvider {
    return new JsonRpcProvider(rpc)
}

export function getAllProviders(): Providers {
    const providers: Providers = Object.assign(
        {},
        ...Object.entries(chains).map(([chainName, chainData]) => {
            return { [chainName]: getProvider(chainData.info.rpc) } as { [key in ValidChains]: JsonRpcProvider }
        })
    )
    return providers
}