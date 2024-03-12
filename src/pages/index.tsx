import CoursePreview from "../components/CoursePreview";
import { courses } from "../coursedata/courses";
import Capybara from "../three/capy";


export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white pb-8">
			<Capybara />
			<img className="absolute left-1/2 top-4 w-40 -translate-x-1/2 transform" src="images/chenflix.png" alt="Chenflix" />
			<div className="pt-16 mx-auto grid w-full grid-cols-1 gap-5 md:grid-cols-2">
					{courses.map((course) => (
						<CoursePreview key={course.id} course={course} />
					))}
			</div>
		</div>
	);
}