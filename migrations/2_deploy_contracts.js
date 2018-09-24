var TokenSend = artifacts.require("./TokenSend.sol");

module.exports = function(deployer) {
  deployer.deploy(TokenSend);
};