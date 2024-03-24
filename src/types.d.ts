type CourseEvent = {
	description: string;
	date: string;
	videos?: string;
	notes?: string;
	boilerexams?: string;
	additionalNotes?: string
};

type Course = {
	id: number;
	name: string;
	path: string;
	abbreviation: string;
	description: string;
	events: CourseEvent[];
};
