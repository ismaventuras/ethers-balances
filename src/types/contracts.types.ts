import type { Contract } from "ethers"

export type Contracts = {
    [key in ValidChains]: Contract
}
export type AllContracts = {
    [key in ValidTokens]: Contracts
}
