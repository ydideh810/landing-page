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
        loading="lazy"
        src={props.img}
        alt={props.alt}
        className="absolute left-0 right-0 top-48 mx-auto lg:w-[410px]"
      />

      {/* We need this to cache the images in advance */}
      {props.img === "/hero-mockup-1.webp" ? (
        <img src="/hero-mockup-2.webp" className="hidden" loading="lazy" />
      ) : props.img === "/hero-mockup-2.webp" ? (
        <img src="/hero-mockup-3.webp" className="hidden" loading="lazy" />
      ) : (
        <img src="/hero-mockup-1.webp" className="hidden" loading="lazy" />
      )}
    </div>
  );
}

function ProductStories() {
  const stories_list = [
    {
      content: () => (
        <ProductStoryTemplate
          heading={`Your personal AI tutor, \nbuilt in every chat`}
          img="/hero-mockup-1.webp"
          alt="Your personal AI tutor, built in every chat"
        />
      ),
    },
    {
      content: () => (
        <ProductStoryTemplate
          heading={`Meet and chat with \nfellow learners`}
          img="/hero-mockup-2.webp"
          alt="Meet and chat with fellow learners"
        />
      ),
    },
    {
      content: () => (
        <ProductStoryTemplate
          heading={`Practice with our \ngenerative flashcards`}
          img="/hero-mockup-3.webp"
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
