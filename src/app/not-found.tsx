import ToHomePage from "@/components/layout/ToHomePage";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center h-96 mx-auto my-auto flex-col space-y-2">
      <h1>Ups! Strona nie znaleziona</h1>
      <p>Podany adres może być nieprawidłowy!</p>
      <ToHomePage>Wróc do strony głównej</ToHomePage>
    </main>
  );
}
