import Card100 from "../tools/Card100";

function ProfAffordAgile({ description }) {
  return (
    <div className="md:flex bg-zinc-100">
      <Card100 title={"PROFICIENCY"} description={description.proficiency} />
      <Card100
        title={"AFFORDABILITY"}
        description={description.affordability}
      />
      <Card100 title={"AGILITY"} description={description.agility} />
    </div>
  );
}

export default ProfAffordAgile;
