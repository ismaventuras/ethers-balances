import { getBalances } from "../src"

describe('getBalances', () => {
    it('gets all balances', async () => {
        const balances = await getBalances("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")
        expect(balances).resolves
    })
})