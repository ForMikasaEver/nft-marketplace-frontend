import ABI from '../contracts/cUSDT.json'
import axios from "axios";
import { ethers } from "ethers";

let provider = new ethers.BrowserProvider(window.ethereum)
const contractAddress ="0x0165878A594ca255338adfa4d48449f69242Eb8F";
//合约地址：0x0165878A594ca255338adfa4d48449f69242Eb8F
const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());

export async function balanceOf(address) {
    const result = await contract.balanceOf(address);
    return Number(result);
}
export async function tokenOfOwnerByIndex(owner,index) {
    const result = await contract.tokenOfOwnerByIndex(owner, index);
    return Number(result);
}

export async function tokenURI(tokenId) {
    const result = await contract.tokenURI(tokenId);
    console.log(result);
}

export async function getMetadata(tokenId) {
    const result = await contract.tokenURI(tokenId);
    const response = await axios.get(result);
    return {
        title: response.data.title,
        description: response.data.description,
        imageURL: response.data.image,
    }
}
