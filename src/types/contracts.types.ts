import type { Contract } from "ethers"


export type ERC20Contracts = {
    [key in ValidTokens]?: Contract
}

export type ContractsByChain = {
    [key in ValidChains]: ERC20Contracts
}
