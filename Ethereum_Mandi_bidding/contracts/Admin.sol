// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

struct AdminItem {
    string itemTitle;
    uint startingPrice;
    bool auctionClosed;
}

struct AdminUser {
    string userName;
    address payable userWallet;
    // uint userBid;
}

struct AdminBid {
    address bidderWallet;
    uint bidPlaced;
}
