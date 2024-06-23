import WaitlistInput from "@/components/ui/WaitlistInput";

import ProductStories from "./ProductStories";

function Home() {
  return (
    <div className="flex flex-col place-items-center px-8 pt-8 lg:p-16">
      <div className="flex h-full min-h-[calc(100vh-6rem)] w-full min-w-[220px] max-w-screen-xl flex-col place-content-center place-items-center gap-12 overflow-clip sm:h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-8rem)] lg:h-[calc(100vh-14rem)] lg:min-h-[calc(100vh-14rem)] lg:flex-row">
        <div className="flex w-full flex-col place-content-center place-items-center gap-8 lg:place-items-start lg:gap-12">
          <div className="flex flex-col place-items-center gap-4 lg:place-items-start">
            <h1 className="max-w-md text-center font-poppins text-3xl text-primary min-[360px]:text-4xl sm:max-w-2xl sm:text-5xl lg:text-left xl:text-6xl">
              Experience the power of AI <span className="text-jz-blue">w/out sacrificing your privacy</span>
            </h1>
            <span className="max-w-[360px] text-pretty text-center text-sm text-white-500 sm:max-w-sm sm:text-base lg:text-left">
              Engage in natural-sounding conversations, generate high-quality content, summarize lengthy documents and resolve creative challenges.
            </span>
          </div>
          <WaitlistInput />
          <a
  href="#"
  style={{
    display: 'inline-block',
    border: 'none',
    backgroundColor: '#f7f7f7',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '120px',
      height: '35px',
      borderRadius: '10px 30px',
      padding: '10px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333'
  }}
>
 Experience
</a>
        </div>
        <div className="hidden h-full w-full lg:flex">
          <ProductStories />
        </div>
       
        <div className="max-h-[50%]">
          <img
            src="/hero-combined.webp"
            alt="combined picture of mockups"
            className="w-full max-w-screen-md lg:hidden"
          />
        </div>
      </div>

      {/* <div className="flex flex-col">
    <div className="h-16 bg-background" />
    <div className="h-16 bg-foreground" />
    <div className="h-16 bg-card" />
    <div className="h-16 bg-card-foreground" />
    <div className="h-16 bg-popover" />
    <div className="h-16 bg-popover-foreground" />
    <div className="h-16 bg-primary" />
    <div className="h-16 bg-primary-foreground" />
    <div className="h-16 bg-secondary" />
    <div className="h-16 bg-secondary-foreground" />
    <div className="h-16 bg-muted" />
    <div className="h-16 bg-muted-foreground" />
    <div className="h-16 bg-accent" />
    <div className="h-16 bg-accent-foreground" />
    <div className="h-16 bg-destructive" />
    <div className="h-16 bg-destructive-foreground" />
  </div> */}
    </div>
  );
}

export default Home;
