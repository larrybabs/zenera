import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SideNavigation from "../../components/SideNav";
import VisionImg from "../../assets/img/zeneragr.png";
import Logo from "../../assets/img/LogoCe.png";
import ZeneraFlat from "../../assets/img/ZENERA-FLAT-LOGO.png";
import ZeneraPrimary from "../../assets/img/ZENERA-PRIMARY-LOGO.png";
import ZeneraFlatInverted from "../../assets/img/ZENERA-FLAT-INVERTED-LOGO.png";
import ZeneraInverted from "../../assets/img/ZENERA-INVERTED-LOGO.png";
import BrandBg from "../../assets/img/Our-Brand.jpg";
import Download from "../../assets/img/download.svg";

export const Brand = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="relative w-full h-[200px] md:h-[480px] overflow-hidden group ">
        <img
          src={BrandBg}
          alt="Background"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex bg-primary bg-opacity-60 items-center justify-center  duration-500">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center duration-500">
            Our Brand
          </h1>
        </div>
      </div>
      <section>
        <div className="relative min-h-screen container mx-auto ">
          <SideNavigation />
          <div className="md:-mt-80">
            <div className="flex p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-5xl">Vision & Mission</h2>
                <p className="mt-8 mb-14 md:w-[877px]">
                  At Zenera Consulting, our vision is to redefine excellence in
                  strategic communications, creating impactful narratives that
                  shape industries and inspire progress. Our mission is to
                  deliver bespoke, results-driven solutions that elevate brands
                  and drive sustainable growth.
                </p>
                <img src={VisionImg} alt="" className="w-100" />
              </div>
            </div>

            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-5xl">Core Values</h2>
                <p className="mt-8 mb-14 md:w-[877px]">
                  We are anchored on a <b>BOLD SPIRIT</b> which shape our work
                  ethic, fuel our creativity, and ensure we consistently exceed
                  expectations.
                </p>
                <div className="text-white flex flex-wrap md:flex-row gap-3 md:justify-between w-full max-w-[877px]">
                  <div className="group bg-primary shadow-lg w-[168px] h-[147px] flex flex-col items-center justify-center duration-500 hover:shadow-2xl">
                    <svg
                      className="group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 ease-in-out"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_195_649)">
                        <path
                          d="M49.5832 17.5C39.929 17.5 32.0832 25.3458 32.0832 35C32.0832 44.6542 39.929 52.5 49.5832 52.5C59.2373 52.5 67.0832 44.6542 67.0832 35C67.0832 25.3458 59.2373 17.5 49.5832 17.5ZM14.5832 23.3333C8.13734 23.3333 2.9165 28.5542 2.9165 35C2.9165 41.4458 8.13734 46.6667 14.5832 46.6667C21.029 46.6667 26.2498 41.4458 26.2498 35C26.2498 28.5542 21.029 23.3333 14.5832 23.3333ZM14.5832 40.8333C11.3748 40.8333 8.74984 38.2083 8.74984 35C8.74984 31.7917 11.3748 29.1667 14.5832 29.1667C17.7915 29.1667 20.4165 31.7917 20.4165 35C20.4165 38.2083 17.7915 40.8333 14.5832 40.8333Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_195_649">
                          <rect width="70" height="70" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="mt-4">Bold</span>
                  </div>
                  <div className="group bg-primary shadow-lg w-[168px] h-[147px] flex flex-col items-center justify-center duration-500 hover:shadow-2xl">
                    <svg
                      className="group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-500 ease-in-out"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M36.4256 26.4281C35.49 25.9875 34.3706 26.3888 33.93 27.3263C32.9625 29.3813 31.7063 31.3406 30.4931 33.2344C28.7306 35.9869 27.0637 38.6138 26.4844 41.25H14.7675C14.1862 38.6138 12.5212 35.9831 10.7569 33.2344C8.235 29.2969 5.625 25.2281 5.625 20.625C5.625 12.3544 12.3544 5.625 20.625 5.625C26.3625 5.625 31.5131 8.81813 34.0669 13.9594C34.5281 14.8875 35.655 15.2644 36.5794 14.805C37.5075 14.3438 37.8844 13.2188 37.425 12.2925C34.2319 5.865 27.795 1.875 20.625 1.875C10.2863 1.875 1.875 10.2863 1.875 20.625C1.875 26.3269 4.91625 31.0706 7.59937 35.2575C8.99062 37.425 10.3181 39.5025 10.9163 41.3175C10.0463 41.4787 9.375 42.2081 9.375 43.125V50.625C9.375 51.6619 10.215 52.5 11.25 52.5C11.25 55.6012 13.7738 58.125 16.875 58.125H24.375C27.4762 58.125 30 55.6012 30 52.5C31.035 52.5 31.875 51.6619 31.875 50.625V43.125C31.875 42.2081 31.2037 41.4787 30.3337 41.3175C30.9319 39.5006 32.2594 37.425 33.6506 35.2575C34.9294 33.2644 36.2513 31.2 37.3237 28.9256C37.7644 27.9881 37.3613 26.8706 36.4256 26.4281ZM24.375 54.375H16.875C15.8419 54.375 15 53.535 15 52.5H26.25C26.25 53.535 25.4081 54.375 24.375 54.375ZM28.125 48.75H13.125V45H28.125V48.75Z"
                        fill="white"
                      />
                      <path
                        d="M52.5 15C51.7594 15 51.0563 15.1519 50.4075 15.4125C49.7606 13.0219 47.5931 11.25 45 11.25C41.8988 11.25 39.375 13.7737 39.375 16.875C39.375 17.5369 39.51 18.1613 39.7219 18.75H15C13.965 18.75 13.125 19.59 13.125 20.625C13.125 21.66 13.965 22.5 15 22.5H16.875V24.375C16.875 25.41 17.715 26.25 18.75 26.25C19.785 26.25 20.625 25.41 20.625 24.375V22.5H22.5V24.375C22.5 25.41 23.34 26.25 24.375 26.25C25.41 26.25 26.25 25.41 26.25 24.375V22.5H39.72C39.51 23.0887 39.375 23.7131 39.375 24.375C39.375 27.4762 41.8988 30 45 30C47.5931 30 49.7606 28.2281 50.4075 25.8375C51.0563 26.0981 51.7594 26.25 52.5 26.25C55.6012 26.25 58.125 23.7262 58.125 20.625C58.125 17.5237 55.6012 15 52.5 15ZM45 26.25C43.9669 26.25 43.125 25.4081 43.125 24.375C43.125 23.3419 43.9669 22.5 45 22.5C46.0331 22.5 46.875 23.3419 46.875 24.375C46.875 25.4081 46.0331 26.25 45 26.25ZM45 18.75C43.9669 18.75 43.125 17.9081 43.125 16.875C43.125 15.8419 43.9669 15 45 15C46.0331 15 46.875 15.8419 46.875 16.875C46.875 17.9081 46.0331 18.75 45 18.75ZM52.5 22.5C51.4669 22.5 50.625 21.6581 50.625 20.625C50.625 19.5919 51.4669 18.75 52.5 18.75C53.5331 18.75 54.375 19.5919 54.375 20.625C54.375 21.6581 53.5331 22.5 52.5 22.5Z"
                        fill="white"
                      />
                    </svg>

                    <span className="mt-4">Solution-Driven</span>
                  </div>
                  <div className="group bg-primary shadow-lg w-[168px] h-[147px] flex flex-col items-center justify-center duration-500 hover:shadow-2xl">
                    <svg
                      className="group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 ease-in-out"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.9313 16.8656L49.175 8.75C47.6139 7.37265 45.6128 6.59705 43.5312 6.5625H26.4688C24.3872 6.59705 22.3861 7.37265 20.825 8.75L11.0688 16.8875C10.3444 17.5016 9.76198 18.2655 9.36165 19.1266C8.96132 19.9877 8.75264 20.9254 8.75 21.875V48.125C8.74947 49.0783 8.95663 50.0202 9.35706 50.8853C9.7575 51.7504 10.3416 52.5179 11.0688 53.1344L20.825 61.3594C22.4016 62.6972 24.4011 63.4334 26.4688 63.4375H43.5312C45.5989 63.4334 47.5984 62.6972 49.175 61.3594L58.9313 53.1125C59.6556 52.4984 60.238 51.7345 60.6383 50.8734C61.0387 50.0123 61.2474 49.0746 61.25 48.125V21.875C61.2505 20.9217 61.0434 19.9798 60.6429 19.1147C60.2425 18.2496 59.6584 17.4821 58.9313 16.8656ZM13.8906 20.2125L23.6469 11.9656C24.4367 11.3007 25.4363 10.9365 26.4688 10.9375H43.5312C44.5637 10.9365 45.5633 11.3007 46.3531 11.9656L56.0875 20.2125C56.3316 20.4158 56.5285 20.6698 56.6645 20.9569C56.8005 21.244 56.8723 21.5573 56.875 21.875C56.875 22.191 56.8066 22.5032 56.6744 22.7902C56.5423 23.0772 56.3495 23.3321 56.1094 23.5375L46.3531 31.7844C45.5633 32.4493 44.5637 32.8135 43.5312 32.8125H26.4688C25.4363 32.8135 24.4367 32.4493 23.6469 31.7844L13.9125 23.5375C13.6684 23.3342 13.4715 23.0802 13.3355 22.7931C13.1995 22.506 13.1277 22.1927 13.125 21.875C13.125 21.559 13.1934 21.2468 13.3256 20.9598C13.4577 20.6728 13.6505 20.4179 13.8906 20.2125ZM13.8906 49.7875C13.6505 49.5821 13.4577 49.3272 13.3256 49.0402C13.1934 48.7532 13.125 48.441 13.125 48.125V28.6125L20.825 35.175C21.1565 35.4546 21.5074 35.7105 21.875 35.9406V56.5906L13.8906 49.7875ZM26.4688 59.0625H26.25V37.1875H43.75V59.0625H26.4688ZM56.1094 49.7875L48.125 56.525V35.875C48.4926 35.6448 48.8435 35.389 49.175 35.1094L56.875 28.5469V48.125C56.875 48.441 56.8066 48.7532 56.6744 49.0402C56.5423 49.3272 56.3495 49.5821 56.1094 49.7875Z"
                        fill="white"
                      />
                    </svg>

                    <span className="mt-4">Professionalism</span>
                  </div>
                  <div className="group bg-primary shadow-lg w-[168px] h-[147px] flex flex-col items-center justify-center duration-500 hover:shadow-2xl">
                    <svg
                      className="group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-500 ease-in-out"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7609 39.7038L13.7126 39.5214C13.3693 38.4167 13.7096 37.213 14.1398 36.1878C13.4622 35.461 12.7424 34.8316 11.9508 34.2325L11.7662 34.3275C11.3403 34.5534 10.3802 34.6346 9.8875 34.4888L9.89518 34.4474C9.98378 34.3821 10.068 34.4456 10.1432 34.3799L10.0726 34.2404C9.81334 33.7865 9.39737 33.875 8.93913 33.7791L5.95685 33.123C4.67622 32.7794 5.12223 31.5594 5.25463 30.6152L7.25829 15.6832C7.49519 13.4147 7.50149 11.1377 9.76497 9.86324C11.3684 8.96046 13.3477 9.12718 15.0549 9.60956C17.2291 10.224 20.9165 12.469 20.589 15.0222C20.5128 15.6157 20.2023 15.6398 20.7687 15.9742C22.3298 16.8963 24.1736 16.8935 25.8683 16.383L28.3822 15.5246C30.6257 14.8586 32.7523 14.7498 34.9878 15.4347C36.0466 15.7591 37.1229 16.343 38.2472 16.3503C39.2958 16.357 39.4302 15.9755 39.9188 15.0967L39.908 14.9606C39.8486 13.7858 40.6382 12.3867 41.4066 11.5516C43.027 9.79078 45.5809 8.57792 47.9552 8.48677C50.2033 8.26197 52.4847 9.39721 53.2651 11.6127C53.5354 12.3802 53.5597 13.1822 53.6212 13.9845L55.1011 30.1028C55.1701 31.552 54.5493 31.5234 53.2866 31.8297C52.3196 32.0642 51.3303 32.2604 50.3798 32.5541C49.1809 32.9246 49.5712 33.4657 48.2143 32.7608C47.6328 33.1972 47.2224 33.8858 46.6831 34.3817C46.5998 34.4583 46.7141 34.5716 46.7531 34.6655C47.4113 36.2507 47.4628 38.3739 45.9206 39.4649C45.6587 39.6501 45.3644 39.7828 45.0767 39.9221L45.0542 40.0989C44.8404 41.5137 43.8667 43.0709 42.417 43.4731C42.1093 43.5585 41.7343 43.4629 41.5811 43.7232L41.3546 44.0916C40.4397 45.5006 39.0782 46.0396 37.4167 45.7868C37.2444 46.1531 36.8791 46.5173 36.5993 46.8122C35.2652 48.2182 33.1824 48.8412 31.2888 48.3955L30.5135 48.1742C30.2687 48.0981 30.3299 48.081 30.1352 48.2392C29.1576 49.0332 27.7519 49.7487 26.4889 49.7756C24.258 49.8231 22.6863 48.2292 22.6648 46.0376L22.1582 46.2222C20.2766 46.7685 18.5546 45.6193 18.007 43.8062L17.7899 42.9492C17.7265 42.7352 17.7581 42.7135 17.5458 42.6675L17.0623 42.5578C15.477 42.1535 14.2597 41.3501 13.7609 39.7038ZM47.9609 10.7188L51.021 17.1172C51.1441 17.3857 51.2572 17.6751 51.4139 17.9253L50.9213 14.4996C50.5857 12.1848 50.5432 10.9882 47.9609 10.7188ZM11.8207 11.4638C9.66943 11.8 9.98143 13.6751 9.79 15.3058L9.52628 17.1683C9.49318 17.398 9.42746 17.6592 9.43206 17.8896L9.61018 17.4835L11.9961 12.2429C12.2492 11.6707 12.5262 11.4263 11.8207 11.4638ZM45.5294 11.5576L42.3519 13.6642C42.5073 14.9377 43.0917 16.1292 43.6233 17.284L47.9337 26.719C48.4817 27.9275 49.0994 29.1232 49.5734 30.3618L51.1943 29.8792C51.6826 29.7445 52.1788 29.6012 52.6788 29.5182C52.5792 27.2446 51.9722 25.1106 51.0594 23.0445L47.0168 14.4165C46.5677 13.4515 46.1239 12.4808 45.5964 11.5554L45.5294 11.5576ZM14.7865 11.9301L9.0924 24.7216C8.57393 25.8468 8.4526 25.9324 8.25221 27.2078L7.80395 30.4094C7.78916 30.5414 7.74703 30.7205 7.77013 30.8492L10.7068 31.6104L10.8651 31.272L17.8841 15.1999C17.9843 14.9741 18.1581 14.656 18.1748 14.4075C17.5719 13.403 15.8492 12.2696 14.7865 11.9301ZM31.6158 17.2581C29.5649 17.4216 28.5494 17.7947 26.7658 18.5959C26.0317 18.9257 25.7204 18.9943 25.3826 19.7475C24.9979 20.6051 25.0018 21.5734 24.8936 22.492L24.6314 24.1823C24.5393 24.6573 24.4418 25.1423 24.3072 25.6072L23.9917 26.5981C24.8929 26.113 25.8538 24.8282 26.3899 24.002C26.889 23.2331 27.2225 22.5232 27.9887 21.9878L27.9939 21.9501C28.0419 21.6258 28.2068 21.3936 28.4684 21.2026C30.2395 19.9095 32.3038 20.6513 33.7787 21.9689L35.2972 23.3518L39.68 26.8551C41.5728 28.4209 43.8735 30.4778 45.318 32.4807L45.3544 32.4376C45.6511 32.0896 45.9917 31.7439 46.3377 31.4453C46.5074 31.2988 46.8351 31.1152 46.9614 30.9432L46.3418 29.7357L41.431 19.1861C41.2425 18.7959 41.0553 18.3308 40.7883 17.9892C38.3008 19.7329 35.7669 17.6424 33.2559 17.312C32.7081 17.24 32.1666 17.2498 31.6158 17.2581ZM19.6292 17.9211L13.2385 32.2487L15.5583 34.2417C16.041 34.0172 16.469 33.6722 16.9347 33.4137C19.2405 32.1336 22.0107 31.9171 23.2575 34.6327C23.4675 35.0901 23.4599 35.5324 23.4336 36.0257C24.1209 35.8074 24.9842 35.6828 25.6785 35.9487C27.7055 36.7249 28.0517 38.3532 27.7019 40.321C28.7609 40.2937 29.7685 40.4523 30.5697 41.2122C32.1287 42.6911 31.9805 44.3906 31.176 46.1334C33.2177 46.5001 34.0839 46.2712 35.3417 44.6301L30.1084 39.6011C29.4823 39.0118 28.3982 38.0677 29.231 37.1778C30.1926 36.1502 30.9212 37.286 31.5582 37.8798L36.463 42.6064C36.7652 42.8952 37.0999 43.2559 37.4693 43.4541C37.9511 43.7125 39.1387 43.6922 39.1172 42.9245C39.1037 42.4463 35.3059 38.912 34.8288 38.488L34.191 37.9437C33.9074 37.7224 33.5644 37.5056 33.3741 37.1924C32.8576 36.3418 33.4224 35.4264 34.4468 35.4502L34.4877 35.459C35.513 35.6937 38.9837 39.2299 39.7131 40.0266L40.3978 40.8204C40.84 41.359 41.1165 41.8039 41.8509 41.3472C42.1984 41.1311 42.529 40.7647 42.6216 40.3565C42.8729 39.2485 38.6214 35.7165 37.8264 35.1171L36.6272 34.2529C36.3673 34.0632 36.0838 33.8657 35.8735 33.6211C35.2011 32.839 35.9887 31.6416 36.9911 31.8856C37.9182 32.1114 41.8742 35.3967 42.598 36.0651C43.0829 36.5128 43.5067 37.0823 44.0253 37.4821C44.3546 37.2025 44.8289 36.8811 44.8794 36.4164C44.9701 35.5822 43.6716 34.0208 43.1547 33.4132L41.7121 31.8706C39.929 30.0444 38.0003 28.4273 36.0238 26.8178L33.3587 24.5904C31.7645 23.0835 31.5558 22.4753 29.8341 24.0601C29.5812 24.293 29.4209 24.5749 29.2264 24.8544L28.3556 26.0559C27.0687 27.6996 24.3786 30.2152 22.1546 30.1353C21.0832 30.0968 20.1213 29.4431 20.1884 28.279C20.2179 27.766 20.5747 27.3204 20.8376 26.9008L21.3796 25.9572C22.0803 24.5963 22.4587 23.1906 22.6104 21.6666C22.6978 20.7884 22.7266 19.8865 22.9755 19.0354C22.835 18.9757 22.6478 18.9613 22.4967 18.933C21.479 18.7421 20.5719 18.3407 19.6292 17.9211ZM19.3421 34.8994C17.9985 35.2012 15.7049 37.7701 16.0527 39.191C16.1745 39.6888 16.6556 40.2111 17.2117 40.032L17.3795 39.9673C18.0861 39.5735 20.5428 37.2536 20.7448 36.4718C20.9774 35.5716 20.1862 34.8633 19.3421 34.8994ZM24.2752 38.0645C23.338 38.2152 22.7433 38.7562 22.1306 39.4392C21.3224 40.3402 19.9389 41.9904 20.1308 43.2076C20.222 43.7863 20.6943 44.0657 21.2442 43.9626C22.4769 43.4606 24.5791 41.0983 25.1269 39.7837C25.5048 38.8768 25.5461 37.9152 24.2752 38.0645ZM28.1772 42.61C26.727 42.7607 24.9646 44.9767 25.1104 46.3496C25.18 47.0043 25.466 47.3039 26.1029 47.3266C26.9244 47.1097 28.2497 45.7347 28.7013 44.9677C29.1108 44.2723 29.5687 42.447 28.1772 42.61Z"
                        fill="white"
                      />
                    </svg>

                    <span className="mt-4">Integrity</span>
                  </div>
                </div>

                <div className="text-white mt-3 md:mt-14 flex flex-wrap md:flex-row gap-3 md:justify-between w-full max-w-[877px]">
                  <div className="group bg-primary shadow-lg w-[168px] h-[147px] flex flex-col items-center justify-center duration-500 hover:shadow-2xl">
                    <svg
                      className="group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 ease-in-out"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.3439 44.475L30.8429 49.017C28.7228 49.6376 26.4719 49.6563 24.3419 49.071L11.0879 45.42C10.7044 45.3142 10.3786 45.0604 10.1822 44.7144C9.9859 44.3684 9.93504 43.9585 10.0409 43.575C10.1467 43.1915 10.4005 42.8658 10.7465 42.6694C11.0925 42.4731 11.5024 42.4222 11.8859 42.528L25.1399 46.176C26.7322 46.6143 28.4153 46.5997 29.9999 46.134L45.5009 41.592C46.0159 41.4404 46.4538 41.098 46.7251 40.6346C46.9964 40.1713 47.0808 39.6219 46.9611 39.0985C46.8413 38.5751 46.5264 38.1171 46.0806 37.8178C45.6348 37.5186 45.0916 37.4006 44.5619 37.488L36.5519 38.808C36.5159 38.817 36.4859 38.805 36.4529 38.808C36.4499 38.88 36.4589 38.949 36.4529 39.018C36.3377 40.2674 35.7602 41.4287 34.8334 42.2744C33.9067 43.1202 32.6975 43.5893 31.4429 43.59C31.3619 43.59 31.2809 43.59 31.2029 43.584L24.8069 43.38C24.0706 43.3579 23.3363 43.2918 22.6079 43.182L20.1449 42.813C19.751 42.7541 19.3967 42.5412 19.1598 42.2211C18.923 41.901 18.823 41.4999 18.8819 41.106C18.9407 40.7122 19.1537 40.3579 19.4738 40.121C19.7939 39.8841 20.195 39.7841 20.5889 39.843L23.0519 40.215C23.6649 40.3084 24.283 40.3645 24.9029 40.383L31.3169 40.587C31.8438 40.6143 32.361 40.4374 32.761 40.0933C33.161 39.7492 33.4131 39.2642 33.4649 38.739C33.5174 38.2123 33.3615 37.6859 33.0307 37.2726C32.6999 36.8594 32.2203 36.5921 31.6949 36.528L27.1799 35.958C25.9467 35.8026 24.787 35.286 23.8469 34.473C22.8102 33.5745 21.5828 32.9234 20.2575 32.569C18.9322 32.2145 17.5437 32.166 16.1969 32.427L11.7689 33.267C11.3815 33.3339 10.9834 33.246 10.6601 33.0223C10.3369 32.7986 10.1144 32.457 10.0405 32.0709C9.96654 31.6849 10.0471 31.2852 10.2649 30.9579C10.4827 30.6307 10.8202 30.402 11.2049 30.321L15.6329 29.481C17.4234 29.1346 19.2693 29.1996 21.031 29.6709C22.7928 30.1423 24.4245 31.0078 25.8029 32.202C26.2973 32.629 26.9068 32.9003 27.5549 32.982L32.0669 33.552C32.8252 33.6469 33.5518 33.9142 34.1908 34.3333C34.8299 34.7525 35.3646 35.3123 35.7539 35.97C35.8519 35.9182 35.9556 35.8779 36.0629 35.85L44.0759 34.53C45.358 34.3221 46.6712 34.6103 47.7484 35.336C48.8256 36.0617 49.586 37.1705 49.8748 38.4368C50.1637 39.7032 49.9594 41.032 49.3035 42.1531C48.6476 43.2742 47.5893 44.1064 46.3439 44.475ZM21.2849 17.235C21.2857 15.956 21.6507 14.7037 22.3372 13.6246C23.0237 12.5455 24.0032 11.6841 25.1613 11.1413C26.3194 10.5984 27.6081 10.3965 28.8766 10.5592C30.1452 10.7219 31.3413 11.2425 32.3249 12.06C33.3084 11.2425 34.5045 10.7219 35.7731 10.5592C37.0417 10.3965 38.3304 10.5984 39.4884 11.1413C40.6465 11.6841 41.626 12.5455 42.3125 13.6246C42.999 14.7037 43.364 15.956 43.3649 17.235C43.1926 20.2465 42.0088 23.1116 40.0051 25.3663C38.0014 27.621 35.2952 29.1332 32.3249 29.658C29.3586 29.1253 26.6575 27.6112 24.6553 25.3587C22.6532 23.1063 21.4661 20.2432 21.2849 17.235ZM24.2849 17.241C24.4682 19.4559 25.3431 21.557 26.7859 23.2475C28.2287 24.9379 30.1663 26.132 32.3249 26.661C34.4839 26.1319 36.4218 24.9373 37.8647 23.2463C39.3075 21.5552 40.1821 19.4534 40.3649 17.238C40.3647 16.4431 40.1107 15.6689 39.6399 15.0284C39.169 14.3879 38.506 13.9145 37.7473 13.6771C36.9886 13.4397 36.1739 13.4508 35.422 13.7087C34.67 13.9666 34.0201 14.4579 33.5669 15.111C33.4221 15.3036 33.2345 15.4598 33.0189 15.5674C32.8034 15.675 32.5658 15.731 32.3249 15.731C32.0839 15.731 31.8463 15.675 31.6308 15.5674C31.4152 15.4598 31.2277 15.3036 31.0829 15.111C30.5565 14.3501 29.7661 13.812 28.8651 13.6013C27.9642 13.3906 27.0171 13.5224 26.2079 13.971C25.6255 14.2959 25.1404 14.7701 24.8024 15.3449C24.4644 15.9197 24.2857 16.5742 24.2849 17.241Z"
                        fill="white"
                      />
                    </svg>

                    <span className="mt-4">Respect</span>
                  </div>
                  <div className="group bg-primary shadow-lg w-[168px] h-[147px] flex flex-col items-center justify-center duration-500 hover:shadow-2xl">
                    <svg
                      className="group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 ease-in-out"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M38.008 4.23938C27.7268 4.74688 18.8718 12.3353 17.089 22.8331C17.0671 22.9556 16.973 23.0497 16.9533 23.1744L9.09146 38.7603C8.77209 39.4166 9.32115 40.3134 10.0496 40.3309H13.1908V51.4062C13.1908 51.9794 13.7115 52.5 14.2846 52.5H23.0346L24.4018 64.6691C24.3449 65.3166 24.9858 65.9138 25.6333 65.8284C26.2786 65.7475 26.7424 65.0081 26.5215 64.3956L25.0865 51.2706C25.0455 51.008 24.9135 50.7681 24.7135 50.593C24.5136 50.4178 24.2584 50.3186 23.9927 50.3125H15.3783V39.2372C15.3675 38.9506 15.2488 38.6786 15.046 38.4758C14.8432 38.273 14.5712 38.1543 14.2846 38.1434H11.8258L19.073 23.8591C19.1139 23.749 19.1368 23.633 19.1408 23.5156C19.5334 20.8957 20.44 18.3792 21.8085 16.1108C23.1769 13.8424 24.9802 11.8668 27.1147 10.2976C29.2491 8.72849 31.6727 7.5967 34.2461 6.96733C36.8194 6.33796 39.4918 6.22343 42.1096 6.63031C53.1324 8.30375 60.6596 18.41 59.0627 29.3934L49.4246 50.4503C49.3552 50.6237 49.3311 50.8119 49.3546 50.9972L50.5861 64.5991C50.4986 65.2509 51.0936 65.8941 51.7477 65.8306C52.404 65.765 52.918 65.0169 52.7058 64.3934L51.4743 51.1328L61.1146 30.1459C61.1481 30.058 61.1702 29.9661 61.1802 29.8725C61.6246 26.9724 61.4924 24.0132 60.791 21.1643C60.0897 18.3154 58.8331 15.6329 57.0932 13.2706C55.3533 10.9082 53.1643 8.91246 50.6517 7.39762C48.1391 5.88278 45.3522 4.87866 42.4508 4.44281C40.9806 4.22468 39.4921 4.15798 38.008 4.23938ZM39.034 13.125C38.8059 13.1996 38.6088 13.347 38.4728 13.5446C38.3368 13.7423 38.2696 13.9791 38.2815 14.2188V25.8409L30.0783 33.9741C29.9728 34.0761 29.8889 34.1982 29.8316 34.3334C29.7743 34.4685 29.7448 34.6137 29.7448 34.7605C29.7448 34.9072 29.7743 35.0525 29.8316 35.1876C29.8889 35.3227 29.9728 35.4449 30.0783 35.5469C30.8877 36.3563 31.8196 37.0934 32.8127 37.6666C38.9902 41.2322 46.898 39.1497 50.5861 33.0859C50.6447 33.0017 50.6911 32.9097 50.724 32.8125C50.7817 32.7281 50.8274 32.6361 50.8596 32.5391C51.9161 30.6097 52.5002 28.4528 52.5002 26.25C52.5002 19.0137 46.6115 13.125 39.3752 13.125C39.3068 13.1185 39.238 13.1185 39.1696 13.125C39.1244 13.1222 39.0791 13.1222 39.034 13.125ZM36.0261 13.5363C36.0019 13.5571 35.9785 13.579 35.9561 13.6019C34.8555 13.8962 33.7986 14.3346 32.8127 14.9056C26.5455 18.5216 24.4105 26.5475 28.0265 32.8147C28.0488 32.8383 28.0721 32.8609 28.0965 32.8825L29.7371 31.2419C27.053 26.0728 28.8096 19.6919 33.9065 16.7497C34.589 16.3559 35.3349 16.0847 36.094 15.8616V13.5341C36.0714 13.5334 36.0487 13.5334 36.0261 13.5341V13.5363ZM40.469 15.5181C45.9727 16.0956 50.3127 20.5909 50.3127 26.25C50.3127 27.7944 49.9146 29.2906 49.2868 30.6928L40.469 25.6375V15.5181ZM39.5808 27.6172L48.0574 32.5391C44.8046 37.0191 38.8108 38.5831 33.9065 35.7525C33.399 35.4594 32.9943 35.0306 32.5393 34.6587L39.5808 27.6172Z"
                        fill="white"
                      />
                    </svg>

                    <span className="mt-4">Ingenuity</span>
                  </div>
                  <div className="group bg-primary shadow-lg w-[168px] h-[147px] flex flex-col items-center justify-center duration-500 hover:shadow-2xl">
                    <svg
                      className="group-hover:scale-125  transition-transform duration-500 ease-in-out"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 27.5C33.3152 27.5 36.4946 28.817 38.8388 31.1612C41.183 33.5054 42.5 36.6848 42.5 40V55H37.5V40C37.5001 38.087 36.7692 36.2462 35.4568 34.8543C34.1444 33.4625 32.3497 32.6247 30.44 32.5125L30 32.5C28.087 32.4999 26.2462 33.2308 24.8543 34.5432C23.4625 35.8556 22.6247 37.6503 22.5125 39.56L22.5 40V55H17.5V40C17.5 36.6848 18.817 33.5054 21.1612 31.1612C23.5054 28.817 26.6848 27.5 30 27.5ZM13.75 35C14.45 35.0017 15.125 35.08 15.775 35.235C15.3491 36.5079 15.096 37.8322 15.0225 39.1725L15 40V40.215C14.7126 40.1124 14.4137 40.0452 14.11 40.015L13.75 40C12.8182 40 11.9197 40.3469 11.2297 40.9731C10.5397 41.5993 10.1076 42.46 10.0175 43.3875L10 43.75V55H5V43.75C5 41.4294 5.92187 39.2038 7.56282 37.5628C9.20376 35.9219 11.4294 35 13.75 35ZM46.25 35C48.5706 35 50.7962 35.9219 52.4372 37.5628C54.0781 39.2038 55 41.4294 55 43.75V55H50V43.75C50 42.8182 49.6531 41.9197 49.0269 41.2297C48.4007 40.5397 47.54 40.1076 46.6125 40.0175L46.25 40C45.81 40.0017 45.3933 40.0725 45 40.2125V40C45 38.335 44.73 36.735 44.23 35.24C44.875 35.0825 45.555 35 46.25 35ZM13.75 20C15.4076 20 16.9973 20.6585 18.1694 21.8306C19.3415 23.0027 20 24.5924 20 26.25C20 27.9076 19.3415 29.4973 18.1694 30.6694C16.9973 31.8415 15.4076 32.5 13.75 32.5C12.0924 32.5 10.5027 31.8415 9.33058 30.6694C8.15848 29.4973 7.5 27.9076 7.5 26.25C7.5 24.5924 8.15848 23.0027 9.33058 21.8306C10.5027 20.6585 12.0924 20 13.75 20ZM46.25 20C47.9076 20 49.4973 20.6585 50.6694 21.8306C51.8415 23.0027 52.5 24.5924 52.5 26.25C52.5 27.9076 51.8415 29.4973 50.6694 30.6694C49.4973 31.8415 47.9076 32.5 46.25 32.5C44.5924 32.5 43.0027 31.8415 41.8306 30.6694C40.6585 29.4973 40 27.9076 40 26.25C40 24.5924 40.6585 23.0027 41.8306 21.8306C43.0027 20.6585 44.5924 20 46.25 20ZM13.75 25C13.4185 25 13.1005 25.1317 12.8661 25.3661C12.6317 25.6005 12.5 25.9185 12.5 26.25C12.5 26.5815 12.6317 26.8995 12.8661 27.1339C13.1005 27.3683 13.4185 27.5 13.75 27.5C14.0815 27.5 14.3995 27.3683 14.6339 27.1339C14.8683 26.8995 15 26.5815 15 26.25C15 25.9185 14.8683 25.6005 14.6339 25.3661C14.3995 25.1317 14.0815 25 13.75 25ZM46.25 25C45.9185 25 45.6005 25.1317 45.3661 25.3661C45.1317 25.6005 45 25.9185 45 26.25C45 26.5815 45.1317 26.8995 45.3661 27.1339C45.6005 27.3683 45.9185 27.5 46.25 27.5C46.5815 27.5 46.8995 27.3683 47.1339 27.1339C47.3683 26.8995 47.5 26.5815 47.5 26.25C47.5 25.9185 47.3683 25.6005 47.1339 25.3661C46.8995 25.1317 46.5815 25 46.25 25ZM30 5C32.6522 5 35.1957 6.05357 37.0711 7.92893C38.9464 9.8043 40 12.3478 40 15C40 17.6522 38.9464 20.1957 37.0711 22.0711C35.1957 23.9464 32.6522 25 30 25C27.3478 25 24.8043 23.9464 22.9289 22.0711C21.0536 20.1957 20 17.6522 20 15C20 12.3478 21.0536 9.8043 22.9289 7.92893C24.8043 6.05357 27.3478 5 30 5ZM30 10C28.6739 10 27.4021 10.5268 26.4645 11.4645C25.5268 12.4021 25 13.6739 25 15C25 16.3261 25.5268 17.5979 26.4645 18.5355C27.4021 19.4732 28.6739 20 30 20C31.3261 20 32.5979 19.4732 33.5355 18.5355C34.4732 17.5979 35 16.3261 35 15C35 13.6739 34.4732 12.4021 33.5355 11.4645C32.5979 10.5268 31.3261 10 30 10Z"
                        fill="white"
                      />
                    </svg>

                    <span className="mt-4">Teamwork</span>
                  </div>
                  <div className="w-[168px] h-[147px]"></div>
                </div>
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-5xl">Logo</h2>
                <p className="mt-8 mb-14 md:w-[877px]">
                  Our brand identity is a symbol of trust, expertise, and
                  distinction. Every element of our logo reflects our commitment
                  to precision, influence, and transformative storytelling that
                  positions our clients as industry leaders.
                </p>
                <div className="text-white flex flex-wrap  gap-12  w-full max-w-[877px]">
                  {/* <div className="shadow-lg w-full md:w-[258px] h-[194px] flex flex-col items-center justify-center">
                    <a href={Logo} download="zenera-logo.png">
                      <img
                        src={Logos}
                        alt="zenera logo"
                        className="w-[230px] cursor-pointer"
                      />
                    </a>
                  </div>

                  <div className="bg-primary shadow-lg w-full md:w-[258px] h-[194px] flex flex-col items-center justify-center">
                    <a href={Logop} download="zenera-logo-primary.png">
                      <img
                        src={Logop}
                        alt="zenera logo"
                        className="w-[230px] cursor-pointer"
                      />
                    </a>
                  </div> */}

                  <div className="group">
                    <div className="relative shadow-lg gap-3 w-full md:w-[258px] h-[194px] flex flex-col items-center justify-center">
                      <img src={ZeneraPrimary} alt="zenera logo" className="group-hover:scale-105 duration-500" />
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-primary font-medium">Primary Logo</p>
                      <a href={ZeneraPrimary} download="zenera-logo.png" className="hover:scale-110 duration-500">
                        <img
                          src={Download}
                          alt="zenera logo"
                          className="w-[24px] cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="group">
                    <div className="shadow-lg gap-3 bg-[#000000] w-full md:w-[258px] h-[194px] flex flex-col items-center justify-center">
                      <img src={ZeneraInverted} alt="zenera logo" className="group-hover:scale-105 duration-500" />
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-primary font-medium">Inverted Logo</p>
                      <a href={ZeneraInverted} download="zenera-logo.png" className="hover:scale-110 duration-500">
                        <img
                          src={Download}
                          alt="zenera logo"
                          className="w-[24px] cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="group">
                    <div className="relative shadow-lg gap-3 w-full md:w-[258px] h-[194px] flex flex-col items-center justify-center">
                      <img src={ZeneraFlat} alt="zenera logo" className="group-hover:scale-105 duration-500" />
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-primary font-medium">Flat Logo</p>
                      <a href={ZeneraFlat} download="zenera-logo.png" className="hover:scale-110 duration-500">
                        <img
                          src={Download}
                          alt="zenera logo"
                          className="w-[24px] cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="group">
                    <div className="shadow-lg gap-3 bg-[#000000] w-full md:w-[258px] h-[194px] flex flex-col items-center justify-center">
                      <img src={ZeneraFlatInverted} alt="zenera logo" className="group-hover:scale-105 duration-500" />
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-primary font-medium">Flat Inverted Logo</p>
                      <a href={ZeneraFlatInverted} download="zenera-logo.png" className="hover:scale-110 duration-500">
                        <img
                          src={Download}
                          alt="zenera logo"
                          className="w-[24px] cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="group">
                    <div className="relative shadow-lg gap-3 w-full md:w-[258px] h-[194px] flex flex-col items-center justify-center">
                      <img src={Logo} alt="zenera logo" className="group-hover:scale-105 duration-500" />
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-primary font-medium">Anniversary Logo</p>
                      <a href={Logo} download="zenera-logo.png" className="hover:scale-110 duration-500">
                        <img
                          src={Download}
                          alt="zenera logo"
                          className="w-[24px] cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-[#666662] shadow-lg w-full h-[194px] flex flex-col items-center justify-center">
                  <span className="mt-4 text-white">Video/Image on brand story</span>
                </div> */}
              </div>
            </div>
            <div className="flex mt-24 p-4">
              <div className="hidden md:block w-2/5"></div>
              <div>
                <h2 className="text-5xl">Social Responsibility</h2>
                <p className="my-12 md:w-[877px]">
                  Beyond business, we are committed to building a better world
                  through sustainability-driven initiatives that empower
                  communities, drive social impact, and foster inclusive growth.{" "}
                  <b>
                    Download our Investment Report to see how we are making a
                    difference.
                  </b>
                </p>
                <a
                  href="/reports"
                  className="underline text-blue-600 text-2xl flex"
                >
                  Sustainability{" "}
                  <svg
                    width="34"
                    height="35"
                    viewBox="0 0 34 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.85452 23.436L22.6809 14.5813L21.3321 21.9442C21.3069 22.074 21.3076 22.2076 21.3343 22.3371C21.361 22.4666 21.4131 22.5896 21.4877 22.6989C21.5622 22.8081 21.6577 22.9015 21.7686 22.9736C21.8794 23.0457 22.0035 23.0951 22.1336 23.1189C22.2637 23.1427 22.3973 23.1405 22.5265 23.1124C22.6557 23.0842 22.7781 23.0307 22.8865 22.955C22.9949 22.8792 23.0872 22.7827 23.1581 22.671C23.229 22.5593 23.277 22.4347 23.2993 22.3044L25.0831 12.5669C25.1308 12.3061 25.073 12.0369 24.9223 11.8187C24.7717 11.6005 24.5405 11.4511 24.2797 11.4032L14.5423 9.61951C14.4131 9.59568 14.2804 9.5976 14.152 9.62517C14.0235 9.65275 13.9018 9.70543 13.7938 9.7802C13.6311 9.89258 13.5053 10.0507 13.4324 10.2345C13.3596 10.4183 13.3428 10.6197 13.3844 10.813C13.4259 11.0063 13.5238 11.183 13.6657 11.3207C13.8077 11.4584 13.9872 11.551 14.1817 11.5866L21.5447 12.9354L8.71827 21.7902C8.50001 21.9408 8.35055 22.172 8.30276 22.4329C8.25497 22.6938 8.31277 22.963 8.46345 23.1812C8.61413 23.3995 8.84533 23.549 9.10621 23.5967C9.36708 23.6445 9.63626 23.5867 9.85452 23.436Z"
                      fill="#5129EE"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
