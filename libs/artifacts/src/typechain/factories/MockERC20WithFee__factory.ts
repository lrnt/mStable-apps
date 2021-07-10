/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockERC20WithFee,
  MockERC20WithFeeInterface,
} from "../MockERC20WithFee";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_initialRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initialMint",
        type: "uint256",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FeePaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRate",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200111f3803806200111f833981016040819052620000349162000318565b6200004c8585856200008960201b620003a71760201c565b66038d7ea4c680006000556200007e826200006c60ff8616600a6200042b565b62000078908462000520565b620000cd565b5050505050620005ab565b82516200009e906004906020860190620001bf565b508151620000b4906005906020850190620001bf565b506006805460ff191660ff929092169190911790555050565b6001600160a01b038216620001285760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600354620001389190620003c3565b6003556001600160a01b03821660009081526001602052604090205462000161908290620003c3565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90620001b39085815260200190565b60405180910390a35050565b828054620001cd9062000542565b90600052602060002090601f016020900481019282620001f157600085556200023c565b82601f106200020c57805160ff19168380011785556200023c565b828001600101855582156200023c579182015b828111156200023c5782518255916020019190600101906200021f565b506200024a9291506200024e565b5090565b5b808211156200024a57600081556001016200024f565b600082601f83011262000276578081fd5b81516001600160401b038082111562000293576200029362000595565b604051601f8301601f19908116603f01168101908282118183101715620002be57620002be62000595565b81604052838152602092508683858801011115620002da578485fd5b8491505b83821015620002fd5785820183015181830184015290820190620002de565b838211156200030e57848385830101525b9695505050505050565b600080600080600060a0868803121562000330578081fd5b85516001600160401b038082111562000347578283fd5b6200035589838a0162000265565b965060208801519150808211156200036b578283fd5b506200037a8882890162000265565b945050604086015160ff8116811462000391578182fd5b60608701519093506001600160a01b0381168114620003ae578182fd5b80925050608086015190509295509295909350565b60008219821115620003d957620003d96200057f565b500190565b80825b6001808611620003f2575062000422565b8187048211156200040757620004076200057f565b808616156200041557918102915b9490941c938002620003e1565b94509492505050565b60006200043c600019848462000443565b9392505050565b60008262000454575060016200043c565b8162000463575060006200043c565b81600181146200047c57600281146200048757620004bb565b60019150506200043c565b60ff8411156200049b576200049b6200057f565b6001841b915084821115620004b457620004b46200057f565b506200043c565b5060208310610133831016604e8410600b8410161715620004f3575081810a83811115620004ed57620004ed6200057f565b6200043c565b620005028484846001620003de565b8086048211156200051757620005176200057f565b02949350505050565b60008160001904831182151516156200053d576200053d6200057f565b500290565b6002810460018216806200055757607f821691505b602082108114156200057957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b610b6480620005bb6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806340c10f191161008c578063978bbdb911610066578063978bbdb914610190578063a457c2d714610199578063a9059cbb146101ac578063dd62ed3e146101bf576100cf565b806340c10f191461016257806370a082311461017557806395d89b4114610188576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a578063395093511461014f575b600080fd5b6100dc6101f8565b6040516100e99190610a1c565b60405180910390f35b6101056101003660046109f3565b61028a565b60405190151581526020016100e9565b6003545b6040519081526020016100e9565b6101056101353660046109b8565b6102a0565b60065460405160ff90911681526020016100e9565b61010561015d3660046109f3565b6102f2565b6101056101703660046109f3565b610329565b61011961018336600461096c565b610335565b6100dc610354565b61011960005481565b6101056101a73660046109f3565b610363565b6101056101ba3660046109f3565b61039a565b6101196101cd366004610986565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b60606004805461020790610add565b80601f016020809104026020016040519081016040528092919081815260200182805461023390610add565b80156102805780601f1061025557610100808354040283529160200191610280565b820191906000526020600020905b81548152906001019060200180831161026357829003601f168201915b5050505050905090565b60006102973384846103e7565b50600192915050565b60006102ad848484610510565b6001600160a01b0384166000908152600260209081526040808320338085529252909120546102e89186916102e3908690610ac6565b6103e7565b5060019392505050565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916102979185906102e3908690610a6f565b600061029783836106b6565b6001600160a01b0381166000908152600160205260409020545b919050565b60606005805461020790610add565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916102979185906102e3908690610ac6565b6000610297338484610510565b82516103ba9060049060208601906108bc565b5081516103ce9060059060208501906108bc565b506006805460ff191660ff929092169190911790555050565b6001600160a01b03831661044e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084015b60405180910390fd5b6001600160a01b0382166104af5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610445565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105745760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610445565b6001600160a01b0382166105d65760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610445565b600080546105e590839061079e565b905060006105f38284610ac6565b90506105ff85836107ba565b6001600160a01b038516600090815260016020526040902054610623908290610ac6565b6001600160a01b038087166000908152600160205260408082209390935590861681522054610653908290610a6f565b6001600160a01b0380861660008181526001602052604090819020939093559151908716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906106a79085815260200190565b60405180910390a35050505050565b6001600160a01b03821661070c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610445565b8060035461071a9190610a6f565b6003556001600160a01b038216600090815260016020526040902054610741908290610a6f565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107929085815260200190565b60405180910390a35050565b60006107b38383670de0b6b3a764000061089d565b9392505050565b6001600160a01b03821661081a5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610445565b806003546108289190610ac6565b6003556001600160a01b03821660009081526001602052604090205461084f908290610ac6565b6001600160a01b0383166000818152600160205260408082209390935591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107929085815260200190565b6000816108aa8486610aa7565b6108b49190610a87565b949350505050565b8280546108c890610add565b90600052602060002090601f0160209004810192826108ea5760008555610930565b82601f1061090357805160ff1916838001178555610930565b82800160010185558215610930579182015b82811115610930578251825591602001919060010190610915565b5061093c929150610940565b5090565b5b8082111561093c5760008155600101610941565b80356001600160a01b038116811461034f57600080fd5b60006020828403121561097d578081fd5b6107b382610955565b60008060408385031215610998578081fd5b6109a183610955565b91506109af60208401610955565b90509250929050565b6000806000606084860312156109cc578081fd5b6109d584610955565b92506109e360208501610955565b9150604084013590509250925092565b60008060408385031215610a05578182fd5b610a0e83610955565b946020939093013593505050565b6000602080835283518082850152825b81811015610a4857858101830151858201604001528201610a2c565b81811115610a595783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610a8257610a82610b18565b500190565b600082610aa257634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610ac157610ac1610b18565b500290565b600082821015610ad857610ad8610b18565b500390565b600281046001821680610af157607f821691505b60208210811415610b1257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212208be78fe58e2e86c6547df78233f04636008410b660eb8b14e601446671b084cd64736f6c63430008020033";

export class MockERC20WithFee__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _initialRecipient: string,
    _initialMint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockERC20WithFee> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _initialRecipient,
      _initialMint,
      overrides || {}
    ) as Promise<MockERC20WithFee>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _initialRecipient: string,
    _initialMint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _initialRecipient,
      _initialMint,
      overrides || {}
    );
  }
  attach(address: string): MockERC20WithFee {
    return super.attach(address) as MockERC20WithFee;
  }
  connect(signer: Signer): MockERC20WithFee__factory {
    return super.connect(signer) as MockERC20WithFee__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20WithFeeInterface {
    return new utils.Interface(_abi) as MockERC20WithFeeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC20WithFee {
    return new Contract(address, _abi, signerOrProvider) as MockERC20WithFee;
  }
}
