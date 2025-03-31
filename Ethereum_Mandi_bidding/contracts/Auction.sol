// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "contracts/Admin.sol";

contract Auction {
    address payable auctionManager;
    AdminUser private auctionBidder;
    AdminItem public auctionItem;
    AdminBid public winner;

    uint regNo;   
    mapping(uint => AdminUser) auctionBidderRegister;

    
    mapping(uint => AdminBid) auctionChain;
     uint chainNo;
    

    uint maxBidValue;

    constructor() payable {

        regNo = 0;
        
        auctionManager = payable(msg.sender);
        
    }

  

   
    modifier checkUserIsNotAuctionManager() {
        require(msg.sender != auctionManager, "Only participants can take part in a bid");
        _;
    }

    modifier checkAuctionBidderRegister() {
        AdminUser memory userblock;
        
        uint regcnt = 0;

        bool token = false;
        while (regcnt < regNo) {
            userblock = auctionBidderRegister[regcnt];
            if (userblock.userWallet == msg.sender) {
                token = true;
                break;
            }
            regcnt++;
        }
        require(token == false, "Thank you, but you are already registered .");
        _;
    }

     modifier checkAuctionManager() {


        require(msg.sender == auctionManager, "Invalid.");
        _;
    }


    modifier checkAuctionBidderExistence() {
        AdminUser memory userblock;
        bool token = false;
        uint regcnt = 0;
        while (regcnt < regNo) {
            userblock = auctionBidderRegister[regcnt];
            if (userblock.userWallet == msg.sender) {
                token = true;
                break;
            }
            regcnt++;
        }
        require(token == true, "Invalid: Ensure participitation before bidding begins");
        _;
    }

    modifier checkBidValue(uint bidderValue) {
        require(bidderValue > maxBidValue, "Bid too low, hence, rejected!");
        _;
    }

    modifier checkWinnerAddress() {
        require(msg.sender == winner.bidderWallet, "Re-check the Bid Winner's wallet address");
        _;
    }

    modifier checkTransactionAmount() {
        uint ethtowei = winner.bidPlaced * 1 ether;
        require(ethtowei == msg.value, "Transaction is Invalid. Incorrect ETH amount sent.");
        _;
    }

     

    function setAuctionItem(string memory name, uint bidValue) public checkAuctionManager {
        auctionItem = AdminItem(name, bidValue, false);
        maxBidValue = bidValue;
        chainNo = 0;
    }

      modifier checkItemBiddingStatus() {
        require(auctionItem.auctionClosed == false, "The auction is over, Thank you!");
        _;
    }


    function BidderRegisterMaster(string memory name) public 
        checkUserIsNotAuctionManager 
        checkAuctionBidderRegister 
    {
        auctionBidderRegister[regNo] = AdminUser(name, payable(msg.sender));
        gotoNextBidder();
    }

   

    function MyBidding(uint myBidValue) public 
        checkItemBiddingStatus 
        checkUserIsNotAuctionManager 
        checkAuctionBidderExistence 
        checkBidValue(myBidValue) 
    {
        AdminBid memory auctionblock = AdminBid(payable(msg.sender), myBidValue);
        auctionChain[chainNo] = auctionblock;

        maxBidValue = myBidValue;
        gotoNextBlockchain();
    }

     function gotoNextBidder() private {
        regNo++;
    }

    function gotoNextBlockchain() private {
        chainNo++;
    }

    function declareAuctionResult() public checkAuctionManager {
        uint winnerIndex = chainNo - 1;
        winner = auctionChain[winnerIndex];

        auctionItem = AdminItem(auctionItem.itemTitle, auctionItem.startingPrice, true);
    }

    function transferBidAmount() public payable 
        checkUserIsNotAuctionManager 
        checkWinnerAddress 
        checkTransactionAmount 
    {
        auctionManager.transfer(msg.value);
    }

    
}
