import CoursePreview from "../components/CoursePreview";
import { courses } from "../coursedata/courses";

function App() {
	return (
		<div>
			<div className="mx-auto grid w-full grid-cols-1 gap-10 md:grid-cols-2">
				<CoursePreview course={courses[0]} />
			</div>
		</div>
	);
}

export default App;
