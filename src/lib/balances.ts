import { toReadableAmount, toReadableEtherAmount } from "../helpers/conversion";
import { getAllProviders } from "./providers";
import chains from "../config/chains";
import { getContracts } from "./contracts";


async function getEtherBalances(address: Address): Promise<EtherBalances> {
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
            const symbol = chains[chain as keyof ChainList].info.symbol
            return {
                [chain]: `${amount} ${symbol}`
            }
        })
    )

    return balances
}

type ERC20Balances = {
    [key in ValidChains]: {
        [key in ValidTokens]?: string
    }
}

export async function getERC20Balances(address: Address): Promise<ERC20Balances> {
    const contracts = getContracts()

    const promises = Object.entries(contracts).map(async ([chainName, tokens]) => {
        const balances = await Promise.all(Object.entries(tokens).map(async ([tokenName, contract]) => {
            const balance = await contract.balanceOf(address)
            const decimals = chains[chainName as keyof ChainList].tokens[tokenName as keyof ChainTokens]?.decimals || 18
            return [tokenName, toReadableAmount(balance, decimals)]
        }))
        return [chainName, Object.fromEntries(balances)]
    })

    const result = Object.fromEntries(await Promise.all(promises))
    return result

}

type Balances = {
    etherBalances: EtherBalances
    erc20Balances: ERC20Balances
}
export async function getBalances(address: Address): Promise<Balances> {
    const calls = [
        getEtherBalances(address),
        getERC20Balances(address)
    ]
    const [etherBalances, erc20Balances] = await Promise.all(calls)

    return {
        etherBalances,
        erc20Balances
    } as Balances
}