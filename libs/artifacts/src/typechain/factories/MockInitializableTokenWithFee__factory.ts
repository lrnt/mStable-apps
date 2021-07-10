/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockInitializableTokenWithFee,
  MockInitializableTokenWithFeeInterface,
} from "../MockInitializableTokenWithFee";

const _abi = [
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
        internalType: "string",
        name: "_nameArg",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbolArg",
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
    name: "initialize",
    outputs: [],
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
  "0x608060405234801561001057600080fd5b50610e31806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636c9452211161008c578063978bbdb911610066578063978bbdb9146101c0578063a457c2d7146101c9578063a9059cbb146101dc578063dd62ed3e146101ef576100ea565b80636c9452211461019057806370a08231146101a557806395d89b41146101b8576100ea565b806323b872dd116100c857806323b872dd14610142578063313ce56714610155578063395093511461016a57806340c10f191461017d576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f7610228565b6040516101049190610bd5565b60405180910390f35b61012061011b366004610b0e565b6102ba565b6040519015158152602001610104565b6003545b604051908152602001610104565b610120610150366004610ad3565b6102d0565b60065460405160ff9091168152602001610104565b610120610178366004610b0e565b610323565b61012061018b366004610b0e565b61035a565b6101a361019e366004610b37565b610366565b005b6101346101b3366004610a87565b610410565b6100f761042f565b61013460005481565b6101206101d7366004610b0e565b61043e565b6101206101ea366004610b0e565b610475565b6101346101fd366004610aa1565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b60606004805461023790610daa565b80601f016020809104026020016040519081016040528092919081815260200182805461026390610daa565b80156102b05780601f10610285576101008083540402835291602001916102b0565b820191906000526020600020905b81548152906001019060200180831161029357829003601f168201915b5050505050905090565b60006102c7338484610482565b50600192915050565b60006102dd8484846105ab565b6001600160a01b038416600090815260026020908152604080832033808552925290912054610318918691610313908690610d93565b610482565b5060015b9392505050565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916102c7918590610313908690610c28565b60006102c78383610751565b6103db87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250889250610839915050565b66038d7ea4c68000600055610407826103f860ff8616600a610ca6565b6104029084610d74565b610751565b50505050505050565b6001600160a01b0381166000908152600160205260409020545b919050565b60606005805461023790610daa565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916102c7918590610313908690610d93565b60006102c73384846105ab565b6001600160a01b0383166104e95760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084015b60405180910390fd5b6001600160a01b03821661054a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104e0565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661060f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104e0565b6001600160a01b0382166106715760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104e0565b60008054610680908390610879565b9050600061068e8284610d93565b905061069a858361088e565b6001600160a01b0385166000908152600160205260409020546106be908290610d93565b6001600160a01b0380871660009081526001602052604080822093909355908616815220546106ee908290610c28565b6001600160a01b0380861660008181526001602052604090819020939093559151908716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107429085815260200190565b60405180910390a35050505050565b6001600160a01b0382166107a75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104e0565b806003546107b59190610c28565b6003556001600160a01b0382166000908152600160205260409020546107dc908290610c28565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061082d9085815260200190565b60405180910390a35050565b825161084c906004906020860190610990565b508151610860906005906020850190610990565b506006805460ff191660ff929092169190911790555050565b600061031c8383670de0b6b3a7640000610971565b6001600160a01b0382166108ee5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104e0565b806003546108fc9190610d93565b6003556001600160a01b038216600090815260016020526040902054610923908290610d93565b6001600160a01b0383166000818152600160205260408082209390935591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061082d9085815260200190565b60008161097e8486610d74565b6109889190610c40565b949350505050565b82805461099c90610daa565b90600052602060002090601f0160209004810192826109be5760008555610a04565b82601f106109d757805160ff1916838001178555610a04565b82800160010185558215610a04579182015b82811115610a045782518255916020019190600101906109e9565b50610a10929150610a14565b5090565b5b80821115610a105760008155600101610a15565b80356001600160a01b038116811461042a57600080fd5b60008083601f840112610a51578182fd5b50813567ffffffffffffffff811115610a68578182fd5b602083019150836020828501011115610a8057600080fd5b9250929050565b600060208284031215610a98578081fd5b61031c82610a29565b60008060408385031215610ab3578081fd5b610abc83610a29565b9150610aca60208401610a29565b90509250929050565b600080600060608486031215610ae7578081fd5b610af084610a29565b9250610afe60208501610a29565b9150604084013590509250925092565b60008060408385031215610b20578182fd5b610b2983610a29565b946020939093013593505050565b600080600080600080600060a0888a031215610b51578283fd5b873567ffffffffffffffff80821115610b68578485fd5b610b748b838c01610a40565b909950975060208a0135915080821115610b8c578485fd5b50610b998a828b01610a40565b909650945050604088013560ff81168114610bb2578384fd5b9250610bc060608901610a29565b91506080880135905092959891949750929550565b6000602080835283518082850152825b81811015610c0157858101830151858201604001528201610be5565b81811115610c125783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610c3b57610c3b610de5565b500190565b600082610c5b57634e487b7160e01b81526012600452602481fd5b500490565b80825b6001808611610c725750610c9d565b818704821115610c8457610c84610de5565b80861615610c9157918102915b9490941c938002610c63565b94509492505050565b600061031c6000198484600082610cbf5750600161031c565b81610ccc5750600061031c565b8160018114610ce25760028114610cec57610d19565b600191505061031c565b60ff841115610cfd57610cfd610de5565b6001841b915084821115610d1357610d13610de5565b5061031c565b5060208310610133831016604e8410600b8410161715610d4c575081810a83811115610d4757610d47610de5565b61031c565b610d598484846001610c60565b808604821115610d6b57610d6b610de5565b02949350505050565b6000816000190483118215151615610d8e57610d8e610de5565b500290565b600082821015610da557610da5610de5565b500390565b600281046001821680610dbe57607f821691505b60208210811415610ddf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea264697066735822122056383ff935fac81eefdc30e93fc25a03248a0c6b9719123df5a86c1a01001c8464736f6c63430008020033";

export class MockInitializableTokenWithFee__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockInitializableTokenWithFee> {
    return super.deploy(
      overrides || {}
    ) as Promise<MockInitializableTokenWithFee>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockInitializableTokenWithFee {
    return super.attach(address) as MockInitializableTokenWithFee;
  }
  connect(signer: Signer): MockInitializableTokenWithFee__factory {
    return super.connect(signer) as MockInitializableTokenWithFee__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockInitializableTokenWithFeeInterface {
    return new utils.Interface(_abi) as MockInitializableTokenWithFeeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockInitializableTokenWithFee {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockInitializableTokenWithFee;
  }
}
