require("hardhat-gas-reporter");
const privKey = "f0d7ba00f708a4051e3b01619cbe899e3b144917ea197e4b9998de023c65b646";
module.exports = {
  solidity: "0.8.4",
  gasReporter: {
    currency: "USD",
    enabled: true,
    url: "http://localhost:8545",
  },

  networks: {
    development: {
      url: "http://localhost:8545",
      accounts: [privKey],
    },
},
};
