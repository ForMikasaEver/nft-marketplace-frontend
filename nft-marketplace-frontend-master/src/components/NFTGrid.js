import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NFTCard from'./NFTCard';
import { balanceOf, tokenOfOwnerByIndex } from '../utils/nft';
import '../App.css';

const NFTGrid =() => {
    const [nfts, setNfts] = useState([]);
    const navigate = useNavigate();
    const handleCardClick = (tokenId) => {
        navigate(`/nft-detail/${tokenId}`);
    };
    useEffect(() => {
        const fetchNFTs = async () => {
            const length = await balanceOf
            ("0xa513E6E4b8f2a923D98304ec87F64353C4D5C853");
            console.log('length', length)
            for (let i = 0; i < length; i++) {
                const tokenId = await tokenOfOwnerByIndex
                ("0xa513E6E4b8f2a923D98304ec87F64353C4D5C853", i);
                console.log('i', 1)
                setNfts((prev) => [...prev, tokenId]);
                setNfts((prev) => [...new Set(prev)])
            }
        };
        fetchNFTs();
    }, []);
    return (
        <div className="nft-grid">
            {nfts.map(nft => (
                <NFTCard tokenId={nft} onClick={() => handleCardClick(nft)}/>
            ))}
        </div>
    );
};

export default NFTGrid;