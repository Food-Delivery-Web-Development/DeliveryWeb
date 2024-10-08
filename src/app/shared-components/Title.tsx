import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

function Title({ children }: Props) {
  return (
    <div>
      <span className="inline-block w-1 h-[0.7em] bg-primary"></span>
      {"  " + children}
    </div>
  );
};

export { Title };
