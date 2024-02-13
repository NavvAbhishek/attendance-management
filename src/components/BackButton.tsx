import { MdArrowBackIos } from 'react-icons/md';

type BackButtonProps = {
  title: string;
};

const BackButton: React.FC<BackButtonProps> = ({ title }) => {
  return (
    <button className="blue-button flex items-center absolute top-24 left-5 group">
      <MdArrowBackIos className="transition-all group-hover:-translate-x-2" />
      <span className="text-lg">{title}</span>
    </button>
  );
};

export default BackButton;
