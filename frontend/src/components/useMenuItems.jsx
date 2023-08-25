import ChartIcon from "./icons/ChartIcon";
import StudentIcon from "./icons/StudentIcon";
import TableIcon from "./icons/TableIcon";

const allMenuItems = [
  {
    title: "Courses",
    icon: <TableIcon />,
    subMenus: [
      {
        name: "View Course",
        link: "/dashboard/course/courseTypes",
      },
      {
        name: "Course Status",
        link: "/dashboard/course/status",
      },
    ],
  },
  {
    title: "Students",
    icon: <StudentIcon />,
    subMenus: [
      {
        name: "Add Students",
        link: "/dashboard/student/add",
      },
      {
        name: "Students Status",
        link: "/dashboard/student/status",
      },
    ],
  },
  {
    title: "Training",
    icon: <ChartIcon />,
    subMenus: [
      {
        name: "Add Training",
        link: "/dashboard/training/addTraining",
      },
      {
        name: "Set Training",
        link: "/dashboard/training/addStudent",
      },
      {
        name: "Training Status",
        link: "/dashboard/training/status",
      },
    ],
  },
];

function useMenuItems() {
  return { allMenuItems };
}
export default useMenuItems;
