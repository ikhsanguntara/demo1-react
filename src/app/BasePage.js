import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/util/BuilderPage";
import { MyPage } from "./pages/util/MyPage";
import { ErrorPage } from "./pages/util/ErrorPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { UserPage } from "./pages/user/UserPage";
import { UserCreate } from "./pages/user/UserCreate";
import { ParamaterCreate } from "./pages/paramater/ParamaterCreate";
import { ParameterPage } from "./pages/paramater/ParameterPage";

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        {/* user */}
        <ContentRoute
          path="/administration/master-user/user/create"
          component={UserCreate}
        />
        <ContentRoute
          path="/administration/master-user/user"
          component={UserPage}
        />

        {/* parameter */}
        <ContentRoute
          path="/administration/bussiness-parameter/paramater/create"
          component={ParamaterCreate}
        />
        <ContentRoute
          path="/administration/bussiness-parameter/paramater"
          component={ParameterPage}
        />
        <ContentRoute path="/my-page" component={MyPage} />
        <Redirect to="/error" component={ErrorPage} />
      </Switch>
    </Suspense>
  );
}
