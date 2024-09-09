
export const SnapItem = ({ bgClass, logoSrc, description }) => {
  return (
    <section className={`parallax panel h-screen snap-start relative bg-image ${bgClass}`}>
      <div className='px-40 h-full'>
        <div className='px-25 h-full flex flex-col justify-center gap-1 relative top-[-140px]'>
          <img src={logoSrc} width={800} alt="Logo" className='' />
          <h1 className='text-4xl mt-2 max-w-screen-lg'>{description}</h1>
        </div>
      </div>
    </section>
  );
}
