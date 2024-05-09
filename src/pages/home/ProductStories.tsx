import hero1 from "@/assets/hero-mockup-1.png";
import hero2 from "@/assets/hero-mockup-2.png";
import hero3 from "@/assets/hero-mockup-3.png";
import ReactInstaStories from "react-insta-stories";

type StoryTemplateProps = {
  heading: string;
  img: string;
  alt: string;
};

function ProductStoryTemplate(props: StoryTemplateProps) {
  return (
    <div className="h-full w-full bg-secondary p-6">
      <div className="pt-16 text-center font-poppins text-3xl font-semibold text-primary xl:text-4xl">
        <span className="whitespace-pre-line">{props.heading}</span>
      </div>
      <img
        src={props.img}
        alt={props.alt}
        className="absolute left-0 right-0 top-48 mx-auto lg:w-[410px]"
      />

      {/* We need this to preload the images */}
      <img src={hero1} className="hidden" />
      <img src={hero2} className="hidden" />
      <img src={hero3} className="hidden" />
    </div>
  );
}

function ProductStories() {
  const stories_list = [
    {
      content: () => (
        <ProductStoryTemplate
          heading={`Your personal AI tutor, \nbuilt in every chat`}
          img={hero1}
          alt="Your personal AI tutor, built in every chat"
        />
      ),
    },
    {
      content: () => (
        <ProductStoryTemplate
          heading={`Meet and chat with \nfellow learners`}
          img={hero2}
          alt="Meet and chat with fellow learners"
        />
      ),
    },
    {
      content: () => (
        <ProductStoryTemplate
          heading={`Practice with our \ngenerative flashcards`}
          img={hero3}
          alt="Practice with our generative flashcards"
        />
      ),
    },
  ];

  return (
    <div className="relative flex h-full w-full overflow-hidden rounded-xl bg-secondary shadow-sm">
      <ReactInstaStories
        loop={true}
        stories={stories_list}
        defaultInterval={4000}
        width={`100%`}
        height={`100%`}
        isPaused={true}
      />
    </div>
  );
}

export default ProductStories;
