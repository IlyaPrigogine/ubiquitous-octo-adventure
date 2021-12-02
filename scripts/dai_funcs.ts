import {deployments, ethers, getNamedAccounts} from 'hardhat';
import {Greeter, MyDefiProject} from "../typechain";

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();

    const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');
    console.log(`MyDefiProject.address: ${await MyDefiProject.address}`);


}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
