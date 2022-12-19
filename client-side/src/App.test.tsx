import React from "react";
import { render } from "@testing-library/react";
import { Provider as ReduxProvider} from "react-redux";
import App from "./App";
import store from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";


test("app component renders", () => {
  render(
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
});