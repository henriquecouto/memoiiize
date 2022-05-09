import { FC, useMemo } from "react";
import * as IconPack from "react-icons/ri";

export type IconButtonProps = {
  icon: keyof typeof IconPack;
};

export const IconButton: FC<IconButtonProps> = ({ icon }) => {
  const Icon = useMemo(() => IconPack[icon], [icon]);

  return (
    <button className="min-w-max w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center p-2 rounded-md bg-slate-500/30">
      <Icon className="fill-gray-100 w-full h-full" />
    </button>
  );
};
