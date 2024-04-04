import React from 'react';
import * as utilities from '../utilities.js';

const NFT = ({ nft }) => {
    return (
        <div className="nft">
            <div className="nft-preview" style={{ backgroundImage: `url(${utilities.returnNFTImage(nft, "low")})` }}></div>
            <div class="nft-content">
                <div className="title">{nft.name} #{nft.token_id}</div>
                <div className="contract">{nft.contract_type}</div>
                {nft.verified_collection && (
                    <div className="verified-collection">Verified collection <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20"><polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"/><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"/></svg></div>
                )}

                {nft.possible_spam && (
                    <div>Spam</div>
                )}

                {nft.last_sale && (
                    <>
                        <div className="sale-price">Bought for {nft.last_sale.price_formatted} ETH</div>
                        <span className="usd-price">${nft.last_sale.usd_price}</span>
                    </>
                )}
            </div>
            
        </div>
    );
};

export default NFT;
