import { MdArrowBackIos } from 'react-icons/md';
import clsx from 'clsx'; // clsx is a utility for constructing className strings conditionally

type BackButtonProps = {
  title: string;
  className?: string; // Optional className prop
};

const BackButton: React.FC<BackButtonProps> = ({ title, className }) => {
  return (
    <button
      className={clsx(
        "blue-button flex items-center top-24 left-5 absolute group",
        className // This will allow you to add additional classes from the parent component
      )}
    >
      <MdArrowBackIos className="transition-all group-hover:-translate-x-2" />
      <span className="text-lg">{title}</span>
    </button>
  );
};

export default BackButton;