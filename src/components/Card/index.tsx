import { FC } from "react";

type CardProps = {
  show: boolean;
  onToggleShow: (show: boolean) => void;
  imageUrl: string;
};

export const Card: FC<CardProps> = ({ imageUrl, onToggleShow, show }) => {
  const toogleShow = () => {
    onToggleShow(!show);
  };

  return (
    <div
      className="bg-slate-700 w-full h-full rounded-md cursor-pointer flex items-center justify-center"
      onClick={toogleShow}
    >
      {show ? (
        <img src={imageUrl} alt={imageUrl} className="rounded-md" />
      ) : (
        <span className="text-slate-400 -rotate-45">MEMOIIIZE</span>
      )}
    </div>
  );
};
