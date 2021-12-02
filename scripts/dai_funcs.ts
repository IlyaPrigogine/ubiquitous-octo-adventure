import {deployments, ethers, getNamedAccounts} from 'hardhat';
import {Greeter, MyDefiProject} from "../typechain";
import {parseEther} from "ethers/lib/utils";
import {swapAmount} from "../helpers/constants";

const {execute, read} = deployments;

async function main() {
    const {owner} = await getNamedAccounts();
    const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');

    await MyDefiProject.swapExactInputSingle(parseEther(swapAmount));
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
