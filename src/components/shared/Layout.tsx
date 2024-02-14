import { ReactNode } from "react";

type Props = {
  children?: ReactNode | undefined;
};

export default function Layout(props: Props) {
  return (
    <div className="p-4 bg-black min-h-screen text-white">
      <div className="w-fit mx-auto">
        <a href="/">
          <img src="/images/chenflix.png" alt="Chenflix" className="w-40" />
        </a>
      </div>
      <div className="max-w-7xl w-full mx-auto mt-8">{props.children}</div>
    </div>
  );
}
