import ExpandableText from "./ExpandableText";

interface ProcedureItemProps {
  procedure: {
    title?: string;
    procedure?: string;
    procedurefirst?: string;
    proceduresec?: string;
    procedurethi?: string;
  };
  index: number;
}

const ProcedureItem: React.FC<ProcedureItemProps> = ({ procedure, index }) => {
  const targetIndex = 3; // Indeks elementu, dla którego chcesz użyć ExpandableText
  return (
    <li>
      <article className="">
        <p className="font-bold px-2 text-lg md:text-xl">{procedure.title}</p>
        <p className="px-3 text-base md:text-lg">{procedure.procedure}</p>

        {index === targetIndex ? (
          <ExpandableText text={procedure.procedurefirst} maxLength={100} />
        ) : (
          <p className="px-3 md:text-lg">{procedure.procedurefirst}</p>
        )}
        {index === targetIndex ? (
          <ExpandableText text={procedure.proceduresec} maxLength={100} />
        ) : (
          <p className="px-3 md:text-lg">{procedure.proceduresec}</p>
        )}
        {index === targetIndex ? (
          <ExpandableText text={procedure.procedurethi} maxLength={100} />
        ) : (
          <p className="px-3 md:text-lg pb-2">{procedure.procedurethi}</p>
        )}
      </article>
    </li>
  );
};

export default ProcedureItem;
