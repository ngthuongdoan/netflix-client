type SectionProps = {
  backdrop?: React.ReactNode;
  wrapperClasses?: string;
  backdropClasses?: string;
  contentClasses?: string;
};

const Section: React.FC<SectionProps> = ({ children, backdrop, wrapperClasses = '', backdropClasses = '', contentClasses = '' }) => {
  return (
    <section className={`${wrapperClasses} relative`}>
      <div className={`absolute inset-0 border-b-8 border-[#222] z-[-1] ${backdropClasses}`}>{backdrop && backdrop}</div>
      <div className={`z-[10] ${contentClasses}`}>{children}</div>
    </section>
  );
};

export default Section;
