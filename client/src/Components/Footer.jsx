import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin, BsQuora } from 'react-icons/bs';

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="m-auto">
            <Link to="/" className="self-center whitespace-nowrap p-0">
              <img src="./img/logo-vert.png" className="h-[60px] m-0 p-0" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6 font-medium">
            <div>
              <Footer.Title title="Pages" className=" text-cyan-500 dark:text-cyan-300" />
              <Footer.LinkGroup col>
                <Footer.Link to="/about">About Us</Footer.Link>
                <Footer.Link to="/">Home</Footer.Link>
                <Footer.Link to="/projects">Projects</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow Us" className=" text-cyan-500 dark:text-cyan-300"/>
              <Footer.LinkGroup col>
                <Footer.Link
                  target="_blank"
                  href="https://github.com/sanjeetbth7/"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  target="_blank"
                  href="https://www.linkedin.com/in/sanjeet-kumar07/"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  target="_blank"
                  href="https://www.codechef.com/users/sanjeet_bth"
                >
                  CodeChef
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="LEGAL" className=" text-cyan-500 dark:text-cyan-300"/>
              <Footer.LinkGroup col>
                <Footer.Link
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                 
                >
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>      
        </div>

        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="GetSetExplore - Sanjeet's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
        <Footer.Icon href='#' icon={BsFacebook}/>
        <Footer.Icon href='#' icon={BsInstagram}/>
        <Footer.Icon href='#' icon={BsTwitter}/>
        <Footer.Icon href='#' icon={BsLinkedin}/>
        <Footer.Icon href='https://github.com/sanjeetbth7' icon={BsGithub}/>
        <Footer.Icon href='https://getsetexplore.quora.com/' icon={BsQuora}/>

          </div>
        </div>

      </div>
    </Footer>
  );
}
