/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ValidatorWithTVLCap,
  ValidatorWithTVLCapInterface,
} from "../ValidatorWithTVLCap";

const _abi = [
  {
    inputs: [],
    name: "capFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startingCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060a18061001e6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80630b06528714604157806378e9792514605b578063ad45ed96146063575b600080fd5b604960025481565b60405190815260200160405180910390f35b604960005481565b60496001548156fea2646970667358221220dcbdfa12b4764e78738642d4de0c0f2c398d9c58c065fafbd6b5387c9af8772c64736f6c63430008020033";

export class ValidatorWithTVLCap__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ValidatorWithTVLCap> {
    return super.deploy(overrides || {}) as Promise<ValidatorWithTVLCap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ValidatorWithTVLCap {
    return super.attach(address) as ValidatorWithTVLCap;
  }
  connect(signer: Signer): ValidatorWithTVLCap__factory {
    return super.connect(signer) as ValidatorWithTVLCap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ValidatorWithTVLCapInterface {
    return new utils.Interface(_abi) as ValidatorWithTVLCapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ValidatorWithTVLCap {
    return new Contract(address, _abi, signerOrProvider) as ValidatorWithTVLCap;
  }
}
