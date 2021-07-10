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
  RevenueRecipient,
  RevenueRecipientInterface,
} from "../RevenueRecipient";

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
        name: "_targetPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_balToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_minOut",
        type: "uint256[]",
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
        name: "mAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "RevenueDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "RevenueReceived",
    type: "event",
  },
  {
    inputs: [],
    name: "BAL",
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
        name: "asset",
        type: "address",
      },
    ],
    name: "approveAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_mAssets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_percentages",
        type: "uint256[]",
      },
    ],
    name: "depositToPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mBPT",
    outputs: [
      {
        internalType: "contract IBPool",
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
        name: "_recipient",
        type: "address",
      },
    ],
    name: "migrate",
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
    name: "minOut",
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
        name: "_mAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "notifyRedistributionAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_output",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pct",
        type: "uint256",
      },
    ],
    name: "reinvestBAL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minOut",
        type: "uint256",
      },
    ],
    name: "updateAmountOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162001cdb38038062001cdb833981016040819052620000349162000614565b846001600160a01b038116620000915760405162461bcd60e51b815260206004820152601560248201527f4e657875732061646472657373206973207a65726f000000000000000000000060448201526064015b60405180910390fd5b6001600160601b0319606091821b811660805285821b811660a0529084901b1660c052815160005b818110156200019f57828181518110620000e357634e487b7160e01b600052603260045260246000fd5b60200260200101516000808684815181106200010f57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020819055506200018a866000198684815181106200016457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316620001ac60201b62000bd5179092919060201c565b80620001968162000835565b915050620000b9565b5050505050505062000873565b8015806200023a5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015620001fd57600080fd5b505afa15801562000212573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023891906200073d565b155b620002ae5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840162000088565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620003069185916200030b16565b505050565b600062000367826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316620003e960201b62000d31179092919060201c565b8051909150156200030657808060200190518101906200038891906200071b565b620003065760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840162000088565b6060620003fa848460008562000404565b90505b9392505050565b606082471015620004675760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840162000088565b620004728562000540565b620004c05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000088565b600080866001600160a01b03168587604051620004de919062000756565b60006040518083038185875af1925050503d80600081146200051d576040519150601f19603f3d011682016040523d82523d6000602084013e62000522565b606091505b509092509050620005358282866200054a565b979650505050505050565b803b15155b919050565b606083156200055b575081620003fd565b8251156200056c5782518084602001fd5b8160405162461bcd60e51b815260040162000088919062000774565b80516001600160a01b03811681146200054557600080fd5b600082601f830112620005b1578081fd5b81516020620005ca620005c483620007dc565b620007a9565b8281528181019085830183850287018401881015620005e7578586fd5b855b858110156200060757815184529284019290840190600101620005e9565b5090979650505050505050565b600080600080600060a086880312156200062c578081fd5b620006378662000588565b945060206200064881880162000588565b9450620006586040880162000588565b60608801519094506001600160401b038082111562000675578384fd5b818901915089601f83011262000689578384fd5b81516200069a620005c482620007dc565b81815284810190848601868402860187018e1015620006b7578788fd5b8795505b83861015620006e457620006cf8162000588565b835260019590950194918601918601620006bb565b5060808c01519097509450505080831115620006fe578384fd5b50506200070e88828901620005a0565b9150509295509295909350565b6000602082840312156200072d578081fd5b81518015158114620003fd578182fd5b6000602082840312156200074f578081fd5b5051919050565b600082516200076a81846020870162000802565b9190910192915050565b60006020825282518060208401526200079581604085016020870162000802565b601f01601f19169190910160400192915050565b604051601f8201601f191681016001600160401b0381118282101715620007d457620007d46200085d565b604052919050565b60006001600160401b03821115620007f857620007f86200085d565b5060209081020190565b60005b838110156200081f57818101518382015260200162000805565b838111156200082f576000848401525b50505050565b60006000198214156200085657634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b60805160601c60a05160601c60c05160601c6113e3620008f8600039600081816101a20152818161067e0152818161074a015281816107e001528181610b260152610baa01526000818160db015281816104a80152818161088b015281816109ec01528181610a210152610a68015260008181610168015261102001526113e36000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a3bd828c11610066578063a3bd828c14610150578063a3f5c1d214610163578063a75995e41461018a578063beeadf161461019d578063ce5494bb146101c45761009e565b80630da13bec146100a35780633a9e5736146100d6578063706d0186146101155780637bf305391461012a5780639fa87ffb1461013d575b600080fd5b6100c36100b1366004611136565b60006020819052908152604090205481565b6040519081526020015b60405180910390f35b6100fd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100cd565b6101286101233660046111be565b6101d7565b005b6101286101383660046111e9565b610233565b61012861014b3660046111be565b61058c565b61012861015e36600461116e565b6105b0565b6100fd7f000000000000000000000000000000000000000000000000000000000000000081565b610128610198366004611136565b6109d5565b6100fd7f000000000000000000000000000000000000000000000000000000000000000081565b6101286101d2366004611136565b610a4b565b6101ec6001600160a01b038316333084610d4a565b816001600160a01b03167f10221063d064b7f08df50a7b688426682343e6067582ebc0802467b91b9ac7418260405161022791815260200190565b60405180910390a25050565b82801580159061024257508082145b6102825760405162461bcd60e51b815260206004820152600c60248201526b496e76616c6964206172677360a01b60448201526064015b60405180910390fd5b60005b818110156105845760008484838181106102af57634e487b7160e01b600052603260045260246000fd5b90506020020135905066038d7ea4c68000811180156102d65750670de0b6b3a76400008111155b6103105760405162461bcd60e51b815260206004820152600b60248201526a125b9d985b1a59081c18dd60aa1b6044820152606401610279565b600087878481811061033257634e487b7160e01b600052603260045260246000fd5b90506020020160208101906103479190611136565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a082319060240160206040518083038186803b15801561038c57600080fd5b505afa1580156103a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c49190611272565b90506000670de0b6b3a76400006103db858461131c565b6103e591906112fc565b6001600160a01b03841660009081526020819052604090205490915061043e5760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081b5a5b9bdd5d60921b6044820152606401610279565b6001600160a01b038316600090815260208190526040812054670de0b6b3a76400009061046b908461131c565b61047591906112fc565b604051635db3427760e01b81526001600160a01b03868116600483015260248201859052604482018390529192506000917f00000000000000000000000000000000000000000000000000000000000000001690635db3427790606401602060405180830381600087803b1580156104ec57600080fd5b505af1158015610500573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105249190611272565b60408051858152602081018390529192506001600160a01b038716917f2f22b7f6e7f7df7d0eb3d1a543a2b6eb906e76a03540c2d66d2725270a5f6d31910160405180910390a2505050505050808061057c90611367565b915050610285565b505050505050565b610594610d88565b6001600160a01b03909116600090815260208190526040902055565b6105b8610d88565b6001600160a01b03841660009081526020819052604090205461060e5760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081bdd5d1c1d5d60921b6044820152606401610279565b66038d7ea4c680008111801561062c5750670de0b6b3a76400008111155b6106665760405162461bcd60e51b815260206004820152600b60248201526a125b9d985b1a59081c18dd60aa1b6044820152606401610279565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b1580156106c857600080fd5b505afa1580156106dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107009190611272565b90506000670de0b6b3a7640000610717848461131c565b61072191906112fc565b60405163095ea7b360e01b81526001600160a01b038981166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063095ea7b390604401602060405180830381600087803b15801561079057600080fd5b505af11580156107a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c89190611252565b50604051638201aa3f60e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152602482018390528781166044830152606482018790526084820186905260009190891690638201aa3f9060a4016040805180830381600087803b15801561084c57600080fd5b505af1158015610860573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610884919061128a565b50905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635db342778984670de0b6b3a76400006000808e6001600160a01b03166001600160a01b0316815260200190815260200160002054876108f3919061131c565b6108fd91906112fc565b6040516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091526044820152606401602060405180830381600087803b15801561094b57600080fd5b505af115801561095f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109839190611272565b60408051848152602081018390529192506001600160a01b038a16917f2f22b7f6e7f7df7d0eb3d1a543a2b6eb906e76a03540c2d66d2725270a5f6d31910160405180910390a2505050505050505050565b6109dd610d88565b610a126001600160a01b0382167f00000000000000000000000000000000000000000000000000000000000000006000610bd5565b610a486001600160a01b0382167f0000000000000000000000000000000000000000000000000000000000000000600019610bd5565b50565b610a53610d88565b6040516370a0823160e01b81523060048201527f000000000000000000000000000000000000000000000000000000000000000090610b039083906001600160a01b038416906370a082319060240160206040518083038186803b158015610aba57600080fd5b505afa158015610ace573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af29190611272565b6001600160a01b0384169190610df2565b6040516370a0823160e01b8152306004820152610bd19083906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b158015610b6857600080fd5b505afa158015610b7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba09190611272565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190610df2565b5050565b801580610c5e5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015610c2457600080fd5b505afa158015610c38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5c9190611272565b155b610cc95760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610279565b6040516001600160a01b038316602482015260448101829052610d2c90849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610e22565b505050565b6060610d408484600085610ef4565b90505b9392505050565b6040516001600160a01b0380851660248301528316604482015260648101829052610d829085906323b872dd60e01b90608401610cf5565b50505050565b610d9061101c565b6001600160a01b0316336001600160a01b031614610df05760405162461bcd60e51b815260206004820152601960248201527f4f6e6c7920676f7665726e6f722063616e2065786563757465000000000000006044820152606401610279565b565b6040516001600160a01b038316602482015260448101829052610d2c90849063a9059cbb60e01b90606401610cf5565b6000610e77826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610d319092919063ffffffff16565b805190915015610d2c5780806020019051810190610e959190611252565b610d2c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610279565b606082471015610f555760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610279565b843b610fa35760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610279565b600080866001600160a01b03168587604051610fbf91906112ad565b60006040518083038185875af1925050503d8060008114610ffc576040519150601f19603f3d011682016040523d82523d6000602084013e611001565b606091505b50915091506110118282866110b4565b979650505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561107757600080fd5b505afa15801561108b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110af9190611152565b905090565b606083156110c3575081610d43565b8251156110d35782518084602001fd5b8160405162461bcd60e51b815260040161027991906112c9565b60008083601f8401126110fe578182fd5b50813567ffffffffffffffff811115611115578182fd5b602083019150836020808302850101111561112f57600080fd5b9250929050565b600060208284031215611147578081fd5b8135610d4381611398565b600060208284031215611163578081fd5b8151610d4381611398565b600080600080600060a08688031215611185578081fd5b853561119081611398565b945060208601356111a081611398565b94979496505050506040830135926060810135926080909101359150565b600080604083850312156111d0578182fd5b82356111db81611398565b946020939093013593505050565b600080600080604085870312156111fe578384fd5b843567ffffffffffffffff80821115611215578586fd5b611221888389016110ed565b90965094506020870135915080821115611239578384fd5b50611246878288016110ed565b95989497509550505050565b600060208284031215611263578081fd5b81518015158114610d43578182fd5b600060208284031215611283578081fd5b5051919050565b6000806040838503121561129c578182fd5b505080516020909101519092909150565b600082516112bf81846020870161133b565b9190910192915050565b60006020825282518060208401526112e881604085016020870161133b565b601f01601f19169190910160400192915050565b60008261131757634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561133657611336611382565b500290565b60005b8381101561135657818101518382015260200161133e565b83811115610d825750506000910152565b600060001982141561137b5761137b611382565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610a4857600080fdfea26469706673582212200e9399b8c74caf71656d1c90d6a0d2b4b1a34241c6905cc70055c9c789077a8664736f6c63430008020033";

export class RevenueRecipient__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _nexus: string,
    _targetPool: string,
    _balToken: string,
    _assets: string[],
    _minOut: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RevenueRecipient> {
    return super.deploy(
      _nexus,
      _targetPool,
      _balToken,
      _assets,
      _minOut,
      overrides || {}
    ) as Promise<RevenueRecipient>;
  }
  getDeployTransaction(
    _nexus: string,
    _targetPool: string,
    _balToken: string,
    _assets: string[],
    _minOut: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nexus,
      _targetPool,
      _balToken,
      _assets,
      _minOut,
      overrides || {}
    );
  }
  attach(address: string): RevenueRecipient {
    return super.attach(address) as RevenueRecipient;
  }
  connect(signer: Signer): RevenueRecipient__factory {
    return super.connect(signer) as RevenueRecipient__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RevenueRecipientInterface {
    return new utils.Interface(_abi) as RevenueRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RevenueRecipient {
    return new Contract(address, _abi, signerOrProvider) as RevenueRecipient;
  }
}
