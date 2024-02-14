import { ReactNode } from "react";
import ChenflixLogo from "../../assets/images/chenflix.png";

type Props = {
  children?: ReactNode | undefined;
};

export default function Layout(props: Props) {
  return (
    <div className="p-4 bg-black min-h-screen text-white">
      <img src={ChenflixLogo} alt="Chenflix" className="w-40 mx-auto" />
      <div className="max-w-7xl w-full mx-auto">{props.children}</div>
    </div>
  );
}
