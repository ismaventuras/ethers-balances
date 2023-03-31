import { toReadableAmount, toReadableEtherAmount } from "../helpers/conversion";
import { getAllProviders } from "../providers";
import {chains} from "../config";
import type { Contract } from "ethers";
import { getUSDCContracts, getUSDTContracts } from "./contracts";

async function getEtherBalances(address: Address) {
    const providers = getAllProviders()

    //generate a list of async calls
    const promises = Object.entries(providers).map(([key, provider]) => {
        return { key, promise: provider.getBalance(address) }
    })
    // wait them to complete
    const results = await Promise.all(promises.map(p => p.promise))

    // format the response
    const balances = Object.assign(
        {},
        ...promises.map((promise, index) => {
            const chain = promise.key
            const amount = toReadableEtherAmount(results[index])
            const symbol = chains[chain as keyof Chains].symbol
            return {
                [chain]: `${amount} ${symbol}`
            }
        })
    )

    return balances
}

async function getERC20Balances(contracts: { [key: string]: Contract }, address: Address, decimals: number): Promise<{ [key in ValidChains]: string }> {
    //generate a list of async calls
    const promises = Object.entries(contracts).filter(([key]) => key in chains).map(([key, contract]) => {
        return { key, promise: contract.balanceOf(address) }
    })

    // wait them to complete
    const results = await Promise.all(promises.map(p => p.promise))

    const balances = Object.assign(
        {},
        ...promises.map((promise, index) => {
            const chain = promise.key
            const amount = toReadableAmount(results[index], decimals)
            return {
                [chain]: amount
            }
        })
    )
    return balances;
}

async function getUSDCBalances(address:Address){    
    return await getERC20Balances(getUSDCContracts(),address,6)
}

async function getUSDTBalances(address:Address){    
    return await getERC20Balances(getUSDTContracts(),address,6)
}

async function getStableBalances(address: Address){
    const USDC = await getUSDCBalances(address)
    const USDT = await getUSDTBalances(address)
    return {
        USDC,
        USDT
    }
}

export async function getBalances(address: Address){
    const calls = [
        getEtherBalances(address),
        getStableBalances(address)
    ]
    const [etherBalances, stableBalances] = await Promise.all(calls)

    return {
        etherBalances,
        stableBalances
    }
}