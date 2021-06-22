import { Flag, Radio } from "semantic-ui-react";

const LanguageSlider = () => {
  return (
    <>
      <Flag name="se" />
      <Radio slider toggle />
      <Flag name="uk" style={{ marginLeft: "10px" }} />
    </>
  );
};

export default LanguageSlider;
