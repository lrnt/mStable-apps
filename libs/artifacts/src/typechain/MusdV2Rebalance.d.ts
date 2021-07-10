/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MusdV2RebalanceInterface extends ethers.utils.Interface {
  functions: {
    "callFunction(address,tuple,bytes)": FunctionFragment;
    "currencies(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "swapOutTusd(address,uint256,address)": FunctionFragment;
    "swapOutTusdAndUsdt(address,uint256,address,uint256[])": FunctionFragment;
    "tokenToMarketId(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "callFunction",
    values: [string, { owner: string; number: BigNumberish }, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "currencies", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapOutTusd",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapOutTusdAndUsdt",
    values: [string, BigNumberish, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToMarketId",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "callFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "currencies", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapOutTusd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapOutTusdAndUsdt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenToMarketId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "FlashLoan(address,uint256,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Swapped(address,address,address,uint256,address)": EventFragment;
    "TokenExchange(address,int128,uint256,int128,uint256)": EventFragment;
    "TokenExchangeUnderlying(address,int128,uint256,int128,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FlashLoan"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swapped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenExchange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenExchangeUnderlying"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class MusdV2Rebalance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MusdV2RebalanceInterface;

  functions: {
    callFunction(
      arg0: string,
      arg1: { owner: string; number: BigNumberish },
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currencies(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapOutTusd(
      flashToken: string,
      flashAmount: BigNumberish,
      funderAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapOutTusdAndUsdt(
      flashToken: string,
      arg1: BigNumberish,
      funderAccount: string,
      swapInputs: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenToMarketId(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  callFunction(
    arg0: string,
    arg1: { owner: string; number: BigNumberish },
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currencies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapOutTusd(
    flashToken: string,
    flashAmount: BigNumberish,
    funderAccount: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapOutTusdAndUsdt(
    flashToken: string,
    arg1: BigNumberish,
    funderAccount: string,
    swapInputs: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenToMarketId(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    callFunction(
      arg0: string,
      arg1: { owner: string; number: BigNumberish },
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    currencies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    swapOutTusd(
      flashToken: string,
      flashAmount: BigNumberish,
      funderAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapOutTusdAndUsdt(
      flashToken: string,
      arg1: BigNumberish,
      funderAccount: string,
      swapInputs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    tokenToMarketId(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    FlashLoan(
      flashToken?: null,
      flashLoanAmount?: null,
      funderAccount?: null,
      flashLoanShortfall?: null
    ): TypedEventFilter<
      [string, BigNumber, string, BigNumber],
      {
        flashToken: string;
        flashLoanAmount: BigNumber;
        funderAccount: string;
        flashLoanShortfall: BigNumber;
      }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    Swapped(
      swapper?: string | null,
      input?: null,
      output?: null,
      outputAmount?: null,
      recipient?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, string],
      {
        swapper: string;
        input: string;
        output: string;
        outputAmount: BigNumber;
        recipient: string;
      }
    >;

    TokenExchange(
      buyer?: string | null,
      sold_id?: null,
      tokens_sold?: null,
      bought_id?: null,
      tokens_bought?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        buyer: string;
        sold_id: BigNumber;
        tokens_sold: BigNumber;
        bought_id: BigNumber;
        tokens_bought: BigNumber;
      }
    >;

    TokenExchangeUnderlying(
      buyer?: string | null,
      sold_id?: null,
      tokens_sold?: null,
      bought_id?: null,
      tokens_bought?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        buyer: string;
        sold_id: BigNumber;
        tokens_sold: BigNumber;
        bought_id: BigNumber;
        tokens_bought: BigNumber;
      }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    callFunction(
      arg0: string,
      arg1: { owner: string; number: BigNumberish },
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currencies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapOutTusd(
      flashToken: string,
      flashAmount: BigNumberish,
      funderAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapOutTusdAndUsdt(
      flashToken: string,
      arg1: BigNumberish,
      funderAccount: string,
      swapInputs: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenToMarketId(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callFunction(
      arg0: string,
      arg1: { owner: string; number: BigNumberish },
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currencies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapOutTusd(
      flashToken: string,
      flashAmount: BigNumberish,
      funderAccount: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapOutTusdAndUsdt(
      flashToken: string,
      arg1: BigNumberish,
      funderAccount: string,
      swapInputs: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenToMarketId(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
