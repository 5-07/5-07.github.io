import StarIcon from '@/assets/icons/star.svg';

const words =[
  "yeehaw",
  "skibidi",
  "sigma",
  "in",
  "ohio",
  "fanum",
  "tax",
]

export const TapeSection = () => {
  return (
    <div>
    {words.map(words => (
      <div key={words}>
        <span>{words}</span>
        <StarIcon/>
      </div>
    ))}
    </div>
  );
};
