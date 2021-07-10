/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LiquidatorProxy,
  LiquidatorProxyInterface,
} from "../LiquidatorProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260405162000db538038062000db5833981016040819052620000269162000346565b82828282816200005860017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd62000475565b60008051602062000d6e833981519152146200008457634e487b7160e01b600052600160045260246000fd5b6200008f8262000130565b805115620000b057620000ae8282620001d160201b620003c41760201c565b505b50620000e0905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610462000475565b60008051602062000d4e833981519152146200010c57634e487b7160e01b600052600160045260246000fd5b620001248260008051602062000d4e83398151915255565b505050505050620004e2565b62000146816200020060201b620003f01760201c565b620001be5760405162461bcd60e51b815260206004820152603660248201527f5570677261646561626c6550726f78793a206e657720696d706c656d656e746160448201527f74696f6e206973206e6f74206120636f6e74726163740000000000000000000060648201526084015b60405180910390fd5b60008051602062000d6e83398151915255565b6060620001f9838360405180606001604052806027815260200162000d8e602791396200020a565b9392505050565b803b15155b919050565b6060620002178462000200565b620002745760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401620001b5565b600080856001600160a01b03168560405162000291919062000422565b600060405180830381855af49150503d8060008114620002ce576040519150601f19603f3d011682016040523d82523d6000602084013e620002d3565b606091505b509092509050620002e6828286620002f0565b9695505050505050565b6060831562000301575081620001f9565b825115620003125782518084602001fd5b8160405162461bcd60e51b8152600401620001b5919062000440565b80516001600160a01b03811681146200020557600080fd5b6000806000606084860312156200035b578283fd5b62000366846200032e565b925062000376602085016200032e565b60408501519092506001600160401b038082111562000393578283fd5b818601915086601f830112620003a7578283fd5b815181811115620003bc57620003bc620004cc565b604051601f8201601f19908116603f01168101908382118183101715620003e757620003e7620004cc565b8160405282815289602084870101111562000400578586fd5b6200041383602083016020880162000499565b80955050505050509250925092565b600082516200043681846020870162000499565b9190910192915050565b60006020825282518060208401526200046181604085016020870162000499565b601f01601f19169190910160400192915050565b6000828210156200049457634e487b7160e01b81526011600452602481fd5b500390565b60005b83811015620004b65781810151838201526020016200049c565b83811115620004c6576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b61085c80620004f26000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100855780635c60da1b146100985780638f283970146100c9578063f851a440146100e95761005d565b3661005d5761005b6100fe565b005b61005b6100fe565b34801561007157600080fd5b5061005b6100803660046106c8565b610138565b61005b6100933660046106e2565b61017a565b3480156100a457600080fd5b506100ad6101ff565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d557600080fd5b5061005b6100e43660046106c8565b610265565b3480156100f557600080fd5b506100ad61037e565b6101066103fa565b6101366101317f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6104a1565b565b6000805160206107e0833981519152546001600160a01b0316336001600160a01b0316141561016f5761016a816104c5565b610177565b6101776100fe565b50565b6000805160206107e0833981519152546001600160a01b0316336001600160a01b031614156101f2576101ac836104c5565b6101ec8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506103c492505050565b506101fa565b6101fa6100fe565b505050565b60006102176000805160206107e08339815191525490565b6001600160a01b0316336001600160a01b0316141561025a577f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545b9050610262565b6102626100fe565b90565b6000805160206107e0833981519152546001600160a01b0316336001600160a01b0316141561016f576001600160a01b03811661030f5760405162461bcd60e51b815260206004820152603a60248201527f5472616e73706172656e745570677261646561626c6550726f78793a206e657760448201527f2061646d696e20697320746865207a65726f206164647265737300000000000060648201526084015b60405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103466000805160206107e08339815191525490565b604080516001600160a01b03928316815291841660208301520160405180910390a161016a816000805160206107e083398151915255565b60006103966000805160206107e08339815191525490565b6001600160a01b0316336001600160a01b0316141561025a576000805160206107e083398151915254610253565b60606103e9838360405180606001604052806027815260200161080060279139610505565b9392505050565b803b15155b919050565b6000805160206107e0833981519152546001600160a01b0316336001600160a01b0316141561049c5760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a401610306565b610136565b3660008037600080366000845af43d6000803e8080156104c0573d6000f35b3d6000fd5b6104ce816105e0565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610510846103f0565b61056b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610306565b600080856001600160a01b0316856040516105869190610760565b600060405180830381855af49150503d80600081146105c1576040519150601f19603f3d011682016040523d82523d6000602084013e6105c6565b606091505b50915091506105d6828286610678565b9695505050505050565b6105e9816103f0565b6106545760405162461bcd60e51b815260206004820152603660248201527f5570677261646561626c6550726f78793a206e657720696d706c656d656e74616044820152751d1a5bdb881a5cc81b9bdd08184818dbdb9d1c9858dd60521b6064820152608401610306565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b606083156106875750816103e9565b8251156106975782518084602001fd5b8160405162461bcd60e51b8152600401610306919061077c565b80356001600160a01b03811681146103f557600080fd5b6000602082840312156106d9578081fd5b6103e9826106b1565b6000806000604084860312156106f6578182fd5b6106ff846106b1565b9250602084013567ffffffffffffffff8082111561071b578384fd5b818601915086601f83011261072e578384fd5b81358181111561073c578485fd5b87602082850101111561074d578485fd5b6020830194508093505050509250925092565b600082516107728184602087016107af565b9190910192915050565b600060208252825180602084015261079b8160408501602087016107af565b601f01601f19169190910160400192915050565b60005b838110156107ca5781810151838201526020016107b2565b838111156107d9576000848401525b5050505056feb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220b25002bc50156298e13c843a3ab3e9b12b20136cc6fff533aa07f1378f9cd68264736f6c63430008020033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

export class LiquidatorProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _logic: string,
    admin_: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<LiquidatorProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<LiquidatorProxy>;
  }
  getDeployTransaction(
    _logic: string,
    admin_: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  attach(address: string): LiquidatorProxy {
    return super.attach(address) as LiquidatorProxy;
  }
  connect(signer: Signer): LiquidatorProxy__factory {
    return super.connect(signer) as LiquidatorProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidatorProxyInterface {
    return new utils.Interface(_abi) as LiquidatorProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidatorProxy {
    return new Contract(address, _abi, signerOrProvider) as LiquidatorProxy;
  }
}
