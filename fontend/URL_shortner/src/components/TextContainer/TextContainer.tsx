import bgGif from "../../assets/url.gif";

const TextContainer = () => {
  return (
    <div id="about" className="bg-slate-900 text-white font-sans">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-3/5 lg:pr-4">
            <h2 className="text-5xl capitalize  mb-4 ">
              Why Choose{" "}
              <span className="font-extrabold italic">blinkify?</span>
            </h2>
            <p className="text-xl text-justify py-8 lg:w-3/5 ">
              Blinkify, the premier URL shortener, offers a sleek and intuitive
              interface coupled with cutting-edge technology. Personalize your
              shortened links, track their performance, and seamlessly integrate
              them across platforms. With curated analytics and a vibrant
              community, Blinkify empowers users to engage and explore with
              confidence. Join Blinkify today and experience URL shortening
              reimagined.
            </p>
          </div>
          <div className="lg:w-2/5 lg:pl-4 mt-4 lg:mt-0">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full"
                src={bgGif}
                alt="Background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
