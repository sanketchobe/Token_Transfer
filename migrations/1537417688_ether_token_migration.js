let EtherToken = artifacts.require("./EtherToken.sol");  
  
module.exports = function(deployer) {  
  deployer.deploy(EtherToken);  
};