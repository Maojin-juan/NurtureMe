import { Link } from "react-router-dom";
import StorySwiper from "./StorySwiper";

function StoryContent() {
  return (
    <div className="text-center text-white">
      <h4 className="text-h4 xl:text-h2">夢想起飛的旅程</h4>
      <p className="text-h8 xl:text-h4">
        浪我包養的故事從一個簡單的夢想開始...
      </p>
    </div>
  );
}

function StoryButton() {
  return (
    <div className="hidden items-center justify-center 2xl:flex">
      <Link
        className="inline-block rounded-2xl bg-white px-6 py-4 text-h7 text-primary-2 xl:px-10 xl:py-6 xl:text-h4"
        to="#"
      >
        更多創辦故事
      </Link>
    </div>
  );
}

export default function Story() {
  return (
    <article className="afterDecoration after:3xl:bg-homeCompanion3 relative space-y-8 bg-primary-1 pb-10 pt-20 after:bottom-[91px] after:right-[78px] after:h-[326px] after:w-[356px] xl:space-y-16 xl:py-20">
      <StoryContent />
      <StorySwiper />
      <StoryButton />
    </article>
  );
}
