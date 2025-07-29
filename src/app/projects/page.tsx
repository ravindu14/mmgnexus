import UnderConstructionImage from "@/app/assets/underConstruction.jpg";
import Image from "next/image";

export default function Project() {
  return (
    <div className="empty-page-container flex justify-center items-center ">
      <div>
        <Image
          src={UnderConstructionImage}
          alt="under-construction"
          width={300}
        />
      </div>
    </div>
  );
}
