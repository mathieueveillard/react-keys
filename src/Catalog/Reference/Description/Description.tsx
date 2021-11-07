import React from "react";

interface Props {
  reference: string;
}

function Notes({ reference: _ }: Props): React.ReactElement {
  const [text, setText] = React.useState("");
  return (
    <input
      type="text"
      defaultValue={text}
      onChange={(event) => setText(event.currentTarget.value)}
    />
  );
}

export default Notes;
