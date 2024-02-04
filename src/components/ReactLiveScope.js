import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

function WrappedFormattedEditor(props) {
  return (
    <BrowserOnly fallback={<div>...</div>}>
      {() => {
        // import FormattedEditor from "./FormattedEditor.js";
        const FormattedEditor = require("./FormattedEditor");
        return <FormattedEditor {...props} />;
        // return <div><p>aaa</p></div>
      }}
    </BrowserOnly>
  );
}

const ReactLiveScope = {
  React,
  ...React,
  WrappedFormattedEditor
};

export default ReactLiveScope;