# Ethers-balances

This is a simple tool that allows you to retrieve the balances of ether and stablecoin for a given address on multiple chains. The tool is implemented as a JavaScript function called getBalances, which takes an address as input and returns an object containing the balances on each supported chain.

With this tool, you can easily check your account balances across various chains without having to manually check each chain's explorer. 

Supported chains:

- ethereum
- moonbeam
- polygon

Supported Tokens:

- USDC
- USDT
- Wormhole_USDC
- Wormhole_USDT
- Multichain_USDC



To use the tool, simply pass an address to the getBalances function and it will return the balances for the specified address on each supported chain.

## Install

```
npm i ethers-balances
```

After installation, you can import the getBalances function in your code as follows:

``` javascript
const { getBalances } = require('ether-balances');
```


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

## Contributing

If you find a bug or have a feature request, please create an issue on the GitHub repository. Pull requests are also welcome!