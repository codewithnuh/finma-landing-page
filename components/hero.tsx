import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative min-h-screen -mt-24 pt-24 overflow-hidden">
      <Image
        src={'/images/clouds.png'}
        width={200}
        className="opacity-75"
        height={200}
        alt="cloud"
      />
      <div className="relative z-10">{/* Hero Content */}</div>
    </section>
  );
};
