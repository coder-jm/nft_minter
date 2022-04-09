require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/SiyRezvKK59qWbDlYYqisixgwKzVb7_N",
      accounts: ["12f8bee3b1bf2ef40869637aed836ad0f8a669321dabb537b551471d675da258"],
    },
    mainnet: {
      chainId: 1,
      url:"https://eth-mainnet.alchemyapi.io/v2/2hnOFoOYvj1jFImqElq0CYDXsr0dCFYL",
      accounts: ["12f8bee3b1bf2ef40869637aed836ad0f8a669321dabb537b551471d675da258"],
    },
  },
  etherscan: {
    apiKey: "SMVXZXXGAVTT6ZIPS52PPQAYC59HUSTXYG",
  }
};