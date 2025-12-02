type props = {
  className?: string;
};

const LogoNextVision = ({ className }: props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="60" height="60" className={className}>
      <path d="M30 150 L90 50 Q100 30 110 50 L170 150" stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M90 150 L110 150" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
};

export default LogoNextVision;
