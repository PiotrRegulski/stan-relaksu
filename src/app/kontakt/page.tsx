import Contact from "@/components/contact/Contact";
export const metadata = {
  title: "Stan Relaksu - Kontakt",
  description:
    "Potrzebujesz więcej informacji lub porady na temat zabiegów. Skontaktuj się ze mną poprzez formularz kontaktowy lub w dogodny dla siebie sposób. ",
};
const page = () => {
  return (
    <div className="mt-[6rem] lg:mt-[14rem] 2xl:mt-[17rem]">
      <Contact />
    </div>
  );
};

export default page;
