import type { ResourceRules } from "./resources";


const propertyLabels: Record<string, string> = {
  lengthMin: 'Minimum Length',
  lengthMax: 'Maximum Length',
  validText: 'Valid Text',
  invalidText: 'Invalid Text',
  invalidCharacters: 'Invalid Characters',
  invalidCharactersStart: 'Invalid Starting Characters',
  invalidCharactersEnd: 'Invalid Ending Characters',
  invalidCharactersConsecutive: 'Invalid Consecutive Characters',
};

const Rules: React.FC<ResourceRules> = ( resource ) => {
  return (
    <div>
        <ul>
            {Object.entries(resource).map(([key, value]) => {
                if (!!value) {
                return (
                    <li key={key}>
                    <span className="font-bold">{propertyLabels[key]}: {value}</span>
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