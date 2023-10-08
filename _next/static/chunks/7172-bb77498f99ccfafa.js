"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7172],{27172:function(t,e,n){n.r(e);var a=n(85893),i=n(93680),p=n(69077);let s=[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"},{internalType:"uint256",name:"totalSupply_",type:"uint256"},{internalType:"address",name:"marketing_",type:"address"},{internalType:"address",name:"project_",type:"address"},{internalType:"address",name:"rewardsAddress",type:"address"}],stateMutability:"payable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"ROUTER",outputs:[{internalType:"contract IDEXRouter",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"howMuch",type:"uint256"},{internalType:"address",name:"whatToken",type:"address"}],name:"addLiquidity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"addLiquidityETH",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"addressNotGettingRewards",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"ai",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"holder",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"}],name:"approveMax",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"buyCounter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ceo",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"frequency",type:"uint256"}],name:"changeJackpotFrequency",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newRewards",type:"address"}],name:"changeMainRewards",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"newMarketingWallet",type:"address"}],name:"changeMarketingWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newProjectWallet",type:"address"}],name:"changeProjectWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"desiredRewardToken",type:"address"}],name:"chooseReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"chosenReward",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"desiredRewardToken",type:"address"}],name:"claimCustom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimHalfBnb",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"enough",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"ethLpToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"excludedWallet",type:"address"},{internalType:"bool",name:"status",type:"bool"}],name:"excludeFromMax",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"excludedWallet",type:"address"},{internalType:"bool",name:"status",type:"bool"}],name:"excludeFromRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"shareholder",type:"address"}],name:"getUnpaidEarnings",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"ip",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"isEnough",outputs:[{internalType:"bool",name:"isIt",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isExludedFromMaxWallet",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"toCheck",type:"address"}],name:"isPair",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isPaperhand",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"jackpot",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"jackpotBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"jackpotFrequency",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"lastClaim",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"limitless",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"liq",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lpFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mainReward",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"marketing",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"marketingWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxRewardsPerTx",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxWalletInPermille",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"otherLpToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"pairs",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"howMany",type:"uint256"}],name:"payRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"pcsPair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"project",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"projectWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"whatToken",type:"address"}],name:"removeLiquidity",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"removeLiquidityETH",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOnwrship",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounced",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"rescueBnb",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"rescueToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rewardsPerShare",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"aiWallet",type:"address"},{internalType:"bool",name:"status",type:"bool"}],name:"setAi",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"limitlessWallet",type:"address"},{internalType:"bool",name:"status",type:"bool"}],name:"setLimitlessWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"percent",type:"uint256"}],name:"setLpFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"howMany",type:"uint256"}],name:"setMaxRewardsPerTx",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"percent",type:"uint256"}],name:"setMaxTxInPercentOfMaxWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"permille",type:"uint256"}],name:"setMaxWalletInPermille",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"inWei",type:"uint256"}],name:"setMinBuy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newName",type:"string"},{internalType:"string",name:"newSymbol",type:"string"}],name:"setNameAndSymbol",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"rewardsTax",type:"uint256"},{internalType:"uint256",name:"liqTax",type:"uint256"},{internalType:"uint256",name:"projectTax",type:"uint256"},{internalType:"uint256",name:"marketingTax",type:"uint256"},{internalType:"uint256",name:"jackpotTax",type:"uint256"}],name:"setTaxes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"shareholderIndexes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"shares",outputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"totalExcluded",type:"uint256"},{internalType:"uint256",name:"totalRealised",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalDistributed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalShares",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}];e.default=function(){let{config:t}=(0,p.PJ)({address:"0x3e0ad9060782351da599a352d482afd306d966f7",abi:s,functionName:"claimHalfBnb",chainId:56}),{data:e,isLoading:n,isSuccess:u,write:y}=(0,p.GG)(t);return(0,a.jsxs)("div",{children:[!u&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"gap-2",style:{paddingTop:"10px"},children:(0,a.jsx)(i.Z,{disabled:!y,onClick:()=>null==y?void 0:y(),size:"lg",style:{backgroundColor:"#0b1528",color:"white",fontSize:"1rem",border:"none"},children:n?"Claiming....":"Claim BNB/BTCB Rewards "})})}),u&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"gap-2",style:{paddingTop:"10px"},children:(0,a.jsx)(i.Z,{disabled:!y,onClick:()=>null==y?void 0:y(),size:"lg",style:{backgroundColor:"blue",color:"white",fontSize:"1rem",border:"none"},children:n?"Claiming....":"Claiming Rewards "})}),(0,a.jsxs)("div",{className:" gap-2",style:{paddingTop:"10px"},children:[(0,a.jsx)("a",{href:"https://bscscan.com/tx/".concat(e.hash),target:"_blank",children:(0,a.jsx)(i.Z,{style:{backgroundColor:"#0b1528	",color:"white",fontSize:"1rem",border:"none"},children:"View TXN on BSCSCAN"})})," ",""]})]})]})}}}]);