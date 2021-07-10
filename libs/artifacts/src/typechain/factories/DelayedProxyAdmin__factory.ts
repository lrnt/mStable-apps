/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DelayedProxyAdmin,
  DelayedProxyAdminInterface,
} from "../DelayedProxyAdmin";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nexus",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
    ],
    name: "UpgradeCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "UpgradeProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldImpl",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "UPGRADE_DELAY",
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
    inputs: [
      {
        internalType: "address payable",
        name: "_proxy",
        type: "address",
      },
    ],
    name: "acceptUpgradeRequest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_proxy",
        type: "address",
      },
    ],
    name: "cancelUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_proxy",
        type: "address",
      },
    ],
    name: "getProxyAdmin",
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
    inputs: [
      {
        internalType: "address",
        name: "_proxy",
        type: "address",
      },
    ],
    name: "getProxyImplementation",
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
    name: "nexus",
    outputs: [
      {
        internalType: "contract INexus",
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
        internalType: "address",
        name: "_proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "proposeUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610f6d380380610f6d83398101604081905261002f916100a0565b806001600160a01b03811661008a5760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f0000000000000000000000604482015260640160405180910390fd5b60601b6001600160601b031916608052506100ce565b6000602082840312156100b1578081fd5b81516001600160a01b03811681146100c7578182fd5b9392505050565b60805160601c610e7a6100f3600039600081816101380152610a490152610e7a6000f3fe60806040526004361061007b5760003560e01c8063a3f5c1d21161004e578063a3f5c1d214610126578063c44fb8ec1461015a578063c72eeaba1461017a578063f3b7dead1461019a5761007b565b8063204e1c7a1461008057806347fe8b1d146100bd57806374adad1d146100e2578063912f061f14610111575b600080fd5b34801561008c57600080fd5b506100a061009b366004610bb5565b6101ba565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100c957600080fd5b506100d462093a8081565b6040519081526020016100b4565b3480156100ee57600080fd5b506101026100fd366004610bb5565b610283565b6040516100b493929190610d6d565b61012461011f366004610bb5565b610338565b005b34801561013257600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b34801561016657600080fd5b50610124610175366004610bb5565b610635565b34801561018657600080fd5b50610124610195366004610bf4565b610731565b3480156101a657600080fd5b506100a06101b5366004610bb5565b6108a9565b6000806000836001600160a01b03166040516101e090635c60da1b60e01b815260040190565b600060405180830381855afa9150503d806000811461021b576040519150601f19603f3d011682016040523d82523d6000602084013e610220565b606091505b5091509150816102655760405162461bcd60e51b815260206004820152600b60248201526a10d85b1b0819985a5b195960aa1b60448201526064015b60405180910390fd5b808060200190518101906102799190610bd8565b925050505b919050565b600060208190529081526040902080546001820180546001600160a01b0390921692916102af90610df4565b80601f01602080910402602001604051908101604052809291908181526020018280546102db90610df4565b80156103285780601f106102fd57610100808354040283529160200191610328565b820191906000526020600020905b81548152906001019060200180831161030b57829003601f168201915b5050505050908060020154905083565b6103406108cf565b6001600160a01b0381166103665760405162461bcd60e51b815260040161025c90610da1565b6001600160a01b03808216600090815260208181526040808320815160608101909252805490941681526001840180549394919391928401916103a890610df4565b80601f01602080910402602001604051908101604052809291908181526020018280546103d490610df4565b80156104215780601f106103f657610100808354040283529160200191610421565b820191906000526020600020905b81548152906001019060200180831161040457829003601f168201915b5050505050815260200160028201548152505090506104438160400151610939565b6104805760405162461bcd60e51b815260206004820152600e60248201526d2232b630bc903737ba1037bb32b960911b604482015260640161025c565b805160208201516000610492856101ba565b6001600160a01b038616600090815260208190526040812080546001600160a01b03191681559192506104c86001830182610add565b5060006002919091015581516105865734156105265760405162461bcd60e51b815260206004820152601860248201527f6d73672e76616c75652073686f756c64206265207a65726f0000000000000000604482015260640161025c565b604051631b2ce7f360e11b81526001600160a01b038481166004830152861690633659cfe690602401600060405180830381600087803b15801561056957600080fd5b505af115801561057d573d6000803e3d6000fd5b505050506105e9565b60405163278f794360e11b81526001600160a01b03861690634f1ef2869034906105b69087908790600401610d41565b6000604051808303818588803b1580156105cf57600080fd5b505af11580156105e3573d6000803e3d6000fd5b50505050505b846001600160a01b03167f05c037a2fdcf968f427b340f3c2caf5c895089d972c63bbfd4046aae1e21cc1582858560405161062693929190610ccc565b60405180910390a25050505050565b61063d6108cf565b6001600160a01b0381166106635760405162461bcd60e51b815260040161025c90610da1565b6001600160a01b03818116600090815260208190526040902054166106bd5760405162461bcd60e51b815260206004820152601060248201526f139bc81c995c5d595cdd08199bdd5b9960821b604482015260640161025c565b6001600160a01b038116600090815260208190526040812080546001600160a01b0319168155906106f16001830182610add565b5060006002919091018190556040516001600160a01b038316917f3198dc80249fcfedbd0d06e1ff49a7695a51b006592328ce0b127cdeab77e93691a250565b6107396108cf565b6001600160a01b03841661075f5760405162461bcd60e51b815260040161025c90610da1565b6001600160a01b0383166107b55760405162461bcd60e51b815260206004820152601e60248201527f496d706c656d656e746174696f6e2061646472657373206973207a65726f0000604482015260640161025c565b6001600160a01b03848116600090815260208190526040902054161561081d5760405162461bcd60e51b815260206004820152601860248201527f5570677261646520616c72656164792070726f706f7365640000000000000000604482015260640161025c565b610827848461096b565b6001600160a01b03848116600090815260208190526040902080546001600160a01b031916918516919091178155610863600182018484610b1c565b504260028201556040516001600160a01b038616907f291fbf65f4d270fdeb17bef05df6c8d87b6ca5f0f4388d92766d0da38c932d199061062690879087908790610d01565b6000806000836001600160a01b03166040516101e0906303e1469160e61b815260040190565b6108d7610a45565b6001600160a01b0316336001600160a01b0316146109375760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e206578656375746500000000000000604482015260640161025c565b565b60008082118015610956575061095262093a8083610dd0565b4210155b156109635750600161027e565b506000919050565b6000610976836101ba565b9050806001600160a01b0316826001600160a01b031614156109da5760405162461bcd60e51b815260206004820181905260248201527f496d706c656d656e746174696f6e206d75737420626520646966666572656e74604482015260640161025c565b60006109e5846108a9565b90506001600160a01b0381163014610a3f5760405162461bcd60e51b815260206004820152601760248201527f50726f78792061646d696e206e6f74206d617463686564000000000000000000604482015260640161025c565b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b158015610aa057600080fd5b505afa158015610ab4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad89190610bd8565b905090565b508054610ae990610df4565b6000825580601f10610afb5750610b19565b601f016020900490600052602060002090810190610b199190610ba0565b50565b828054610b2890610df4565b90600052602060002090601f016020900481019282610b4a5760008555610b90565b82601f10610b635782800160ff19823516178555610b90565b82800160010185558215610b90579182015b82811115610b90578235825591602001919060010190610b75565b50610b9c929150610ba0565b5090565b5b80821115610b9c5760008155600101610ba1565b600060208284031215610bc6578081fd5b8135610bd181610e2f565b9392505050565b600060208284031215610be9578081fd5b8151610bd181610e2f565b60008060008060608587031215610c09578283fd5b8435610c1481610e2f565b93506020850135610c2481610e2f565b9250604085013567ffffffffffffffff80821115610c40578384fd5b818701915087601f830112610c53578384fd5b813581811115610c61578485fd5b886020828501011115610c72578485fd5b95989497505060200194505050565b60008151808452815b81811015610ca657602081850181015186830182015201610c8a565b81811115610cb75782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b03848116825283166020820152606060408201819052600090610cf890830184610c81565b95945050505050565b6001600160a01b03841681526040602082018190528101829052600082846060840137818301606090810191909152601f909201601f1916010192915050565b6001600160a01b0383168152604060208201819052600090610d6590830184610c81565b949350505050565b6001600160a01b0384168152606060208201819052600090610d9190830185610c81565b9050826040830152949350505050565b60208082526015908201527450726f78792061646472657373206973207a65726f60581b604082015260600190565b60008219821115610def57634e487b7160e01b81526011600452602481fd5b500190565b600281046001821680610e0857607f821691505b60208210811415610e2957634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b0381168114610b1957600080fdfea26469706673582212200590166f6318c3da65eaa7705e20d22dde077831c5c288d2f27bce78d86cb3c064736f6c63430008020033";

export class DelayedProxyAdmin__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nexus: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DelayedProxyAdmin> {
    return super.deploy(_nexus, overrides || {}) as Promise<DelayedProxyAdmin>;
  }
  getDeployTransaction(
    _nexus: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_nexus, overrides || {});
  }
  attach(address: string): DelayedProxyAdmin {
    return super.attach(address) as DelayedProxyAdmin;
  }
  connect(signer: Signer): DelayedProxyAdmin__factory {
    return super.connect(signer) as DelayedProxyAdmin__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DelayedProxyAdminInterface {
    return new utils.Interface(_abi) as DelayedProxyAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DelayedProxyAdmin {
    return new Contract(address, _abi, signerOrProvider) as DelayedProxyAdmin;
  }
}
