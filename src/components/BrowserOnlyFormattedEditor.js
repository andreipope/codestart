import BrowserOnly from "@docusaurus/BrowserOnly";

const BrowserOnlyFormattedEditor = (props) => {
  return (
    <BrowserOnly>
      {() => {
        const FormattedEditor = require('./FormattedEditor.js').default;
        return <FormattedEditor {...props} />;
      }}
    </BrowserOnly>
  );
};

export default BrowserOnlyFormattedEditor;