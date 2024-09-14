import Image from "next/image";
import homeImage from "@/assets/reading2.png";
import { Button } from "antd";

export default function Home() {
  return (
    <div className="flex items-center" style={{ height: "100vh" }}>
      <div style={{ width: "60vw" }} className="p-10">
        <h1 style={{ fontSize: 50, fontWeight: "bold" }}>
          Welcome to Mzansi Kiddos
        </h1>
        <div>
          <h3 style={{ fontSize: 30 }} className="mb-10">
            Empowering Young Minds with Free Resources to Learn Zulu
          </h3>
          <p>
            At MzansiKiddos, we believe in providing students and teachers with
            easy access to high-quality resources for learning the beautiful
            Zulu language. Our platform is designed to make learning Zulu fun,
            engaging, and accessible for everyone.
          </p>
        </div>
        <Button
          style={{
            marginTop: "50px",
            backgroundColor: "orange",
            color: "white",
            fontWeight: "bold",
            padding: "20px",
          }}
        >
          Continue
        </Button>
      </div>

      <Image
        src={homeImage}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
