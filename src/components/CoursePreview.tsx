import { Link } from "react-router-dom";

export default function CoursePreview({ course }: { course: Course }) {
	return (
		<>
			<Link
				to={`/courses/${course.abbreviation}`}
				className="mx-auto w-full max-w-52"
			>
				<div className="relative z-10 mx-auto grid aspect-[2.5/2] w-full max-w-full place-items-center rounded-xl bg-red-700 p-4 text-center transition duration-200 ease-in hover:opacity-80">
					<div
						className="absolute left-0 top-0 z-0 h-full w-full rounded-xl bg-red-900"
						style={{
							maskImage: `url(${`/course_logos/${course.abbreviation}.png`})`,
							maskSize: "cover",
							maskPosition: "center",
							WebkitMaskImage: `url(${`/course_logos/${course.abbreviation}.png`})`,
							WebkitMaskSize: "cover",
							WebkitMaskPosition: "center",
						}}
					/>
					<div className="z-10 flex flex-col gap-2">
						<p className="text-2xl font-bold">{course.name}</p>
						<p className="text-xs font-semibold">{course.description}</p>
					</div>
				</div>
			</Link>
		</>
	);
}
