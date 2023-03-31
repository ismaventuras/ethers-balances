// this file contains functions to convert numbers to readable amounts and viceversa
import { parseUnits,formatUnits, BigNumberish} from "ethers";

const READABLE_DECIMALS = 4
const DECIMAL_SEPARATOR = '.'

export function fromReadableAmount(
    amount: string,
    decimals: number
  ): BigInt {
    return parseUnits(amount, decimals)
}

export function toReadableAmount(amount: BigNumberish, decimals: number): string {     
    // convert wei to human readable amount
    const strAmount = formatUnits(amount, decimals);
    // separate integer and decimals
    const [intPart, floatPart] = strAmount.split(DECIMAL_SEPARATOR)
    // if no decimals return the whole amount
    if (floatPart === undefined) return intPart
    // get a certain amount of decimals instead of a big chunk of decimals
    const newFloatPart = floatPart.slice(0, READABLE_DECIMALS)
    return `${intPart}.${newFloatPart}`
}

export function toReadableEtherAmount(amount: BigNumberish): string {
    return toReadableAmount(amount,18)
}