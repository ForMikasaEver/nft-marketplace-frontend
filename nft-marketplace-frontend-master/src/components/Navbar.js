const Navbar = ({ onConnectWallet, address }) => {
    return(
        <nav className="navbar">
            <div className="navbar-brand">NFT Marketplace</div>
            <div className="navbar-menu">
                <button className="connect-wallet-button" onClick={onConnectWallet}>
                    {address || "Connect Wallet"}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;
