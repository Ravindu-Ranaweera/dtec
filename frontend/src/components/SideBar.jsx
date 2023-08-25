import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Avatar,
    IconButton,
    Image,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import useMenuItems from "./useMenuItems";
  
  const Sidebar = () => {
    const [navSize, changeNavSize] = useState("large");
    const { allMenuItems } = useMenuItems();
    const menuItems = allMenuItems;
  
    return (
      <div className={`${navSize === "small" ? "w-20" : "w-48"} h-full relative bg-black z-100`}>
        <div
          className={`top-0 bottom-0 left-0 col-span-2 fixed h-screen shadow-md flex-col rounded-tr-3xl bg-black ${
            navSize === "small" ? "w-20" : "w-48"
          }`}
        >
          <div className="flex items-start justify-between p-3 bg-black rounded-tr-3xl ">
            <div className="flex items-center ">{
            navSize === "small" ? " " : "Pearson"
          }
              <Link to="/dashboard">
                <Image
                  display="flex"
                  w="80px"
                  objectFit="cover"
                  src="/images/pearson.png"
                  alt="Pearson Logo"
                />
              </Link>
            </div>
  
            <div className="flex">
              <IconButton 
                aria-label="Search database"
                _focus={{ outline: "none" }}
                background="none"
                placement="right"
                color="#000"
                _hover={{ background: "none" }}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-700 fill-current"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                onClick={() => {
                  if (navSize === "small") changeNavSize("large");
                  else changeNavSize("small");
                }}
              />
            </div>
          </div>
  
          <div className="flex flex-col items-center w-full p-4 pt-4 mt-12 text-white">
            <Accordion allowToggle w="100%">
              {menuItems.map((item, index) => (
                <AccordionItem border="0" py="2" key={index}>
                  <h2>
                    <AccordionButton>
                      {item.icon}
                      <div className={`flex-1 pl-2 text-base text-left ${navSize === "small" ? "hidden" : "block"}`}>
                        {item.title}
                      </div>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {item.subMenus.map((subItem, subIndex) => (
                      <Link to={subItem.link} key={`${index}-${subIndex}`}>
                        <div className="w-full px-3 py-2 text-sm">
                          - {subItem.name}
                        </div>
                      </Link>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  