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

      {/* We need this to cache the images in advance */}
      {props.img === "/niu.webp" ? (
        <img src="/niu2.webp" className="hidden" />
      ) : props.img === "/niu2.webp" ? (
        <img src="/niu3.webp" className="hidden" />
      ) : (
        <img src="/niu.webp" className="hidden" />
      )}
    </div>
  );
}

function ProductStories() {
  const stories_list = [
    {
      content: () => (
        <ProductStoryTemplate
          heading={`Your personal private AI, \nfrom your browser`}
          img="/niu.webp"
          alt="Your personal private AI, from your browser"
        />
      ),
    },
    {
      content: () => (
        <ProductStoryTemplate
          heading={`Helps you in \nvarious ventures`}
          img="/niu2.webp"
          alt="Helps you in various ventures"
        />
      ),
    },
    {
      content: () => (
        <ProductStoryTemplate
          heading={`Your private \nacademic partner`}
          img="/niu3.webp"
          alt="Your ideal academic partner"
        />
      ),
    },
     {
      content: () => (
        <ProductStoryTemplate
          heading={`Your private \ncoding assistant`}
          img="/niu3.webp"
          alt="Your private coding assistant"
        />
      ),
    },
     {
      content: () => (
        <ProductStoryTemplate
          heading={`Your private \nhistory teacher`}
          img="/niu3.webp"
          alt="Your private history teacher"
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
