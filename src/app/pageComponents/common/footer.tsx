import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@/app/assets/facebookIcon.png";
import InstagramIcon from "@/app/assets/InstagramIcon.png";
import LinkedinIcon from "@/app/assets/linkedinIcon.png";
import LogoImage from "@/app/assets/logo.png";

const Footer = () => (
  <footer className="bg-black text-white py-10  relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row  justify-between items-center md:items-start mb-5 md:mb-0">
        <div className="flex flex-col md:flex-row items-center space-x-2 mb-5">
          <div className="w-fit m-auto">
            <Image src={LogoImage} alt="Logo" width={100} height={100} />
          </div>
          <span className="font-bold text-2xl">NEXUS</span>
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start mb-5">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/projects">Our Projects</Link>
        </div>
        <div>
          <div className="mb-5 flex flex-col items-center md:items-start">
            <p className="mb-2 text-xl">Contact Us</p>
            <div className="flex flex-col items-center md:items-start text-sm">
              <div>+94 771 2345</div>
              <div>info@nexus.com</div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:mb-5">
            <p className="mb-2 text-xl">Get in touch</p>
            <div className="flex justify-center space-x-4">
              <Link href="#">
                <Image
                  src={FacebookIcon}
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#">
                <Image
                  src={InstagramIcon}
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#">
                <Image
                  src={LinkedinIcon}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 text-center text-sm py-4 h-6">
      Powered by <span className="font-semibold">Bytecrafters</span>
    </div>
  </footer>
);

export default Footer;
