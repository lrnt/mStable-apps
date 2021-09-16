import { BigNumber } from 'ethers';
import { BigDecimal } from '@apps/bigdecimal';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Transaction": [
      "ClaimTransaction",
      "CreateLockTransaction",
      "EjectTransaction",
      "IncreaseLockAmountTransaction",
      "IncreaseLockTimeTransaction",
      "WithdrawTransaction"
    ]
  }
};
      export default result;
    
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  BigNumber: BigNumber;
  Bytes: string;
  MstableBigDecimal: BigDecimal;
};







export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};


export type ClaimTransaction = Transaction & {
  id: Scalars['ID'];
  block: Scalars['Int'];
  hash: Scalars['Bytes'];
  reward: Scalars['BigInt'];
  sender: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  type: TransactionType;
  user: Scalars['Bytes'];
};

export type ClaimTransaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  hash?: Maybe<Scalars['Bytes']>;
  hash_not?: Maybe<Scalars['Bytes']>;
  hash_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_contains?: Maybe<Scalars['Bytes']>;
  hash_not_contains?: Maybe<Scalars['Bytes']>;
  reward?: Maybe<Scalars['BigInt']>;
  reward_not?: Maybe<Scalars['BigInt']>;
  reward_gt?: Maybe<Scalars['BigInt']>;
  reward_lt?: Maybe<Scalars['BigInt']>;
  reward_gte?: Maybe<Scalars['BigInt']>;
  reward_lte?: Maybe<Scalars['BigInt']>;
  reward_in?: Maybe<Array<Scalars['BigInt']>>;
  reward_not_in?: Maybe<Array<Scalars['BigInt']>>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  type?: Maybe<TransactionType>;
  type_not?: Maybe<TransactionType>;
  user?: Maybe<Scalars['Bytes']>;
  user_not?: Maybe<Scalars['Bytes']>;
  user_in?: Maybe<Array<Scalars['Bytes']>>;
  user_not_in?: Maybe<Array<Scalars['Bytes']>>;
  user_contains?: Maybe<Scalars['Bytes']>;
  user_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum ClaimTransaction_OrderBy {
  Id = 'id',
  Block = 'block',
  Hash = 'hash',
  Reward = 'reward',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Type = 'type',
  User = 'user'
}

export type CreateLockTransaction = Transaction & {
  id: Scalars['ID'];
  block: Scalars['Int'];
  hash: Scalars['Bytes'];
  lockTime: Scalars['BigInt'];
  provider: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  type: TransactionType;
  value: Scalars['BigInt'];
};

export type CreateLockTransaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  hash?: Maybe<Scalars['Bytes']>;
  hash_not?: Maybe<Scalars['Bytes']>;
  hash_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_contains?: Maybe<Scalars['Bytes']>;
  hash_not_contains?: Maybe<Scalars['Bytes']>;
  lockTime?: Maybe<Scalars['BigInt']>;
  lockTime_not?: Maybe<Scalars['BigInt']>;
  lockTime_gt?: Maybe<Scalars['BigInt']>;
  lockTime_lt?: Maybe<Scalars['BigInt']>;
  lockTime_gte?: Maybe<Scalars['BigInt']>;
  lockTime_lte?: Maybe<Scalars['BigInt']>;
  lockTime_in?: Maybe<Array<Scalars['BigInt']>>;
  lockTime_not_in?: Maybe<Array<Scalars['BigInt']>>;
  provider?: Maybe<Scalars['Bytes']>;
  provider_not?: Maybe<Scalars['Bytes']>;
  provider_in?: Maybe<Array<Scalars['Bytes']>>;
  provider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  provider_contains?: Maybe<Scalars['Bytes']>;
  provider_not_contains?: Maybe<Scalars['Bytes']>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  type?: Maybe<TransactionType>;
  type_not?: Maybe<TransactionType>;
  value?: Maybe<Scalars['BigInt']>;
  value_not?: Maybe<Scalars['BigInt']>;
  value_gt?: Maybe<Scalars['BigInt']>;
  value_lt?: Maybe<Scalars['BigInt']>;
  value_gte?: Maybe<Scalars['BigInt']>;
  value_lte?: Maybe<Scalars['BigInt']>;
  value_in?: Maybe<Array<Scalars['BigInt']>>;
  value_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum CreateLockTransaction_OrderBy {
  Id = 'id',
  Block = 'block',
  Hash = 'hash',
  LockTime = 'lockTime',
  Provider = 'provider',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Type = 'type',
  Value = 'value'
}

export type EjectTransaction = Transaction & {
  id: Scalars['ID'];
  block: Scalars['Int'];
  ejected: Scalars['Bytes'];
  ejector: Scalars['Bytes'];
  hash: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  type: TransactionType;
};

export type EjectTransaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  ejected?: Maybe<Scalars['Bytes']>;
  ejected_not?: Maybe<Scalars['Bytes']>;
  ejected_in?: Maybe<Array<Scalars['Bytes']>>;
  ejected_not_in?: Maybe<Array<Scalars['Bytes']>>;
  ejected_contains?: Maybe<Scalars['Bytes']>;
  ejected_not_contains?: Maybe<Scalars['Bytes']>;
  ejector?: Maybe<Scalars['Bytes']>;
  ejector_not?: Maybe<Scalars['Bytes']>;
  ejector_in?: Maybe<Array<Scalars['Bytes']>>;
  ejector_not_in?: Maybe<Array<Scalars['Bytes']>>;
  ejector_contains?: Maybe<Scalars['Bytes']>;
  ejector_not_contains?: Maybe<Scalars['Bytes']>;
  hash?: Maybe<Scalars['Bytes']>;
  hash_not?: Maybe<Scalars['Bytes']>;
  hash_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_contains?: Maybe<Scalars['Bytes']>;
  hash_not_contains?: Maybe<Scalars['Bytes']>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  type?: Maybe<TransactionType>;
  type_not?: Maybe<TransactionType>;
};

export enum EjectTransaction_OrderBy {
  Id = 'id',
  Block = 'block',
  Ejected = 'ejected',
  Ejector = 'ejector',
  Hash = 'hash',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Type = 'type'
}

export type IncentivisedVotingLockup = {
  id: Scalars['ID'];
  userLockups: Array<UserLockup>;
  stakingRewards: Array<StakingReward>;
  stakingBalances: Array<StakingBalance>;
  votingToken: Token;
  end: Scalars['BigInt'];
  periodFinish: Scalars['Int'];
  lastUpdateTime: Scalars['Int'];
  stakingToken: Token;
  rewardPerTokenStored: Scalars['BigInt'];
  duration: Scalars['BigInt'];
  rewardRate: Scalars['BigInt'];
  rewardsToken: Token;
  rewardsDistributor: RewardsDistributor;
  globalEpoch: Scalars['BigInt'];
  expired: Scalars['Boolean'];
  maxTime: Scalars['BigInt'];
  totalStaticWeight: Scalars['BigInt'];
  totalStakingRewards: Scalars['BigInt'];
  totalValue: Scalars['BigInt'];
};


export type IncentivisedVotingLockupUserLockupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserLockup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserLockup_Filter>;
};


export type IncentivisedVotingLockupStakingRewardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakingReward_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakingReward_Filter>;
};


export type IncentivisedVotingLockupStakingBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakingBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakingBalance_Filter>;
};

export type IncentivisedVotingLockup_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  votingToken?: Maybe<Scalars['String']>;
  votingToken_not?: Maybe<Scalars['String']>;
  votingToken_gt?: Maybe<Scalars['String']>;
  votingToken_lt?: Maybe<Scalars['String']>;
  votingToken_gte?: Maybe<Scalars['String']>;
  votingToken_lte?: Maybe<Scalars['String']>;
  votingToken_in?: Maybe<Array<Scalars['String']>>;
  votingToken_not_in?: Maybe<Array<Scalars['String']>>;
  votingToken_contains?: Maybe<Scalars['String']>;
  votingToken_not_contains?: Maybe<Scalars['String']>;
  votingToken_starts_with?: Maybe<Scalars['String']>;
  votingToken_not_starts_with?: Maybe<Scalars['String']>;
  votingToken_ends_with?: Maybe<Scalars['String']>;
  votingToken_not_ends_with?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['BigInt']>;
  end_not?: Maybe<Scalars['BigInt']>;
  end_gt?: Maybe<Scalars['BigInt']>;
  end_lt?: Maybe<Scalars['BigInt']>;
  end_gte?: Maybe<Scalars['BigInt']>;
  end_lte?: Maybe<Scalars['BigInt']>;
  end_in?: Maybe<Array<Scalars['BigInt']>>;
  end_not_in?: Maybe<Array<Scalars['BigInt']>>;
  periodFinish?: Maybe<Scalars['Int']>;
  periodFinish_not?: Maybe<Scalars['Int']>;
  periodFinish_gt?: Maybe<Scalars['Int']>;
  periodFinish_lt?: Maybe<Scalars['Int']>;
  periodFinish_gte?: Maybe<Scalars['Int']>;
  periodFinish_lte?: Maybe<Scalars['Int']>;
  periodFinish_in?: Maybe<Array<Scalars['Int']>>;
  periodFinish_not_in?: Maybe<Array<Scalars['Int']>>;
  lastUpdateTime?: Maybe<Scalars['Int']>;
  lastUpdateTime_not?: Maybe<Scalars['Int']>;
  lastUpdateTime_gt?: Maybe<Scalars['Int']>;
  lastUpdateTime_lt?: Maybe<Scalars['Int']>;
  lastUpdateTime_gte?: Maybe<Scalars['Int']>;
  lastUpdateTime_lte?: Maybe<Scalars['Int']>;
  lastUpdateTime_in?: Maybe<Array<Scalars['Int']>>;
  lastUpdateTime_not_in?: Maybe<Array<Scalars['Int']>>;
  stakingToken?: Maybe<Scalars['String']>;
  stakingToken_not?: Maybe<Scalars['String']>;
  stakingToken_gt?: Maybe<Scalars['String']>;
  stakingToken_lt?: Maybe<Scalars['String']>;
  stakingToken_gte?: Maybe<Scalars['String']>;
  stakingToken_lte?: Maybe<Scalars['String']>;
  stakingToken_in?: Maybe<Array<Scalars['String']>>;
  stakingToken_not_in?: Maybe<Array<Scalars['String']>>;
  stakingToken_contains?: Maybe<Scalars['String']>;
  stakingToken_not_contains?: Maybe<Scalars['String']>;
  stakingToken_starts_with?: Maybe<Scalars['String']>;
  stakingToken_not_starts_with?: Maybe<Scalars['String']>;
  stakingToken_ends_with?: Maybe<Scalars['String']>;
  stakingToken_not_ends_with?: Maybe<Scalars['String']>;
  rewardPerTokenStored?: Maybe<Scalars['BigInt']>;
  rewardPerTokenStored_not?: Maybe<Scalars['BigInt']>;
  rewardPerTokenStored_gt?: Maybe<Scalars['BigInt']>;
  rewardPerTokenStored_lt?: Maybe<Scalars['BigInt']>;
  rewardPerTokenStored_gte?: Maybe<Scalars['BigInt']>;
  rewardPerTokenStored_lte?: Maybe<Scalars['BigInt']>;
  rewardPerTokenStored_in?: Maybe<Array<Scalars['BigInt']>>;
  rewardPerTokenStored_not_in?: Maybe<Array<Scalars['BigInt']>>;
  duration?: Maybe<Scalars['BigInt']>;
  duration_not?: Maybe<Scalars['BigInt']>;
  duration_gt?: Maybe<Scalars['BigInt']>;
  duration_lt?: Maybe<Scalars['BigInt']>;
  duration_gte?: Maybe<Scalars['BigInt']>;
  duration_lte?: Maybe<Scalars['BigInt']>;
  duration_in?: Maybe<Array<Scalars['BigInt']>>;
  duration_not_in?: Maybe<Array<Scalars['BigInt']>>;
  rewardRate?: Maybe<Scalars['BigInt']>;
  rewardRate_not?: Maybe<Scalars['BigInt']>;
  rewardRate_gt?: Maybe<Scalars['BigInt']>;
  rewardRate_lt?: Maybe<Scalars['BigInt']>;
  rewardRate_gte?: Maybe<Scalars['BigInt']>;
  rewardRate_lte?: Maybe<Scalars['BigInt']>;
  rewardRate_in?: Maybe<Array<Scalars['BigInt']>>;
  rewardRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  rewardsToken?: Maybe<Scalars['String']>;
  rewardsToken_not?: Maybe<Scalars['String']>;
  rewardsToken_gt?: Maybe<Scalars['String']>;
  rewardsToken_lt?: Maybe<Scalars['String']>;
  rewardsToken_gte?: Maybe<Scalars['String']>;
  rewardsToken_lte?: Maybe<Scalars['String']>;
  rewardsToken_in?: Maybe<Array<Scalars['String']>>;
  rewardsToken_not_in?: Maybe<Array<Scalars['String']>>;
  rewardsToken_contains?: Maybe<Scalars['String']>;
  rewardsToken_not_contains?: Maybe<Scalars['String']>;
  rewardsToken_starts_with?: Maybe<Scalars['String']>;
  rewardsToken_not_starts_with?: Maybe<Scalars['String']>;
  rewardsToken_ends_with?: Maybe<Scalars['String']>;
  rewardsToken_not_ends_with?: Maybe<Scalars['String']>;
  rewardsDistributor?: Maybe<Scalars['String']>;
  rewardsDistributor_not?: Maybe<Scalars['String']>;
  rewardsDistributor_gt?: Maybe<Scalars['String']>;
  rewardsDistributor_lt?: Maybe<Scalars['String']>;
  rewardsDistributor_gte?: Maybe<Scalars['String']>;
  rewardsDistributor_lte?: Maybe<Scalars['String']>;
  rewardsDistributor_in?: Maybe<Array<Scalars['String']>>;
  rewardsDistributor_not_in?: Maybe<Array<Scalars['String']>>;
  rewardsDistributor_contains?: Maybe<Scalars['String']>;
  rewardsDistributor_not_contains?: Maybe<Scalars['String']>;
  rewardsDistributor_starts_with?: Maybe<Scalars['String']>;
  rewardsDistributor_not_starts_with?: Maybe<Scalars['String']>;
  rewardsDistributor_ends_with?: Maybe<Scalars['String']>;
  rewardsDistributor_not_ends_with?: Maybe<Scalars['String']>;
  globalEpoch?: Maybe<Scalars['BigInt']>;
  globalEpoch_not?: Maybe<Scalars['BigInt']>;
  globalEpoch_gt?: Maybe<Scalars['BigInt']>;
  globalEpoch_lt?: Maybe<Scalars['BigInt']>;
  globalEpoch_gte?: Maybe<Scalars['BigInt']>;
  globalEpoch_lte?: Maybe<Scalars['BigInt']>;
  globalEpoch_in?: Maybe<Array<Scalars['BigInt']>>;
  globalEpoch_not_in?: Maybe<Array<Scalars['BigInt']>>;
  expired?: Maybe<Scalars['Boolean']>;
  expired_not?: Maybe<Scalars['Boolean']>;
  expired_in?: Maybe<Array<Scalars['Boolean']>>;
  expired_not_in?: Maybe<Array<Scalars['Boolean']>>;
  maxTime?: Maybe<Scalars['BigInt']>;
  maxTime_not?: Maybe<Scalars['BigInt']>;
  maxTime_gt?: Maybe<Scalars['BigInt']>;
  maxTime_lt?: Maybe<Scalars['BigInt']>;
  maxTime_gte?: Maybe<Scalars['BigInt']>;
  maxTime_lte?: Maybe<Scalars['BigInt']>;
  maxTime_in?: Maybe<Array<Scalars['BigInt']>>;
  maxTime_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalStaticWeight?: Maybe<Scalars['BigInt']>;
  totalStaticWeight_not?: Maybe<Scalars['BigInt']>;
  totalStaticWeight_gt?: Maybe<Scalars['BigInt']>;
  totalStaticWeight_lt?: Maybe<Scalars['BigInt']>;
  totalStaticWeight_gte?: Maybe<Scalars['BigInt']>;
  totalStaticWeight_lte?: Maybe<Scalars['BigInt']>;
  totalStaticWeight_in?: Maybe<Array<Scalars['BigInt']>>;
  totalStaticWeight_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalStakingRewards?: Maybe<Scalars['BigInt']>;
  totalStakingRewards_not?: Maybe<Scalars['BigInt']>;
  totalStakingRewards_gt?: Maybe<Scalars['BigInt']>;
  totalStakingRewards_lt?: Maybe<Scalars['BigInt']>;
  totalStakingRewards_gte?: Maybe<Scalars['BigInt']>;
  totalStakingRewards_lte?: Maybe<Scalars['BigInt']>;
  totalStakingRewards_in?: Maybe<Array<Scalars['BigInt']>>;
  totalStakingRewards_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalValue?: Maybe<Scalars['BigInt']>;
  totalValue_not?: Maybe<Scalars['BigInt']>;
  totalValue_gt?: Maybe<Scalars['BigInt']>;
  totalValue_lt?: Maybe<Scalars['BigInt']>;
  totalValue_gte?: Maybe<Scalars['BigInt']>;
  totalValue_lte?: Maybe<Scalars['BigInt']>;
  totalValue_in?: Maybe<Array<Scalars['BigInt']>>;
  totalValue_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum IncentivisedVotingLockup_OrderBy {
  Id = 'id',
  UserLockups = 'userLockups',
  StakingRewards = 'stakingRewards',
  StakingBalances = 'stakingBalances',
  VotingToken = 'votingToken',
  End = 'end',
  PeriodFinish = 'periodFinish',
  LastUpdateTime = 'lastUpdateTime',
  StakingToken = 'stakingToken',
  RewardPerTokenStored = 'rewardPerTokenStored',
  Duration = 'duration',
  RewardRate = 'rewardRate',
  RewardsToken = 'rewardsToken',
  RewardsDistributor = 'rewardsDistributor',
  GlobalEpoch = 'globalEpoch',
  Expired = 'expired',
  MaxTime = 'maxTime',
  TotalStaticWeight = 'totalStaticWeight',
  TotalStakingRewards = 'totalStakingRewards',
  TotalValue = 'totalValue'
}

export type IncreaseLockAmountTransaction = Transaction & {
  id: Scalars['ID'];
  block: Scalars['Int'];
  hash: Scalars['Bytes'];
  provider: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  type: TransactionType;
  value: Scalars['BigInt'];
};

export type IncreaseLockAmountTransaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  hash?: Maybe<Scalars['Bytes']>;
  hash_not?: Maybe<Scalars['Bytes']>;
  hash_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_contains?: Maybe<Scalars['Bytes']>;
  hash_not_contains?: Maybe<Scalars['Bytes']>;
  provider?: Maybe<Scalars['Bytes']>;
  provider_not?: Maybe<Scalars['Bytes']>;
  provider_in?: Maybe<Array<Scalars['Bytes']>>;
  provider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  provider_contains?: Maybe<Scalars['Bytes']>;
  provider_not_contains?: Maybe<Scalars['Bytes']>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  type?: Maybe<TransactionType>;
  type_not?: Maybe<TransactionType>;
  value?: Maybe<Scalars['BigInt']>;
  value_not?: Maybe<Scalars['BigInt']>;
  value_gt?: Maybe<Scalars['BigInt']>;
  value_lt?: Maybe<Scalars['BigInt']>;
  value_gte?: Maybe<Scalars['BigInt']>;
  value_lte?: Maybe<Scalars['BigInt']>;
  value_in?: Maybe<Array<Scalars['BigInt']>>;
  value_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum IncreaseLockAmountTransaction_OrderBy {
  Id = 'id',
  Block = 'block',
  Hash = 'hash',
  Provider = 'provider',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Type = 'type',
  Value = 'value'
}

export type IncreaseLockTimeTransaction = Transaction & {
  id: Scalars['ID'];
  block: Scalars['Int'];
  hash: Scalars['Bytes'];
  lockTime: Scalars['BigInt'];
  provider: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  type: TransactionType;
  timestamp: Scalars['BigInt'];
};

export type IncreaseLockTimeTransaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  hash?: Maybe<Scalars['Bytes']>;
  hash_not?: Maybe<Scalars['Bytes']>;
  hash_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_contains?: Maybe<Scalars['Bytes']>;
  hash_not_contains?: Maybe<Scalars['Bytes']>;
  lockTime?: Maybe<Scalars['BigInt']>;
  lockTime_not?: Maybe<Scalars['BigInt']>;
  lockTime_gt?: Maybe<Scalars['BigInt']>;
  lockTime_lt?: Maybe<Scalars['BigInt']>;
  lockTime_gte?: Maybe<Scalars['BigInt']>;
  lockTime_lte?: Maybe<Scalars['BigInt']>;
  lockTime_in?: Maybe<Array<Scalars['BigInt']>>;
  lockTime_not_in?: Maybe<Array<Scalars['BigInt']>>;
  provider?: Maybe<Scalars['Bytes']>;
  provider_not?: Maybe<Scalars['Bytes']>;
  provider_in?: Maybe<Array<Scalars['Bytes']>>;
  provider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  provider_contains?: Maybe<Scalars['Bytes']>;
  provider_not_contains?: Maybe<Scalars['Bytes']>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  type?: Maybe<TransactionType>;
  type_not?: Maybe<TransactionType>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum IncreaseLockTimeTransaction_OrderBy {
  Id = 'id',
  Block = 'block',
  Hash = 'hash',
  LockTime = 'lockTime',
  Provider = 'provider',
  Sender = 'sender',
  Type = 'type',
  Timestamp = 'timestamp'
}

export enum LockAction {
  CreateLock = 'CREATE_LOCK',
  IncreaseLockAmount = 'INCREASE_LOCK_AMOUNT',
  IncreaseLockTime = 'INCREASE_LOCK_TIME'
}


export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  userLockup?: Maybe<UserLockup>;
  userLockups: Array<UserLockup>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  incentivisedVotingLockup?: Maybe<IncentivisedVotingLockup>;
  incentivisedVotingLockups: Array<IncentivisedVotingLockup>;
  rewardsDistributor?: Maybe<RewardsDistributor>;
  rewardsDistributors: Array<RewardsDistributor>;
  stakingReward?: Maybe<StakingReward>;
  stakingRewards: Array<StakingReward>;
  stakingBalance?: Maybe<StakingBalance>;
  stakingBalances: Array<StakingBalance>;
  withdrawTransaction?: Maybe<WithdrawTransaction>;
  withdrawTransactions: Array<WithdrawTransaction>;
  ejectTransaction?: Maybe<EjectTransaction>;
  ejectTransactions: Array<EjectTransaction>;
  claimTransaction?: Maybe<ClaimTransaction>;
  claimTransactions: Array<ClaimTransaction>;
  createLockTransaction?: Maybe<CreateLockTransaction>;
  createLockTransactions: Array<CreateLockTransaction>;
  increaseLockAmountTransaction?: Maybe<IncreaseLockAmountTransaction>;
  increaseLockAmountTransactions: Array<IncreaseLockAmountTransaction>;
  increaseLockTimeTransaction?: Maybe<IncreaseLockTimeTransaction>;
  increaseLockTimeTransactions: Array<IncreaseLockTimeTransaction>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryUserLockupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUserLockupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserLockup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserLockup_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryIncentivisedVotingLockupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryIncentivisedVotingLockupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IncentivisedVotingLockup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IncentivisedVotingLockup_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRewardsDistributorArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRewardsDistributorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RewardsDistributor_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RewardsDistributor_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStakingRewardArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStakingRewardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakingReward_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakingReward_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStakingBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStakingBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakingBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakingBalance_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryWithdrawTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryWithdrawTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WithdrawTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<WithdrawTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEjectTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEjectTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EjectTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EjectTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryClaimTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryClaimTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ClaimTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ClaimTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCreateLockTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCreateLockTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreateLockTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreateLockTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryIncreaseLockAmountTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryIncreaseLockAmountTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IncreaseLockAmountTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IncreaseLockAmountTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryIncreaseLockTimeTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryIncreaseLockTimeTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IncreaseLockTimeTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IncreaseLockTimeTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type RewardsDistributor = {
  id: Scalars['ID'];
  fundManagers: Array<Scalars['Bytes']>;
};

export type RewardsDistributor_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  fundManagers?: Maybe<Array<Scalars['Bytes']>>;
  fundManagers_not?: Maybe<Array<Scalars['Bytes']>>;
  fundManagers_contains?: Maybe<Array<Scalars['Bytes']>>;
  fundManagers_not_contains?: Maybe<Array<Scalars['Bytes']>>;
};

export enum RewardsDistributor_OrderBy {
  Id = 'id',
  FundManagers = 'fundManagers'
}

export type StakingBalance = {
  id: Scalars['ID'];
  account: Scalars['Bytes'];
  incentivisedVotingLockup: IncentivisedVotingLockup;
  amount: Scalars['BigInt'];
};

export type StakingBalance_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  account?: Maybe<Scalars['Bytes']>;
  account_not?: Maybe<Scalars['Bytes']>;
  account_in?: Maybe<Array<Scalars['Bytes']>>;
  account_not_in?: Maybe<Array<Scalars['Bytes']>>;
  account_contains?: Maybe<Scalars['Bytes']>;
  account_not_contains?: Maybe<Scalars['Bytes']>;
  incentivisedVotingLockup?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_gt?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_lt?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_gte?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_lte?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_in?: Maybe<Array<Scalars['String']>>;
  incentivisedVotingLockup_not_in?: Maybe<Array<Scalars['String']>>;
  incentivisedVotingLockup_contains?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not_contains?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_starts_with?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not_starts_with?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_ends_with?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum StakingBalance_OrderBy {
  Id = 'id',
  Account = 'account',
  IncentivisedVotingLockup = 'incentivisedVotingLockup',
  Amount = 'amount'
}

export type StakingReward = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  rewardsPaid: Scalars['BigInt'];
  amountPerTokenPaid: Scalars['BigInt'];
  account: Scalars['Bytes'];
  incentivisedVotingLockup: IncentivisedVotingLockup;
};

export type StakingReward_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  rewardsPaid?: Maybe<Scalars['BigInt']>;
  rewardsPaid_not?: Maybe<Scalars['BigInt']>;
  rewardsPaid_gt?: Maybe<Scalars['BigInt']>;
  rewardsPaid_lt?: Maybe<Scalars['BigInt']>;
  rewardsPaid_gte?: Maybe<Scalars['BigInt']>;
  rewardsPaid_lte?: Maybe<Scalars['BigInt']>;
  rewardsPaid_in?: Maybe<Array<Scalars['BigInt']>>;
  rewardsPaid_not_in?: Maybe<Array<Scalars['BigInt']>>;
  amountPerTokenPaid?: Maybe<Scalars['BigInt']>;
  amountPerTokenPaid_not?: Maybe<Scalars['BigInt']>;
  amountPerTokenPaid_gt?: Maybe<Scalars['BigInt']>;
  amountPerTokenPaid_lt?: Maybe<Scalars['BigInt']>;
  amountPerTokenPaid_gte?: Maybe<Scalars['BigInt']>;
  amountPerTokenPaid_lte?: Maybe<Scalars['BigInt']>;
  amountPerTokenPaid_in?: Maybe<Array<Scalars['BigInt']>>;
  amountPerTokenPaid_not_in?: Maybe<Array<Scalars['BigInt']>>;
  account?: Maybe<Scalars['Bytes']>;
  account_not?: Maybe<Scalars['Bytes']>;
  account_in?: Maybe<Array<Scalars['Bytes']>>;
  account_not_in?: Maybe<Array<Scalars['Bytes']>>;
  account_contains?: Maybe<Scalars['Bytes']>;
  account_not_contains?: Maybe<Scalars['Bytes']>;
  incentivisedVotingLockup?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_gt?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_lt?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_gte?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_lte?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_in?: Maybe<Array<Scalars['String']>>;
  incentivisedVotingLockup_not_in?: Maybe<Array<Scalars['String']>>;
  incentivisedVotingLockup_contains?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not_contains?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_starts_with?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not_starts_with?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_ends_with?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not_ends_with?: Maybe<Scalars['String']>;
};

export enum StakingReward_OrderBy {
  Id = 'id',
  Amount = 'amount',
  RewardsPaid = 'rewardsPaid',
  AmountPerTokenPaid = 'amountPerTokenPaid',
  Account = 'account',
  IncentivisedVotingLockup = 'incentivisedVotingLockup'
}

export type Subscription = {
  userLockup?: Maybe<UserLockup>;
  userLockups: Array<UserLockup>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  incentivisedVotingLockup?: Maybe<IncentivisedVotingLockup>;
  incentivisedVotingLockups: Array<IncentivisedVotingLockup>;
  rewardsDistributor?: Maybe<RewardsDistributor>;
  rewardsDistributors: Array<RewardsDistributor>;
  stakingReward?: Maybe<StakingReward>;
  stakingRewards: Array<StakingReward>;
  stakingBalance?: Maybe<StakingBalance>;
  stakingBalances: Array<StakingBalance>;
  withdrawTransaction?: Maybe<WithdrawTransaction>;
  withdrawTransactions: Array<WithdrawTransaction>;
  ejectTransaction?: Maybe<EjectTransaction>;
  ejectTransactions: Array<EjectTransaction>;
  claimTransaction?: Maybe<ClaimTransaction>;
  claimTransactions: Array<ClaimTransaction>;
  createLockTransaction?: Maybe<CreateLockTransaction>;
  createLockTransactions: Array<CreateLockTransaction>;
  increaseLockAmountTransaction?: Maybe<IncreaseLockAmountTransaction>;
  increaseLockAmountTransactions: Array<IncreaseLockAmountTransaction>;
  increaseLockTimeTransaction?: Maybe<IncreaseLockTimeTransaction>;
  increaseLockTimeTransactions: Array<IncreaseLockTimeTransaction>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionUserLockupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUserLockupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserLockup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserLockup_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionIncentivisedVotingLockupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionIncentivisedVotingLockupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IncentivisedVotingLockup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IncentivisedVotingLockup_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRewardsDistributorArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRewardsDistributorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RewardsDistributor_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RewardsDistributor_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakingRewardArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakingRewardsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakingReward_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakingReward_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakingBalanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStakingBalancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StakingBalance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StakingBalance_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionWithdrawTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionWithdrawTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WithdrawTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<WithdrawTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEjectTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEjectTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EjectTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<EjectTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionClaimTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionClaimTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ClaimTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ClaimTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCreateLockTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCreateLockTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreateLockTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreateLockTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionIncreaseLockAmountTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionIncreaseLockAmountTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IncreaseLockAmountTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IncreaseLockAmountTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionIncreaseLockTimeTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionIncreaseLockTimeTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<IncreaseLockTimeTransaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<IncreaseLockTimeTransaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Token = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  decimals: Scalars['Int'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  totalSupply: Scalars['BigInt'];
};

export type Token_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  decimals?: Maybe<Scalars['Int']>;
  decimals_not?: Maybe<Scalars['Int']>;
  decimals_gt?: Maybe<Scalars['Int']>;
  decimals_lt?: Maybe<Scalars['Int']>;
  decimals_gte?: Maybe<Scalars['Int']>;
  decimals_lte?: Maybe<Scalars['Int']>;
  decimals_in?: Maybe<Array<Scalars['Int']>>;
  decimals_not_in?: Maybe<Array<Scalars['Int']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  totalSupply_not?: Maybe<Scalars['BigInt']>;
  totalSupply_gt?: Maybe<Scalars['BigInt']>;
  totalSupply_lt?: Maybe<Scalars['BigInt']>;
  totalSupply_gte?: Maybe<Scalars['BigInt']>;
  totalSupply_lte?: Maybe<Scalars['BigInt']>;
  totalSupply_in?: Maybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Token_OrderBy {
  Id = 'id',
  Address = 'address',
  Decimals = 'decimals',
  Name = 'name',
  Symbol = 'symbol',
  TotalSupply = 'totalSupply'
}

export type Transaction = {
  id: Scalars['ID'];
  block: Scalars['Int'];
  hash: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  type: TransactionType;
};

export enum TransactionType {
  CreateLock = 'CREATE_LOCK',
  IncreaseLockTime = 'INCREASE_LOCK_TIME',
  IncreaseLockAmount = 'INCREASE_LOCK_AMOUNT',
  Withdraw = 'WITHDRAW',
  Eject = 'EJECT',
  Claim = 'CLAIM'
}

export type Transaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  hash?: Maybe<Scalars['Bytes']>;
  hash_not?: Maybe<Scalars['Bytes']>;
  hash_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_contains?: Maybe<Scalars['Bytes']>;
  hash_not_contains?: Maybe<Scalars['Bytes']>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  type?: Maybe<TransactionType>;
  type_not?: Maybe<TransactionType>;
};

export enum Transaction_OrderBy {
  Id = 'id',
  Block = 'block',
  Hash = 'hash',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Type = 'type'
}

export type UserLockup = {
  id: Scalars['ID'];
  account: Scalars['Bytes'];
  incentivisedVotingLockup: IncentivisedVotingLockup;
  value: Scalars['BigInt'];
  lockTime: Scalars['BigInt'];
  ts: Scalars['BigInt'];
  slope: Scalars['BigInt'];
  bias: Scalars['BigInt'];
  ejected: Scalars['Boolean'];
  ejectedHash?: Maybe<Scalars['Bytes']>;
};

export type UserLockup_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  account?: Maybe<Scalars['Bytes']>;
  account_not?: Maybe<Scalars['Bytes']>;
  account_in?: Maybe<Array<Scalars['Bytes']>>;
  account_not_in?: Maybe<Array<Scalars['Bytes']>>;
  account_contains?: Maybe<Scalars['Bytes']>;
  account_not_contains?: Maybe<Scalars['Bytes']>;
  incentivisedVotingLockup?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_gt?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_lt?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_gte?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_lte?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_in?: Maybe<Array<Scalars['String']>>;
  incentivisedVotingLockup_not_in?: Maybe<Array<Scalars['String']>>;
  incentivisedVotingLockup_contains?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not_contains?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_starts_with?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not_starts_with?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_ends_with?: Maybe<Scalars['String']>;
  incentivisedVotingLockup_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['BigInt']>;
  value_not?: Maybe<Scalars['BigInt']>;
  value_gt?: Maybe<Scalars['BigInt']>;
  value_lt?: Maybe<Scalars['BigInt']>;
  value_gte?: Maybe<Scalars['BigInt']>;
  value_lte?: Maybe<Scalars['BigInt']>;
  value_in?: Maybe<Array<Scalars['BigInt']>>;
  value_not_in?: Maybe<Array<Scalars['BigInt']>>;
  lockTime?: Maybe<Scalars['BigInt']>;
  lockTime_not?: Maybe<Scalars['BigInt']>;
  lockTime_gt?: Maybe<Scalars['BigInt']>;
  lockTime_lt?: Maybe<Scalars['BigInt']>;
  lockTime_gte?: Maybe<Scalars['BigInt']>;
  lockTime_lte?: Maybe<Scalars['BigInt']>;
  lockTime_in?: Maybe<Array<Scalars['BigInt']>>;
  lockTime_not_in?: Maybe<Array<Scalars['BigInt']>>;
  ts?: Maybe<Scalars['BigInt']>;
  ts_not?: Maybe<Scalars['BigInt']>;
  ts_gt?: Maybe<Scalars['BigInt']>;
  ts_lt?: Maybe<Scalars['BigInt']>;
  ts_gte?: Maybe<Scalars['BigInt']>;
  ts_lte?: Maybe<Scalars['BigInt']>;
  ts_in?: Maybe<Array<Scalars['BigInt']>>;
  ts_not_in?: Maybe<Array<Scalars['BigInt']>>;
  slope?: Maybe<Scalars['BigInt']>;
  slope_not?: Maybe<Scalars['BigInt']>;
  slope_gt?: Maybe<Scalars['BigInt']>;
  slope_lt?: Maybe<Scalars['BigInt']>;
  slope_gte?: Maybe<Scalars['BigInt']>;
  slope_lte?: Maybe<Scalars['BigInt']>;
  slope_in?: Maybe<Array<Scalars['BigInt']>>;
  slope_not_in?: Maybe<Array<Scalars['BigInt']>>;
  bias?: Maybe<Scalars['BigInt']>;
  bias_not?: Maybe<Scalars['BigInt']>;
  bias_gt?: Maybe<Scalars['BigInt']>;
  bias_lt?: Maybe<Scalars['BigInt']>;
  bias_gte?: Maybe<Scalars['BigInt']>;
  bias_lte?: Maybe<Scalars['BigInt']>;
  bias_in?: Maybe<Array<Scalars['BigInt']>>;
  bias_not_in?: Maybe<Array<Scalars['BigInt']>>;
  ejected?: Maybe<Scalars['Boolean']>;
  ejected_not?: Maybe<Scalars['Boolean']>;
  ejected_in?: Maybe<Array<Scalars['Boolean']>>;
  ejected_not_in?: Maybe<Array<Scalars['Boolean']>>;
  ejectedHash?: Maybe<Scalars['Bytes']>;
  ejectedHash_not?: Maybe<Scalars['Bytes']>;
  ejectedHash_in?: Maybe<Array<Scalars['Bytes']>>;
  ejectedHash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  ejectedHash_contains?: Maybe<Scalars['Bytes']>;
  ejectedHash_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum UserLockup_OrderBy {
  Id = 'id',
  Account = 'account',
  IncentivisedVotingLockup = 'incentivisedVotingLockup',
  Value = 'value',
  LockTime = 'lockTime',
  Ts = 'ts',
  Slope = 'slope',
  Bias = 'bias',
  Ejected = 'ejected',
  EjectedHash = 'ejectedHash'
}

export type WithdrawTransaction = Transaction & {
  id: Scalars['ID'];
  block: Scalars['Int'];
  hash: Scalars['Bytes'];
  provider: Scalars['Bytes'];
  sender: Scalars['Bytes'];
  timestamp: Scalars['BigInt'];
  type: TransactionType;
  value: Scalars['BigInt'];
};

export type WithdrawTransaction_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  hash?: Maybe<Scalars['Bytes']>;
  hash_not?: Maybe<Scalars['Bytes']>;
  hash_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  hash_contains?: Maybe<Scalars['Bytes']>;
  hash_not_contains?: Maybe<Scalars['Bytes']>;
  provider?: Maybe<Scalars['Bytes']>;
  provider_not?: Maybe<Scalars['Bytes']>;
  provider_in?: Maybe<Array<Scalars['Bytes']>>;
  provider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  provider_contains?: Maybe<Scalars['Bytes']>;
  provider_not_contains?: Maybe<Scalars['Bytes']>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  type?: Maybe<TransactionType>;
  type_not?: Maybe<TransactionType>;
  value?: Maybe<Scalars['BigInt']>;
  value_not?: Maybe<Scalars['BigInt']>;
  value_gt?: Maybe<Scalars['BigInt']>;
  value_lt?: Maybe<Scalars['BigInt']>;
  value_gte?: Maybe<Scalars['BigInt']>;
  value_lte?: Maybe<Scalars['BigInt']>;
  value_in?: Maybe<Array<Scalars['BigInt']>>;
  value_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum WithdrawTransaction_OrderBy {
  Id = 'id',
  Block = 'block',
  Hash = 'hash',
  Provider = 'provider',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Type = 'type',
  Value = 'value'
}

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GovernanceV1QueryVariables = Exact<{
  account: Scalars['Bytes'];
}>;


export type GovernanceV1Query = { userLockups: Array<{ id: string, lockTime: string, value: string }> };


export const GovernanceV1Document = gql`
    query GovernanceV1($account: Bytes!) {
  userLockups(where: {account: $account}) {
    id
    lockTime
    value
  }
}
    `;

/**
 * __useGovernanceV1Query__
 *
 * To run a query within a React component, call `useGovernanceV1Query` and pass it any options that fit your needs.
 * When your component renders, `useGovernanceV1Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGovernanceV1Query({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useGovernanceV1Query(baseOptions: Apollo.QueryHookOptions<GovernanceV1Query, GovernanceV1QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GovernanceV1Query, GovernanceV1QueryVariables>(GovernanceV1Document, options);
      }
export function useGovernanceV1LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GovernanceV1Query, GovernanceV1QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GovernanceV1Query, GovernanceV1QueryVariables>(GovernanceV1Document, options);
        }
export type GovernanceV1QueryHookResult = ReturnType<typeof useGovernanceV1Query>;
export type GovernanceV1LazyQueryHookResult = ReturnType<typeof useGovernanceV1LazyQuery>;
export type GovernanceV1QueryResult = Apollo.QueryResult<GovernanceV1Query, GovernanceV1QueryVariables>;