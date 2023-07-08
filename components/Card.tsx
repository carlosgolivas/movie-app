import Image from 'next/image';
import Score from '../components/Score';

type CardProps = {
  title: string;
  image: string;
  releaseDate: string;
  score: number;
};

const Card: React.FC<CardProps> = ({ title, image, releaseDate, score }) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-lg'>
      <Image className='w-full' src={image} alt={title} width={200} height={200} />
      <div className='px-6 py-10 relative'>
        <Score score={score} />
        <div className='font-bold text-xl'>{title}</div>
        <p className='text-gray-700 text-base py-2'>{releaseDate}</p>
      </div>
    </div>
  );
};

export default Card;
