import { IAuthor } from "../../shared/interfaces";
import { combineClasses } from "../../utils/utils";

const Avatar = ({ author, className }: { author: IAuthor, className?: string }) => {
  return (
    <div className={combineClasses(`flex items-center justify-center shadow-xl rounded-full overflow-hidden bg-blue-500 shrink-0`, className)}>
      {author.profilePic ? (
        <img 
          src={author.profilePic} 
          alt={author.name} 
          width="100%" />
      ) : (
        <p className="text-center font-medium text-white">
          {author.name[0]}
        </p>
      )}
    </div>
  );
};

export default Avatar;
