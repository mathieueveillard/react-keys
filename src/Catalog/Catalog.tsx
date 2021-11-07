import React from "react";
import Reference from "./Reference";

function Catalog(): React.ReactElement {
  const [references, setReferences] = React.useState(["100201", "100202"]);

  function removeFromCatalog(reference: string): void {
    const index = references.findIndex((value) => value === reference);
    const updatedReferences = [...references];
    updatedReferences.splice(index, 1);
    setReferences(updatedReferences);
  }

  return (
    <div>
      <h1>Catalog management</h1>
      <table>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {references.map((reference, index) => (
            <tr key={reference}>
              <Reference
                reference={reference}
                removeFromCatalog={removeFromCatalog}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Catalog;
