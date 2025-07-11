import { Link } from "react-router-dom";
import CountDown from "../Helpers/CountDown";

export default function CampaignCountDown({ className, lastDate }) {
  const { showDate, showHour, showMinute, showSecound } = CountDown(lastDate);

  return (
    <div>
      <div className={`w-full lg:h-[460px] ${className || ""}`}>
        <div className="container-x mx-auto h-full">
          <div className="items-center h-full">
            <div
              data-aos="fade-right"
              className="campaign-countdown h-full w-full mb-5 lg:mb-0"
              style={{
                background: `url(https://mygaochu.vn/Web/Resources/Uploaded/images/MyGaoChu/g4.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "ncover",
                width: "100%",
                height: "100%",
              }}
            >
              <Link to="/flash-sale">
                <div className="w-full xl:p-12 p-5">
                  <div className="countdown-wrapper w-full flex space-x-[23px] mb-10">
                    <div className="countdown-item">
                      <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 sm:text-[30px] text-[14px] text-[#EB5757]">
                          {showDate}
                        </span>
                      </div>
                      <p
                        className="sm:text-[18px] text-[12px] font-500 text-center leading-8"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.6)",
                          borderRadius: "8px",
                        }}
                      >
                        Ngày
                      </p>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 sm:text-[30px] text-[14px] text-[#2F80ED]">
                          {showHour}
                        </span>
                      </div>
                      <p
                        className="sm:text-[18px] text-[12px] font-500 text-center leading-8"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.6)",
                          borderRadius: "8px",
                        }}
                      >
                        Giờ
                      </p>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 sm:text-[30px] text-[14px] text-[#219653]">
                          {showMinute}
                        </span>
                      </div>
                      <p
                        className="sm:text-[18px] text-[12px] font-500 text-center leading-8"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.6)",
                          borderRadius: "8px",
                        }}
                      >
                        Phút
                      </p>
                    </div>
                    <div className="countdown-item">
                      <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                        <span className="font-700 sm:text-[30px] text-[14px] text-[#EF5DA8]">
                          {showSecound}
                        </span>
                      </div>
                      <p
                        className="sm:text-[18px] text-[12px] font-500 text-center leading-8"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.6)",
                          borderRadius: "8px",
                        }}
                      >
                        Giây
                      </p>
                    </div>
                  </div>
                  <div className="countdown-title mb-4">
                    <h1
                      className="text-[44px] text-qblack font-600 p-2 inline-block"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        borderRadius: "8px",
                      }}
                    >
                      WOO! Giảm giá chớp nhoáng
                    </h1>
                    <p
                      className="text-[18px] text-qblack leading-7 p-2 mt-2 inline-block"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        borderRadius: "8px",
                      }}
                    >
                      Bạn có thể mua sản phẩm tốt nhất trong chương trình
                      <br /> với những ưu đãi đặc biệt.
                    </p>
                  </div>

                  <div className="  w-[119px] h-10">
                    <div className="yellow-btn inline-flex space-x-2 items-center">
                      <span className="text-sm font-600 tracking-wide leading-7">
                        Mua ngay
                      </span>
                      <span>
                        <svg
                          width="7"
                          height="11"
                          viewBox="0 0 7 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="2.08984"
                            y="0.636719"
                            width="6.94219"
                            height="1.54271"
                            transform="rotate(45 2.08984 0.636719)"
                            fill="#1D1D1D"
                          />
                          <rect
                            x="7"
                            y="5.54492"
                            width="6.94219"
                            height="1.54271"
                            transform="rotate(135 7 5.54492)"
                            fill="#1D1D1D"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
