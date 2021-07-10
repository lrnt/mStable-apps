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
  StakingRewardsWithPlatformToken,
  StakingRewardsWithPlatformTokenInterface,
} from "../StakingRewardsWithPlatformToken";

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
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_platformToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_duration",
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
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformReward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformReward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
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
        name: "payer",
        type: "address",
      },
    ],
    name: "Staked",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "DURATION",
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
        name: "_account",
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
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimRewardOnly",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_account",
        type: "address",
      },
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
        internalType: "address",
        name: "_rewardsDistributorArg",
        type: "address",
      },
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
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
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
    name: "lastUpdateTime",
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
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "periodFinish",
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
    name: "platformRewardPerTokenStored",
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
    name: "platformRewardRate",
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
        name: "",
        type: "address",
      },
    ],
    name: "platformRewards",
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
    name: "platformToken",
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
    name: "platformTokenVendor",
    outputs: [
      {
        internalType: "contract PlatformTokenVendor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "rewardPerTokenStored",
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
    name: "rewardRate",
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
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
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
    name: "rewardsDistributor",
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
    name: "rewardsToken",
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
        internalType: "address",
        name: "_rewardsDistributor",
        type: "address",
      },
    ],
    name: "setRewardsDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
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
        name: "",
        type: "address",
      },
    ],
    name: "userPlatformRewardPerTokenPaid",
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
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040526000600755600060085560006009553480156200002157600080fd5b5060405162002c6d38038062002c6d833981016040819052620000449162000103565b6001600160601b0319606085901b1660805284806001600160a01b038116620000b35760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f0000000000000000000000604482015260640160405180910390fd5b6001600160601b0319606091821b811660a05294811b851660c0529290921b90921660e052506101005250620001699050565b80516001600160a01b0381168114620000fe57600080fd5b919050565b600080600080600060a086880312156200011b578081fd5b6200012686620000e6565b94506200013660208701620000e6565b93506200014660408701620000e6565b92506200015660608701620000e6565b9150608086015190509295509295909350565b60805160601c60a05160601c60c05160601c60e05160601c61010051612a4a620002236000396000818161031b01528181610b3201528181610b6101528181610bba01528181610c0a0152610c530152600081816104ac0152818161058701528181610a5501528181610af601528181610dff015261168b0152600081816103d90152818161055f01526115cc0152600081816104d7015261170001526000818161043001528181611316015261192f0152612a4a6000f3fe60806040523480156200001157600080fd5b50600436106200024f5760003560e01c8063906571471162000141578063c8f33c9111620000bd578063df136d651162000087578063df136d6514620005a9578063e882025a14620005b3578063e9fad8ee14620005bd578063ebe2b12b14620005c7578063f9ce7d4714620005d1576200024f565b8063c8f33c911462000545578063cd3daf9d146200054f578063d1af0c7d1462000559578063d1b812cd1462000581576200024f565b8063a694fc3a116200010b578063a694fc3a14620004f9578063adc9772e1462000510578063b88a802f1462000527578063c014a3201462000531578063c5869a06146200053b576200024f565b806390657147146200048957806395d89b4114620004a05780639ed374f714620004aa578063a3f5c1d214620004d1576200024f565b80633c6b16ab11620001d157806370a08231116200019b57806370a0823114620003fe57806372f702f3146200042a5780637b0a47ee146200045257806380faa57d146200045c5780638b8763471462000466576200024f565b80633c6b16ab14620003705780633f2a5540146200038757806347f5306814620003b457806369940d7914620003d7576200024f565b806318160ddd116200021f57806318160ddd14620002f35780631976214314620002fc5780631be0528914620003155780632e1a7d4d146200033d578063313ce5671462000354576200024f565b80628cc262146200025457806306fdde0314620002855780630700037d146200029e5780630b12a95214620002d0575b600080fd5b6200026b6200026536600462001c05565b620005e5565b604080519283526020830191909152015b60405180910390f35b6200028f620006ed565b6040516200027c919062001d6c565b620002c1620002af36600462001c05565b600f6020526000908152604090205481565b6040519081526020016200027c565b620002c1620002e136600462001c05565b60106020526000908152604090205481565b600354620002c1565b620003136200030d36600462001c05565b62000783565b005b620002c17f000000000000000000000000000000000000000000000000000000000000000081565b620003136200034e36600462001d1c565b620007af565b6200035d601281565b60405160ff90911681526020016200027c565b620003136200038136600462001d1c565b620008d8565b6005546200039b906001600160a01b031681565b6040516001600160a01b0390911681526020016200027c565b620002c1620003c536600462001c05565b600e6020526000908152604090205481565b7f00000000000000000000000000000000000000000000000000000000000000006200039b565b620002c16200040f36600462001c05565b6001600160a01b031660009081526004602052604090205490565b6200039b7f000000000000000000000000000000000000000000000000000000000000000081565b620002c160085481565b620002c162000cbd565b620002c16200047736600462001c05565b600d6020526000908152604090205481565b620003136200049a36600462001c43565b62000cd2565b6200028f62000e95565b7f00000000000000000000000000000000000000000000000000000000000000006200039b565b6200039b7f000000000000000000000000000000000000000000000000000000000000000081565b620003136200050a36600462001d1c565b62000ea4565b620003136200052136600462001ccc565b62000eb3565b6200031362000ec3565b6200031362000fbb565b620002c1600c5481565b620002c1600a5481565b6200026b6200109b565b6200039b7f000000000000000000000000000000000000000000000000000000000000000081565b6200039b7f000000000000000000000000000000000000000000000000000000000000000081565b620002c1600b5481565b620002c160095481565b6200031362001157565b620002c160075481565b6006546200039b906001600160a01b031681565b600080600080620005f56200109b565b6001600160a01b0387166000908152600d60205260408120549294509092509062000621908462001dff565b6001600160a01b0387166000908152600e6020526040812054919250906200064a908462001dff565b905060006200066e886001600160a01b031660009081526004602052604090205490565b905060006200067e82856200117e565b905060006200068e83856200117e565b6001600160a01b038b166000908152600f6020526040902054909150620006b790839062001da1565b6001600160a01b038b16600090815260106020526040902054620006dd90839062001da1565b9850985050505050505050915091565b60018054620006fc9062001e48565b80601f01602080910402602001604051908101604052809291908181526020018280546200072a9062001e48565b80156200077b5780601f106200074f576101008083540402835291602001916200077b565b820191906000526020600020905b8154815290600101906020018083116200075d57829003601f168201915b505050505081565b6200078d6200119c565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b33600080620007bd6200109b565b915091506000821180620007d15750600081115b156200084757600b829055600c819055620007eb62000cbd565b600a556001600160a01b0383161562000847576200080983620005e5565b6001600160a01b0385166000908152600f60209081526040808320601083528184209490945593909255600d8252828120859055600e909152208190555b60008411620008915760405162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b60448201526064015b60405180910390fd5b6200089c8462001208565b60405184815233907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5906020015b60405180910390a250505050565b6005546001600160a01b03163314620009345760405162461bcd60e51b815260206004820181905260248201527f43616c6c6572206973206e6f7420726577617264206469737472696275746f72604482015260640162000888565b6000806000620009436200109b565b915091506000821180620009575750600081115b15620009cd57600b829055600c8190556200097162000cbd565b600a556001600160a01b03831615620009cd576200098f83620005e5565b6001600160a01b0385166000908152600f60209081526040808320601083528184209490945593909255600d8252828120859055600e909152208190555b69d3c21bcecceda1000000841062000a3d5760405162461bcd60e51b815260206004820152602c60248201527f43616e6e6f74206e6f746966792077697468206d6f7265207468616e2061206d60448201526b696c6c696f6e20756e69747360a01b606482015260840162000888565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801562000aa057600080fd5b505afa15801562000ab5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000adb919062001d35565b9050801562000b205760065462000b20906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691168362001392565b6007544290811062000b905762000b587f00000000000000000000000000000000000000000000000000000000000000008762001dbc565b60085562000b877f00000000000000000000000000000000000000000000000000000000000000008362001dbc565b60095562000c48565b60008160075462000ba2919062001dff565b905060006008548262000bb6919062001ddd565b90507f000000000000000000000000000000000000000000000000000000000000000062000be5828a62001da1565b62000bf1919062001dbc565b60085560095460009062000c06908462001ddd565b90507f000000000000000000000000000000000000000000000000000000000000000062000c35828762001da1565b62000c41919062001dbc565b6009555050505b600a81905562000c797f00000000000000000000000000000000000000000000000000000000000000008262001da1565b60075560408051878152602081018490527f6c07ee05dcf262f13abf9d87b846ee789d2f90fe991d495acd7d7fc109ee1f55910160405180910390a1505050505050565b600062000ccd42600754620013fc565b905090565b600054610100900460ff168062000cec575060005460ff16155b62000d515760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840162000888565b600054610100900460ff1615801562000d7d576000805460ff1961ff0019909116610100171660011790555b62000d88866200078d565b62000dfd85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284376000920191909152506200141392505050565b7f000000000000000000000000000000000000000000000000000000000000000060405162000e2c9062001b07565b6001600160a01b039091168152602001604051809103906000f08015801562000e59573d6000803e3d6000fd5b50600680546001600160a01b0319166001600160a01b0392909216919091179055801562000e8d576000805461ff00191690555b505050505050565b60028054620006fc9062001e48565b62000eb0338262001455565b50565b62000ebf828262001455565b5050565b3360008062000ed16200109b565b91509150600082118062000ee55750600081115b1562000f5b57600b829055600c81905562000eff62000cbd565b600a556001600160a01b0383161562000f5b5762000f1d83620005e5565b6001600160a01b0385166000908152600f60209081526040808320601083528184209490945593909255600d8252828120859055600e909152208190555b600062000f676200157d565b9050600062000f7562001652565b604080518481526020810183905291925033917fd6f2c8500df5b44f11e9e48b91ff9f1b9d81bc496d55570c2b1b75bf65243f5191015b60405180910390a25050505050565b3360008062000fc96200109b565b91509150600082118062000fdd5750600081115b156200105357600b829055600c81905562000ff762000cbd565b600a556001600160a01b0383161562001053576200101583620005e5565b6001600160a01b0385166000908152600f60209081526040808320601083528184209490945593909255600d8252828120859055600e909152208190555b60006200105f6200157d565b604080518281526000602082015291925033917fd6f2c8500df5b44f11e9e48b91ff9f1b9d81bc496d55570c2b1b75bf65243f519101620008ca565b6000806000620010aa60035490565b905080620010c357600b54600c54925092505062001153565b6000600a54620010d262000cbd565b620010de919062001dff565b9050600081600854620010f2919062001ddd565b905060008260095462001106919062001ddd565b90506000620011168386620016b6565b90506000620011268387620016b6565b905081600b5462001138919062001da1565b81600c5462001148919062001da1565b975097505050505050505b9091565b3360009081526004602052604090205462001172906200034e565b6200117c62000ec3565b565b6000620011958383670de0b6b3a7640000620016d9565b9392505050565b620011a6620016fc565b6001600160a01b0316336001600160a01b0316146200117c5760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e206578656375746500000000000000604482015260640162000888565b60005462010000900460ff16620012625760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640162000888565b6000805462ff00001916815533815260046020526040902054811115620012cc5760405162461bcd60e51b815260206004820152601760248201527f4e6f7420656e6f75676820757365722072657761726473000000000000000000604482015260640162000888565b80600354620012dc919062001dff565b60035533600090815260046020526040902054620012fc90829062001dff565b3360008181526004602052604090209190915562001346907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316908362001392565b60405181815260009033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3506000805462ff0000191662010000179055565b6040516001600160a01b038316602482015260448101829052620013f790849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915262001793565b505050565b60008183116200140d578262001195565b50919050565b6200142a6000805462ff0000191662010000179055565b81516200143f90600190602085019062001b15565b508051620013f790600290602084019062001b15565b81600080620014636200109b565b915091506000821180620014775750600081115b15620014ed57600b829055600c8190556200149162000cbd565b600a556001600160a01b03831615620014ed57620014af83620005e5565b6001600160a01b0385166000908152600f60209081526040808320601083528184209490945593909255600d8252828120859055600e909152208190555b60008411620015305760405162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b604482015260640162000888565b6200153c85856200186c565b604080518581523360208201526001600160a01b038716917f9f9e4044c5742cca66ca090b21552bac14645e68bad7a92364a9d9ff18111a1c910162000fac565b336000908152600f6020526040812054801562000ccd57336000818152600f6020526040808220919091555163a9059cbb60e01b81526004810191909152602481018290526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b1580156200161157600080fd5b505af115801562001626573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200164c919062001cfa565b50905090565b33600090815260106020526040812054801562000ccd573360008181526010602052604081205560065462000ccd916001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811692169084620019ae565b600081620016cd670de0b6b3a76400008562001ddd565b62001195919062001dbc565b600081620016e8848662001ddd565b620016f4919062001dbc565b949350505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156200175857600080fd5b505afa1580156200176d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000ccd919062001c24565b6000620017ea826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316620019ee9092919063ffffffff16565b805190915015620013f757808060200190518101906200180b919062001cfa565b620013f75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840162000888565b60005462010000900460ff16620018c65760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640162000888565b6000805462ff000019169055600354620018e290829062001da1565b6003556001600160a01b0382166000908152600460205260409020546200190b90829062001da1565b6001600160a01b0380841660009081526004602052604090209190915562001958907f000000000000000000000000000000000000000000000000000000000000000016333084620019ae565b6040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a350506000805462ff0000191662010000179055565b6040516001600160a01b0380851660248301528316604482015260648101829052620019e89085906323b872dd60e01b90608401620013bf565b50505050565b6060620016f4848460008585843b62001a4a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000888565b600080866001600160a01b0316858760405162001a68919062001d4e565b60006040518083038185875af1925050503d806000811462001aa7576040519150601f19603f3d011682016040523d82523d6000602084013e62001aac565b606091505b509150915062001abe82828662001ac9565b979650505050505050565b6060831562001ada57508162001195565b82511562001aeb5782518084602001fd5b8160405162461bcd60e51b815260040162000888919062001d6c565b610b698062001eac83390190565b82805462001b239062001e48565b90600052602060002090601f01602090048101928262001b47576000855562001b92565b82601f1062001b6257805160ff191683800117855562001b92565b8280016001018555821562001b92579182015b8281111562001b9257825182559160200191906001019062001b75565b5062001ba092915062001ba4565b5090565b5b8082111562001ba0576000815560010162001ba5565b60008083601f84011262001bcd578182fd5b50813567ffffffffffffffff81111562001be5578182fd5b60208301915083602082850101111562001bfe57600080fd5b9250929050565b60006020828403121562001c17578081fd5b8135620011958162001e95565b60006020828403121562001c36578081fd5b8151620011958162001e95565b60008060008060006060868803121562001c5b578081fd5b853562001c688162001e95565b9450602086013567ffffffffffffffff8082111562001c85578283fd5b62001c9389838a0162001bbb565b9096509450604088013591508082111562001cac578283fd5b5062001cbb8882890162001bbb565b969995985093965092949392505050565b6000806040838503121562001cdf578182fd5b823562001cec8162001e95565b946020939093013593505050565b60006020828403121562001d0c578081fd5b8151801515811462001195578182fd5b60006020828403121562001d2e578081fd5b5035919050565b60006020828403121562001d47578081fd5b5051919050565b6000825162001d6281846020870162001e19565b9190910192915050565b600060208252825180602084015262001d8d81604085016020870162001e19565b601f01601f19169190910160400192915050565b6000821982111562001db75762001db762001e7f565b500190565b60008262001dd857634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161562001dfa5762001dfa62001e7f565b500290565b60008282101562001e145762001e1462001e7f565b500390565b60005b8381101562001e3657818101518382015260200162001e1c565b83811115620019e85750506000910152565b60028104600182168062001e5d57607f821691505b602082108114156200140d57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811462000eb057600080fdfe60c06040523480156200001157600080fd5b5060405162000b6938038062000b698339810160408190526200003491620004ad565b33606081811b60a05282901b6001600160601b031916608052620000669082906200006d602090811b6200010617901c565b5062000575565b62000093816000846001600160a01b0316620000be60201b62000135179092919060201c565b620000ba81600019846001600160a01b0316620000be60201b62000135179092919060201c565b5050565b8015806200014c5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156200010f57600080fd5b505afa15801562000124573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014a9190620004d6565b155b620001c45760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200021c9185916200022116565b505050565b60006200027d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316620002ff60201b62000285179092919060201c565b8051909150156200021c57808060200190518101906200029e91906200048b565b6200021c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401620001bb565b60606200031084846000856200031a565b90505b9392505050565b6060824710156200037d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401620001bb565b843b620003cd5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001bb565b600080866001600160a01b03168587604051620003eb9190620004ef565b60006040518083038185875af1925050503d80600081146200042a576040519150601f19603f3d011682016040523d82523d6000602084013e6200042f565b606091505b509092509050620004428282866200044d565b979650505050505050565b606083156200045e57508162000313565b8251156200046f5782518084602001fd5b8160405162461bcd60e51b8152600401620001bb91906200050d565b6000602082840312156200049d578081fd5b8151801515811462000313578182fd5b600060208284031215620004bf578081fd5b81516001600160a01b038116811462000313578182fd5b600060208284031215620004e8578081fd5b5051919050565b600082516200050381846020870162000542565b9190910192915050565b60006020825282518060208401526200052e81604085016020870162000542565b601f01601f19169190910160400192915050565b60005b838110156200055f57818101518382015260200162000545565b838111156200056f576000848401525b50505050565b60805160601c60a05160601c6105be620005ab60003960008181604b015260e0015260008181608e015260bf01526105be6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063488a49e314610046578063d1b812cd14610089578063d8245bb9146100b0575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6100b86100ba565b005b6101047f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610106565b565b61011b6001600160a01b038316826000610135565b6101316001600160a01b03831682600019610135565b5050565b8015806101be5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b15801561018457600080fd5b505afa158015610198573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bc91906104f1565b155b61022e5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261028090849061029e565b505050565b60606102948484600085610370565b90505b9392505050565b60006102f3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166102859092919063ffffffff16565b805190915015610280578080602001905181019061031191906104d1565b6102805760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610225565b6060824710156103d15760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610225565b843b61041f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610225565b600080866001600160a01b0316858760405161043b9190610509565b60006040518083038185875af1925050503d8060008114610478576040519150601f19603f3d011682016040523d82523d6000602084013e61047d565b606091505b509150915061048d828286610498565b979650505050505050565b606083156104a7575081610297565b8251156104b75782518084602001fd5b8160405162461bcd60e51b81526004016102259190610525565b6000602082840312156104e2578081fd5b81518015158114610297578182fd5b600060208284031215610502578081fd5b5051919050565b6000825161051b818460208701610558565b9190910192915050565b6000602082528251806020840152610544816040850160208701610558565b601f01601f19169190910160400192915050565b60005b8381101561057357818101518382015260200161055b565b83811115610582576000848401525b5050505056fea26469706673582212206634ae8860774891a1d0c035a99c4f0f3333cbc5e8de6314979d4ad7067641ba64736f6c63430008020033a2646970667358221220315254afc4b95d7306ce3e291b97f9b2308ce81088ee33254da33298312b45c264736f6c63430008020033";

export class StakingRewardsWithPlatformToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nexus: string,
    _stakingToken: string,
    _rewardsToken: string,
    _platformToken: string,
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakingRewardsWithPlatformToken> {
    return super.deploy(
      _nexus,
      _stakingToken,
      _rewardsToken,
      _platformToken,
      _duration,
      overrides || {}
    ) as Promise<StakingRewardsWithPlatformToken>;
  }
  getDeployTransaction(
    _nexus: string,
    _stakingToken: string,
    _rewardsToken: string,
    _platformToken: string,
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nexus,
      _stakingToken,
      _rewardsToken,
      _platformToken,
      _duration,
      overrides || {}
    );
  }
  attach(address: string): StakingRewardsWithPlatformToken {
    return super.attach(address) as StakingRewardsWithPlatformToken;
  }
  connect(signer: Signer): StakingRewardsWithPlatformToken__factory {
    return super.connect(signer) as StakingRewardsWithPlatformToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingRewardsWithPlatformTokenInterface {
    return new utils.Interface(
      _abi
    ) as StakingRewardsWithPlatformTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingRewardsWithPlatformToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakingRewardsWithPlatformToken;
  }
}
