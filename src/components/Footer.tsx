export default function Footer() {
	return (
		<footer className="pt-6 w-full text-center border-2 border-red-700 text-stone-300 mt-10">
			<div className="flex items-center justify-center p-2 text-xl">
				<a href="https://www.math.purdue.edu/~chenjk/" className="ease-in hover:opacity-80 font-semibold mb-3">Chenflix Original</a>				
			</div>
			<div className="flex items-center justify-center pt-3">
				<img src="/public/footer/BoilerExamsLogoWHITE.png" alt="Made by BoilerExams" className="mb-1 w-28"/>
			</div>
			<div className="flex items-center justify-center pt-3">
				<a  target="_blank" href="https://github.com/boilerexams/chenflix" className="mb-3">
					<img src="/public/footer/github-mark-white.png" className="w-8"/>
				</a>
			</div>
			<div>
				<p className="p-6 text-sm mb-3 ">Copyright &copy; 2024 Chenflix</p>
			</div>
			
		</footer>
	);
}
