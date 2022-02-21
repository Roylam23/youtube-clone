const item = [];
for (var i = 0; i < 30; i++) {
  item.push(
    <div className="grid-con-in cursor-pointer">
      <img
        className="in-img"
        src="https://i.ytimg.com/vi/WjoXrV1p_6M/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBibOBuW1Xi9dzmtINYZpY2CUKOTg"
        alt=""
      ></img>
      <div className="in-title flex">
        <div className="in-title-l">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLQU9OQ5X1_CJaXfXhDyoZ4QhNvP1-2jy1jhvAjcgg=s68-c-k-c0x00ffffff-no-rj"
            className="rounded-full w-11 mt-1"
            alt=""
          ></img>
        </div>
        <div className="in-title-r ml-5 flex flex-col">
          <span>[JFFLive] 床哥心事台 有你有我</span>
          <div className="flex flex-col mt-1">
            <span id="con-name">JFFLIVE</span>
            <span id="con-name">觀看次數 : 99萬次 。 1週前</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const nav = [];
for (i = 0; i < 30; i++) {
  nav.push(
    <span className="py-2 flex items-center px-5 text-sm hover:bg-gray-800">
      <svg viewBox="0 0 24 24" className="w-6 mr-5">
        <g class="style-scope yt-icon">
          <path
            d="M4,10V21h6V15h4v6h6V10L12,3Z"
            class="style-scope yt-icon"
            fill="white"
          ></path>
        </g>
      </svg>
      首頁
    </span>
  );
}

const HomeCon = () => (
  <div className="flex h-full w-full relative justify-end bg-grid">
    <div className="w-64 flex flex-col h-full l-con bg-main z-50" id="l-con">
      <div className="nav-main">
        <span className="py-2 flex items-center px-5 text-sm l-option-con">
          <svg viewBox="0 0 24 24" className="w-6 mr-5 sv">
            <g class="style-scope yt-icon">
              <path
                d="M4,10V21h6V15h4v6h6V10L12,3Z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name">首頁</span>
        </span>
        <span className="py-2 flex items-center px-5 text-sm l-option-con">
          <svg viewBox="0 0 24 24" className="w-6 mr-5 sv">
            <g class="style-scope yt-icon">
              <path
                d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name">探索</span>
        </span>
        <span className="py-2 flex items-center px-5 text-sm l-option-con">
          <svg viewBox="0 0 24 24" className="w-6 mr-5 sv">
            <g class="style-scope yt-icon">
              <path
                d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name">訂閱內容</span>
        </span>
        <span className="py-2 flex items-center px-5 text-sm l-option-con">
          <svg viewBox="0 0 24 24" className="w-6 mr-5 sv">
            <g class="style-scope yt-icon">
              <path
                d="M10,9.35,15,12l-5,2.65ZM12,6a54.36,54.36,0,0,0-7.56.38A1.53,1.53,0,0,0,3.38,7.44,24.63,24.63,0,0,0,3,12a24.63,24.63,0,0,0,.38,4.56,1.53,1.53,0,0,0,1.06,1.06A54.36,54.36,0,0,0,12,18a54.36,54.36,0,0,0,7.56-.38,1.53,1.53,0,0,0,1.06-1.06A24.63,24.63,0,0,0,21,12a24.63,24.63,0,0,0-.38-4.56,1.53,1.53,0,0,0-1.06-1.06A54.36,54.36,0,0,0,12,6h0m0-1s6.25,0,7.81.42a2.51,2.51,0,0,1,1.77,1.77A25.87,25.87,0,0,1,22,12a25.87,25.87,0,0,1-.42,4.81,2.51,2.51,0,0,1-1.77,1.77C18.25,19,12,19,12,19s-6.25,0-7.81-.42a2.51,2.51,0,0,1-1.77-1.77A25.87,25.87,0,0,1,2,12a25.87,25.87,0,0,1,.42-4.81A2.51,2.51,0,0,1,4.19,5.42C5.75,5,12,5,12,5Z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name">Originals</span>
        </span>
        <span className="py-2 flex items-center px-5 text-sm l-option-con">
          <svg viewBox="0 0 24 24" className="w-6 mr-5 sv">
            <g class="style-scope yt-icon">
              <path
                d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name">Youtube Music</span>
        </span>
      </div>
      <div className="nav-sec">
        <span className="py-2 flex items-center px-5 text-sm l-option-con">
          <svg viewBox="0 0 24 24" className="w-6 mr-5 sv">
            <g class="style-scope yt-icon">
              <path
                d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name">媒體庫</span>
        </span>
        <span className="py-2 flex items-center px-5 text-sm l-option-con">
          <svg viewBox="0 0 24 24" className="w-6 mr-5 sv">
            <g class="style-scope yt-icon">
              <path
                d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name">觀看記錄</span>
        </span>
        <span className="py-2 flex items-center px-5 text-sm l-option-con">
          <svg viewBox="0 0 24 24" className="w-6 mr-5 sv">
            <g class="style-scope yt-icon">
              <path
                d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name">你的影片</span>
        </span>
      </div>
    </div>
    <div
      className="w-16 flex flex-col h-full l-con-s bg-main fixed left-0"
      id="l-con-s"
    >
      <div className="nav-main">
        <span className="py-2 flex items-center text-sm l-option-con flex-col align-center">
          <svg viewBox="0 0 24 24" className="w-6 sv">
            <g class="style-scope yt-icon">
              <path
                d="M4,10V21h6V15h4v6h6V10L12,3Z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name-s">首頁</span>
        </span>
        <span className="py-2 flex items-center text-sm l-option-con flex-col align-center">
          <svg viewBox="0 0 24 24" className="w-6 mt-2 sv">
            <g class="style-scope yt-icon">
              <path
                d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name-s">探索</span>
        </span>
        <span className="py-2 flex items-center text-sm l-option-con flex-col align-center">
          <svg viewBox="0 0 24 24" className="w-6 mt-2 sv">
            <g class="style-scope yt-icon">
              <path
                d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name-s">訂閱內容</span>
        </span>
        <span className="py-2 flex items-center text-sm l-option-con flex-col align-center">
          <svg viewBox="0 0 24 24" className="w-6 mt-2 sv">
            <g class="style-scope yt-icon">
              <path
                d="M10,9.35,15,12l-5,2.65ZM12,6a54.36,54.36,0,0,0-7.56.38A1.53,1.53,0,0,0,3.38,7.44,24.63,24.63,0,0,0,3,12a24.63,24.63,0,0,0,.38,4.56,1.53,1.53,0,0,0,1.06,1.06A54.36,54.36,0,0,0,12,18a54.36,54.36,0,0,0,7.56-.38,1.53,1.53,0,0,0,1.06-1.06A24.63,24.63,0,0,0,21,12a24.63,24.63,0,0,0-.38-4.56,1.53,1.53,0,0,0-1.06-1.06A54.36,54.36,0,0,0,12,6h0m0-1s6.25,0,7.81.42a2.51,2.51,0,0,1,1.77,1.77A25.87,25.87,0,0,1,22,12a25.87,25.87,0,0,1-.42,4.81,2.51,2.51,0,0,1-1.77,1.77C18.25,19,12,19,12,19s-6.25,0-7.81-.42a2.51,2.51,0,0,1-1.77-1.77A25.87,25.87,0,0,1,2,12a25.87,25.87,0,0,1,.42-4.81A2.51,2.51,0,0,1,4.19,5.42C5.75,5,12,5,12,5Z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name-s">Originals</span>
        </span>
        <span className="py-2 flex items-center text-sm l-option-con flex-col align-center">
          <svg viewBox="0 0 24 24" className="w-6 mt-2 sv">
            <g class="style-scope yt-icon">
              <path
                d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
                class="style-scope yt-icon"
                fill="white"
              ></path>
            </g>
          </svg>
          <span className="option-name-s">Youtube Music</span>
        </span>
      </div>
    </div>
    <div className="grid-con">{item}</div>
  </div>
);

export default HomeCon;
