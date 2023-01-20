import Header from "./Header";
import Content from "./Content/Content";
import Total from "./Content/Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header {...course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
