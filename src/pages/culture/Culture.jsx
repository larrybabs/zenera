import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CultureBg from "../../assets/img/CultureBg.jpg";

export const Culture = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#FFF] h-[90px]"></div>
      <div className="relative w-full h-[200px] md:h-[580px] overflow-hidden group ">
        <img
          src={CultureBg}
          alt="Background"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex bg-primary bg-opacity-60 items-center justify-center group-hover:bg-opacity-15 duration-500">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center group-hover:text-primary duration-500">
            Our Culture
          </h1>
        </div>
      </div>
      <div className="text-center my-8 md:my-32">
        {/* <h2 className="text-2xl md:text-5xl mb-4">
          Learn about our culture and the people
        </h2> */}

        <div className="grid lg:grid-cols-10 gap-12 px-4 container mx-auto justify-between">
          <div className="lg:col-span-5 text-start">
            <h2 className="font-bold text-4xl text-primary">The Excel Place</h2>
            <p className="mt-3 text-lg">
              At Zenera Consulting, excellence is not just a standard—it’s our
              way of life. We are{" "}
              <span className="font-bold">The Excel Place</span>—a dynamic
              ecosystem where bold ideas thrive, innovation drives impact, and
              every team member is empowered to deliver their best.
            </p>
          </div>
          <div className="lg:col-span-5 text-start">
            <h2 className="font-bold text-4xl text-primary">Where Passion Meets Purpose</h2>
            <p className="mt-3 text-lg">
              At <span className="font-bold">The Excel Place</span>, every team member is more than an employee,
              they are <span className="font-bold">a visionary, a trailblazer, a force for change</span>. We create
              an atmosphere where ambition is nurtured, and excellence is the
              only acceptable outcome.
            </p>
          </div>
        </div>

        <div className="my-16 md:my-32 flex flex-wrap text-primary">
          <a
            href="/our-people"
            className="hover:bg-primary hover:text-white group duration-500 shadow-lg w-[279px] h-[238px] mx-auto flex flex-col items-center justify-center"
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

            <span className="text-2xl mt-4">Our People</span>
          </a>
          <a
            href="/our-brand"
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

            <span className="text-2xl mt-4">Our Brand</span>
          </a>

          <a
            href="/our-lifestyle"
            className="hover:bg-primary hover:text-white group duration-500 shadow-lg w-[279px] h-[238px] mx-auto flex flex-col items-center justify-center"
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
                d="M60.7946 25.6947C60.7952 25.6947 60.794 25.6947 60.7946 25.6947C60.7931 25.6947 60.7902 25.6947 60.789 25.6947C50.0793 26.5434 39.9678 31.2232 32.3145 38.8766C27.1488 44.0423 23.314 50.3516 21.104 57.2454C19.0244 56.8359 17.1379 55.8659 15.6347 54.3629C13.9911 52.7194 12.9487 50.6258 12.6212 48.2959C11.9888 43.9352 11.6668 39.4634 11.6668 35C11.6668 30.5367 11.9888 26.0648 12.6238 21.6927C12.9484 19.3743 13.9911 17.2807 15.6344 15.6372C17.2808 13.9907 19.3741 12.9483 21.7013 12.6207C27.959 11.7177 34.3363 11.4529 40.6538 11.8373C42.2574 11.9199 43.6446 10.7095 43.7414 9.10295C43.8382 7.49645 42.6165 6.1122 41.007 6.01537C34.2964 5.60528 27.5204 5.88733 20.878 6.8472C17.3007 7.35149 14.0623 8.96091 11.5073 11.5101C8.96104 14.0622 7.35162 17.3008 6.85025 20.8667C6.17533 25.5037 5.8335 30.2575 5.8335 35C5.8335 39.7425 6.17533 44.4964 6.84762 49.122C7.35191 52.7022 8.96395 55.9408 11.5102 58.4871C14.0594 61.0362 17.298 62.6486 20.8243 63.1441C21.4508 63.2439 22.1032 63.315 22.8009 63.3862C26.6602 63.9048 30.7649 64.1667 35.0002 64.1667C39.7427 64.1667 44.4965 63.8249 49.1221 63.1526C52.7023 62.6483 55.941 61.0362 58.4901 58.4871C61.0364 55.9408 62.6487 52.7022 63.1501 49.1333C63.825 44.4964 64.1668 39.7425 64.1668 35C64.1668 32.6218 64.0898 30.4541 63.9277 28.3777C63.8022 26.7712 62.4437 25.5608 60.7946 25.6947ZM57.3765 48.3073C57.0519 50.6258 56.0092 52.7194 54.366 54.3629C52.7195 56.0094 50.6262 57.0518 48.2961 57.3793C46.3947 57.6549 44.4738 57.8565 42.5479 58.0134C41.7505 58.0776 40.9522 58.1035 40.1533 58.1476C39.005 58.2114 37.8567 58.2721 36.7079 58.2931C35.8693 58.3089 35.0395 58.2981 34.2074 58.2919C33.0195 58.2817 31.8335 58.2567 30.6517 58.2004C29.9325 58.1668 29.2196 58.1251 28.512 58.0749C28.011 58.0391 27.5177 57.9761 27.019 57.9317C28.9915 52.3481 32.2057 47.234 36.4387 43.001C42.3974 37.0423 50.065 33.1488 58.2795 31.8614C58.3163 32.8668 58.3335 33.9092 58.3335 35C58.3335 39.4634 58.0115 43.9352 57.3765 48.3073Z"
                fill="#77090A"
              />
              <path
                className="group-hover:fill-white"
                d="M24.0627 29.1667C26.8816 29.1667 29.1668 26.8815 29.1668 24.0625C29.1668 21.2436 26.8816 18.9584 24.0627 18.9584C21.2437 18.9584 18.9585 21.2436 18.9585 24.0625C18.9585 26.8815 21.2437 29.1667 24.0627 29.1667Z"
                fill="#77090A"
              />
              <path
                className="group-hover:fill-white"
                d="M55.417 23.3334C60.2495 23.3334 64.167 19.4159 64.167 14.5834C64.167 9.75088 60.2495 5.83337 55.417 5.83337C50.5845 5.83337 46.667 9.75088 46.667 14.5834C46.667 19.4159 50.5845 23.3334 55.417 23.3334Z"
                fill="#77090A"
              />
            </svg>

            <span className="text-2xl mt-4">Our Lifestyle</span>
          </a>
        </div>
        <div className="md:my-32 flex flex-wrap text-primary">
          <a
            href="/our-recognitions"
            className="hover:bg-primary hover:text-white group duration-500 shadow-lg w-[279px] h-[238px] mx-auto flex flex-col items-center justify-center"
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
                d="M20.7519 33.1188C17.3977 36.648 15.3123 41.4167 15.3123 46.6667C15.3123 57.5167 24.1498 66.3542 34.9998 66.3542C45.8498 66.3542 54.6873 57.5167 54.6873 46.6667C54.6873 41.4167 52.6019 36.648 49.2477 33.1188L60.3456 6.67921C60.6227 6.00837 60.5498 5.23546 60.156 4.62296C59.7477 4.01046 59.0623 3.64587 58.3331 3.64587H11.6665C10.9373 3.64587 10.2519 4.01046 9.84355 4.62296C9.43521 5.23546 9.3623 6.00837 9.65396 6.67921L20.7519 33.1188ZM34.9998 61.9792C26.556 61.9792 19.6873 55.1105 19.6873 46.6667C19.6873 38.223 26.556 31.3542 34.9998 31.3542C43.4435 31.3542 50.3123 38.223 50.3123 46.6667C50.3123 55.1105 43.4435 61.9792 34.9998 61.9792ZM55.0373 8.02087L45.7331 30.1875C43.1662 28.5039 40.2383 27.4497 37.1873 27.1105V18.9584C37.1873 17.748 36.2102 16.7709 34.9998 16.7709C33.7894 16.7709 32.8123 17.748 32.8123 18.9584V27.1105C29.6769 27.4605 26.7748 28.5396 24.2665 30.1875L14.9623 8.02087H55.0373Z"
                fill="#77090A"
              />
              <path
                className="group-hover:fill-white"
                d="M43.4002 41.8688L38.9523 41.2271L36.9544 37.1875C36.5898 36.4438 35.8315 35.9625 35.0002 35.9625C34.169 35.9625 33.4106 36.4292 33.046 37.1875L31.0481 41.2271L26.6002 41.8688C25.769 41.9854 25.0981 42.5688 24.8356 43.3563C24.5731 44.1438 24.7919 45.0188 25.3898 45.6021L28.6127 48.7375L27.8544 53.1709C27.7085 53.9875 28.044 54.8188 28.7294 55.3146C29.4002 55.8104 30.3044 55.8688 31.0335 55.475L35.0002 53.3896L38.9815 55.475C39.3023 55.65 39.6523 55.7229 40.0023 55.7229C40.4544 55.7229 40.9065 55.5771 41.2856 55.3C41.9565 54.8042 42.2919 53.9875 42.1606 53.1563L41.4023 48.7229L44.6252 45.5875C45.2231 45.0042 45.4419 44.1438 45.1794 43.3417C44.9169 42.5688 44.2315 42 43.4002 41.8688ZM37.5231 46.4188C37.0127 46.9146 36.7794 47.6438 36.896 48.3584L37.1002 49.5542L36.021 48.9854C35.7002 48.825 35.3502 48.7375 35.0002 48.7375C34.6502 48.7375 34.3002 48.825 33.9794 48.9854L32.9002 49.5542L33.1044 48.3584C33.221 47.6438 32.9877 46.9292 32.4773 46.4188L31.6023 45.5729L32.7981 45.3979C33.5127 45.2959 34.1252 44.8438 34.446 44.2021L35.0002 43.1084L35.5398 44.2021C35.8606 44.8438 36.4731 45.2959 37.1877 45.3979L38.3835 45.5729L37.5231 46.4188Z"
                fill="#77090A"
              />
            </svg>

            <span className="text-2xl mt-4">Our Recognitions</span>
          </a>
          <a
            href="/our-insights"
            className="hover:bg-primary hover:text-white group duration-500 shadow-lg w-[279px] h-[238px] mx-auto flex flex-col items-center justify-center"
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
                d="M25.1562 10.9375V15.3125C27.7661 15.3153 30.2683 16.3534 32.1137 18.1988C33.9591 20.0442 34.9972 22.5464 35 25.1562H39.375C39.3707 21.3865 37.8712 17.7725 35.2056 15.1069C32.54 12.4413 28.926 10.9418 25.1562 10.9375ZM62.6128 51.6668L47.4007 39.8344C46.9798 39.5073 46.454 39.3451 45.922 39.3783C45.39 39.4115 44.8884 39.6379 44.5115 40.0148L43.8102 40.7162L39.8278 36.7347L36.7347 39.8278L40.7172 43.8104L40.0159 44.5117C39.639 44.8886 39.4126 45.3902 39.3794 45.9222C39.3462 46.4542 39.5084 46.9801 39.8355 47.4009L51.6688 62.6139C52.348 63.4869 53.205 64.2056 54.183 64.7222C55.161 65.2389 56.2377 65.5418 57.3416 65.6108C57.503 65.6198 57.6642 65.625 57.8246 65.625C59.4501 65.625 61.0351 65.1171 62.3579 64.1724C63.6808 63.2277 64.6754 61.8933 65.2029 60.3557C65.7303 58.8181 65.7642 57.1541 65.2999 55.5963C64.8355 54.0385 63.8961 52.6646 62.6128 51.6668ZM60.247 60.247C59.9036 60.5905 59.491 60.8569 59.0367 61.0287C58.5824 61.2005 58.0968 61.2738 57.612 61.2436C57.1272 61.2134 56.6545 61.0804 56.225 60.8535C55.7955 60.6267 55.4192 60.3111 55.1211 59.9277L44.4752 46.2398L46.2396 44.4754L59.9263 55.1202C60.3099 55.4183 60.6258 55.7946 60.8528 56.224C61.0799 56.6535 61.213 57.1264 61.2433 57.6113C61.2736 58.0961 61.2005 58.5819 61.0287 59.0363C60.857 59.4908 60.5905 59.9035 60.247 60.247Z"
                fill="#77090A"
              />
              <path
                className="group-hover:fill-white"
                d="M25.1563 4.375C21.0461 4.375 17.0283 5.5938 13.6108 7.87727C10.1934 10.1607 7.52977 13.4063 5.95689 17.2036C4.384 21.0009 3.97247 25.1793 4.77432 29.2105C5.57616 33.2416 7.55539 36.9445 10.4617 39.8508C13.368 42.7571 17.0709 44.7363 21.102 45.5382C25.1332 46.34 29.3116 45.9285 33.1089 44.3556C36.9062 42.7827 40.1518 40.1192 42.4352 36.7017C44.7187 33.2842 45.9375 29.2664 45.9375 25.1562C45.9313 19.6466 43.7398 14.3645 39.8439 10.4686C35.948 6.57271 30.6659 4.38125 25.1563 4.375ZM25.1563 41.5625C21.9114 41.5625 18.7394 40.6003 16.0414 38.7976C13.3434 36.9948 11.2406 34.4325 9.99886 31.4347C8.75711 28.4368 8.43221 25.1381 9.06525 21.9555C9.69829 18.773 11.2608 15.8497 13.5553 13.5553C15.8497 11.2608 18.7731 9.69828 21.9556 9.06524C25.1381 8.4322 28.4368 8.7571 31.4347 9.99885C34.4325 11.2406 36.9948 13.3434 38.7976 16.0414C40.6003 18.7394 41.5625 21.9114 41.5625 25.1562C41.5578 29.506 39.8277 33.6762 36.752 36.752C33.6762 39.8277 29.506 41.5578 25.1563 41.5625Z"
                fill="#77090A"
              />
            </svg>

            <span className="text-2xl mt-4">Our Insights</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};
