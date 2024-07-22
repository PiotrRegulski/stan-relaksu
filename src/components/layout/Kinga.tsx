
import Image from "next/image";
import kingaImage from '/public/hero.png';
export default function Kinga() {
    return (
      <Image
        src={kingaImage}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    )
  }