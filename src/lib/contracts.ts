// File to save function to create contracts

import { Contract, JsonRpcProvider } from "ethers";
import { ERC20_ABI } from "../helpers/constants";
import { getAllProviders } from "../providers";
import {tokens} from "../config"
import type { AllContracts, Contracts } from "../types/contracts.types";

function getERC20Contract(address: string, provider: JsonRpcProvider) {
    return new Contract(address, ERC20_ABI, provider)
}

export function getERC20Contracts(token: Token): Contracts {
    const providers = getAllProviders()
    var contracts: Contracts = Object.assign(
        {},
        ...Object.entries(token)
            .filter(([key]) => (key as ValidChains) in token)
            .map(([network, address]) => {
                const provider = providers[network as ValidChains]
                return { [network]: getERC20Contract(address, provider) } as { [key in ValidChains]: Contract }
            }))

    return contracts
}

export function getUSDCContracts() {
    return getERC20Contracts(tokens.USDC)
}

export function getUSDTContracts() {
    return getERC20Contracts(tokens.USDT)
}

export function getTokenContracts() {

    var contracts: AllContracts = Object.assign(
        {},
        ...Object.entries(tokens).map(([key, token]) => {
            const tokenName = key as ValidTokens
            const contracts = getERC20Contracts(token)
            return { [tokenName]: contracts }
        })
    )

    return contracts
}


