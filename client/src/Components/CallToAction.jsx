import { Carousel } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <a
          href="https://github.com/sanjeetbth7/portfolio"
          className="h-full w-full flex justify-center items-center overflow-hidden"
        >
          <img
            className="object-contain w-full h-full"
            src="https://private-user-images.githubusercontent.com/98413687/261015825-8016ddad-36e7-477c-a330-97a639bc27a6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMyMDE4MTgsIm5iZiI6MTcyMzIwMTUxOCwicGF0aCI6Ii85ODQxMzY4Ny8yNjEwMTU4MjUtODAxNmRkYWQtMzZlNy00NzdjLWEzMzAtOTdhNjM5YmMyN2E2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA5VDExMDUxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTYwNWE4ZDc1M2M2Y2VkYjMyZTg3NTYyZmUzYjdjZjdjYWQzYmI3YWNkMjU1NzU1ZmM3MWI3MTU5YTQyYTY5YTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Rp_4d5HM_qw_I-n9cGsEsjlryoc6RyYtst3fm47jVns"
            alt="portfolio"
          />
        </a>

        <a
          href="https://github.com/sanjeetbth7/SmartzAgri"
          className="h-full w-full flex justify-center items-center overflow-hidden"
        >
          <img
            className="object-contain w-full h-full"
            src="https://raw.githubusercontent.com/sanjeetbth7/SmartzAgri/master/public/images/demo/home.png"
            alt="SmartAgri"
          />
        </a>

        <a
          href="https://github.com/sanjeetbth7/Employee-Management-System"
          className="h-full w-full flex justify-center items-center overflow-hidden"
        >
          <img
            className="object-contain w-full h-full"
            src="./img/courosel/ems.png"
            alt="employee management system"
          />
        </a>

        <a
          href="https://github.com/sanjeetbth7/DocUp"
          className="h-full w-full flex justify-center items-center overflow-hidden"
        >
          <img
            className="object-contain w-full h-full"
            src="./img/courosel/DocUp.jpg"
            alt="DocUp"
          />
        </a>

        <a
          href="https://github.com/sanjeetbth7/Ecommerce_adv_project"
          className="h-full w-full flex justify-center items-center overflow-hidden"
        >
          <img
            className="object-contain w-full h-full"
            src="./img/courosel/e-commerce.png"
            alt="e-commerce"
          />
        </a>
      </Carousel>
    </div>
  );
}
