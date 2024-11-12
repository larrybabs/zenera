import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TEAM from "../../assets/leadershipImg/TLP1.JPG";
import TEAM2 from "../../assets/img/zenHero2.png";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:block bg-[#F7F7F7] h-[80px]"></div>
      <div className="bg-about h-[80px] md:h-[300px] bg-contain bg-no-repeat md:bg-cover flex flex-col justify-center items-center">
        <h2 className="text-center mx-auto text-white text-2xl md:text-6xl ">
        About Us
        </h2>
      </div>
      <div className="">
        <div className="m-4 md:m-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <h2 className="font-bold text-4xl md:text-6xl text-primary">
            <span className="text-primary/40">We are Nigeria’s only</span>{" "}
            <br />
            communications advisory group{" "}
          </h2>
          <p className=" font-medium text-2xl opacity-50">
            with a foremost sustainability consulting practice. We help our
            clients to constantly engage their audiences to achieve
            communications objectives.
          </p>
        </div>

        <div className="m-4 md:mx-24 py-8 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <img loading="lazy" src={TEAM} alt="zenera" className="w-full max-w-[586px]"/>
          <div className="">
            <h2 className="text-4xl">Meet the Zenera Group</h2>
            <p className="my-5 opacity-50 w-full">
              We help our clients to constantly engage their audiences to
              achieve communications objectives. The group is primarily made up
              of CSR-in-Action and Zenera Consulting.
            </p>
            <button className="uppercase bg-primary text-white py-3 px-8">
              our story
            </button>
          </div>
        </div>

        <div className="m-4 md:mx-24 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="">
            <h2 className="text-4xl">Zenera Consulting</h2>
            <p className="my-5 opacity-50">
            Zenera Consulting is a full-service Branding and Public Relations (PR) firm in Nigeria offering integrated communications advisory, including media relations, marketing communications and crisis communications services.

<br/>
<br/>
With core competency in the development and execution of tailored and strategic stakeholder communications, we help our clients establish and maintain close relations with their key stakeholders, most importantly the media.
            </p>
          </div>
          <img loading="lazy" src={TEAM2} alt="zenera" className="w-full max-w-[586px]"/>
        </div>

        <div className="text-center md:my-32">
        <h2 className="text-2xl md:text-5xl mb-4">Industry We Serve</h2>
        <div className="md:my-32 flex flex-wrap text-primary">
          <div
          
            className="border border-gray shadow-lg w-[279px] h-[238px] mx-auto flex flex-col items-center justify-center"
          >
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.3484 28.7656L49.9078 4.04688H46.2766L12.0312 37.7344L28.3062 40.8187L18.8125 65.9531H22.75L57.9906 32.2219L40.3484 28.7656ZM34.2234 37.4937L21.0547 35L40.7422 15.6406L34.3766 32.0687L48.8578 34.8906L27.4859 55.3437L34.2234 37.4937Z" fill="#77090A"/>
</svg>


            <span className="text-2xl mt-4">Energy</span>
          </div>
          <div
            
            className="border border-gray shadow-lg w-[279px] h-[238px] mx-auto flex flex-col items-center justify-center"
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

            <span className="text-2xl mt-4">Public Sector</span>
          </div>
          <div
            
            className="border border-gray shadow-lg w-[279px] h-[238px] mx-auto flex flex-col items-center justify-center"
          >
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.7596 38.5817C36.2395 38.5806 33.7635 39.2424 31.5802 40.5008C31.4557 40.5727 31.3466 40.6685 31.2591 40.7825C31.1716 40.8966 31.1075 41.0268 31.0703 41.1657C31.0331 41.3046 31.0237 41.4494 31.0425 41.5919C31.0613 41.7344 31.108 41.8719 31.1799 41.9964C31.2518 42.1208 31.3475 42.2299 31.4616 42.3174C31.5757 42.4049 31.7059 42.4691 31.8447 42.5062C31.9836 42.5434 32.1284 42.5529 32.271 42.5341C32.4135 42.5153 32.5509 42.4686 32.6754 42.3967C35.3566 40.8465 38.5272 40.3747 41.5436 41.077C44.56 41.7794 47.1961 43.6033 48.9167 46.1784C50.6374 48.7536 51.3136 51.887 50.8081 54.9426C50.3026 57.9981 48.6533 60.7468 46.195 62.6306C43.7367 64.5145 40.6537 65.3922 37.5718 65.0857C34.4899 64.7792 31.6402 63.3115 29.601 60.9804C27.5619 58.6493 26.4863 55.6296 26.5925 52.5343C26.6987 49.4391 27.9788 46.5002 30.1729 44.3144C30.2776 44.2137 30.3612 44.0932 30.4188 43.9599C30.4764 43.8266 30.5069 43.6832 30.5085 43.538C30.5101 43.3928 30.4827 43.2487 30.4281 43.1142C30.3734 42.9796 30.2925 42.8573 30.19 42.7544C30.0876 42.6515 29.9657 42.57 29.8314 42.5147C29.6971 42.4594 29.5532 42.4314 29.408 42.4323C29.2627 42.4332 29.1192 42.463 28.9856 42.52C28.852 42.577 28.7311 42.66 28.63 42.7642C26.2739 45.1087 24.8041 48.1979 24.4712 51.505C24.1382 54.8121 24.9628 58.1322 26.8043 60.8993C28.6458 63.6664 31.3901 65.7089 34.5693 66.6787C37.7485 67.6485 41.1657 67.4854 44.2381 66.2173C47.3104 64.9491 49.8478 62.6545 51.4174 59.7246C52.9869 56.7947 53.4916 53.4111 52.8452 50.1508C52.1989 46.8904 50.4415 43.9552 47.8729 41.8458C45.3042 39.7363 42.0834 38.5832 38.7596 38.5831V38.5817Z" fill="#77090A"/>
<path d="M39.9481 57.2658H37.2021C36.9898 57.2662 36.7795 57.2248 36.5832 57.1438C36.3869 57.0629 36.2085 56.944 36.0581 56.7941C35.9078 56.6442 35.7885 56.4661 35.707 56.27C35.6256 56.074 35.5835 55.8638 35.5833 55.6515C35.5833 55.3614 35.4681 55.0832 35.263 54.8781C35.0579 54.6729 34.7797 54.5577 34.4896 54.5577C34.1995 54.5577 33.9213 54.6729 33.7162 54.8781C33.5111 55.0832 33.3958 55.3614 33.3958 55.6515C33.397 56.6594 33.7979 57.6258 34.5107 58.3385C35.2234 59.0512 36.1897 59.4522 37.1977 59.4533H37.4792V61.5504C37.4792 61.8405 37.5944 62.1187 37.7995 62.3238C38.0046 62.5289 38.2828 62.6442 38.5729 62.6442C38.863 62.6442 39.1412 62.5289 39.3463 62.3238C39.5514 62.1187 39.6667 61.8405 39.6667 61.5504V59.4533H39.9452C40.9535 59.4533 41.9205 59.0528 42.6335 58.3398C43.3465 57.6268 43.7471 56.6598 43.7471 55.6515C43.7471 54.6431 43.3465 53.6761 42.6335 52.9631C41.9205 52.2501 40.9535 51.8496 39.9452 51.8496H37.2021C36.7821 51.837 36.3836 51.6613 36.091 51.3598C35.7984 51.0582 35.6348 50.6546 35.6348 50.2345C35.6348 49.8143 35.7984 49.4107 36.091 49.1092C36.3836 48.8077 36.7821 48.632 37.2021 48.6194H39.9481C40.3762 48.6198 40.7866 48.79 41.0892 49.0926C41.3919 49.3953 41.5621 49.8057 41.5625 50.2337C41.5625 50.5238 41.6777 50.802 41.8829 51.0071C42.088 51.2123 42.3662 51.3275 42.6563 51.3275C42.9463 51.3275 43.2245 51.2123 43.4297 51.0071C43.6348 50.802 43.75 50.5238 43.75 50.2337C43.7488 49.2258 43.3479 48.2594 42.6352 47.5467C41.9224 46.834 40.9561 46.433 39.9481 46.4319H39.6667V44.3333C39.6667 44.0432 39.5514 43.765 39.3463 43.5599C39.1412 43.3548 38.863 43.2396 38.5729 43.2396C38.2828 43.2396 38.0046 43.3548 37.7995 43.5599C37.5944 43.765 37.4792 44.0432 37.4792 44.3333V46.4319H37.2021C36.2065 46.4514 35.2582 46.8606 34.561 47.5716C33.8638 48.2826 33.4732 49.2387 33.4732 50.2345C33.4732 51.2303 33.8638 52.1864 34.561 52.8974C35.2582 53.6084 36.2065 54.0176 37.2021 54.0371H39.9481C40.3763 54.0371 40.7869 54.2072 41.0897 54.5099C41.3924 54.8127 41.5625 55.2233 41.5625 55.6515C41.5625 56.0796 41.3924 56.4902 41.0897 56.793C40.7869 57.0957 40.3763 57.2658 39.9481 57.2658ZM64.7748 22.804C64.4985 22.7362 64.2067 22.7788 63.9613 22.9226C63.7159 23.0665 63.5361 23.3003 63.4602 23.5744C63.3844 23.8486 63.4183 24.1416 63.5548 24.3911C63.6913 24.6407 63.9197 24.8273 64.1915 24.9112C67.1504 25.7337 67.8169 26.6612 67.8169 26.9121C67.8169 27.825 63.5367 29.9658 55.2387 29.9658C46.9408 29.9658 42.6592 27.825 42.6592 26.9121C42.6592 25.9992 46.9379 23.8583 55.2387 23.8583C57.2019 23.8512 59.1628 23.9892 61.1056 24.271C61.3885 24.3047 61.6734 24.2268 61.8998 24.0538C62.1263 23.8809 62.2764 23.6265 62.3183 23.3447C62.3602 23.0629 62.2907 22.7759 62.1245 22.5445C61.9582 22.3131 61.7084 22.1556 61.4279 22.1054C59.3783 21.8088 57.3097 21.6626 55.2387 21.6679C48.1265 21.6679 40.4717 23.3085 40.4717 26.9092V35.4185C40.4717 39.0192 48.1265 40.6598 55.2387 40.6598C60.0192 40.6598 65.0358 39.9146 67.8169 38.3337V39.6725C67.8169 40.5854 63.5367 42.7262 55.2387 42.7262C54.2865 42.7262 53.359 42.6971 52.4679 42.6387C52.1784 42.6219 51.8939 42.7194 51.6757 42.9104C51.4574 43.1013 51.323 43.3704 51.3013 43.6596C51.2912 43.8033 51.3096 43.9476 51.3555 44.0842C51.4014 44.2208 51.4739 44.347 51.5688 44.4554C51.6637 44.5638 51.7791 44.6524 51.9084 44.7161C52.0377 44.7797 52.1783 44.8172 52.3221 44.8262C53.2627 44.8875 54.2383 44.9196 55.2387 44.9196C60.0192 44.9196 65.0358 44.1744 67.8169 42.5862V43.925C67.8169 44.8379 63.5367 46.9875 55.2387 46.9875H54.8785C54.8173 46.9875 54.7823 46.9875 54.5869 46.9875C54.3 46.9894 54.0245 47.0998 53.8157 47.2965C53.6069 47.4931 53.4802 47.7615 53.461 48.0477C53.4528 48.3379 53.5599 48.6194 53.7589 48.8307C53.9579 49.0421 54.2326 49.1658 54.5227 49.175C54.6685 49.175 54.7604 49.175 54.8217 49.175H54.9675H55.2504C60.0308 49.175 65.0475 48.4283 67.8285 46.8417V48.1804C67.8285 49.0933 63.5483 51.2342 55.2504 51.2342C54.9603 51.2342 54.6821 51.3494 54.477 51.5545C54.2719 51.7596 54.1567 52.0378 54.1567 52.3279C54.1567 52.618 54.2719 52.8962 54.477 53.1013C54.6821 53.3064 54.9603 53.4217 55.2504 53.4217C60.0308 53.4217 65.0475 52.675 67.8285 51.0956V52.5408C67.8285 53.4537 63.5483 55.5946 55.2504 55.5946H54.8581C54.5729 55.6069 54.3023 55.7242 54.0982 55.924C53.8942 56.1237 53.7711 56.3917 53.7527 56.6767C53.75 56.9666 53.8624 57.2459 54.0652 57.4531C54.2681 57.6603 54.5448 57.7786 54.8348 57.7821H55.2504C62.3452 57.7865 70 56.1458 70 52.5452V26.9121C70 25.7017 69.0929 24.0071 64.7748 22.804ZM55.2344 32.1533C60.0148 32.1533 65.0315 31.4081 67.8125 29.8273V31.166C67.8125 32.079 63.5323 34.2285 55.2344 34.2285C46.9365 34.2285 42.6548 32.0862 42.6548 31.166V29.8273C45.4358 31.4081 50.4583 32.1533 55.2344 32.1533ZM55.2344 38.4752C46.9335 38.4752 42.6548 36.3344 42.6548 35.4215V34.0827C45.4358 35.6635 50.451 36.416 55.2344 36.416C60.0177 36.416 65.0315 35.6708 67.8125 34.0827V35.4215C67.8125 36.3344 63.5323 38.4752 55.2344 38.4752ZM23.0417 58.7417C22.6567 58.7562 22.2688 58.765 21.875 58.765C10.2813 58.765 2.1875 52.1135 2.1875 42.5906C2.1875 34.825 7.4375 23.3406 15.2673 18.6229C15.3738 18.5573 15.4627 18.4771 15.559 18.4042H24.5C24.7901 18.4042 25.0683 18.2889 25.2734 18.0838C25.4785 17.8787 25.5937 17.6005 25.5937 17.3104C25.5937 17.0203 25.4785 16.7421 25.2734 16.537C25.0683 16.3319 24.7901 16.2167 24.5 16.2167H16.9385C17.0878 15.3945 16.9177 14.5465 16.4631 13.8454C12.7662 8.11854 12.0473 5.54166 12.1815 4.87374C12.1955 4.88199 12.2119 4.88556 12.2281 4.88395C13.8706 4.8954 15.5028 5.14393 17.0742 5.62187C18.5945 6.08396 20.1724 6.32943 21.7613 6.35104C23.5575 6.30697 25.3416 6.04349 27.074 5.56645C28.4468 5.18842 29.8564 4.9596 31.2783 4.88395C31.239 5.70791 30.4223 8.14187 27.5975 12.9631H19.25C18.9599 12.9631 18.6817 13.0784 18.4766 13.2835C18.2715 13.4886 18.1563 13.7668 18.1563 14.0569C18.1563 14.3469 18.2715 14.6251 18.4766 14.8303C18.6817 15.0354 18.9599 15.1506 19.25 15.1506H26.6321C26.5782 15.5583 26.6019 15.9724 26.7021 16.3712C26.8193 16.8243 27.0258 17.2494 27.3095 17.6215C27.5933 17.9937 27.9485 18.3054 28.3544 18.5383C32.2915 21.1026 35.4844 24.658 37.6119 28.8473C37.6784 28.9772 37.7703 29.0924 37.8821 29.1863C37.9938 29.2801 38.1233 29.3507 38.2627 29.3937C38.4022 29.4368 38.5488 29.4515 38.6941 29.437C38.8393 29.4224 38.9801 29.379 39.1083 29.3092C39.2365 29.2395 39.3494 29.1447 39.4404 29.0306C39.5314 28.9165 39.5987 28.7854 39.6382 28.6449C39.6777 28.5044 39.6887 28.3574 39.6706 28.2126C39.6524 28.0678 39.6055 27.928 39.5325 27.8017C37.217 23.266 33.7461 19.4213 29.47 16.6556C29.3132 16.5685 29.1754 16.451 29.0645 16.31C28.9535 16.1691 28.8718 16.0074 28.824 15.8346C28.7867 15.6894 28.7792 15.5382 28.802 15.39C28.8248 15.2419 28.8774 15.0999 28.9567 14.9727C34.4458 5.84062 33.5592 4.27291 33.1858 3.5977C33.0195 3.31004 32.778 3.07317 32.4871 2.91257C32.1962 2.75197 31.867 2.67372 31.535 2.68624C29.8583 2.73447 28.1935 2.98468 26.5767 3.43145C25.0081 3.86914 23.392 4.114 21.7642 4.16062C20.3642 4.13574 18.9748 3.91334 17.6371 3.49999C15.8824 2.97599 14.0623 2.70301 12.231 2.68916C11.8398 2.66382 11.4495 2.74965 11.105 2.93674C10.7605 3.12382 10.4759 3.40453 10.2842 3.74645C9.91667 4.42166 8.93958 6.21541 14.6285 15.0267C14.7141 15.1536 14.7724 15.2969 14.7998 15.4475C14.8271 15.5981 14.8229 15.7527 14.7875 15.9017C14.7423 16.0792 14.6616 16.2459 14.5503 16.3915C14.439 16.5371 14.2995 16.6587 14.14 16.749C5.6875 21.8487 0 34.2285 0 42.5906C0 53.2292 9.20208 60.9583 21.875 60.9583C22.295 60.9583 22.7121 60.9496 23.1263 60.9321C23.2699 60.9264 23.411 60.8925 23.5415 60.8324C23.6721 60.7722 23.7895 60.6869 23.887 60.5813C23.9846 60.4757 24.0604 60.352 24.1102 60.2171C24.1599 60.0823 24.1826 59.9389 24.177 59.7953C24.1713 59.6517 24.1374 59.5106 24.0773 59.38C24.0171 59.2495 23.9318 59.1321 23.8262 59.0345C23.7206 58.9369 23.5969 58.8611 23.462 58.8114C23.3272 58.7616 23.1838 58.7389 23.0402 58.7446L23.0417 58.7417Z" fill="#77090A"/>
</svg>


            <span className="text-2xl mt-4">Financial Sector</span>
          </div>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
