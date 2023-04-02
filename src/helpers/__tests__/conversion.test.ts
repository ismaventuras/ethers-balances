import {fromReadableAmount, toReadableAmount, toReadableEtherAmount} from "../conversion"

describe('conversion', () => {
    it('fromReadableAmount', async () => {
        const ONE_ETHER = "1";
        const decimals = 18
        const bigInteger = fromReadableAmount(ONE_ETHER,decimals)
        expect(bigInteger).toBe(BigInt(1*10**18))
    })
    it('toReadableAmount', async () => {
        const decimals = 18
        const ONE_ETHER = BigInt(1*10**decimals);
        const readableAmount = toReadableAmount(ONE_ETHER,decimals)
        expect(readableAmount).toBe("1.0")
    })
    it('toReadableEtherAmount', async () => {
        const decimals = 18
        const ONE_ETHER = BigInt(1*10**decimals);
        const readableAmount = toReadableEtherAmount(ONE_ETHER)
        expect(readableAmount).toBe("1.0")
    })
})