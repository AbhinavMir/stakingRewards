const hre = require("hardhat");
const StakingRewardsFactory = require("../contracts/StakingRewardsFactory.sol");

async function main() {
  // await hre.run('compile');
  const StakingRewards = await hre.ethers.getContractFactory.deploy("StakingRewardsFactory");

  console.log("Staking contract deployed to:", StakingRewards.address);
}

main();
