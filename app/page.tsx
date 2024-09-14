import Image from "next/image";
import homeImage from "@/assets/reading2.png";

export default function Home() {
  return (
    <div className="flex items-center" style={{ height: "100vh" }}>
      <p>Hello WOrld</p>
      <Image
        src={homeImage}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
