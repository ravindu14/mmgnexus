import Link from "next/link";
import ImageSlider from "../common/imageSlider";

const Team = () => (
  <section className="py-20 bg-gray-100">
    <div className="max-w-6xl mx-auto px-8 md:px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our People Are the Driving Force of Our Company
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="mb-6 text-justify">
            MMG is led by a multidisciplinary team of experts in environmental
            consultancy, engineering, and financial strategy. With decades of
            experience, the team combines scientific, technical, and managerial
            expertise to deliver comprehensive solutions for complex
            environmental and infrastructure challenges. Their portfolio spans
            environmental planning, industrial pollution control, regulatory
            compliance, and international development projects. MMG’s leadership
            includes a globally recognized environmental consultant, an
            accomplished environmental engineer, and a seasoned financial and
            institutional management expert. Together, they offer integrated,
            results-driven consultancy services grounded in innovation, policy
            insight, and practical implementation—positioning MMG as a trusted
            partner in sustainable development across sectors.
          </p>
          <Link href="/about">
            <button className="primary-button">About Us</button>
          </Link>
        </div>
        <div className="overflow-hidden">
          <ImageSlider />
        </div>
      </div>
    </div>
  </section>
);

export default Team;
