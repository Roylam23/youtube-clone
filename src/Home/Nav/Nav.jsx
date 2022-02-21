import { gsap } from "gsap";
const navHide = () => {
  var sw = false;
  let touchEvent = "ontouchstart" in window ? "touchstart" : "click";
  window.addEventListener("load", () => {
    var width = window.innerWidth;
    console.log(width);
    if (width < 1440) {
      document.querySelector(".l-con").style.display = "none";
      document
        .querySelector(":root")
        .style.setProperty("--grid-w", "calc(100% - 5rem)");
      sw = true;
    } else {
      document.querySelector(".l-con").style.display = "block";
      document
        .querySelector(":root")
        .style.setProperty("--grid-w", "calc(100% - 16rem)");
      sw = false;
    }
    const msw = () => {
      if (sw) {
        // gsap.to('.l-con',0.3,{x: 0})
        document.querySelector(".l-con").style.display = "block";
        document
          .querySelector(":root")
          .style.setProperty("--grid-w", "calc(100% - 16rem)");
        sw = false;
      } else {
        // gsap.to('.l-con',0.3,{x: '-100%'})
        document.querySelector(".l-con").style.display = "none";
        document
          .querySelector(":root")
          .style.setProperty("--grid-w", "calc(100% - 5rem)");
        sw = true;
      }
    };
    document.querySelector(".btn-nav").addEventListener("click", () => {
      msw();
    });
    window.addEventListener("resize", () => {
      var width = window.innerWidth;
      console.log(width);
      if (width < 1440) {
        document.querySelector(".l-con").style.display = "none";
        document
          .querySelector(":root")
          .style.setProperty("--grid-w", "calc(100% - 5rem)");
        sw = true;
      } else {
        document.querySelector(".l-con").style.display = "block";
        document
          .querySelector(":root")
          .style.setProperty("--grid-w", "calc(100% - 16rem)");
        sw = false;
      }
    });
  });
};

const Nav = () => (
  <>
    {navHide()}
    <div className="flex h-16 px-4 fixed top-0 w-full z-50 bg-main">
      <div className="flex flex-1 items-center">
        <span
          className="iconify cursor-pointer btn-nav"
          id="btn-nav"
          data-icon="fluent:navigation-20-filled"
          data-width="24"
        ></span>
        <span className="ml-7 logo">
          <svg
            viewBox="0 0 97 20"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="text-white w-28"
          >
            <g
              viewBox="0 0 97 20"
              preserveAspectRatio="xMidYMid meet"
              className="style-scope yt-icon"
            >
              <g className="style-scope yt-icon">
                <path
                  d="M27.9704 3.12324C27.6411 1.89323 26.6745 0.926623 25.4445 0.597366C23.2173 2.24288e-07 14.2827 0 14.2827 0C14.2827 0 5.34807 2.24288e-07 3.12088 0.597366C1.89323 0.926623 0.924271 1.89323 0.595014 3.12324C-2.8036e-07 5.35042 0 10 0 10C0 10 -1.57002e-06 14.6496 0.597364 16.8768C0.926621 18.1068 1.89323 19.0734 3.12324 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6769 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9704 3.12324Z"
                  fill="#FF0000"
                  data-darkreader-inline-fill=""
                  className="style-scope yt-icon"
                ></path>
                <path
                  d="M11.4275 14.2854L18.8475 10.0004L11.4275 5.71533V14.2854Z"
                  fill="white"
                  data-darkreader-inline-fill=""
                  className="style-scope yt-icon"
                ></path>
              </g>
              <g id="youtube-red-paths" className="style-scope yt-icon">
                <path
                  d="M40.0566 6.34524V7.03668C40.0566 10.4915 38.5255 12.5118 35.1742 12.5118H34.6638V18.5583H31.9263V1.42285H35.414C38.6078 1.42285 40.0566 2.7728 40.0566 6.34524ZM37.1779 6.59218C37.1779 4.09924 36.7287 3.50658 35.1765 3.50658H34.6662V10.4727H35.1365C36.6064 10.4727 37.1803 9.40968 37.1803 7.10253L37.1779 6.59218Z"
                  className="style-scope yt-icon"
                  fill="white"
                ></path>
                <path
                  d="M46.5336 5.8345L46.3901 9.08238C45.2259 8.83779 44.264 9.02123 43.836 9.77382V18.5579H41.1196V6.0391H43.2857L43.5303 8.75312H43.6337C43.9183 6.77288 44.8379 5.771 46.0232 5.771C46.1949 5.7757 46.3666 5.79687 46.5336 5.8345Z"
                  className="style-scope yt-icon"
                  fill="white"
                ></path>
                <path
                  d="M49.6567 13.2456V13.8782C49.6567 16.0842 49.779 16.8415 50.7198 16.8415C51.6182 16.8415 51.8228 16.1501 51.8439 14.7178L54.2734 14.8613C54.4568 17.5565 53.0481 18.763 50.6586 18.763C47.7588 18.763 46.9004 16.8627 46.9004 13.4126V11.223C46.9004 7.58707 47.8599 5.80908 50.7409 5.80908C53.6407 5.80908 54.3769 7.32131 54.3769 11.0984V13.2456H49.6567ZM49.6567 10.6703V11.5687H51.7193V10.675C51.7193 8.37258 51.5547 7.71172 50.6821 7.71172C49.8096 7.71172 49.6567 8.38669 49.6567 10.675V10.6703Z"
                  className="style-scope yt-icon"
                  fill="white"
                ></path>
                <path
                  d="M68.4103 9.09902V18.5557H65.5928V9.30834C65.5928 8.28764 65.327 7.77729 64.7132 7.77729C64.2216 7.77729 63.7724 8.06186 63.4667 8.59338C63.4832 8.76271 63.4902 8.93439 63.4879 9.10373V18.5605H60.668V9.30834C60.668 8.28764 60.4022 7.77729 59.7884 7.77729C59.2969 7.77729 58.8665 8.06186 58.5631 8.57456V18.5628H55.7456V6.03929H57.9728L58.2221 7.63383H58.2621C58.8947 6.42969 59.9178 5.77588 61.1219 5.77588C62.3072 5.77588 62.9799 6.36854 63.288 7.43157C63.9418 6.34973 64.9225 5.77588 66.0443 5.77588C67.7564 5.77588 68.4103 7.00119 68.4103 9.09902Z"
                  className="style-scope yt-icon"
                  fill="white"
                ></path>
                <path
                  d="M69.8191 2.8338C69.8191 1.4862 70.3106 1.09814 71.3501 1.09814C72.4132 1.09814 72.8812 1.54734 72.8812 2.8338C72.8812 4.22373 72.4108 4.57181 71.3501 4.57181C70.3106 4.56945 69.8191 4.22138 69.8191 2.8338ZM69.9837 6.03935H72.6789V18.5629H69.9837V6.03935Z"
                  className="style-scope yt-icon"
                  fill="white"
                ></path>
                <path
                  d="M81.891 6.03955V18.5631H79.6849L79.4403 17.032H79.3792C78.7466 18.2573 77.827 18.7677 76.684 18.7677C75.0095 18.7677 74.2522 17.7046 74.2522 15.3975V6.0419H77.0697V15.2352C77.0697 16.3382 77.3002 16.7874 77.867 16.7874C78.3844 16.7663 78.8477 16.4582 79.0688 15.9902V6.0419H81.891V6.03955Z"
                  className="style-scope yt-icon"
                  fill="white"
                ></path>
                <path
                  d="M96.1901 9.09893V18.5557H93.3726V9.30825C93.3726 8.28755 93.1068 7.7772 92.493 7.7772C92.0015 7.7772 91.5523 8.06177 91.2465 8.59329C91.263 8.76027 91.2701 8.9296 91.2677 9.09893V18.5557H88.4502V9.30825C88.4502 8.28755 88.1845 7.7772 87.5706 7.7772C87.0791 7.7772 86.6487 8.06177 86.3453 8.57447V18.5627H83.5278V6.0392H85.7527L85.9973 7.63139H86.0372C86.6699 6.42725 87.6929 5.77344 88.8971 5.77344C90.0824 5.77344 90.755 6.3661 91.0631 7.42913C91.7169 6.34729 92.6976 5.77344 93.8194 5.77344C95.541 5.77579 96.1901 7.0011 96.1901 9.09893Z"
                  className="style-scope yt-icon"
                  fill="white"
                ></path>
                <path
                  d="M40.0566 6.34524V7.03668C40.0566 10.4915 38.5255 12.5118 35.1742 12.5118H34.6638V18.5583H31.9263V1.42285H35.414C38.6078 1.42285 40.0566 2.7728 40.0566 6.34524ZM37.1779 6.59218C37.1779 4.09924 36.7287 3.50658 35.1765 3.50658H34.6662V10.4727H35.1365C36.6064 10.4727 37.1803 9.40968 37.1803 7.10253L37.1779 6.59218Z"
                  className="style-scope yt-icon"
                  fill="white"
                ></path>
              </g>
            </g>
          </svg>
        </span>
      </div>
      <div className="flex h-full justify-center box-border p-4 relative max-w-screen-lg w-full">
        <input
          type="text"
          className="bg-transparent border border-gray-700 rounded-sm w-3/5 min-w-2xl outline-none text-white p-3 text-sm bg-input"
          placeholder="搜尋"
        />
        <div className="border-t border-r border-b w-16 border-gray-700 h-full flex justify-center items-center cursor-pointer">
          <span
            className="iconify"
            data-icon="bx:bx-search"
            data-width="20"
          ></span>
        </div>
        <span
          className="h-full ml-4 iconify"
          data-icon="fluent:mic-on-20-filled"
          data-width="24"
        ></span>
      </div>
      <div className="flex-1 items-center h-full flex justify-end">
        <svg viewBox="0 0 24 24" className="w-7 mr-4">
          <g>
            <path
              d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
              fill="white"
            ></path>
          </g>
        </svg>
        <svg viewBox="0 0 24 24" className="w-7 mr-4">
          <g class="style-scope yt-icon">
            <path
              d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z"
              class="style-scope yt-icon"
              fill="white"
            ></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="w-7 mr-4"
        >
          <g class="style-scope yt-icon">
            <path
              d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
              class="style-scope yt-icon"
              fill="white"
            ></path>
          </g>
        </svg>
        <img
          id="img"
          className="mr-4 rounded-full"
          alt="顯示圖片"
          height="32"
          width="32"
          src="https://yt3.ggpht.com/yti/APfAmoHZN8GzPrYBIwjcU2jzokwXrjDV_j_l66bqtA51-g=s88-c-k-c0x00ffffff-no-rj-mo"
        ></img>
      </div>
    </div>
  </>
);

export default Nav;
