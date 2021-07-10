"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICurveMetaPool__factory = void 0;
const ethers_1 = require("ethers");
class ICurveMetaPool__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICurveMetaPool__factory = ICurveMetaPool__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "int128",
                name: "i",
                type: "int128",
            },
            {
                internalType: "int128",
                name: "j",
                type: "int128",
            },
            {
                internalType: "uint256",
                name: "dx",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "min_dy",
                type: "uint256",
            },
        ],
        name: "exchange_underlying",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int128",
                name: "i",
                type: "int128",
            },
            {
                internalType: "int128",
                name: "j",
                type: "int128",
            },
            {
                internalType: "uint256",
                name: "dx",
                type: "uint256",
            },
        ],
        name: "get_dy",
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
];
//# sourceMappingURL=ICurveMetaPool__factory.js.map