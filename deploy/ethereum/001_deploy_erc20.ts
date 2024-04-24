import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  // Deploy the upgrade infra and token
  const deployed = await deploy("ImmutableERC20", {
    from: deployer,
    args: ["My token name", "MTN", 42_000_000_000],
  });

  return true;
};

func.id = "ImmutableERC20";

export default func;
