# Token_Transfer

Smart Contract For Token_Transfer (Transfer Ether tokens to Qtum address/Account)   


#### Requirements
```
* Trufflesuite

* Ganache Server

* Metamask

```


#### Important Components

* ECR20 used for creation of Ether tokens..

* QCR20 used for creation of Qtum tokens..

* Accounts accountA, and accountB created for storing Ether and Qtum tokens respectively..

* Transfer Ether tokens from accountA to accountB..

#### Project Description

* This project contains the set of smart contracts which are useful to create tokens and transfer tokens from one address to another.

* Ether tokens are created by using ECR20 based smart contract for creating Ether tokens.
* Qtum tokens are created by using QCR20 based smart contract for creating Qtum tokens.
* Third smart contract is created for transfer of tokens from Ether account address to Qtum address.
* All the implementations are in solidity and nodejs.
* The code repository also contains the code for the test of the implementation.
* Following are steps to compile and test the implementation. 


#### Setup
```js
git clone https://github.com/sanketchobe/Token_Transfer

cd Token_Transfer

npm install

truffle console

truffle(development)> compile

truffle(development)> migrate --reset

truffle(development)> test
```

