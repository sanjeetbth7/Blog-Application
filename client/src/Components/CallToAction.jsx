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
            src="./img/courosel/portfolio.png"
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
