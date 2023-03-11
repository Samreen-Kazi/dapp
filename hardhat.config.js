/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
require("dotenv").config();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  unused configuration commented out for now
   goerli: {
    url: process.env.INFURA_URL,
    accounts: [process.env.privateKey]
  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
