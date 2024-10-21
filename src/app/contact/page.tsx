import Contact from "@/components/contact/Contact";
export const metadata = {
  title: "Stan Relaksu - Kontakt",
  description:"Skontaktuj się ze mną, aby uzyskać więcej informacji o usługach ",
};
const page = () => {
  return (
    <div className="mt-28">
      <Contact />
    </div>
  );
};

export default page;
