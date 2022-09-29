import { BsLinkedin, BsLink45Deg, BsXLg } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";
import { WEBSITE_URL } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import { combineClasses } from "../../utils/utils";
import { useEffect, useState } from "react";
import { GAEvent } from "../../../google";

const SocialShare = () => {
  const url =
    typeof window !== "undefined" ? window.location.href : WEBSITE_URL;

  const twitterShare = `http://twitter.com/share?text=Check out this article!! &url=${url}&hashtags=webdevelopment,javacript,javascriptdaily,webdevelopmenttutorial,tutorial`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const linkedinShare = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=Check out this article!!&source=LinkedIn`;

  const trackShareEvent = (social: string) => {
    GAEvent({
      action: "share_clicked",
      event_category: "click",
      label: social,
      value: null,
    });
  };

  const copyLink = () => {
    if (typeof window !== "undefined" && navigator) {
      navigator.clipboard.writeText(url);
      setShowCopiedAlert(true);
    }
    trackShareEvent("copy_clipboard_clicked");
  };

  const [showCopiedAlert, setShowCopiedAlert] = useState(false);

  useEffect(() => {
    if (showCopiedAlert) {
      setTimeout(() => {
        setShowCopiedAlert(false);
      }, 2000);
    }
  }, [showCopiedAlert]);

  return (
    <>
      <div className="flex flex-wrap items-center">
        <a
          className="mr-3"
          aria-label="facebook-share"
          href={facebookShare}
          onClick={() => {
            window.open(facebookShare, "popup", "width=300,height=500");
            trackShareEvent("facebook_share_clicked");
            return false;
          }}
          target="popup"
        >
          <AiFillFacebook className="text-[30px]" />
        </a>
        <a
          className="mr-3"
          aria-label="twitter-share"
          href={twitterShare}
          onClick={() => {
            window.open(twitterShare, "popup", "width=600,height=500");
            trackShareEvent("twitter_share_clicked");
            return false;
          }}
          target="popup"
        >
          <AiFillTwitterCircle className="text-[30px]" />
        </a>
        <a
          className="mr-3"
          aria-label="linkedin-share"
          href={linkedinShare}
          onClick={() => {
            window.open(linkedinShare, "popup", "width=500,height=500");
            trackShareEvent("linkedin_share_clicked");
            return false;
          }}
          target="popup"
        >
          <BsLinkedin className="text-[23px]" />
        </a>
        <button
          className="mr-3"
          name="copy-link"
          aria-label="copy-link"
          onClick={copyLink}
        >
          <BsLink45Deg className="text-[30px]" />
        </button>
      </div>
      <div
        className={combineClasses(
          "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed flex transition-all right-[10px]",
          showCopiedAlert
            ? "md:bottom-10 sm:bottom-[0px] opacity-100"
            : "-bottom-20 opacity-0"
        )}
        role="alert"
      >
        <strong className="font-bold">Link Copied</strong>
        <span className="pl-5">
          <BsXLg className="pt-1 text-[18px] cursor-pointer" />
        </span>
      </div>
    </>
  );
};

export default SocialShare;
