import "./App.css";
import CoursePreview from "./components/CoursePreview";
import { courses } from "./coursedata/courses";
import { DocumentIcon } from "@heroicons/react";

function App() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mx-auto">
        <CoursePreview course={courses[0]} />
      </div>
    </div>
  );
}

export default App;
