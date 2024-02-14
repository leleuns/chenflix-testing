import { Link } from "react-router-dom";

export default function CoursePreview({ course }: { course: Course }) {
  return (
    <>
      <Link
        to={`/courses/${course.abbreviation}`}
        className="max-w-60 w-full mx-auto"
      >
        <div className="hover:opacity-80 transition duration-200 ease-in max-w-60 relative mx-auto w-full aspect-[10/9] grid place-items-center z-10 bg-red-700 rounded-xl p-4 text-center">
          <div
            className="absolute left-0 top-0 w-full h-full rounded-xl bg-red-900 z-0"
            style={{
              maskImage: `url(${`/course_logos/${course.abbreviation}.png`})`,
              maskSize: "cover",
              maskPosition: "center",
              WebkitMaskImage: `url(${`/course_logos/${course.abbreviation}.png`})`,
              WebkitMaskSize: "cover",
              WebkitMaskPosition: "center",
            }}
          />
          <div className="flex flex-col gap-2 z-10">
            <p className="font-bold text-2xl">{course.name}</p>
            <p className="font-semibold text-md">{course.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
