# Ethers-balances

Pass an address to `getBalances` function and get ether and stablecoin balances on multiple chains.

## Install

## Usage

```javascript
const {getBalances} = require("ethers-balances")


async function main(){
    const result = await getBalances("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")
    console.log(result)

}

main()
.catch((e)=>{
    console.error(e)
    process.exit(1)
})
```

output

```javascript
{
  etherBalances: {
    ethereum: '0.0 ETH',
    moonbeam: '31.5793 GLMR',
    polygon: '44287.5803 MATIC'
  },
  stableBalances: {
    USDC: { ethereum: '0.0', polygon: '16179.4030' },
    USDT: { ethereum: '51390.1224', polygon: '0.0' }
  }
}
```

## Chains

- ethereum
- moonbeam
- polygon

## Tokens

- USDC
- USDT
- Wormhole_USDC
- Wormhole_USDT
- Multichain_USDC