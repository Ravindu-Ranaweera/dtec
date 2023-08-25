import React from "react";
import { useHistory } from "react-router-dom";
import PageTitle from "../../PageTitle";
import CourseTypeTable from "../../course/CourseTypeTable";


const ViewCourse = () => {
  const history = useHistory();

  return (
    <div className="font-poppins">
      <PageTitle title="Courses" />
      <button
        className="px-4 py-2 mb-2 font-bold tracking-wide text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
        onClick={() => history.push("/dashboard/course/create-course-type")}
      >
        Add Course
      </button>
      <div>
        <CourseTypeTable />
      </div>
    </div>
  );
};

export default ViewCourse;
