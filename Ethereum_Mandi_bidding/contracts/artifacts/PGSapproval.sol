// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ThirdPartyApproval {
    address public verifier;
    mapping(bytes32 => bool) public verifiedProducts;

    modifier onlyVerifier() {
        require(msg.sender == verifier, "Only third party can approve");
        _;
    }

    constructor() {
        verifier = msg.sender;
    }

    function approve(bytes32 productHash) external onlyVerifier {
        verifiedProducts[productHash] = true;
    }

    function isApproved(bytes32 productHash) external view returns (bool) {
        return verifiedProducts[productHash];
    }
}
