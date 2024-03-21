import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-16 mb-16 flex justify-center items-center flex-wrap gap-24">
      <div className="flex">
        <Image
          className="mr-4 cursor-pointer"
          src="./icons/x.svg"
          alt="X icon"
          width="30"
          height="30"
        />
        <div>
          <p className="text-white">X</p>
          <a className="text-label hover:text-blue" href="#" target="_blank">
            @explore
          </a>
        </div>
      </div>

      <div className="flex">
        <Image
          className="mr-4 cursor-pointer"
          src="./icons/instagram.svg"
          alt="X icon"
          width="30"
          height="30"
        />
        <div>
          <p className="text-white">Instagram</p>
          <a className="text-label hover:text-blue" href="#" target="_blank">
            @explore
          </a>
        </div>
      </div>
    </footer>
  );
}
