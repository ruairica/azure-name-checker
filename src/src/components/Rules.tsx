import type { ResourceRules } from "./resources";

const propertyLabels: Record<string, string> = {
  lengthMin: "Minimum Length",
  lengthMax: "Maximum Length",
  validText: "Valid Text",
  invalidText: "Invalid Text",
  invalidCharacters: "Invalid Characters",
  invalidCharactersStart: "Invalid Starting Characters",
  invalidCharactersEnd: "Invalid Ending Characters",
  invalidCharactersConsecutive: "Invalid Consecutive Characters",
};

const ResourceRuleKeys: (keyof ResourceRules)[] = [
  "lengthMin",
  "lengthMax",
  "validText",
  "invalidText",
  "invalidCharacters",
  "invalidCharactersStart",
  "invalidCharactersEnd",
  "invalidCharactersConsecutive",
];

const Rules: React.FC<ResourceRules> = (resource: ResourceRules) => {
  return (
    <div
      className="bg-blue-100 border-l-4 mt-3 border-blue-500 text-blue-700 p-4 rounded-md shadow-md"
      role="alert"
    >
      <ul className="list-disc list-inside text-base">
        {Object.entries(resource)
          .filter(([k, _]) =>
            ResourceRuleKeys.includes(k as keyof ResourceRules),
          )
          .map(([key, value]) => {
            if (!!value) {
              return (
                <li key={key} className="mb-2 flex">
                  <span className="font-semibold mr-2">
                    {propertyLabels[key]}:
                  </span>
                  <span className="flex-1">{value}</span>
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
