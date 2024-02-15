import {
	DocumentIcon,
	VideoCameraIcon,
	StarIcon,
} from "@heroicons/react/24/solid";
import { useLocalStorage } from "usehooks-ts";

export default function CourseEvent({ event }: { event: CourseEvent }) {
	// Local storage hook for the checkbox
	const [checked, setChecked] = useLocalStorage(
		`${event.description}_${event.date}_checkbox`,
		false,
	);

	// Local storage hook for the star
	const [starred, setStarred] = useLocalStorage(
		`${event.description}_${event.date}_star`,
		false,
	);

	return (
		<div className="mx-auto flex w-full flex-col justify-between gap-2 p-4 text-left md:flex-row md:items-start md:gap-4">
			<div className="h-[20px] min-w-[80px] text-sm font-semibold">
				<p className="md:py-0.5">{event.date}</p>
			</div>
			<div className="flex flex-grow flex-col gap-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="flex shrink-0 grow-0 flex-col items-center justify-center align-baseline">
							<input
								className="form-checkbox h-5 w-5 rounded-sm border-2 border-white bg-black text-red-600 transition duration-100 ease-in focus:border-transparent focus:ring-2 focus:ring-red-600"
								type="checkbox"
								checked={checked}
								onChange={() => setChecked(!checked)}
							/>
						</div>
						<p>{event.description}</p>
					</div>
					<button className="ml-1 w-fit">
						<StarIcon
							className="h-5 w-5"
							style={{ color: starred ? "#d0ba92" : "#f0f0f0" }}
							onClick={() => setStarred(!starred)}
							id={event.description + event.date + "_star"}
						/>
					</button>
				</div>
				<div className="flex items-center space-x-2">
					<div
						className={`group grid aspect-square w-7 place-items-center rounded-md bg-white/10 ${
							event.videos
								? "transition duration-100 ease-in hover:text-red-400 hover:ring-2 hover:ring-red-600"
								: "cursor-not-allowed opacity-70"
						} `}
					>
						{event.videos ? (
							<a
								className="flex h-full w-full items-center justify-center"
								href={event.videos ? event.videos : "#"}
							>
								<VideoCameraIcon className={`h-4 w-4`} />
							</a>
						) : (
							<VideoCameraIcon className={`h-4 w-4`} />
						)}
					</div>
					<div>
						<a
							href={event.notes ? event.notes : "#"}
							className={`group grid aspect-square w-7 place-items-center rounded-md bg-white/10 ${
								event.notes
									? "transition duration-100 ease-in hover:text-red-400 hover:ring-2 hover:ring-red-600"
									: "cursor-not-allowed opacity-70"
							} `}
						>
							<DocumentIcon className="h-4 w-4" />
						</a>
					</div>
					{event.boilerexams && (
						<div className="group grid aspect-square w-7 place-items-center rounded-md bg-white/10 transition duration-100 hover:ring-2 hover:ring-white">
							<a href={event.boilerexams}>
								<img
									className="w-5 group-hover:opacity-70"
									src="/images/BXlogoSubscript.png"
									alt="Logo"
								/>
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
