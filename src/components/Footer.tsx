export default function Footer() {
	return (
		<footer className="pt-6 w-full text-center bg-neutral-900 text-stone-300">
			<div className="flex items-center justify-center border-b-2 border-neutral-200 p-2">
				<div>				
          			<a href="https://www.math.purdue.edu/~chenjk/" className="font-semibold mb-3">Chenflix Original</a>
					<div className="flex items-center">
						<a  target="_blank" href="https://github.com/boilerexams/chenflix" className="mb-3">
							<img src="/public/footer/github-mark-white.png" className="w-8"/>
	</a>
						<div>
							<img src="/public/footer/BoilerExamsLogoWHITE.png" alt="Made by BoilerExams" className="ml-12 mb-1 w-24"/>
						</div>
					</div>
					<p className="p-10 text-xs mb-4 ">Copyright &copy; Chenflix 2024</p>
				</div>
			</div>
		</footer>
	);
}
