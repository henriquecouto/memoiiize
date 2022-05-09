import { FC, ReactNode } from "react";
import { IconButton } from "../IconButton";

export type HeaderProps = { children: ReactNode };

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <div className="bg-gray-800 min-h-screen text-gray-100">
      <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="min-w-full">
          <nav className="w-full py-8 min-h-full">
            <div className="w-full h-16 flex items-center justify-between">
              <div>
                <IconButton icon="RiQuestionMark" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold">MEMOIIIZE</h1>
              </div>
              <div>
                <IconButton icon="RiEqualizerLine" />
              </div>
            </div>
          </nav>
          <div className="py-12">{children}</div>
        </div>
      </div>
    </div>
  );
};
