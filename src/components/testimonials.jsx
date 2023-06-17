"use client";
import React, { useState } from "react";
import Wrapper from "./reusableComponent/wrapper";
import Carousel from "react-multi-carousel";
import { clients, testimonials } from "@/constants";
import { DynamicPopUp } from "./reusableComponent/dynamicPopUp";
import worksJson from "./../json_files/testimonials.json";
import { ProjectDetails } from "@/components/Work/work2";
import { FiMaximize2 } from "react-icons/fi";
import {
  SiFlutter,
  SiMongodb,
  SiSolidity,
  SiNextdotjs,
  SiDjango,
  SiPython,
  SiMysql,
  SiAmazonaws,
  SiIpfs,
  SiWeb3Dotjs,
  SiHyperledger,
  SiJavascript,
  SiStellar,
  SiTailwindcss,
  SiVercel,
  SiFigma,
  SiAdobexd,
  SiVitess,
  SiNodedotjs,
  SiFirebase,
  SiEthereum,
  SiPhp,
  SiGodaddy,
} from "react-icons/si";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaAppStore,
  FaWindowMaximize,
} from "react-icons/fa";

export default function Testimonials() {
  function timestampToMonthsAgo(timestam) {
    const timestamp = parseInt(timestam);
    const currentDate = new Date();
    const targetDate = new Date(timestamp);

    const diffInMilliseconds = currentDate - targetDate;
    const diffInMonths = diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.44); // Approximate average month length

    const monthsAgo = Math.floor(diffInMonths);
    // console.log(monthsAgo);
    if (monthsAgo < 12) {
      if (monthsAgo === 0) {
        return "Few days ago";
      }
      if (monthsAgo === 1) {
        return "1 month ago";
      } else {
        return monthsAgo + " months ago";
      }
    } else {
      const diffInYears = Math.floor(diffInMonths / 12);

      if (diffInYears === 1) {
        return "1 year ago";
      } else {
        return diffInYears + " years ago";
      }
    }
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1900 },
      items: 2,
      partialVisibilityGutter: 280,
    },
    desktop: {
      breakpoint: { max: 1899, min: 1024 },
      items: 2,
      partialVisibilityGutter: 70,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  const [showpopup, setShowpopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div>
    <DynamicPopUp show={showpopup} setShow={setShowpopup}>
        <TestimonialDetails index={currentIndex} showMaximize={true} />
    </DynamicPopUp>
    <Wrapper
      title={"What our client say's about us"}
      className="bg-bg2 min-h-fit"
      >
      <div className="flex flex-wrap w-[100%] items-center justify-center"></div>
      <Carousel responsive={responsive} partialVisible={true}>
        {testimonials.map((testimonial, index) =>
          testimonialCard({
            ...testimonial,
            key: index,
            when: testimonial.timeStamp,
          })
          )}
      </Carousel>

      <p className="text-4xl md:text-5xl text-left text-text_color2 gil-bold mt-10 lg:pt-10">
        Our Clients
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2 md:gap-4 mt-2 md:mt-8">
        {clients.map((client, index) => (
          <div
          className="relative flex justify-around items-center px-4 py-4 bg-bg2 rounded-md hover:scale-110 transition-all duration-700 ease-in-out cursor-pointer"
          key={index}
          >
            <img
              src={client.image}
              alt="ethereum"
              className="cursor-pointer h-[60px] w-[160px] lg:grayscale md:grayscale hover:grayscale-0 object-contain m-auto hover:scale-110 transition-all duration-700 ease-in-out "
              onClick={() => {
                setCurrentIndex(index);
                setShowpopup(true);
              }}
              />
            {/* <h3 className="text-2xl gil-med text-gray-900">
                    {client.name}
                  </h3> */}
          </div>
        ))}
      </div>
    </Wrapper>
  </div>
  );
  function testimonialCard({ text, image, name, position, when, key }) {
    return (
      <div
      key={key}
      className="bg-bg2 flex flex-col justify-between w-[80vw] min-h-[300px] max-h-[350px] md:max-h-[350px] md:min-h-[300px] md:w-[500px] gradient-05 rounded-2xl m-2 md:p-6 p-4 shadow-sm border border-bg1"
      >
        {/* <div className="flex flex-col h-full justify-between"> */}
        <p className="text-primary2 opacity-80 text-md  md:text-xl  lg:text-2xl text-justify text-ellipsis">
          "{text}"
        </p>

        <div className="flex flex-row w-full justify-between items-center ">
          <div className="flex flex-row mt-[10px]">
            <img
              src={image}
              alt=""
              className="w-[35px] h-[35px] md:w-[60px] md:h-[60px] object-cover rounded-full"
              />
            <div className="flex flex-col ml-1 md:ml-4">
              <p className="text-primary2 font-bold text-md md:text-xl lg:text-2xl">
                {name}
              </p>
              <p className="text-primary2 opacity-70 text-xs md:text-md lg:text-lg">
                {position}
              </p>
            </div>
          </div>
          <p className="text-primary2 opacity-50 text-[9px] md:text-xs">
            {timestampToMonthsAgo(when)}
          </p>
        </div>
        {/* </div> */}
      </div>
    );
  }
};

export function TestimonialDetails({ index, showMaximize }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };
  return (
    <div className="w-full">
      <div className="flex flex-row w-full items-center justify-between">
        <p className=" text-text_color2 text-2xl lg:text-4xl md:text-3xl gil-bold">
          {worksJson[index]?.title}
        </p>

        {/* {showMaximize && (
          <FiMaximize2
            size="1.5rem"
            className="text-[#1D1D1D] hover:text-primary cursor-pointer hover:scale-110 transition-all duration-700 ease-in-out"
            onClick={() => {
              window.open(`/projects/${worksJson[index]?.projectName}`, "_self");
              // open in the same tab
            }}
          />
        )} */}
      </div>

      {/* Image section */}

      <div>
        <Carousel
          responsive={responsive}
          // partialVisible={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          {worksJson[index]?.overview?.images?.map((item, key) => (
            <div
              key={key}
              className="w-full h-[300px] lg:h-[600px] md:h-[600px] p-4 rounded-md"
            >
              <img
                src={item}
                className="w-full h-full object-cover rounded-md"
                alt="portfolio"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Content section */}

      {worksJson[index]?.overview?.content?.map((item, key) => (
        <div key={key} className="w-full pt-5">
          {item?.title && (
            <p className="text-text_color2 text-2xl gil-bold">{item.title}</p>
          )}
          {item?.description && (
            <p className="text-text_color2 text-lg opacity-60">
              {item.description}
            </p>
          )}
          {/* {item?.image && (
            <div className="w-full py-4 rounded-md ">
              <img
                src={item.image}
                className="w-full object-cover rounded-md min-h-[200px] bg-slate-300"
                alt="portfolio"
              />
            </div>
          )} */}
        </div>
      ))}

      {/* Technology section */}

      {/* <p className="text-text_color2 text-xl gil-bold">Tech Stack Used:</p>
      <div className="w-full flex flex-wrap pt-5">
        {worksJson[index]?.overview?.techstack?.map((item, key) => (
          <div key={key} className="mr-5">
            {item == "flutter" && <SiFlutter color="#02569B" size="3rem" />}
            {item == "reactjs" && <FaReact color="#61DBFB" size="3rem" />}
            {item == "mongodb" && <SiMongodb color="#47A248" size="3rem" />}
            {item == "solidity" && <SiSolidity color="#363636" size="3rem" />}
            {item == "nextjs" && <SiNextdotjs color="#000000" size="3rem" />}
            {item == "django" && <SiDjango color="#092E20" size="3rem" />}
            {item == "python" && <SiPython color="#3776AB" size="3rem" />}
            {item == "mysql" && <SiMysql color="#4479A1" size="3rem" />}
            {item == "aws" && <SiAmazonaws color="#FF9900" size="3rem" />}
            {item == "ipfs" && <SiIpfs color="#65C2CB" size="3rem" />}
            {item == "web3" && <SiWeb3Dotjs color="#F16822" size="3rem" />}
            {item == "ethereum" && <SiEthereum color="#3C3C3D" size="3rem" />}
            {item == "hyperledger" && (
              <SiHyperledger color="#2F3134" size="3rem" />
            )}
            {item == "javascript" && (
              <SiJavascript color="#F7DF1E" size="3rem" />
            )}
            {item == "stellar" && <SiStellar color="#08B5E5" size="3rem" />}
            {item == "tailwind" && (
              <SiTailwindcss color="#38B2AC" size="3rem" />
            )}
            {item == "html" && <FaHtml5 color="#E34F26" size="3rem" />}
            {item == "css" && <FaCss3 color="#1572B6" size="3rem" />}
            {item == "vercel" && <SiVercel color="#000000" size="3rem" />}
            {item == "figma" && <SiFigma color="#F24E1E" size="3rem" />}
            {item == "adobexd" && <SiAdobexd color="#FF26BE" size="3rem" />}
            {item == "vite" && <SiVitess color="#646CFF" size="3rem" />}
            {item == "nodejs" && <SiNodedotjs color="#339933" size="3rem" />}
            {item == "firebase" && <SiFirebase color="#FFCA28" size="3rem" />}
            {item == "php" && <SiPhp color="#777BB4" size="3rem" />}
            {item == "godaddy" && <SiGodaddy color="#7DB701" size="3rem" />}
            {item == "biconomy" &&
              imageIcon(
                "https://raw.githubusercontent.com/spotmies/images/43f94647a0c49df8fe085358c8c69101d6a4df53/biconomy.png"
              )}

            {item == "polygon" &&
              imageIcon(
                "https://user-images.githubusercontent.com/63062130/235427169-5241ccf6-6bc2-4950-a22b-60400563c2a3.png"
              )}

            {item == "metamask" &&
              imageIcon(
                "https://github.com/spotmies/images/assets/63062130/897969e1-0c2e-43a6-b836-a47f62b4c9c0"
              )}
          </div>
        ))
        }
      </div> */}

      {/* project links */}

      {/* <div className="mt-5 w-full">
        <p className="text-text_color2 text-xl gil-bold">
          Check out the project
        </p>
        <div className="w-full flex flex-row pt-5">
          {worksJson[index]?.overview?.links?.website && (
            <MdWeb
              size="2rem"
              className="cursor-pointer text-gray-600 hover:text-primary mr-5"
              onClick={() =>
                redirectToRepository(worksJson[index]?.overview?.links?.website)
              }
            />
          )}
          {worksJson[index]?.overview?.links?.android && (
            <AiFillAndroid
              size="2rem"
              className="cursor-pointer text-gray-600 hover:text-green-500 mr-5"
              onClick={() =>
                redirectToRepository(worksJson[index]?.overview?.links?.android)
              }
            />
          )}
          {worksJson[index]?.overview?.links?.ios && (
            <FaAppStore
              size="2rem"
              className="cursor-pointer text-gray-600 hover:text-blue-500 mr-5"
              onClick={() =>
                redirectToRepository(worksJson[index]?.overview?.links?.ios)
              }
            />
          )}
        </div>
      </div> */}
    </div>
  );

  function imageIcon(url) {
    return <img src={url} width="50px" height="50px" />;
  }
}
