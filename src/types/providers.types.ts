import type {JsonRpcProvider} from "ethers";

export type Providers = {
    [key in ValidChains]:JsonRpcProvider
}

