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

interface PlatformTokenVendorInterface extends ethers.utils.Interface {
  functions: {
    "parentStakingContract()": FunctionFragment;
    "platformToken()": FunctionFragment;
    "reApproveOwner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "parentStakingContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "platformToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reApproveOwner",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "parentStakingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reApproveOwner",
    data: BytesLike
  ): Result;

  events: {};
}

export class PlatformTokenVendor extends BaseContract {
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

  interface: PlatformTokenVendorInterface;

  functions: {
    parentStakingContract(overrides?: CallOverrides): Promise<[string]>;

    platformToken(overrides?: CallOverrides): Promise<[string]>;

    reApproveOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  parentStakingContract(overrides?: CallOverrides): Promise<string>;

  platformToken(overrides?: CallOverrides): Promise<string>;

  reApproveOwner(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    parentStakingContract(overrides?: CallOverrides): Promise<string>;

    platformToken(overrides?: CallOverrides): Promise<string>;

    reApproveOwner(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    parentStakingContract(overrides?: CallOverrides): Promise<BigNumber>;

    platformToken(overrides?: CallOverrides): Promise<BigNumber>;

    reApproveOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    parentStakingContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    platformToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reApproveOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
