import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const Sustainability = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-about h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
          Sustainability
        </h2>
      </div>
      <div className="m-4 md:m-24 flex flex-col md:flex-row justify-between items-end gap-12">
        <h2 className="font-bold text-4xl md:text-6xl text-primary md:min-w-[500px]">
          We drive positive change in the
          <span className="text-primary/40"> communities we serve.</span>{" "}
        </h2>
        <p className=" font-medium text-2xl opacity-50">
        At Zenera Consulting, we are deeply committed to harnessing our success to drive positive change in the communities we serve. As a leading branding and corporate communications firm, we recognise the profound impact our business has on society and the environment. This report showcases our dedication to Corporate Social Responsibility (CSR) and highlights our concerted efforts to make a meaningful difference in the lives of our stakeholders, including our employees, clients, and the wider community.
        </p>
      </div>
      <div className="mt-14 md:my-36 container mx-auto">
        <h2 className="text-4xl text-primary mb-12 px-4">Our CSR Focus Areas</h2>
        <div className="md:mb-32 flex flex-wrap justify-center md:justify-between text-primary ">
          <div className="w-[285px] mb-8">
            <a
              href="/sustainability/leadership"
              className="text-center hover:bg-primary hover:text-white group duration-500 shadow-lg  h-[238px] mx-auto flex flex-col items-center justify-center"
            >
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-white"
                  d="M35 21.875C36.1898 21.875 37.3528 21.5222 38.3421 20.8612C39.3314 20.2002 40.1024 19.2607 40.5577 18.1615C41.013 17.0622 41.1321 15.8527 40.9 14.6858C40.6679 13.5189 40.095 12.447 39.2537 11.6057C38.4124 10.7644 37.3405 10.1915 36.1736 9.95934C35.0067 9.72723 33.7971 9.84636 32.6979 10.3017C31.5987 10.757 30.6592 11.528 29.9982 12.5173C29.3372 13.5065 28.9844 14.6696 28.9844 15.8594C28.9844 16.6494 29.14 17.4316 29.4423 18.1615C29.7446 18.8913 30.1877 19.5545 30.7463 20.1131C31.8745 21.2412 33.4046 21.875 35 21.875ZM35 14.2188C35.3245 14.2188 35.6417 14.315 35.9115 14.4952C36.1813 14.6755 36.3916 14.9318 36.5157 15.2315C36.6399 15.5313 36.6724 15.8612 36.6091 16.1794C36.5458 16.4977 36.3895 16.79 36.1601 17.0195C35.9307 17.2489 35.6383 17.4052 35.3201 17.4685C35.0018 17.5318 34.6719 17.4993 34.3722 17.3751C34.0724 17.2509 33.8161 17.0407 33.6359 16.7709C33.4556 16.5011 33.3594 16.1839 33.3594 15.8594C33.3535 15.6413 33.3917 15.4243 33.4718 15.2213C33.5518 15.0184 33.6721 14.8337 33.8253 14.6784C33.9786 14.5232 34.1616 14.4005 34.3635 14.3177C34.5654 14.2349 34.7819 14.1938 35 14.1969V14.2188ZM38.675 22.7938H31.325C29.4123 22.6797 27.5321 23.3262 26.0939 24.5922C24.6558 25.8583 23.7762 27.6414 23.6469 29.5531V38.7188C23.6771 39.8071 24.0449 40.8591 24.6994 41.7292C25.3539 42.5992 26.2627 43.2443 27.3 43.575V55.825C27.2765 56.3767 27.3621 56.9275 27.5517 57.4461C27.7414 57.9647 28.0314 58.4408 28.4053 58.8471C28.7791 59.2535 29.2294 59.5821 29.7304 59.8143C30.2314 60.0464 30.7733 60.1775 31.325 60.2H38.675C39.2267 60.1775 39.7686 60.0464 40.2696 59.8143C40.7705 59.5821 41.2209 59.2535 41.5947 58.8471C41.9686 58.4408 42.2586 57.9647 42.4483 57.4461C42.6379 56.9275 42.7235 56.3767 42.7 55.825V43.575C43.7373 43.2443 44.6461 42.5992 45.3006 41.7292C45.9551 40.8591 46.3229 39.8071 46.3531 38.7188V29.5531C46.2238 27.6414 45.3442 25.8583 43.9061 24.5922C42.4679 23.3262 40.5877 22.6797 38.675 22.7938ZM31.675 55.8031V39.5938H29.4875C28.6125 39.5938 28.0219 39.0688 28.0219 38.7188V29.5531C28.0219 28.2625 29.5312 27.1688 31.325 27.1688H38.675C40.4688 27.1688 41.9781 28.2625 41.9781 29.5531V38.7188C41.9781 39.0688 41.3875 39.5938 40.5125 39.5938H38.325V41.7813V55.8031H31.675ZM13.125 23.5594C13.8216 23.5594 14.5025 23.3528 15.0816 22.9658C15.6608 22.5788 16.1122 22.0288 16.3788 21.3853C16.6454 20.7417 16.7151 20.0336 16.5792 19.3504C16.4433 18.6672 16.1079 18.0397 15.6153 17.5472C15.1228 17.0546 14.4953 16.7192 13.8121 16.5833C13.1289 16.4474 12.4208 16.5172 11.7772 16.7837C11.1337 17.0503 10.5837 17.5017 10.1967 18.0809C9.80968 18.66 9.60312 19.3409 9.60312 20.0375C9.60312 20.9716 9.97418 21.8674 10.6347 22.5278C11.2951 23.1883 12.1909 23.5594 13.125 23.5594ZM15.75 25.2438H10.5C9.74415 25.1933 8.98577 25.2926 8.26841 25.536C7.55104 25.7794 6.88881 26.1621 6.31971 26.6621C5.75062 27.1621 5.28587 27.7695 4.95215 28.4496C4.61842 29.1297 4.42228 29.8689 4.375 30.625V36.8813C4.42037 37.8146 4.7634 38.7089 5.35386 39.4332C5.94431 40.1575 6.75117 40.6737 7.65625 40.9063V48.9125C7.64262 49.8161 7.97473 50.6908 8.58466 51.3577C9.19459 52.0245 10.0363 52.4332 10.9375 52.5H15.5094C15.9751 52.4721 16.4306 52.3526 16.85 52.1483C17.2694 51.9439 17.6443 51.6588 17.9532 51.3092C18.2621 50.9597 18.499 50.5525 18.6502 50.1112C18.8014 49.6699 18.864 49.2031 18.8344 48.7375V40.7531C19.6845 40.482 20.4314 39.9574 20.9748 39.2497C21.5183 38.542 21.8324 37.685 21.875 36.7938V30.625C21.8277 29.8689 21.6316 29.1297 21.2979 28.4496C20.9641 27.7695 20.4994 27.1621 19.9303 26.6621C19.3612 26.1621 18.699 25.7794 17.9816 25.536C17.2642 25.2926 16.5059 25.1933 15.75 25.2438ZM14.4594 48.125H12.0312V36.6844H9.1875C9.04369 36.7188 8.89381 36.7188 8.75 36.6844V30.625C8.75 30.2531 9.45 29.7063 10.5 29.7063H15.75C16.8 29.7063 17.5 30.2531 17.5 30.625V36.6844C17.3562 36.7188 17.2063 36.7188 17.0625 36.6844H14.4594V48.125ZM56.875 23.5594C57.5716 23.5594 58.2525 23.3528 58.8316 22.9658C59.4108 22.5788 59.8622 22.0288 60.1288 21.3853C60.3954 20.7417 60.4651 20.0336 60.3292 19.3504C60.1933 18.6672 59.8579 18.0397 59.3653 17.5472C58.8728 17.0546 58.2453 16.7192 57.5621 16.5833C56.8789 16.4474 56.1708 16.5172 55.5272 16.7837C54.8837 17.0503 54.3337 17.5017 53.9467 18.0809C53.5597 18.66 53.3531 19.3409 53.3531 20.0375C53.3531 20.9716 53.7242 21.8674 54.3847 22.5278C55.0451 23.1883 55.9409 23.5594 56.875 23.5594ZM59.5 25.2438H54.25C53.4941 25.1933 52.7358 25.2926 52.0184 25.536C51.301 25.7794 50.6388 26.1621 50.0697 26.6621C49.5006 27.1621 49.0359 27.7695 48.7021 28.4496C48.3684 29.1297 48.1723 29.8689 48.125 30.625V36.8813C48.1704 37.8146 48.5134 38.7089 49.1039 39.4332C49.6943 40.1575 50.5012 40.6737 51.4062 40.9063V48.9125C51.3926 49.8161 51.7247 50.6908 52.3347 51.3577C52.9446 52.0245 53.7863 52.4332 54.6875 52.5H59.2156C59.6813 52.4721 60.1369 52.3526 60.5563 52.1483C60.9756 51.9439 61.3505 51.6588 61.6595 51.3092C61.9684 50.9597 62.2052 50.5525 62.3565 50.1112C62.5077 49.6699 62.5703 49.2031 62.5406 48.7375V40.7531C63.3989 40.4894 64.1552 39.968 64.707 39.2597C65.2588 38.5514 65.5793 37.6905 65.625 36.7938V30.625C65.5777 29.8689 65.3816 29.1297 65.0479 28.4496C64.7141 27.7695 64.2494 27.1621 63.6803 26.6621C63.1112 26.1621 62.449 25.7794 61.7316 25.536C61.0142 25.2926 60.2559 25.1933 59.5 25.2438ZM58.2094 48.125H55.7812V36.6844H52.9375C52.7937 36.7188 52.6438 36.7188 52.5 36.6844V30.625C52.5 30.2531 53.2 29.7063 54.25 29.7063H59.5C60.55 29.7063 61.25 30.2531 61.25 30.625V36.6844C61.1062 36.7188 60.9563 36.7188 60.8125 36.6844H58.2094V48.125Z"
                  fill="#77090A"
                />
              </svg>

              <span className="text-2xl mt-4">Leadership</span>
            </a>
            <p className="mt-3">
              We launched the first West African Business Leaders Summit at the
              Civic Centre, Victoria Island, Lagos.
            </p>
            <br />
            <a href="/sustainability/leadership" className="pt-4 text-sm hover:opacity-80">
              EXPLORE MORE
            </a>
          </div>
          <div className="w-[285px] mb-8">
            <a
              href="/sustainability/health"
              className="hover:bg-primary hover:text-white group duration-500 shadow-lg w-[279px] h-[238px] mx-auto flex flex-col items-center justify-center"
            >
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-300 group-hover:fill-white"
              >
                <path
                  d="M58.3331 19.9209C58.3475 18.8377 58.1431 17.7627 57.7321 16.7603C57.3212 15.758 56.7121 14.8489 55.9415 14.0875C54.3721 12.583 52.2822 11.743 50.1081 11.743C47.9341 11.743 45.8442 12.583 44.2748 14.0875L25.0248 33.3376H24.3831C21.0799 33.4263 17.9368 34.7801 15.6029 37.1194C13.269 39.4587 11.9225 42.6049 11.8415 45.9084L11.6665 55.4167C11.6564 55.8103 11.7262 56.2019 11.8716 56.5678C12.017 56.9338 12.2349 57.2665 12.5123 57.5459C13.0801 58.0576 13.8188 58.3385 14.5831 58.3334L24.0915 58.1584C27.3949 58.0773 30.5412 56.7309 32.8805 54.397C35.2198 52.0631 36.5736 48.92 36.6623 45.6167V44.9459L55.9415 25.6959C56.7077 24.9434 57.3144 24.0441 57.7253 23.0519C58.1363 22.0597 58.343 20.9948 58.3331 19.9209ZM24.0623 52.3251L17.4998 52.5V45.9959C17.5304 44.1597 18.2814 42.409 19.5909 41.1214C20.9003 39.8338 22.6633 39.1123 24.4998 39.1126C25.3332 39.1124 26.1583 39.2784 26.9268 39.6008C27.6953 39.9232 28.3919 40.3956 28.9757 40.9903C29.5596 41.585 30.019 42.2901 30.3272 43.0645C30.6354 43.8388 30.7861 44.6668 30.7706 45.5001C30.7277 47.2767 30.0107 48.9705 28.7649 50.2379C27.5191 51.5054 25.8379 52.2515 24.0623 52.3251ZM51.829 21.5542L34.7081 38.6751C34.2601 38.0082 33.7525 37.3834 33.1915 36.8084C32.624 36.2389 31.9984 35.7306 31.3248 35.2917L48.4456 18.2C48.9014 17.765 49.5072 17.5223 50.1373 17.5223C50.7674 17.5223 51.3732 17.765 51.829 18.2C52.0506 18.4271 52.2243 18.6965 52.3395 18.9922C52.4548 19.2879 52.5093 19.6037 52.4998 19.9209C52.5009 20.2239 52.4422 20.5241 52.3271 20.8044C52.2119 21.0846 52.0427 21.3394 51.829 21.5542Z"
                  fill="#77090A"
                  className="group-hover:fill-white"
                />
              </svg>

              <span className="text-2xl mt-4">Health and Wellness</span>
            </a>
            <p className="mt-3">
              Recognising the significance of mental wellbeing and its
              far-reaching impact on individuals, communities, and society at
              large.
            </p>
            <br />
            <a href="/sustainability/health" className="pt-4 text-sm hover:opacity-80">
              EXPLORE MORE
            </a>
          </div>

          <div className="w-[285px] mb-8">
            <a
              href="/sustainability/sports"
              className="hover:bg-primary hover:text-white group duration-500 shadow-lg w-[279px] h-[238px] mx-auto flex flex-col items-center justify-center"
            >
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_386_2)">
                  <path
                    className="group-hover:fill-white"
                    d="M55.4167 14.5879H49.5833C46.3663 14.5879 43.75 17.2039 43.75 20.4207V29.17H26.25V20.4207C26.25 17.2039 23.6338 14.5879 20.4167 14.5879H14.5833C11.3663 14.5879 8.75 17.2039 8.75 20.4207V43.7521C8.75 46.9689 11.3663 49.585 14.5833 49.585H20.4167C23.6338 49.585 26.25 46.9689 26.25 43.7521V35.0029H43.75V43.7521C43.75 46.9689 46.3663 49.585 49.5833 49.585H55.4167C58.6338 49.585 61.25 46.9689 61.25 43.7521V20.4207C61.25 17.2039 58.6338 14.5879 55.4167 14.5879ZM14.5833 43.7521V20.4207H20.4167L20.4196 43.7521H14.5833ZM49.5833 43.7521V20.4207H55.4167L55.4196 43.7521H49.5833ZM64.1667 26.2536H70V37.9193H64.1667V26.2536ZM0 26.2536H5.83333V37.9193H0V26.2536Z"
                    fill="#77090A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_386_2">
                    <rect width="70" height="70" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="text-2xl mt-4">Sports</span>
            </a>
            <p className="mt-3">
              We demonstrated our commitment to grassroots sports development by
              sponsoring The Spartan Warriors.
            </p>
            <br />
            <a href="/sustainability/sports" className="pt-4 text-sm hover:opacity-80">
              EXPLORE MORE
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
