import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./../src/Pages/LoginAdmin/Context/AuthContext";
import  AuthrizeContext  from "./Context/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
<AuthrizeContext>
    <ChakraProvider>
      <AuthContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthContextProvider>
    </ChakraProvider>
    </AuthrizeContext>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
