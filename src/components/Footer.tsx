export default function Footer() {
	return (
		<footer className="pt-6 w-full text-center bg-neutral-900 text-stone-300">
			<div className="flex items-center justify-center border-b-2 border-neutral-200 p-2">
				<div>				
          			<a href="https://www.math.purdue.edu/~chenjk/" className="font-semibold mb-3">Chenflix Original</a>
					<div>
						{/*<a href="https://github.com/boilerexams/chenflix" className="mb-3">
							<img src="https://github.com/primer/brand/assets/19292210/eea6f831-4aa3-4cd2-aa08-a27c03ab0e30" alt="Github Repository" className="w-10 ml-12"/>
	</a>*/}
						<img src="/images/BXlogoSubscript.png" alt="Made by BoilerExams" className="mb-1 w-8"/>
					</div>
					<p className="p-10 text-xs mb-4 ">Copyright &copy; Chenflix 2024</p>
				</div>
			</div>
		</footer>
	);
}
