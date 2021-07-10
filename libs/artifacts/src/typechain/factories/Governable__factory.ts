/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Governable, GovernableInterface } from "../Governable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousGovernor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "GovernorChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
    ],
    name: "changeGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isGovernor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633178082556040516001600160a01b039190911691907fde4b3f61490b74c0ed6237523974fe299126bbbf8a8a7482fd220104c59b0c84908290a3610225806100696000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630c340a2414610046578063c7af335214610066578063e4c0aaf41461008a575b600080fd5b6000546040516001600160a01b0390911681526020015b60405180910390f35b61007a6000546001600160a01b0316331490565b604051901515815260200161005d565b61009d6100983660046101c1565b61009f565b005b6100b36000546001600160a01b0316331490565b6101045760405162461bcd60e51b815260206004820152601f60248201527f474f563a2063616c6c6572206973206e6f742074686520476f7665726e6f720060448201526064015b60405180910390fd5b61010d81610110565b50565b6001600160a01b0381166101665760405162461bcd60e51b815260206004820152601f60248201527f474f563a206e657720476f7665726e6f7220697320616464726573732830290060448201526064016100fb565b600080546040516001600160a01b03808516939216917fde4b3f61490b74c0ed6237523974fe299126bbbf8a8a7482fd220104c59b0c8491a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000602082840312156101d2578081fd5b81356001600160a01b03811681146101e8578182fd5b939250505056fea26469706673582212205910c37d96e759df7cf0d20404aa722845b294f11eeeab534b83025dc4cb836964736f6c63430008020033";

export class Governable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Governable> {
    return super.deploy(overrides || {}) as Promise<Governable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Governable {
    return super.attach(address) as Governable;
  }
  connect(signer: Signer): Governable__factory {
    return super.connect(signer) as Governable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernableInterface {
    return new utils.Interface(_abi) as GovernableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Governable {
    return new Contract(address, _abi, signerOrProvider) as Governable;
  }
}
