import { useLoaderData } from "react-router-dom";
import CourseEvent from "../../components/CourseEvent";

export default function Course() {
	const course: Course = useLoaderData() as Course;
	return (
		<div>
			<h1 className="text-center text-3xl font-bold">{course.name}</h1>
			<h2 className="text-center text-stone-400">{course.semester}</h2>
			<div className="relative mx-auto flex h-auto max-w-4xl flex-col items-center gap-3 p-4">
				{course.events.map((event) => (
					<CourseEvent
						key={`${event.date} ${event.description}`}
						event={event}
					/>
				))}
			</div>
		</div>
	);
}
