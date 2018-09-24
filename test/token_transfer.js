const TokenSend = artifacts.require('./TokenSend.sol');  
const EtherToken = artifacts.require('./EtherToken.sol');   
const Qtum = artifacts.require('./Qtum.sol'); 

const BigNumber = web3.BigNumber;  
  
const should = require('chai')  
 .use(require('chai-as-promised'))  
 .use(require('chai-bignumber')(BigNumber))  
 .should();  
  
let sender, ether, qtum;  
  
contract('token_management', async (accounts) => {  
  
	 let accountA, accountB, accountC, accountD;  
	  
	 [accountA, accountB, accountC, accountD ] = accounts;  
	  
	 beforeEach(async () => {  
    sender = await TokenSend.new();  
    ether = await EtherToken.new();  
    qtum = await Qtum.new(); 
    accountB = qtum.address;
	  
	  //await sender.addNewToken('QTC', qtum.address);  
	  await sender.addNewToken('ETHER', ether.address);  
	 });

 it("should be able to transfer sender token to another wallet", async() => { 
  // When transfering  token, multiple by
  //figure of decimal to get exact token e.g
  //to send 5 ETHER = 5e5, where 5 is the decimal places 
  let amount = new BigNumber(1e2);  
  
  //Account a approve contract to spend on behalf
  
  await ether.approve(sender.address, amount);  
  //await ether.approve(qtum.address, amount, {from: accountA});
  await qtum.approve(sender.address, amount);
  //await qtum.approve(sender.address, amount,{from: accountA}); 

  console.log("accountA:", accountA);
  console.log("accountB:", accountB);
  console.log("accountC:", accountC);
  console.log("ether address:", sender.address);
  console.log("qtum address:", qtum.address);


  let balance1 = ((await ether.balanceOf(accountA)).toString());  
  let balance2 = ((await ether.balanceOf(accountB)).toString());
  let balance3 = ((await qtum.balanceOf(accountA)).toString());

  console.log("Ether balance in accountA before transfer:", balance1);
  console.log("Ether balance in accountB before transfer:", balance2);
  console.log("Qtum balance in accountA before transfer:", balance3);

  
  //await sender.transfer(accountB, amount);
  await sender.transferTokens('ETHER',accountB, amount, {from:accountA});
  //await qtum.transfer(accountC, amount); 
  //await qtum.transferFrom(accountB, accountA, amount);   
  //await sender.Transfer(qtum.address, amount);  
  
  //  balance1.should.equal(amount.toString()) 
  
  
  let balance4 = ((await ether.balanceOf(accountA)).toString()); 
  let balance5 = ((await ether.balanceOf(accountB)).toString());
  let balance6 = ((await qtum.balanceOf(accountA)).toString());

  console.log("Ether balance in accountA after transfer:", balance4);
  console.log("Ether balance in accountB after transfer:", balance5);
  console.log("Qtum balance in accountA after transfer:", balance6);
 
});
});