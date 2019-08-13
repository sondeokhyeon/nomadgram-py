import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store, { history } from "redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import I18n from "redux-i18n";
import App from "components/App";
import { translations } from "translations";

//import "./ReactotronConfig";

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translations} initialLang="en" fallbackLang="en">
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </I18n>
  </Provider>,
  document.getElementById("root")
);
