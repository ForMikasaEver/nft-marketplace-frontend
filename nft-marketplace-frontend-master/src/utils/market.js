import { ethers } from 'ethers';
import ABI from '../contracts/Market.json';

let provider = new ethers.BrowserProvider(window.ethereum)
const contractAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
//合约地址：0xa513E6E4b8f2a923D98304ec87F64353C4D5C853
const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());

export async function buy(tokenId) {
    const result = await contract.buy(tokenId);
    console.log('buy', result.hash);
}

export async function changePrice(tokenId,price) {
        const result = await contract.changePrice(tokenId, price);
        console.log('change price', result.hash);
}

export async function cancelOrder(tokenId) {
    const result = await contract.cancelOrder(tokenId);
    console.log('cancel order', result.hash);
}

export async function getAllNFTs() {
    const result = await contract.getAllNFTs();
    console.log(result);
}

export async function getMyNFTs() {
    const result = await contract.getMyNFTs();
    console.log(result);
}

export async function getOrder(tokenId) {
    const result = await contract.orderOfId(tokenId);
    return{
        seller:result[0],
        tokenId:Number(result[1]),
        price:Number(result[2]) / 1e18,
    }
}