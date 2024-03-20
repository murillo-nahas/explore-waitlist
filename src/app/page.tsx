import Image from "next/image";
import { Form } from "./components/Form/Form";

export default function Home() {
  return (
    <main className="w-3/6  m-auto h-auto flex items-center justify-center flex-col">
      <Image
        src="./images/explore-written.svg"
        alt="Explore logo"
        width="150"
        height="50"
        className="mt-16"
      />

      <p className="mt-16 mb-16 text-white text-3xl text-center">
        Entre na nossa wishlist do <br />
        <span className="font-semibold bg-gradient-to-r from-greenGradient to-blueGradient inline-block text-transparent bg-clip-text">
          Explore!
        </span>
      </p>

      <Form />
    </main>
  );
}
