// Amenity.tsx

import Image from "next/image";

interface AmenityProps {
  icon: string;
  text: string;
}

const Amenity: React.FC<AmenityProps> = ({ icon, text }) => (
  <p className="flex gap-4">
    <Image src={icon} alt="" width={20} height={20} className="object-contain" />
    {text}
  </p>
);

export default Amenity;
