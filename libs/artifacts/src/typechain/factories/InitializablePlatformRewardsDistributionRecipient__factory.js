"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializablePlatformRewardsDistributionRecipient__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "getPlatformRewardToken",
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
                name: "reward",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "platformRewards",
                type: "uint256",
            },
        ],
        name: "notifyRewardAmounts",
        outputs: [],
        stateMutability: "nonpayable",
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
];
class InitializablePlatformRewardsDistributionRecipient__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.InitializablePlatformRewardsDistributionRecipient__factory = InitializablePlatformRewardsDistributionRecipient__factory;
InitializablePlatformRewardsDistributionRecipient__factory.abi = _abi;
//# sourceMappingURL=InitializablePlatformRewardsDistributionRecipient__factory.js.map