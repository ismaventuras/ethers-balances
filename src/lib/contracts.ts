// File to save function to create contracts

import { Contract, JsonRpcProvider } from "ethers";
import { ERC20_ABI } from "../helpers/abi";
import { getAllProviders } from "./providers";
import type {  ContractsByChain } from "../types/contracts.types";
import chains from "../config/chains";
import { Providers } from "../types/providers.types";

function getERC20Contract(address: string, provider: JsonRpcProvider) {
    return new Contract(address, ERC20_ABI, provider)
}

export function getContracts() : ContractsByChain{
    const providers = getAllProviders()
    const contracts = Object.assign({}, ...Object.entries(chains).map( ([chainName, chain]) => {
        const contracts = Object.assign({},...Object.entries(chain.tokens).map( ([key, token]) => {
            return {[key]:getERC20Contract(token.address,providers[chainName as keyof Providers])} as {[key in ValidTokens]:Contract}
        } ))
        return {[chainName]:contracts}
    }))

    return contracts
}

