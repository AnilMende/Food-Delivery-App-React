import React from "react";
import styled from "styled-components";
import { assets } from "../assets/assets";

const AppDownload = () => {
    return(
        <AppDownloadContainer id="app-download">
            <p>For Better Experience Download <br/> Tomato App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </AppDownloadContainer>
    )
}
export default AppDownload;

const AppDownloadContainer = styled.div`
      margin: auto auto;
      margin-top: 100px;
      text-align: center;
      font-size: max(3vw, 20px);
      font-weight: 500;

      .app-download-platforms{
        display: flex;
        justify-content: center;
        gap: max(2vw, 10px);
        margin-top: 40px;
      }

      .app-download-platforms img{
        width: max(30vw,120px);
        max-width: 180px;
        cursor: pointer;
        transition: 0.5s;
      }
      .app-download-platforms img:hover{
        transform: scale(1.05);
      }
`;