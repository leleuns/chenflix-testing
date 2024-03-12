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
		<div className="mx-auto flex w-full flex-col justify-between gap-2 p-2 text-left md:flex-row md:items-start md:gap-4">
			<div className="h-[20px] min-w-[80px] text-sm font-semibold">
				<p className="md:py-0.5">{event.date}</p>
			</div>
			<div className="flex flex-grow flex-col gap-2">
				<div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
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
					<div className="flex items-center gap-2">
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
									target="_blank"
								>
									<VideoCameraIcon className={`h-4 w-4`} />
								</a>
							) : (
								<VideoCameraIcon className={`h-4 w-4`} />
							)}
						</div>
						<div
							className={`group grid aspect-square w-7 place-items-center rounded-md bg-white/10 ${
								event.notes
									? "transition duration-100 ease-in hover:text-red-400 hover:ring-2 hover:ring-red-600"
									: "cursor-not-allowed opacity-70"
							} `}
						>
							{event.notes ? (
								<a
									className="flex h-full w-full items-center justify-center"
									href={event.notes ? event.notes : "#"}
									target="_blank"
								>
									<DocumentIcon className={`h-4 w-4`} />
								</a>
							) : (
								<DocumentIcon className={`h-4 w-4`} />
							)}
						</div>
						{event.boilerexams && (
							<div className="group grid aspect-square w-7 place-items-center rounded-md bg-white/10 transition duration-100 hover:ring-2 hover:ring-white">
								<a href={event.boilerexams} target="_blank">
									<img
										className="w-5 group-hover:opacity-70"
										src="/images/BXlogoSubscript.png"
										alt="Logo"
									/>
								</a>
							</div>
						)}
						<button>
							<StarIcon
								className={`h-5 w-5 transition duration-100 ease-in ${!starred ? "rotate-0 text-white" : "rotate-[72deg] text-yellow-400"}`}
								// style={{ color: starred ? "#d0ba92" : "#f0f0f0" }}
								onClick={() => setStarred(!starred)}
								id={event.description + event.date + "_star"}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
