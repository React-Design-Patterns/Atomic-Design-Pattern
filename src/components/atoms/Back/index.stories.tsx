import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Back from ".";

storiesOf("Back", module).add("default", () => (
  <BrowserRouter>
    <Back />
  </BrowserRouter>
));
