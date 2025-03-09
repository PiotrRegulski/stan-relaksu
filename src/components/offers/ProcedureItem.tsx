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
        <h3 className="font-bold px-2 text-lg md:text-lg">{procedure.title}</h3>
        <p className="px-3 text-base ">{procedure.procedure}</p>

        <p className="px-3 md:text-base">{procedure.procedurefirst}</p>

        <p className="px-3 md:text-base">{procedure.proceduresec}</p>

        <p className="px-3 md:text-base pb-2">{procedure.procedurethi}</p>
      </article>
    </li>
  );
};

export default ProcedureItem;
