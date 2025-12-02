type props = {
  className?: string;
};

const RaizN = ({ className }: props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200" className={className}>
      {/* Línea de la raíz cuadrada */}
      <path d="M10 80 Q30 40 50 80 L80 180 L120 60 L180 60" stroke="currentColor" strokeWidth="10" fill="none" />
      {/* Letra N cursiva */}
      <text x="50" y="100" fontFamily="Georgia, serif" fontSize="70" fontStyle="italic" fill="currentColor" textAnchor="middle">
        N
      </text>
    </svg>
  );
};

export default RaizN;
