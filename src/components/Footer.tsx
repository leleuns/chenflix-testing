export default function Footer() {
	return (
		<footer className="z-10 mt-10 w-full border-2 border-red-700 pt-6 text-center text-stone-300">
			<div className="flex items-center justify-center p-2 text-xl">
				<a
					href="https://www.math.purdue.edu/~chenjk/"
					className="mb-3 font-semibold ease-in hover:opacity-80"
				>
					Chenflix Original
				</a>
			</div>
			<div className="flex items-center justify-center pt-3">
				<img
					src="/public/footer/BoilerExamsLogoWHITE.png"
					alt="Made by BoilerExams"
					className="mb-1 w-28"
				/>
			</div>
			<div className="flex items-center justify-center pt-3">
				<a
					target="_blank"
					href="https://github.com/boilerexams/chenflix"
					className="mb-3"
				>
					<img src="/public/footer/github-mark-white.png" className="w-8" />
				</a>
			</div>
			<div>
				<p className="mb-3 p-6 text-sm ">Copyright &copy; 2024 Chenflix</p>
			</div>
		</footer>
	);
}
