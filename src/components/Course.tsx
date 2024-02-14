import { useLoaderData } from "react-router-dom";
import CourseEvent from "./CourseEvent";

export default function Course() {
  const course: Course = useLoaderData() as Course;
  return (
    <div>
      <p className="text-center font-bold text-3xl">{course.name}</p>
      <div className="relative flex h-auto flex-col items-center gap-3 max-w-4xl mx-auto p-4">
        <CourseEvent event={course.events[0]} />
      </div>
    </div>
  );
}
