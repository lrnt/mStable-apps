/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RenWrapper, RenWrapperInterface } from "../RenWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_mAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gatewayRegistry",
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
        name: "minter",
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
        internalType: "uint256",
        name: "mAssetQuantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "input",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "inputQuantity",
        type: "uint256",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minOutputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_nHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_sig",
        type: "bytes",
      },
    ],
    name: "depositAndMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gatewayRegistry",
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
    name: "mAsset",
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
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200104b3803806200104b833981016040819052620000349162000595565b6001600160a01b038216620000905760405162461bcd60e51b815260206004820152601660248201527f496e76616c6964206d417373657420616464726573730000000000000000000060448201526064015b60405180910390fd5b6001600160601b0319606083901b166080526001600160a01b038116620000fa5760405162461bcd60e51b815260206004820181905260248201527f496e76616c696420676174657761792072656769737472792061646472657373604482015260640162000087565b606081901b6001600160601b03191660a05260405163efa74f1f60e01b815260206004820152600360248201526242544360e81b6044820152620001c4908390600019906001600160a01b0385169063efa74f1f9060640160206040518083038186803b1580156200016b57600080fd5b505afa15801562000180573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a69190620005f5565b6001600160a01b0316620001cc60201b620002a5179092919060201c565b5050620006cc565b8015806200025a5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156200021d57600080fd5b505afa15801562000232573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000258919062000614565b155b620002ce5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840162000087565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b17909152620003269185916200032b16565b505050565b600062000387826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200040960201b620003f0179092919060201c565b805190915015620003265780806020019051810190620003a89190620005d3565b620003265760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840162000087565b60606200041a848460008562000424565b90505b9392505050565b606082471015620004875760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840162000087565b843b620004d75760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000087565b600080866001600160a01b03168587604051620004f591906200062d565b60006040518083038185875af1925050503d806000811462000534576040519150601f19603f3d011682016040523d82523d6000602084013e62000539565b606091505b5090925090506200054c82828662000557565b979650505050505050565b60608315620005685750816200041d565b825115620005795782518084602001fd5b8160405162461bcd60e51b81526004016200008791906200064b565b60008060408385031215620005a8578182fd5b8251620005b581620006b3565b6020840151909250620005c881620006b3565b809150509250929050565b600060208284031215620005e5578081fd5b815180151581146200041d578182fd5b60006020828403121562000607578081fd5b81516200041d81620006b3565b60006020828403121562000626578081fd5b5051919050565b600082516200064181846020870162000680565b9190910192915050565b60006020825282518060208401526200066c81604085016020870162000680565b601f01601f19169190910160400192915050565b60005b838110156200069d57818101518382015260200162000683565b83811115620006ad576000848401525b50505050565b6001600160a01b0381168114620006c957600080fd5b50565b60805160601c60a05160601c610947620007046000396000818160a301528181610131015261043501526000604b01526109476000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063178d341f14610046578063d5b6782114610089578063d693452e1461009e575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61009c610097366004610746565b6100c5565b005b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b604080516001600160a01b038816602082015290810186905260009060600160408051601f19818403018152908290528051602091820120633249b58f60e11b83526004830191909152600360248301526242544360e81b604483015291506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906364936b1e9060640160206040518083038186803b15801561017357600080fd5b505afa158015610187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ab9190610802565b6001600160a01b031663159ab14d83888888886040518663ffffffff1660e01b81526004016101de959493929190610852565b602060405180830381600087803b1580156101f857600080fd5b505af115801561020c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610230919061081e565b90508681116102905760405162461bcd60e51b815260206004820152602160248201527f4d696e746564206173736574206d757374206265203e206d696e206f757470756044820152601d60fa1b60648201526084015b60405180910390fd5b61029b81888a610409565b5050505050505050565b80158061032e5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156102f457600080fd5b505afa158015610308573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032c919061081e565b155b6103995760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610287565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526103eb908490610513565b505050565b60606103ff84846000856105e5565b90505b9392505050565b60405163efa74f1f60e01b815260206004820152600360248201526242544360e81b60448201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063efa74f1f9060640160206040518083038186803b15801561047f57600080fd5b505afa158015610493573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b79190610802565b604080516001600160a01b0385811682526020820187905283168183015260608101879052905191925033917f30873c596f54a2e2e09894670d7e1a48b2433c00204f81fbedf557353c36e7c79181900360800190a250505050565b6000610568826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166103f09092919063ffffffff16565b8051909150156103eb578080602001905181019061058691906107e2565b6103eb5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610287565b6060824710156106465760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610287565b843b6106945760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610287565b600080866001600160a01b031685876040516106b09190610836565b60006040518083038185875af1925050503d80600081146106ed576040519150601f19603f3d011682016040523d82523d6000602084013e6106f2565b606091505b509150915061070282828661070d565b979650505050505050565b6060831561071c575081610402565b82511561072c5782518084602001fd5b8160405162461bcd60e51b81526004016102879190610896565b60008060008060008060a0878903121561075e578182fd5b8635610769816108f9565b9550602087013594506040870135935060608701359250608087013567ffffffffffffffff8082111561079a578384fd5b818901915089601f8301126107ad578384fd5b8135818111156107bb578485fd5b8a60208285010111156107cc578485fd5b6020830194508093505050509295509295509295565b6000602082840312156107f3578081fd5b81518015158114610402578182fd5b600060208284031215610813578081fd5b8151610402816108f9565b60006020828403121561082f578081fd5b5051919050565b600082516108488184602087016108c9565b9190910192915050565b600086825285602083015284604083015260806060830152826080830152828460a084013781830160a090810191909152601f909201601f19160101949350505050565b60006020825282518060208401526108b58160408501602087016108c9565b601f01601f19169190910160400192915050565b60005b838110156108e45781810151838201526020016108cc565b838111156108f3576000848401525b50505050565b6001600160a01b038116811461090e57600080fd5b5056fea264697066735822122016e5ca0448fb12818faf444b6dfd685c1b8b7d20f7084cffac78837ab6e32bff64736f6c63430008020033";

export class RenWrapper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _mAsset: string,
    _gatewayRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RenWrapper> {
    return super.deploy(
      _mAsset,
      _gatewayRegistry,
      overrides || {}
    ) as Promise<RenWrapper>;
  }
  getDeployTransaction(
    _mAsset: string,
    _gatewayRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _mAsset,
      _gatewayRegistry,
      overrides || {}
    );
  }
  attach(address: string): RenWrapper {
    return super.attach(address) as RenWrapper;
  }
  connect(signer: Signer): RenWrapper__factory {
    return super.connect(signer) as RenWrapper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RenWrapperInterface {
    return new utils.Interface(_abi) as RenWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RenWrapper {
    return new Contract(address, _abi, signerOrProvider) as RenWrapper;
  }
}
