import Contact from "@/components/contact/Contact";
import ImageHeader from "@/components/layout/ImageHeader";
export const metadata = {
  title: "Stan Relaksu - Kontakt",
  description:
    "Potrzebujesz więcej informacji lub porady na temat zabiegów. Skontaktuj się ze mną poprzez formularz kontaktowy lub w dogodny dla siebie sposób. ",
};
const page = () => {
  return (
    <div className="mt-[0rem] lg:mt-[7rem] 2xl:mt-[7rem]">
      <ImageHeader BgImage={"bg-my-bg-gabinet"}>Kontakt</ImageHeader>
      <Contact />
    </div>
  );
};

export default page;
