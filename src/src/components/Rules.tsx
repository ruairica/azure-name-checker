import type { ResourceRules } from "./resources";


const propertyLabels: Record<string, string> = {
  lengthMin: 'Minimum Length',
  lengthMax: 'Maximum Length',
  validText: 'Valid Text',
  invalidCharacters: 'Invalid Characters',
  invalidCharactersStart: 'Invalid Starting Characters',
  invalidCharactersEnd: 'Invalid Ending Characters',
  invalidCharactersConsecutive: 'Invalid Consecutive Characters',
};

const ResourceRuleKeys: (keyof ResourceRules)[] = ["lengthMin", "lengthMax", "validText", "invalidText", "invalidCharacters", "invalidCharactersStart", "invalidCharactersEnd", "invalidCharactersConsecutive"];

const Rules: React.FC<ResourceRules> = ( resource: ResourceRules ) => {
  return (
    <div>
        <ul>
            {Object.entries(resource).filter(([k,_]) => ResourceRuleKeys.includes(k as keyof ResourceRules)).map(([key, value]) => {
                if (!!value) {
                return (
                    <li key={key}>
                        <span>{propertyLabels[key]}:</span> {value}
                    </li>
                );
                }
                return null;
            })}
        </ul>
    </div>
  );
};

export default Rules;