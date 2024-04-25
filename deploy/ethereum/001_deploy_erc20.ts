import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "ethers";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const maxSupply = BigInt(42_000_000_000) * BigInt(10) ** BigInt(18);

  // Deploy the upgrade infra and token
  const deployed = await deploy("ImmutableERC20", {
    from: deployer,
    args: ["TEST-TOKEN", "TEST", maxSupply],
  });

  console.log("TEST deployed at: ", deployed.address);

  return true;
};

func.id = "ImmutableERC20";

export default func;
