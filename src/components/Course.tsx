import { useLoaderData } from "react-router-dom";

export default function Course() {
  const course: Course = useLoaderData() as Course;
  console.log(course);
  return (
    <div>
      <p>{course.name}</p>
    </div>
  );
}
