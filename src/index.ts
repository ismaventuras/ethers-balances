export * from "./lib"


import {getBalances} from "./lib/balances"


async function main() {
    const balances = await getBalances("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")
    console.log(balances)
}

main().catch(console.error)