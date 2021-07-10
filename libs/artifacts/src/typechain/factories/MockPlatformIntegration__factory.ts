/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockPlatformIntegration,
  MockPlatformIntegrationInterface,
} from "../MockPlatformIntegration";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nexus",
        type: "address",
      },
      {
        internalType: "address",
        name: "_platformAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_bAssets",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_pTokens",
        type: "address[]",
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
        name: "_bAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_pToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_pToken",
        type: "address",
      },
    ],
    name: "PTokenAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userAmount",
        type: "uint256",
      },
    ],
    name: "PlatformWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "Whitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_pToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_whitelisted",
        type: "address[]",
      },
    ],
    name: "addWhitelist",
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
    name: "bAssetToPToken",
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
        name: "_bAsset",
        type: "address",
      },
    ],
    name: "checkBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_hasTxFee",
        type: "bool",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "quantityDeposited",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "platformAddress",
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
    name: "reApproveAllTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pToken",
        type: "address",
      },
    ],
    name: "setPTokenAddress",
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
    name: "whitelist",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_hasTxFee",
        type: "bool",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_hasTxFee",
        type: "bool",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawRaw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200212c3803806200212c833981016040819052620000349162000920565b836001600160a01b038116620000915760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b031916608052600080546001600160a01b0319166001600160a01b038516179055815181518114620001105760405162461bcd60e51b815260206004820152601460248201527f496e76616c696420696e70757420617272617973000000000000000000000000604482015260640162000088565b60005b8181101562000193576200017e8482815181106200014157634e487b7160e01b600052603260045260246000fd5b60200260200101518483815181106200016a57634e487b7160e01b600052603260045260246000fd5b60200260200101516200019f60201b60201c565b806200018a8162000a6e565b91505062000113565b50505050505062000aac565b6001600160a01b038281166000908152600160205260409020541615620001fe5760405162461bcd60e51b81526020600482015260126024820152711c151bdad95b88185b1c9958591e481cd95d60721b604482015260640162000088565b6001600160a01b038216158015906200021f57506001600160a01b03811615155b620002615760405162461bcd60e51b8152602060048201526011602482015270496e76616c69642061646472657373657360781b604482015260640162000088565b6001600160a01b03828116600081815260016020818152604080842080549688166001600160a01b031997881681179091556002805494850181559094527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace909201805490951684179094555190815290917fef6485b84315f9b1483beffa32aae9a0596890395e3d7521f1c5fbb51790e765910160405180910390a26200030a82826200030e565b5050565b60006200031a62000338565b90506200033383826200041860201b620007051760201c565b505050565b6000805460408051630261bf8b60e01b8152905183926001600160a01b031691630261bf8b916004808301926020929190829003018186803b1580156200037e57600080fd5b505afa15801562000393573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003b9919062000903565b90506001600160a01b038116620004135760405162461bcd60e51b815260206004820152601b60248201527f4c656e64696e6720706f6f6c20646f6573206e6f742065786973740000000000604482015260640162000088565b905090565b6200043e816000846001600160a01b03166200046560201b6200072c179092919060201c565b6200030a81600019846001600160a01b03166200046560201b6200072c179092919060201c565b801580620004f35750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015620004b657600080fd5b505afa158015620004cb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004f19190620009cf565b155b620005675760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840162000088565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b1790915262000333918591620005bf16565b60006200061b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200069d60201b62000883179092919060201c565b8051909150156200033357808060200190518101906200063c9190620009ad565b620003335760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840162000088565b6060620006ae8484600085620006b8565b90505b9392505050565b6060824710156200071b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840162000088565b6200072685620007f4565b620007745760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000088565b600080866001600160a01b03168587604051620007929190620009e8565b60006040518083038185875af1925050503d8060008114620007d1576040519150601f19603f3d011682016040523d82523d6000602084013e620007d6565b606091505b509092509050620007e9828286620007fe565b979650505050505050565b803b15155b919050565b606083156200080f575081620006b1565b825115620008205782518084602001fd5b8160405162461bcd60e51b815260040162000088919062000a06565b80516001600160a01b0381168114620007f957600080fd5b600082601f83011262000865578081fd5b815160206001600160401b038083111562000884576200088462000a96565b818302604051601f19603f83011681018181108482111715620008ab57620008ab62000a96565b60405284815283810192508684018288018501891015620008ca578687fd5b8692505b85831015620008f757620008e2816200083c565b845292840192600192909201918401620008ce565b50979650505050505050565b60006020828403121562000915578081fd5b620006b1826200083c565b6000806000806080858703121562000936578283fd5b62000941856200083c565b935062000951602086016200083c565b60408601519093506001600160401b03808211156200096e578384fd5b6200097c8883890162000854565b9350606087015191508082111562000992578283fd5b50620009a18782880162000854565b91505092959194509250565b600060208284031215620009bf578081fd5b81518015158114620006b1578182fd5b600060208284031215620009e1578081fd5b5051919050565b60008251620009fc81846020870162000a3b565b9190910192915050565b600060208252825180602084015262000a2781604085016020870162000a3b565b601f01601f19169190910160400192915050565b60005b8381101562000a5857818101518382015260200162000a3e565b8381111562000a68576000848401525b50505050565b600060001982141562000a8f57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b60805160601c61165a62000ad260003960008181610193015261116a015261165a6000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063a3f5c1d211610071578063a3f5c1d21461018e578063a4e28595146101b5578063a755349a146101c8578063c89fc72f146101d0578063dbe55e56146101e3578063edac985b146101f6576100b4565b80630ed57b3a146100b95780633edd1128146100ce5780635f515226146100f457806371c4658514610107578063934785b7146101485780639b19251a1461015b575b600080fd5b6100cc6100c736600461128b565b610209565b005b6100e16100dc3660046113b3565b61021f565b6040519081526020015b60405180910390f35b6100e1610102366004611253565b61042b565b610130610115366004611253565b6001602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016100eb565b6100cc610156366004611303565b61044b565b61017e610169366004611253565b60036020526000908152604090205460ff1681565b60405190151581526020016100eb565b6101307f000000000000000000000000000000000000000000000000000000000000000081565b6100cc6101c33660046112c3565b61048d565b6100cc6105b3565b6100cc6101de366004611355565b61062b565b600054610130906001600160a01b031681565b6100cc6102043660046113f4565b61066e565b61021161089c565b61021b8282610906565b5050565b3360009081526003602052604081205460ff166102575760405162461bcd60e51b815260040161024e9061153d565b60405180910390fd5b600083116102a05760405162461bcd60e51b81526020600482015260166024820152754d757374206465706f73697420736f6d657468696e6760501b604482015260640161024e565b60006102ab85610a6a565b905083915082156103645760006102c182610ad2565b90506102cb610b4c565b60405163e8eda9df60e01b81526001600160a01b03888116600483015260248281018990523060448401526064830152919091169063e8eda9df90608401600060405180830381600087803b15801561032357600080fd5b505af1158015610337573d6000803e3d6000fd5b50505050600061034683610ad2565b905061035b846103568484611574565b610c26565b935050506103dd565b61036c610b4c565b60405163e8eda9df60e01b81526001600160a01b03878116600483015260248281018890523060448401526064830152919091169063e8eda9df90608401600060405180830381600087803b1580156103c457600080fd5b505af11580156103d8573d6000803e3d6000fd5b505050505b604080516001600160a01b038381168252602082018590528716917f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f62910160405180910390a2509392505050565b60008061043783610a6a565b905061044281610ad2565b9150505b919050565b3360009081526003602052604090205460ff1661047a5760405162461bcd60e51b815260040161024e9061153d565b6104878484848585610c3b565b50505050565b3360009081526003602052604090205460ff166104bc5760405162461bcd60e51b815260040161024e9061153d565b600081116105065760405162461bcd60e51b81526020600482015260176024820152764d75737420776974686472617720736f6d657468696e6760481b604482015260640161024e565b6001600160a01b0383166105555760405162461bcd60e51b8152602060048201526016602482015275135d5cdd081cdc1958da599e481c9958da5c1a595b9d60521b604482015260640161024e565b6105696001600160a01b0383168483610e49565b6040805160008152602081018390526001600160a01b038416917f2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b6398910160405180910390a2505050565b6105bb61089c565b60025460006105c8610b4c565b905060005b8281101561062657610614600282815481106105f957634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031683610705565b8061061e816115b7565b9150506105cd565b505050565b3360009081526003602052604090205460ff1661065a5760405162461bcd60e51b815260040161024e9061153d565b6106678585858585610c3b565b5050505050565b60008151116106b75760405162461bcd60e51b8152602060048201526015602482015274456d7074792077686974656c69737420617272617960581b604482015260640161024e565b60005b815181101561021b576106f38282815181106106e657634e487b7160e01b600052603260045260246000fd5b6020026020010151610e79565b806106fd816115b7565b9150506106ba565b61071a6001600160a01b03831682600061072c565b61021b6001600160a01b038316826000195b8015806107b55750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561077b57600080fd5b505afa15801561078f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b391906114d6565b155b6108205760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606482015260840161024e565b6040516001600160a01b03831660248201526044810182905261062690849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610f6c565b6060610892848460008561103e565b90505b9392505050565b6108a4611166565b6001600160a01b0316336001600160a01b0316146109045760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e206578656375746500000000000000604482015260640161024e565b565b6001600160a01b0382811660009081526001602052604090205416156109635760405162461bcd60e51b81526020600482015260126024820152711c151bdad95b88185b1c9958591e481cd95d60721b604482015260640161024e565b6001600160a01b0382161580159061098357506001600160a01b03811615155b6109c35760405162461bcd60e51b8152602060048201526011602482015270496e76616c69642061646472657373657360781b604482015260640161024e565b6001600160a01b03828116600081815260016020818152604080842080549688166001600160a01b031997881681179091556002805494850181559094527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace909201805490951684179094555190815290917fef6485b84315f9b1483beffa32aae9a0596890395e3d7521f1c5fbb51790e765910160405180910390a261021b82826111f9565b6001600160a01b0380821660009081526001602052604081205490911680610acc5760405162461bcd60e51b815260206004820152601560248201527418551bdad95b88191bd95cc81b9bdd08195e1a5cdd605a1b604482015260640161024e565b92915050565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a082319060240160206040518083038186803b158015610b1457600080fd5b505afa158015610b28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acc91906114d6565b6000805460408051630261bf8b60e01b8152905183926001600160a01b031691630261bf8b916004808301926020929190829003018186803b158015610b9157600080fd5b505afa158015610ba5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc9919061126f565b90506001600160a01b038116610c215760405162461bcd60e51b815260206004820152601b60248201527f4c656e64696e6720706f6f6c20646f6573206e6f742065786973740000000000604482015260640161024e565b905090565b6000818311610c355782610895565b50919050565b60008211610c855760405162461bcd60e51b81526020600482015260176024820152764d75737420776974686472617720736f6d657468696e6760481b604482015260640161024e565b6000610c9085610a6a565b90508115610d6b57828414610cf25760405162461bcd60e51b815260206004820152602260248201527f436163686520696e61637469766520666f722061737365747320776974682066604482015261656560f01b606482015260840161024e565b610cfa610b4c565b604051631a4ca37b60e21b81526001600160a01b03878116600483015260248201879052888116604483015291909116906369328dec90606401600060405180830381600087803b158015610d4e57600080fd5b505af1158015610d62573d6000803e3d6000fd5b50505050610df2565b610d73610b4c565b604051631a4ca37b60e21b81526001600160a01b0387811660048301526024820186905230604483015291909116906369328dec90606401600060405180830381600087803b158015610dc557600080fd5b505af1158015610dd9573d6000803e3d6000fd5b50610df2925050506001600160a01b0386168786610e49565b604080516001600160a01b03838116825260208201869052918101869052908616907fb925ac01b9c34cc156a17a1e3da718f364df34eec9d0c9dc4e59c2bb1e7ba54b9060600160405180910390a2505050505050565b6040516001600160a01b03831660248201526044810182905261062690849063a9059cbb60e01b9060640161084c565b6001600160a01b038116610ec15760405162461bcd60e51b815260206004820152600f60248201526e41646472657373206973207a65726f60881b604482015260640161024e565b6001600160a01b03811660009081526003602052604090205460ff1615610f205760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481dda1a5d195b1a5cdd1959606a1b604482015260640161024e565b6001600160a01b038116600081815260036020526040808220805460ff19166001179055517faab7954e9d246b167ef88aeddad35209ca2489d95a8aeb59e288d9b19fae5a549190a250565b6000610fc1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108839092919063ffffffff16565b8051909150156106265780806020019051810190610fdf91906114ba565b6106265760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161024e565b60608247101561109f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161024e565b843b6110ed5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161024e565b600080866001600160a01b0316858760405161110991906114ee565b60006040518083038185875af1925050503d8060008114611146576040519150601f19603f3d011682016040523d82523d6000602084013e61114b565b606091505b509150915061115b82828661120f565b979650505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156111c157600080fd5b505afa1580156111d5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c21919061126f565b6000611203610b4c565b90506106268382610705565b6060831561121e575081610895565b82511561122e5782518084602001fd5b8160405162461bcd60e51b815260040161024e919061150a565b8035610446816115fe565b600060208284031215611264578081fd5b8135610895816115fe565b600060208284031215611280578081fd5b8151610895816115fe565b6000806040838503121561129d578081fd5b82356112a8816115fe565b915060208301356112b8816115fe565b809150509250929050565b6000806000606084860312156112d7578081fd5b83356112e2816115fe565b925060208401356112f2816115fe565b929592945050506040919091013590565b60008060008060808587031215611318578081fd5b8435611323816115fe565b93506020850135611333816115fe565b925060408501359150606085013561134a81611616565b939692955090935050565b600080600080600060a0868803121561136c578081fd5b8535611377816115fe565b94506020860135611387816115fe565b9350604086013592506060860135915060808601356113a581611616565b809150509295509295909350565b6000806000606084860312156113c7578283fd5b83356113d2816115fe565b92506020840135915060408401356113e981611616565b809150509250925092565b60006020808385031215611406578182fd5b823567ffffffffffffffff8082111561141d578384fd5b818501915085601f830112611430578384fd5b813581811115611442576114426115e8565b838102604051601f19603f83011681018181108582111715611466576114666115e8565b604052828152858101935084860182860187018a1015611484578788fd5b8795505b838610156114ad5761149981611248565b855260019590950194938601938601611488565b5098975050505050505050565b6000602082840312156114cb578081fd5b815161089581611616565b6000602082840312156114e7578081fd5b5051919050565b6000825161150081846020870161158b565b9190910192915050565b600060208252825180602084015261152981604085016020870161158b565b601f01601f19169190910160400192915050565b60208082526019908201527f4e6f7420612077686974656c6973746564206164647265737300000000000000604082015260600190565b600082821015611586576115866115d2565b500390565b60005b838110156115a657818101518382015260200161158e565b838111156104875750506000910152565b60006000198214156115cb576115cb6115d2565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461161357600080fd5b50565b801515811461161357600080fdfea26469706673582212202ad2480b61e97ba1c31b1fdc54df249c3b0c476529b28ae4b526d1ce98a16b3064736f6c63430008020033";

export class MockPlatformIntegration__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nexus: string,
    _platformAddress: string,
    _bAssets: string[],
    _pTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockPlatformIntegration> {
    return super.deploy(
      _nexus,
      _platformAddress,
      _bAssets,
      _pTokens,
      overrides || {}
    ) as Promise<MockPlatformIntegration>;
  }
  getDeployTransaction(
    _nexus: string,
    _platformAddress: string,
    _bAssets: string[],
    _pTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nexus,
      _platformAddress,
      _bAssets,
      _pTokens,
      overrides || {}
    );
  }
  attach(address: string): MockPlatformIntegration {
    return super.attach(address) as MockPlatformIntegration;
  }
  connect(signer: Signer): MockPlatformIntegration__factory {
    return super.connect(signer) as MockPlatformIntegration__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockPlatformIntegrationInterface {
    return new utils.Interface(_abi) as MockPlatformIntegrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPlatformIntegration {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockPlatformIntegration;
  }
}
