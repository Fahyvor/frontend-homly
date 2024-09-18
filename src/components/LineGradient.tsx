// const LineGradient = ({width}) => {
//     return (
//       <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>
//     )
//   }
  
//   export default LineGradient

interface LineGradientProps {
  width: string; // or specify the appropriate type for width
}

const LineGradient: React.FC<LineGradientProps> = ({ width }) => {
  return (
    <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>
  );
};

export default LineGradient;
