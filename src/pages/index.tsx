import CoursePreview from "../components/CoursePreview";
import { courses } from "../coursedata/courses";
import Capybara from "../three/capy";

export default function Home() {
	return (
		<div className="min-h-screen bg-black pb-8 text-white">
			<Capybara />
			<img
				className="absolute left-1/2 top-4 w-40 -translate-x-1/2"
				src="images/chenflix.png"
				alt="Chenflix"
			/>
			<div className="mx-auto grid w-full grid-cols-1 gap-5 overflow-auto pt-24 md:grid-cols-2">
				{courses.map((course) => (
					<CoursePreview key={course.id} course={course} />
				))}
			</div>
		</div>
	);
}
