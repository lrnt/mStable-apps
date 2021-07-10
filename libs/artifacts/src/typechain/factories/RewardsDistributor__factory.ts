/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RewardsDistributor,
  RewardsDistributorInterface,
} from "../RewardsDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nexus",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_fundManagers",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "AddedFundManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "platformToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformAmount",
        type: "uint256",
      },
    ],
    name: "DistributedReward",
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
    name: "RemovedFundManager",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "addFundManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IRewardsRecipientWithPlatformToken[]",
        name: "_recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_platformAmounts",
        type: "uint256[]",
      },
    ],
    name: "distributeRewards",
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
    name: "fundManagers",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "removeFundManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200101438038062001014833981016040819052620000349162000223565b816001600160a01b038116620000915760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b60601b6001600160601b03191660805260005b8151811015620000fc57620000e7828281518110620000d357634e487b7160e01b600052603260045260246000fd5b60200260200101516200010560201b60201c565b80620000f3816200030d565b915050620000a4565b5050506200034b565b6001600160a01b0381166200014f5760405162461bcd60e51b815260206004820152600f60248201526e41646472657373206973207a65726f60881b604482015260640162000088565b6001600160a01b03811660009081526020819052604090205460ff1615620001ba5760405162461bcd60e51b815260206004820152601460248201527f416c72656164792066756e64206d616e61676572000000000000000000000000604482015260640162000088565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517fbd86fc1ae387829c0b7f84e52ed8685721b367d8169f630a5ff878ef7750b25f9190a250565b80516001600160a01b03811681146200021e57600080fd5b919050565b6000806040838503121562000236578182fd5b620002418362000206565b602084810151919350906001600160401b038082111562000260578384fd5b818601915086601f83011262000274578384fd5b81518181111562000289576200028962000335565b838102604051601f19603f83011681018181108582111715620002b057620002b062000335565b604052828152858101935084860182860187018b1015620002cf578788fd5b8795505b83861015620002fc57620002e78162000206565b855260019590950194938601938601620002d3565b508096505050505050509250929050565b60006000198214156200032e57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b60805160601c610ca4620003706000396000818160ae015261079b0152610ca46000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063179c40551461005c5780635d0bf74f14610071578063a3f5c1d2146100a9578063c533edb1146100e8578063d9b54946146100fb575b600080fd5b61006f61006a366004610ac9565b61010e565b005b61009461007f366004610ac9565b60006020819052908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100d07f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100a0565b61006f6100f6366004610b01565b610209565b61006f610109366004610ac9565b6105c5565b6101166105d9565b6001600160a01b0381166101635760405162461bcd60e51b815260206004820152600f60248201526e41646472657373206973207a65726f60881b60448201526064015b60405180910390fd5b6001600160a01b03811660009081526020819052604090205460ff166101c05760405162461bcd60e51b81526020600482015260126024820152712737ba103090333ab7321036b0b730b3b2b960711b604482015260640161015a565b6001600160a01b038116600081815260208190526040808220805460ff19169055517fd5031334bc3e0470dfa530d3222eb2107f55f3b11fd4c07c008cdbef0d528ee79190a250565b3360009081526020819052604090205460ff1661025d5760405162461bcd60e51b81526020600482015260126024820152712737ba103090333ab7321036b0b730b3b2b960711b604482015260640161015a565b84806102a45760405162461bcd60e51b81526020600482015260166024820152754d7573742063686f6f736520726563697069656e747360501b604482015260640161015a565b8084146102e85760405162461bcd60e51b81526020600482015260126024820152714d69736d61746368696e6720696e7075747360701b604482015260640161015a565b80821461032c5760405162461bcd60e51b81526020600482015260126024820152714d69736d61746368696e6720696e7075747360701b604482015260640161015a565b60005b818110156105bb57600086868381811061035957634e487b7160e01b600052603260045260246000fd5b905060200201359050600089898481811061038457634e487b7160e01b600052603260045260246000fd5b90506020020160208101906103999190610ac9565b90506000816001600160a01b03166369940d796040518163ffffffff1660e01b815260040160206040518083038186803b1580156103d657600080fd5b505afa1580156103ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040e9190610ae5565b90506104256001600160a01b038216338486610643565b600087878681811061044757634e487b7160e01b600052603260045260246000fd5b9050602002013590506000808211156104e9576000846001600160a01b0316639ed374f76040518163ffffffff1660e01b815260040160206040518083038186803b15801561049557600080fd5b505afa1580156104a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104cd9190610ae5565b91508190506104e76001600160a01b038216338786610643565b505b604051633c6b16ab60e01b8152600481018690526001600160a01b03851690633c6b16ab90602401600060405180830381600087803b15801561052b57600080fd5b505af115801561053f573d6000803e3d6000fd5b5050604080513381526001600160a01b03888116602083015287811682840152606082018a90528516608082015260a0810186905290517f811c3d3b444e7a4c0015bb0ac2b2d16c91c3de8d09cd769f258e15c42048f6c793509081900360c0019150a1505050505080806105b390610c32565b91505061032f565b5050505050505050565b6105cd6105d9565b6105d6816106a3565b50565b6105e1610797565b6001600160a01b0316336001600160a01b0316146106415760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e206578656375746500000000000000604482015260640161015a565b565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261069d90859061082f565b50505050565b6001600160a01b0381166106eb5760405162461bcd60e51b815260206004820152600f60248201526e41646472657373206973207a65726f60881b604482015260640161015a565b6001600160a01b03811660009081526020819052604090205460ff161561074b5760405162461bcd60e51b815260206004820152601460248201527320b63932b0b23c90333ab7321036b0b730b3b2b960611b604482015260640161015a565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517fbd86fc1ae387829c0b7f84e52ed8685721b367d8169f630a5ff878ef7750b25f9190a250565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156107f257600080fd5b505afa158015610806573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082a9190610ae5565b905090565b6000610884826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166109069092919063ffffffff16565b80519091501561090157808060200190518101906108a29190610b97565b6109015760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161015a565b505050565b6060610915848460008561091f565b90505b9392505050565b6060824710156109805760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161015a565b843b6109ce5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161015a565b600080866001600160a01b031685876040516109ea9190610bb7565b60006040518083038185875af1925050503d8060008114610a27576040519150601f19603f3d011682016040523d82523d6000602084013e610a2c565b606091505b5091509150610a3c828286610a47565b979650505050505050565b60608315610a56575081610918565b825115610a665782518084602001fd5b8160405162461bcd60e51b815260040161015a9190610bd3565b60008083601f840112610a91578182fd5b50813567ffffffffffffffff811115610aa8578182fd5b6020830191508360208083028501011115610ac257600080fd5b9250929050565b600060208284031215610ada578081fd5b813561091881610c59565b600060208284031215610af6578081fd5b815161091881610c59565b60008060008060008060608789031215610b19578182fd5b863567ffffffffffffffff80821115610b30578384fd5b610b3c8a838b01610a80565b90985096506020890135915080821115610b54578384fd5b610b608a838b01610a80565b90965094506040890135915080821115610b78578384fd5b50610b8589828a01610a80565b979a9699509497509295939492505050565b600060208284031215610ba8578081fd5b81518015158114610918578182fd5b60008251610bc9818460208701610c06565b9190910192915050565b6000602082528251806020840152610bf2816040850160208701610c06565b601f01601f19169190910160400192915050565b60005b83811015610c21578181015183820152602001610c09565b8381111561069d5750506000910152565b6000600019821415610c5257634e487b7160e01b81526011600452602481fd5b5060010190565b6001600160a01b03811681146105d657600080fdfea264697066735822122072faf09f25f72633f551f1f7117f6eb0c0571ab214749a62958ccc8f39aae0ee64736f6c63430008020033";

export class RewardsDistributor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nexus: string,
    _fundManagers: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardsDistributor> {
    return super.deploy(
      _nexus,
      _fundManagers,
      overrides || {}
    ) as Promise<RewardsDistributor>;
  }
  getDeployTransaction(
    _nexus: string,
    _fundManagers: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_nexus, _fundManagers, overrides || {});
  }
  attach(address: string): RewardsDistributor {
    return super.attach(address) as RewardsDistributor;
  }
  connect(signer: Signer): RewardsDistributor__factory {
    return super.connect(signer) as RewardsDistributor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardsDistributorInterface {
    return new utils.Interface(_abi) as RewardsDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardsDistributor {
    return new Contract(address, _abi, signerOrProvider) as RewardsDistributor;
  }
}
