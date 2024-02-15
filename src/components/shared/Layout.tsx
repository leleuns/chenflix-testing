import { ReactNode } from "react";

type Props = {
	children?: ReactNode | undefined;
};

export default function Layout(props: Props) {
	return (
		<div className="min-h-screen bg-black p-4 text-white">
			<div className="mx-auto w-fit">
				<a href="/">
					<img src="/images/chenflix.png" alt="Chenflix" className="w-40" />
				</a>
			</div>
			<div className="mx-auto mt-8 w-full max-w-7xl">{props.children}</div>
		</div>
	);
}
