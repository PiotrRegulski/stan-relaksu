import PageHeader from "@/components/homepage/PageHeader";
import ToHomePage from "@/components/layout/ToHomePage";
import Link from "next/link";
import React from "react";

const pages = () => {
  return (
    <div className="flex justify-center items-center mx-auto my-auto flex-col mt-28 md:py-24 px-12">
      <PageHeader id={"privacy-policy"}>Polityka prywatności</PageHeader>

      <div className="flex flex-col w-full justify-center items-center ">
        <p className="text-left xl:w-2/3 text-3xl my-4">
          I. Postanowienia ogólne{" "}
        </p>
        <ol className="list-decimal xl:w-1/2 text-xl">
          <li>
            Polityka prywatności określa, jak zbierane, przetwarzane i
            przechowywane są dane osobowe Użytkowników niezbędne do świadczenia
            usług drogą elektroniczną za pośrednictwem serwisu internetowego
            https://stanrelaksu.pl (dalej: Serwis).
          </li>
          <li>
            Serwis zbiera wyłącznie dane osobowe niezbędne do świadczenia i
            rozwoju usług w nim oferowanych.
          </li>
          <li>
            Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane
            zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
            2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
            fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
            swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
            (ogólne rozporządzenie o ochronie danych, dalej RODO) oraz ustawą o
            ochronie danych osobowych z dnia 10 maja 2018 r.
          </li>
        </ol>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <p className="text-left xl:w-2/3 text-4xl my-4">
          II. Administrator danych
        </p>
        <p className="text-xl xl:w-1/2">
          Administratorem danych osobowych zbieranych przez Serwis jest Stan
          Relaksu Kinga Wołoszka, adres: ul. Naukowa 20/22/1, 02-463 Warszawa,
          NIP: 7011219823, REGON: 529475624, adres poczty elektronicznej:
          kontakt@stanrelaksu.pl(dalej: Administrator).
        </p>
      </div>
      <div className="flex flex-col w-full justify-center items-center ">
        <p className="text-left xl:w-2/3 text-4xl my-4">
          III. Cel zbierania danych osobowych{" "}
        </p>
        <ol className="list-decimal xl:w-1/2 text-xl">
          <li>
            Dane osobowe wykorzystywane są w celu:
            <ul className="list-disc ml-8">
              <li>rejestracji konta i weryfikacji tożsamości Użytkownika,</li>
              <li>umożliwienia logowania do Serwisu,</li>
              <li>realizacji umowy dotyczącej usług i e-usług,</li>
              <li>
                komunikacji z Użytkownikiem (livechat, formularz kontaktowy
                itp.)
              </li>
              <li>
                wysyłki newslettera (po wyrażeniu zgody Użytkownika na jego
                otrzymywanie),
              </li>
              <li>prowadzenia systemu komentarzy,</li>
              <li>świadczenia usług społecznościowych,</li>
              <li>promocji oferty Administratora,</li>
              <li>marketingu, remarketingu, afiliacji,</li>
              <li>personalizacji Serwisu dla Użytkowników,</li>
              <li>działań analitycznych i statystycznych,</li>
              <li>windykacji należności,</li>
              <li>ustalenia i dochodzenia roszczeń lub obrony przed nimi.</li>
            </ul>
          </li>
          <li>
            Podanie danych jest dobrowolne, ale niezbędne do zawarcia umowy albo
            skorzystania z innych funkcjonalności Serwisu.
          </li>
        </ol>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <p className="text-left xl:w-2/3 text-4xl my-4">
          IV. Rodzaj przetwarzanych danych osobowych
        </p>
        <p className="text-xl xl:w-1/2">
          Administrator może przetwarzać dane osobowe Użytkownika: imię i
          nazwisko, data urodzenia, adres zamieszkania, adres e-mail, numer
          telefonu, NIP.
        </p>
      </div>
      <div className="flex flex-col w-full justify-center items-center ">
        <p className="text-left xl:w-2/3 text-4xl my-4">
          V. Okres przetwarzania danych osobowych{" "}
        </p>
        <ol className="list-decimal xl:w-1/2 text-xl">
          <li>
            Dane osobowe Użytkowników będą przetwarzane przez okres:
            <ul className="list-disc ml-8">
              <li>
                gdy podstawą przetwarzania danych jest wykonanie umowy – do
                momentu przedawnienia roszczeń po jej wykonaniu,
              </li>
              <li>
                gdy podstawą przetwarzania danych jest zgoda – do momentu jej
                odwołania, a po odwołaniu zgody do przedawnienia roszczeń.
              </li>
            </ul>
          </li>
        </ol>
        <p className="text-xl xl:w-1/2">
          W obu przypadkach termin przedawnienia wynosi 6 lat, a dla roszczeń o
          świadczenia okresowe i roszczeń dotyczących prowadzenia działalności
          gospodarczej – 3 lata (jeśli przepis szczególny nie stanowi inaczej).
        </p>
      </div>
      <div className="flex flex-col w-full justify-center items-center ">
        <p className="text-left xl:w-2/3 text-4xl my-4">
          VI. Udostępnianie danych osobowych{" "}
        </p>
        <ol className="list-decimal xl:w-1/2 text-xl">
          <li>
            Dane osobowe Użytkowników mogą być przekazywane: podmiotom
            powiązanym z Administratorem, jego podwykonawcom, podmiotom
            współpracującym z Administratorem np. firmom obsługującym
            e-płatności, firmom świadczącym usługi kurierskie/pocztowe,
            kancelariom prawnym.
          </li>
          <li>
            Dane osobowe Użytkowników nie będą przekazywane poza teren
            Europejskiego Obszaru Gospodarczego (EOG).
          </li>
        </ol>
      </div>
      <div className="flex flex-col w-full justify-center items-center ">
        <p className="text-left xl:w-2/3 text-4xl my-4">
          VII. Prawa Użytkowników{" "}
        </p>
        <ol className="list-decimal xl:w-1/2 text-xl">
          <li>
            Użytkownik Serwisu ma prawo do: dostępu do treści swoich danych
            osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania,
            przenoszenia, wniesienia sprzeciwu wobec przetwarzania, cofnięcia
            zgody w każdej chwili (co nie ma wpływu na zgodność z prawem
            przetwarzania dokonanego w oparciu o zgodę przed jej cofnięciem).
          </li>
          <li>
            Zgłoszenie o wystąpieniu przez Użytkownika z uprawnieniem
            wynikającym z wymienionych praw należy przesłać na adres
            kontakt@stanrelaksu.pl.
          </li>
          <li>
            Administrator spełnia lub odmawia spełnienia żądania niezwłocznie –
            maksymalnie w ciągu miesiąca od jego otrzymania.
          </li>
          <li>
            Użytkownik ma prawo złożyć skargę do Prezesa Urzędu Ochrony Danych
            Osobowych, jeśli uzna, że przetwarzanie narusza jego prawa i
            wolności (RODO).
          </li>
        </ol>
      </div>
      <div className="flex flex-col w-full justify-center items-center ">
        <p className="text-left xl:w-2/3 text-4xl my-4">VIII. Pliki cookies </p>
        <ol className="list-decimal xl:w-1/2 text-xl">
          <li>
            Serwis zbiera informacje za pomocą plików cookies – sesyjnych,
            stałych i podmiotów zewnętrznych.
          </li>
          <li>
            Zbieranie plików cookies wspiera poprawne świadczenie usług w
            Serwisie i służy celom statystycznym.
          </li>
          <li>
            Użytkownik może określić zakres dostępu plików cookies do swojego
            urządzenia w ustawieniach przeglądarki.
          </li>
        </ol>
      </div>
      <div className="flex flex-col w-full justify-center items-center ">
        <p className="text-left xl:w-2/3 text-4xl my-4">IX. Zautomatyzowane podejmowanie decyzji i profilowanie</p>
        <ol className="list-decimal xl:w-1/2 text-xl">
          <li>
            Dane Użytkowników nie mogą być przetwarzane w zautomatyzowany sposób
            tak, że na skutek tego mogłyby zapaść wobec nich jakiekolwiek
            decyzje.
          </li>
          <li>
            Dane Użytkowników mogą być profilowane celem dostosowania treści i
            personalizacji oferty po wyrażeniu przez nich zgody.
          </li>
        </ol>
      </div>
      <div className="flex flex-col w-full justify-center items-center ">
        <p className="text-left xl:w-2/3 text-4xl my-4">
          X. Postanowienia końcowe
        </p>
        <ol className="list-decimal xl:w-1/2 text-xl">
          <li>
            Administrator ma prawo do wprowadzenia zmian w Polityce prywatności,
            przy czym prawa Użytkowników nie zostaną ograniczone.
          </li>
          <li>
            Informacja o wprowadzonych zmianach pojawi się w formie komunikatu
            dostępnego w Serwisie.
          </li>
          <li>
            W sprawach nieuregulowanych w niniejszej Polityce prywatności
            obowiązują przepisy RODO i przepisy prawa polskiego.
          </li>
        </ol>
        <p className="text-sm my-12 ">
          Informacje na temat polityki prywatności i plików cookies znajdziesz
          na{" "}
          <Link
            href="https://www.wygranaonline.com/polityka-prywatnosci-wzor-generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            WygranaOnline.
          </Link>{" "}
        </p>
      </div>

      <ToHomePage>Wróć do strony głównej</ToHomePage>
    </div>
  );
};

export default pages;
