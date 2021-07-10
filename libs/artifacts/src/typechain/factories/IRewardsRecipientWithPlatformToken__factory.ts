/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IRewardsRecipientWithPlatformToken,
  IRewardsRecipientWithPlatformTokenInterface,
} from "../IRewardsRecipientWithPlatformToken";

const _abi = [
  {
    inputs: [],
    name: "getPlatformToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IRewardsRecipientWithPlatformToken__factory {
  static readonly abi = _abi;
  static createInterface(): IRewardsRecipientWithPlatformTokenInterface {
    return new utils.Interface(
      _abi
    ) as IRewardsRecipientWithPlatformTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRewardsRecipientWithPlatformToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IRewardsRecipientWithPlatformToken;
  }
}
