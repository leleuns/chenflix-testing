import {
  DocumentIcon,
  VideoCameraIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

export default function CourseEvent({ event }: { event: CourseEvent }) {
  return (
    <div className="w-full flex flex-col md:flex-row text-left p-4 mx-auto md:gap-4 gap-2 md:items-start justify-between">
      <div className="text-sm font-semibold min-w-[80px] h-[20px]">
        <p className="md:py-[2px]">{event.date}</p>
      </div>
      <div className="flex flex-col gap-2 flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex shrink-0 grow-0 flex-col items-center justify-center align-baseline">
              <input
                className="form-checkbox h-5 w-5 border-2 border-white focus:ring-2 focus:ring-red-600 focus:border-transparent rounded-sm text-red-600 transition duration-100 ease-in bg-black"
                type="checkbox"
                id={event.description + event.date + "desktop"}
              />
            </div>
            <p>{event.description}</p>
          </div>
          <button className="w-fit">
            <StarIcon
              className="w-5 h-5"
              style={{ color: "#d0ba92" }}
              id={event.description + event.date + "-star" + "desktop"}
            />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <a
              href={event.videos ? event.videos : "#"}
              className={`grid group aspect-square w-7 place-items-center rounded-md bg-white/10 ${
                event.videos
                  ? "hover:ring-red-600 transition duration-100 ease-in hover:ring-2 hover:text-red-400"
                  : "cursor-not-allowed opacity-70"
              } `}
            >
              <VideoCameraIcon className={`w-4 h-4`} />
            </a>
          </div>
          <div>
            <a
              href={event.notes ? event.notes : "#"}
              className={`grid group aspect-square w-7 place-items-center rounded-md bg-white/10 ${
                event.notes
                  ? "hover:ring-red-600 transition duration-100 ease-in hover:ring-2 hover:text-red-400"
                  : "cursor-not-allowed opacity-70"
              } `}
            >
              <DocumentIcon className="w-4 h-4" />
            </a>
          </div>
          {event.boilerexams && (
            <div className="bg-white/10 rounded-md w-7 aspect-square grid place-items-center hover:ring-2 hover:ring-white transition duration-100 group">
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
