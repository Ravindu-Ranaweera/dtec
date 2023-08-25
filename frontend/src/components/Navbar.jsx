import React from "react";
import { useHistory } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <div className="flex flex-end z-50">
       
      <div
        className="fixed py-4 shadow-md bg-white px-8"
        style={{ width: "calc(100vw - 12rem)" }}
      >
       
        <button
          className="px-4 py-2 mb-2 font-bold tracking-wide text-white bg-blue-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
          onClick={() => history.push("/dashboard/course/create-course-type")}
        >
          Add Course
        </button>
        <h2 className="text-2xl font-bold text-gray-700 text-left">
          DTEC Career Guidance Unit
        </h2>
      </div>
      
    </div>
  );
};

export default Navbar;
