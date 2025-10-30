import { Button } from "./components/Button";
import { PlantsRow } from "./components/PlantsRow";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="container">
      <Section title="Today" status="X plants needs you!">
        <PlantsRow />
        <Button value="Finished?" />
      </Section>

      <Section title="This week" status="4 more plants need you this week">
        <PlantsRow />
      </Section>
      <Section title="Your plants" status="6 plants">
        <Button value="Sort by" />

        <PlantsRow />
      </Section>
    </div>
  );
}

export default App;
