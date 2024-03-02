import { ReactNode } from "react";

type Props = {
	children?: ReactNode | undefined;
};

export default function Footer(props: Props) {
    return (
      <footer className="bg-red-600 text-center text-xs p-3 absolute bottom-0 w-full">
          Copyright &copy; Chenflix 2024
      </footer>
    );
  };