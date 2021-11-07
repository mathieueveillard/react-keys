import React from "react";
import Description from "./Description";

interface Props {
  reference: string;
  removeFromCatalog(reference: string): void;
}

function Reference({
  reference,
  removeFromCatalog,
}: Props): React.ReactElement {
  React.useEffect(() => {
    console.log(`Render Reference component for reference: ${reference}`);
  });

  return (
    <>
      <td>{reference}</td>
      <td>
        <Description reference={reference} />
      </td>
      <td>
        <button onClick={() => removeFromCatalog(reference)}>
          Remove from catalog
        </button>
      </td>
    </>
  );
}

export default Reference;
