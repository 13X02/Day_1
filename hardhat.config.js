require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  etherscan:{
    apiKey: "key"
  },
  networks:{
    mumbai:{
      url:"https://polygon-url.g.alchemy.com/v2/sfLoI1cF56FwEwmOEsYg0wGnzbJkavHy",
      chainId:portid,
      accounts:[`accountid`]
    }
  }
};
