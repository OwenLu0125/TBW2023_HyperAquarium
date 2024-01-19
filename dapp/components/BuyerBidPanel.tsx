import React from "react";
import { ethers } from "ethers";
import { useContractWrite } from "wagmi";
import EnglishAuctionArtifact from "../Contact/EnglishAuction.json";

interface Props {
  bidValue: string;
}

const BuyerBidPanel = ({ bidValue }: Props) => {
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "0x345FDDD623944ACDa874342411ceFfe73C093AD6",
    abi: EnglishAuctionArtifact.abi,
    functionName: "bid",
    value: BigInt(ethers.utils.parseEther(bidValue).toString()),
  });

  return (
    <div className="sidebarFishShop-fishBox">
      <div className="sidebarFish-fishBox-list">
        <div className="sidebar-box-list-item">
          <div className="sidebar-box-list-item-text sidebar-box-list-item-text-blue sidebar-box-list-item-text-right">
            錢包：<span>10 ETH</span>
          </div>
        </div>
        <div className="sidebar-box-list-item">
          <p className="sidebar-box-list-item-title">最新價格</p>
          <div className="container">
            <section className="countdown-timer">
              <div className="countdown-info">
                <div className="timer-box">
                  <div id="flip-sheet-day" className="sheet"></div>
                  <p id="days" className="primary">
                    00
                  </p>
                </div>
                <p className="sub-heading">D</p>
              </div>
              <div className="countdown-info">
                <div className="timer-box">
                  <div id="flip-sheet-hour" className="sheet"></div>
                  <div className="circle-left"></div>
                  <p id="hours" className="primary">
                    00
                  </p>
                  <div className="circle-right"></div>
                </div>
                <p className="sub-heading">H</p>
              </div>
              <div className="countdown-info">
                <div className="timer-box">
                  <div id="flip-sheet-min" className="sheet"></div>
                  <div className="circle-left"></div>
                  <p id="minutes" className="primary">
                    00
                  </p>
                  <div className="circle-right"></div>
                </div>
                <p className="sub-heading">M</p>
              </div>
              <div className="countdown-info">
                <div className="timer-box">
                  <div id="flip-sheet-sec" className="sheet"></div>
                  <div className="circle-left"></div>
                  <p id="seconds" className="primary">
                    00
                  </p>
                  <div className="circle-right"></div>
                </div>
                <p className="sub-heading">S</p>
              </div>
            </section>
          </div>
          <div className="sidebar-box-list-item-buy-text">1.08 ETH</div>
          <div className="sidebar-box-list-item-buy-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="sidebar-box-list-item-buy-text-icon bi bi-wallet2"
              viewBox="0 0 16 16"
            >
              <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
            </svg>
            <span>0x12344529380D22</span>
          </div>
        </div>
        <div className="sidebar-box-list-item">
          <p className="sidebar-box-list-item-title">地板價</p>
          <div className="sidebar-box-list-item-buy-text">2.34 Eth</div>
        </div>
        <div className="sidebar-box-list-item">
          <p className="sidebar-box-list-item-title">你的出價</p>
          <div className="sidebar-box-list-item-buy-text">2 Eth</div>
        </div>
        <div className="sidebar-box-list-item">
          <p className="sidebar-box-list-item-title">擁有者地址</p>
          <div className="sidebar-box-list-item-text sidebar-box-list-item-text-blue">
            0x1234435674342D22
          </div>
        </div>

        <div className="sidebar-box-list-item">
          <p className="sidebar-box-list-item-title">水族箱名稱</p>
          <div className="sidebar-box-list-item-text sidebar-box-list-item-text-blue">
            光之水族箱
          </div>
        </div>

        <div className="sidebar-box-list-item">
          <p className="sidebar-box-list-item-title">故事介紹</p>
          <div className="sidebar-box-list-item-text">
            Fxhash知名創作者生成式藝術家吳哲宇，這個光之水族箱裡可看見其作品SoulFish正緩緩的悠遊。每條魚皆是以數學公式生成，並且都是獨一無二的個體。
          </div>
        </div>

        <button
          onClick={() => {
            write();
          }}
          className="sidebar-box-list-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="sidebar-box-list-btn-icon bi bi-tags"
            viewBox="0 0 16 16"
          >
            <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z" />
            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z" />
          </svg>
          競標出價
        </button>
        {/* <button className="sidebar-box-list-btn sidebar-box-list-btn-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="sidebar-box-list-btn-icon sidebar-box-list-btn-icon-blue bi bi-handbag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z" />
          </svg>
          領回出價
        </button> */}
        <button className="sidebar-box-list-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="sidebar-box-list-btn-icon bi bi-database"
            viewBox="0 0 16 16"
          >
            <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
          </svg>
          直接購買
        </button>
      </div>
    </div>
  );
};

export default BuyerBidPanel;
