export default function CoursePreview({ course }: { course: Course }) {
  return (
    <div>
      <p>{course.name}</p>
    </div>
  );
}
