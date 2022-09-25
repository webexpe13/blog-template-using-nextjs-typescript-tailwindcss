import ReactPlayer from "react-player";
import { transformImagePaths, combineClasses } from "../../utils/utils";

interface iVideoPlayer {
  url?: string;
  className?: String;
}

const VideoPlayer = ({ url, className }: iVideoPlayer) => {
  return (
    <div className={combineClasses("w-full h-auto my-3", className)}>
      <ReactPlayer
        url={transformImagePaths(url)}
        width="100%"
        height="auto"
        controls={true}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
