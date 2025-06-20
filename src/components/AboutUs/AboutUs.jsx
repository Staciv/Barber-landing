import aboutUs from "../../assets/about-us.webp";

export function AboutUs() {
  return (
    <section className="about-us ">
      <h1 className="margin m-10 text-5xl tablet:text-2xl mobile:text-base mobile:m-4">
        ABOUT US
      </h1>
      <div className="about-us-wrap flex desktop:content-between gap-12 items-center tablet:gap-7 mobile:flex-col mobile:gap-1 ">
        <div className="about-us-left">
          <img src={aboutUs} alt="about-us" />
        </div>
        <div className="about-us-right max-w-md mx-auto text-center text-gray-300">
          <p className="text-2xl leading-loose font-smooch tablet:text-base tablet:max-w-[600px] mobile:text-sm mobile:p-5">
            At Nova Barbershop, we believe that a great haircut is more than
            just a style — it’s a statement. Our team of skilled barbers is
            dedicated to delivering precision, personality, and professionalism
            in every cut. Whether you're here for a fresh fade, a beard trim, or
            just to relax — you're in the right place. Step in. Sit down. Walk
            out legendary.
          </p>
        </div>
      </div>
    </section>
  );
}
