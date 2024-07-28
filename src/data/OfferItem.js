export const OfferItem = [
  {
    id: "Igłoterapia",
    slug: "igloterapia",
    active: true,
    category: "face",
    title: "Igłoterapia Estetyczna Twarzy",
    image: "offer1.jpg",
    prices: [{ id: "cenaIgłoterapi", priceName: "90 minut", price: "350 zł" }],
    contentFirst:
      "Igłoterapia estetyczna twarzy z pinezkowaniem to zaawansowany zabieg, który może odmienić wygląd Twojej skóry. Stymuluje jej komórki, pobudzając produkcję kolagenu i elastyny. Dzięki temu zmarszczki zostają spłycone, a Twoja twarz wygląda młodziej.  ",
    advantages: [
      {
        title: "Spłycenie zmarszczek",
        description:
          "Igłoterapia estetyczna prowadzi do spłycenia zmarszczek i poprawy wyglądu twarzy poprzez stymulację komórek, produkcję kolagenu i elastyny. Głębokie rozluźnienie mięśni mimicznych pomaga w przywróceniu ich odpowiedniej elastyczności za czym idzie wygładzenie. Jest to zabieg, który poprawia wygląd uwydatniając unikalne cechy twarzy więc to idealne rozwiązanie dla osób, które cenią sobie naturalne podkreślenie urody.",
      },
      {
        title: "Unikalne cechy twarzy",
        description:
          "Przy regularnym stosowaniu igłoterapii estetycznej zauważamy większe odżywienie tkanek, skóra staje się promienna a zmarszczki zostają spłycone. ",
      },
      {
        title: "Efekt odmłodzenia",
        description:
          "Zabieg polega na zastosowaniu cieniutkich igieł akupunkturowych, które wprowadzane są w obrębie mięśni mimicznych dla przywrócenia ich elastyczności i jędrności dzięki czemu uzyskujemy efekt odmłodzenia twarzy. ",
      },
    ],
    contraindications: [
      { id: "1", contraindication: "przeciwskazania" },
      {
        id: "2",
        contraindication:
          "Zakażenia skóry i otwarte rany w miejscu wykonywania zabiegu",
      },
      { id: "3", contraindication: "przeciwskazania" },
      { id: "4", contraindication: "przeciwskazania" },
      { id: "5", contraindication: "przeciwskazania" },
      { id: "6", contraindication: "przeciwskazania" },
    ],
    indications: [
      { id: "1", indication: "wskazanie 1" },
      { id: "2", indication: "wskazanie 2" },
    ],
    recommendations: [
      { id: "1", recommendation: "Chcesz spłycić zmarszczki " },
      { id: "2", recommendation: "Uzuskać efekt odmłodzeni twarzy" },
      { id: "3", recommendation: "Uwydatnić unikalne cechy twarzy" },
    ],
    procedures: [
      { title: "Przygotowanie:" },
      {
        procedure:
          "Pacjent kładzie się na stole do zabiegów, często w luźnej odzieży, aby zapewnić łatwy dostęp do punktów akupunkturowych.",
      },
      { title: "Techniki igłoterapii:" },
      {
        procedure:
          "Terapeuta wprowadza cienkie igły w wybrane punkty na ciele, zgodnie z diagnozą i potrzebami pacjenta.",
      },
      { title: "Czas trwania:" },
      {
        procedure:
          "Zabieg trwa zazwyczaj od 20 do 40 minut, w zależności od indywidualnych potrzeb pacjenta.",
      },
      { title: "Efekty:" },
      {
        procedure:
          "Po zabiegu pacjent może odczuwać ulgę w bólu, poprawę krążenia oraz ogólne wzmocnienie organizmu.",
      },
    ],
  },

  {
    id: "MasażKobido",
    slug: "masaz-kobido",
    active: true,
    category: "face",
    title: "Masaż Kobido z Kinesiotapingiem Estetycznym",
    image: "offer2.jpg",
    prices: [{ id: "cenaKobido", priceName: "90 minut", price: "300 zł" }],
    contentFirst:
      "Masaż Kobido z kinesiotapingiem estetycznym jest prawdziwa perłą w świecie pielęgnacji twarzy. Wywodzący się z Japoni niechirurgiczny lifting twarzy, który od wieków zachwyca swoją skutecznością..",
    advantages: [
      {
        title: "Tradycja japońska:",
        description:
          "Tradycyjna japońska technika masażu twarzy, szyi, dekoltu i skóry głowy określana często jako niechirurgiczny lifting twarzy.",
      },
      {
        title: "Głębokie rozluźnienie:",
        description:
          "Podczas masażu dochodzi do głębokiego rozluźnienia i pobudzenia tkanek nie tylko warstwy podskórnej, ale także mięśni i powięzi twarzy dzięki czemu uzyskujemy efekt liftingu, wymodelowania rysów oraz odblokowania przepływu krążenia limfy.",
      },
      {
        title: "Efekt liftingu:",
        description:
          "Zdrowszy i promienny wygląd twarzy, spłycenie zmarszczek i bruzd mimicznych to jedne z wielu korzyści płynących z rytuału Kobido. Dla przedłużenie efektów na koniec zabiegu zakładamy kinesiotaping estetyczny. Odprężenie płynące masażu twarzy Kobido przynosi zrelaksowanie, zmniejszenie napięcia i stresu w całym ciele.  ",
      },

      {
        title: "Regularność:",
        description:
          "Zabieg można powtarzać co 2 tygodnie na początku, a po kilku sesjach przejść do 1 zabiegu miesięcznie. To doskonałe przygotowanie tkanek przed innymi zabiegami medycyny estetycznej",
      },
    ],
    contraindications: [
      { id: "1", contraindication: "ostre stany zapalne skóry " },
      {
        id: "2",
        contraindication: "opryszczka",
      },
      { id: "3", contraindication: "przerwanie ciągłości skóry" },
      { id: "4", contraindication: "nieuregulowane nadciśnienie tętnicze" },
      { id: "5", contraindication: "trądzik różowaty w aktywnym stanie" },
      {
        id: "6",
        contraindication:
          "do 2 tygodni po intensywnych peelingach, fali radiacyjnej, laserze niedawno przebyte zabiegi medycyny estetycznej:",
      },
      { id: "7", contraindication: "do 4 tygodni po toksynie botulinowej" },
      { id: "8", contraindication: "do 6 tygodni po wypełniaczach " },
      {
        id: "9",
        contraindication:
          "do 6 miesięcy po niciach liftingujących (bezhaczykowych) ",
      },
    ],
    indications: [
      {
        id: "1",
        indication:
          "Wiotka skóra potrzebująca pobudzenia, liftingu i ujędrnienia",
      },
      { id: "2", indication: "Napięcia w obrębi głowy, twarzy, szyi, karku " },
      { id: "3", indication: "Szczękościsk i bruksizm (zgrzytanie zębami)" },
      { id: "4", indication: "Bóle głowy i zatok" },
      { id: "5", indication: "Spowalnianie procesów starzenia" },
    ],
    recommendations: [
      { id: "1", recommendation: "Zmniejszyć napięcie i stres w całym ciele." },
      { id: "2", recommendation: "Uzyskać efekt liftingu twarzy." },
      {
        id: "3",
        recommendation: "Przygotować się do zabiegu medycyny estetycznej",
      },
    ],
    procedures: [
      { title: "Przygotowanie:" },
      {
        procedure:
          "Pacjent kładzie się na stole do masażu, często w luźnej odzieży, aby zapewnić łatwy dostęp do twarzy i karku.",
      },
      { title: "Techniki masażu:" },
      {
        procedure:
          "Najpierw terapeuta wykonuje masaż głębokich tkanek, aby rozluźnić mięśnie. Następnie przechodzi do relaksacji, która pomaga w odprężeniu. Kolejnym etapem jest drenaż limfatyczny, który wspomaga usuwanie toksyn z organizmu. Następnie wykonywana jest część liftingująca, która ma na celu ujędrnienie skóry. Na koniec stosowana jest akupresura, która polega na uciskaniu określonych punktów na twarzy.",
      },
      { title: "Czas trwania:" },
      {
        procedure:
          "Zabieg trwa zazwyczaj od 60 do 90 minut, w zależności od indywidualnych potrzeb pacjenta",
      },
      { title: "Efekty:" },
      {
        procedure:
          "Zdrowszy i promienny wygląd twarzy, spłycenie zmarszczek i bruzd mimicznych to jedne z wielu korzyści płynących z rytuału Kobido",
      },
    ],
  },
  {
    id: "MasazPowieziowy ",
    slug: "masaz-powieziowy",
    active: true,
    category: "body",
    title: "Masaż Powięziowy ",
    image: "offer3.jpg",
    prices: [
      { id: "cenamaspow60", priceName: "60 minut", price: "200 zł" },
      { id: "cenamaspow45", priceName: "45 minut", price: "170 zł" },
      { id: "cenamaspow30", priceName: "30 minut", price: "120 zł" },
    ],
    contentFirst:
      "Masaż powięziowy to doskonały wybór dla osób, które odczuwają bóle pleców, karku lub stawów obwodowych. ",
    advantages: [
      {
        title: "Indywidualne podejście:",
        description:
          "Masaż powięziowy to idealny wybór dla osób, które zmagają się z bólami pleców, karku czy bólami w stawach obwodowych. Indywidualnie dobrana terapia pomoże w zniesieniu napięć w ciele i pozbyciu się dolegliwości bólowych. Praca na przywróceniu ślizgu tkanki powięziowej pozwala na zwiększenie prawidłowych zakresów ruchomości w stawach oraz ogólnej mobilności całego ciała. ",
      },
      {
        title: "Zwalczanie bólu:",
        description:
          "Ta holistyczna metoda pracy poprzez znoszenie napięcia z tkanki mięśniowej i powięziowej prowadzi do zmniejszenia uczucia stresu, uwolnienia emocji co prowadzi do głębokiego Stanu Relaksu. Korzyści jakie niesie terapia mięśniowo-powięziowa są wielopłaszczyznowe. Uwalniając napięcie z ciała wpływamy na wcześniej zamrożone i zatrzymane emocje w nim. Uczucie ulgi jakie przenoszą techniki powięziowe wynika z rozluźnienia mięśni, powięzi oraz uwolnienia emocji zawieszonych w  ciele i tkankach. ",
      },
      {
        title: "Summary",
        description:
          "Jeśli szukasz ulgi w bólu, zmniejszeniu uczucia stresu i napięcia w ciele to masaż powięziowy będzie dla Ciebie świetnym wyborem.",
      },
    ],
    contraindications: [
      { id: "1", contraindication: "przciwskazania" },
      {
        id: "2",
        contraindication: "przciwskazania",
      },
      { id: "3", contraindication: "przciwskazania" },
      { id: "4", contraindication: "przciwskazania" },
      { id: "5", contraindication: "przciwskazania" },
      { id: "6", contraindication: "przciwskazania" },
    ],
    indications: [
      { id: "1", indication: "wskazanie 1" },
      { id: "2", indication: "wskazanie 2" },
    ],
    recommendations: [
      { id: "1", recommendation: "Zmagasz się z bólami pleców i stawów" },
      { id: "2", recommendation: "Chcesz zwiększyć mobilność całego ciała" },
      {
        id: "3",
        recommendation: "Chcesz zmniejszyć uczucię stresu i napięcia w ciele",
      },
    ],
    procedures: [
      { title: "Przygotowanie:" },
      {
        procedure:
          "Pacjent kładzie się na stole do masażu, często w luźnej odzieży, aby zapewnić łatwy dostęp do obszarów ciała wymagających terapii.",
      },
      { title: "Techniki masażu:" },
      {
        procedure:
          "Masaż powięziowy wykorzystuje różne metody, takie jak delikatne naciskanie, rozciąganie i manipulowanie powięzią, aż terapeuta wyczuje, że napięcie w tkance się zmienia.",
      },
      { title: "Czas trwania:" },
      {
        procedure:
          "Zabieg trwa zazwyczaj od 30 do 60 minut, w zależności od indywidualnych potrzeb pacjenta",
      },
      { title: "Efekty:" },
      {
        procedure:
          "Po masażu pacjent może zauważyć ulgę w bólu, lepszą ruchomość oraz ogólną poprawę samopoczucia",
      },
    ],
  },
  {
    id: "TerapiaManualnaBlizn ",
    slug: "terapia-manualna-blizn",
    active: true,
    category: "body",
    title: "Terapia Manualna Blizn",
    image: "offer4.png",
    prices: [
      { id: "teramanublizna", priceName: "90 minut", price: "brak danych!" },
    ],
    contentFirst:
      "Ta innowacyjna metoda mobilizacji i manualnego opracowania blizn pozwala na przywrócenie naturalnego ślizgu warstw tkanek, redukcję zrostów i promowanie zdrowego przebudowywania się tkanki. ",
    advantages: [
      {
        title: "Indywidualne podejście:",
        description:
          "Mobilizacja i manualne opracowanie blizny pomaga w przywróceniu ślizgu warstw tkanek które zostały przecięte , zmniejszeniu zrostów i lepszemu przebudowywaniu się tkank",
      },
      {
        title: "Zwalczanie bólu:",
        description:
          "Zauważalnym efektem po terapii blizny  jest zmiana elastyczności i poprawa jej wyglądu. Terapię manualną blizny często łączymy z niezwykle skuteczną metodą suchego igłowania (Dry Needling).",
      },
      {
        title: "Dry Needling:",
        description:
          "Dzięki zastosowaniu tych metod możemy uzyskać  jeszcze lepsze rozmiękczenie i uelastycznienie blizny. Blizna zazwyczaj widoczna powierzchownie ma też swój korzeń w głębszych warstwach tkanek, brak mobilność może prowadzić do zrostów i efektu zaciągnięcia blizny w głąb do środka tkanek ( efekt “zaciągnięcia w tapicerce”). Często dochodzi do zaburzenia czucia w obrębie okolicy blizny, a także błędnego odczytywania informacji przez układ nerwowy o położeniu ciała w przestrzeni, co może prowadzić do dysfunkcji w pracy nawet odległych mięśni czy stawów.",
      },
      {
        title: "summary",
        description:
          "Terapia blizny niweluje te problemy, prowadząc do przywrócenia elastyczności warstw tkanek, wygładzenia powierzchni blizny, poprawy czucia w jej obrębie",
      },
    ],
    contraindications: [
      { id: "1", contraindication: "brak wygojenia się blizny" },
      {
        id: "2",
        contraindication: "stan zapalny blizny",
      },
      { id: "3", contraindication: "zakażenie w obrębie blizny" },
      { id: "4", contraindication: "bliznowiec" },
      { id: "5", contraindication: "infekcja " },
      { id: "6", contraindication: "Gorączka" },
    ],
    indications: [
      {
        id: "1",
        indication:
          "Blizny pooperacyjne (np. endoplastyka stawu kolanowego, rekonstrukcja ACL, blizna po usunięciu tarczycy).",
      },
      { id: "2", indication: "blizny po laparoskopii" },
      { id: "3", indication: "blizna po cesarskim cięciu " },
      { id: "4", indication: "blizny po operacjach plastycznych" },
      { id: "5", indication: "blizny powypadkowe" },
    ],
    recommendations: [
      {
        id: "1",
        recommendation:
          "Chcesz zapobiec zaburzeniu czucia w obrębie okolicy blizny",
      },
      {
        id: "2",
        recommendation:
          " Wygładzić powierzchnie blizny i poprawić czucie w jej obrębie",
      },
      { id: "3", recommendation: "Poprawić wygląd blizn" },
    ],
    procedures: [
      { title: "Przygotowanie:" },
      {
        procedure:
          "Pacjent kładzie się na stole do masażu, często w luźnej odzieży, aby zapewnić łatwy dostęp do obszaru blizny.",
      },
      { title: "Techniki masażu:" },
      {
        procedure:
          "Terapeuta stosuje różne techniki, takie jak delikatne naciskanie, rozciąganie i manipulowanie tkankami wokół blizny, aż do momentu, gdy poczuje zmianę napięcia.",
      },
      { title: "Czas trwania:" },
      {
        procedure:
          "Zabieg trwa zazwyczaj od 30 do 90 minut, w zależności od indywidualnych potrzeb pacjenta.",
      },
      { title: "Efekty:" },
      {
        procedure:
          "Po terapii pacjent może zauważyć ulgę w bólu, lepszą ruchomość oraz ogólną poprawę samopoczucia.",
      },
    ],
  },
  {
    id: "DrenażLimfatyczny",
    slug: "drenaz-limfatyczny",
    active: true,
    category: "body",
    title: "Drenaż Limfatyczny",
    image: "offer5.png",
    prices: [
      { id: "drelim60", priceName: "60 minut", price: "200 zł" },
      { id: "drelim60", priceName: "45 minut", price: "170 zł" },
      { id: "drelim60", priceName: "30 minut", price: "120 zł" },
    ],
    contentFirst:
      "Odkryj ulgę i lekkość, jaką oferuje drenaż limfatyczny – delikatna, ale potężna metoda, która może przynieść znaczącą poprawę osobom borykającym się z obrzękami i zastojem limfy w ciele. ",
    advantages: [
      {
        title: "Zatrzymywanie wody w ciele:",
        description:
          "Drenaż limfatyczny to idealne rozwiązanie dla osób mających problemy z zatrzymywaniem się wody w ciele, walczącym z obrzękiem i zastojem limfy. Techniki manualne drenażu pozwalają odblokować zastoje w węzłach chłonnych, usunąć zalegajaca limfę i usprawnić jej przepływ",
      },
      {
        title: "Ulga w obrzękach pooperacyjnych:",
        description:
          "Masaż limfatyczny przynosi ulgę w obrzękach pooperacyjnych i pourazowych, zaburzeniach przepływu limfy w przebiegu stanów zapalnych, chorób reumatycznych, chorób nerek a także sprawdza się w obrzękach ciążowych, redukcji cellulitu wodno tłuszczowego czy lipodemy.",
      },
      {
        title: "Zabiegi medycyny plastycznej:",
        description:
          " Usunięcie zastoju i zalegającej limfy jest niezwykle ważnym etapem w rekonwalescencji po zabiegach medycyny plastycznej (np. takich jak liposukcja, abdominoplastyka, powiększanie piersi).",
      },
      {
        title: "summary",
        description:
          " Efekty drenażu niosą pozytywne skutki estetyczne zmniejszając obwody naszego ciała dzięki pozbyciu się nadmiaru obrzęku z naszego ciała",
      },
    ],
    contraindications: [
      { id: "1", contraindication: "choroby nowotworowe" },
      {
        id: "2",
        contraindication:
          "Zakażenia skóry i otwarte rany w miejscu wykonywania zabiegu",
      },
      { id: "3", contraindication: "Zakrzepica żył głębokich" },
      { id: "4", contraindication: "Niewyrównana niewydolność serca" },
      { id: "5", contraindication: "Ciężka niewydolność nerek" },
      { id: "6", contraindication: "Gorączka" },
    ],
    indications: [
      { id: "1", indication: "wskazanie 1" },
      { id: "2", indication: "wskazanie 2" },
    ],
    recommendations: [
      {
        id: "1",
        recommendation:
          "Masz problemy z zatrzymwaniem się wody w ciele, walczącym z obrzękiem i zastojem limfy",
      },
      {
        id: "2",
        recommendation: " Przebyłaś/eś zabieg medycyny plastycznej",
      },
      {
        id: "3",
        recommendation: "Zredukować cellulit wodno tłuszczowy czy lipodemy",
      },
    ],
    procedures: [
      { title: "Przygotowanie:" },
      {
        procedure:
          "Pacjent kładzie się na stole do masażu, często w luźnej odzieży lub specjalnej bieliźnie.",
      },
      { title: "Techniki masażu:" },
      {
        procedure:
          "Terapeuta stosuje delikatne głaskanie i uciskanie, aby pobudzić przepływ limfy w kierunku węzłów chłonnych.",
      },
      { title: "Czas trwania:" },
      {
        procedure:
          "Zabieg trwa od 30 minut do godziny, w zależności od potrzeb pacjenta i obszaru ciała",
      },
      { title: "Efekty:" },
      {
        procedure:
          "Po masażu pacjent może odczuwać ulgę, zmniejszenie obrzęków oraz poprawę ogólnego samopoczucia.",
      },
    ],
  },
];
