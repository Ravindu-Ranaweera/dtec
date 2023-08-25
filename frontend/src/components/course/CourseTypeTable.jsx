import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
// import { PencilAltIcon } from "@heroicons/react/solid";
// import { format } from "date-fns";
import { Link } from "react-router-dom";
import axios from "axios";


const CourseTypeTable = () => {

    const [courseData, setCourseData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const hostListRef = useRef();

    useEffect(() => {

    async function fetchMyAPI() {
        axios
        .get("http://localhost:8000/course")
        .then(function (response) {
            setCourseData(response.data);
            setIsLoading(false);
        })
        .catch(function (error) {
            setIsError(true);
            console.log(error);
        });
    }
    fetchMyAPI();
    }, []);
    console.log(courseData);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

  return (
    <Table variant="simple" className="shadow bg-white">
      <Thead>
        <Tr>
          <Th>Type Name</Th>
          <Th>Start Time</Th>
          <Th>End Time</Th>
          <Th>Holiday List</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {courseData.map((row) => (
          <Tr key={row.id}>
            <Td>{row.shiftName}</Td>


            <Td>
              <Link to={`/dashboard/shift/edit-shift-types/${row.id}`}>
                {/* <PencilAltIcon className="w-6 h-6 text-yellow-400 stroke-current" /> */}
              </Link>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CourseTypeTable;
