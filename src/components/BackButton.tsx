import { MdArrowBackIos } from 'react-icons/md';
import clsx from 'clsx'; // clsx is a utility for constructing className strings conditionally

type BackButtonProps = {
  title: string;
  className?: string; // Optional className prop
};

const BackButton: React.FC<BackButtonProps> = ({ title, className }) => {
  return (
   <div className='group'>
     <button
      className={clsx(
        "blue-button flex items-center top-24 left-5 absolute ",
        className // This will allow you to add additional classes from the parent component
      )}
    >
      <MdArrowBackIos className="transition-all group-hover:-translate-x-1" />
      <span className="text-lg">{title}</span>
    </button>
   </div>
  );
};

export default BackButton;