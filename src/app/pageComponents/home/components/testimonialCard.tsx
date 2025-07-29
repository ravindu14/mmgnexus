"use client";

import { FaRegStar } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";

type TestimonialProps = {
  name: string;
  profileImage: StaticImageData;
  rating: number;
  description: string;
};

const TestimonialCard = ({
  name,
  profileImage,
  rating,
  description,
}: TestimonialProps) => {
  const maxStars = 5;

  const getTruncatedText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm mx-auto">
      <div className="w-20 h-20 mx-auto mb-4">
        <Image
          src={profileImage}
          alt={`${name} profile`}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex justify-center mb-3 text-yellow-500">
        {[...Array(maxStars)].map((_, i) => (
          <FaRegStar
            key={i}
            className={i < rating ? "fill-yellow-500" : "fill-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm">
        {getTruncatedText(description, 50)}
      </p>
    </div>
  );
};

export default TestimonialCard;
