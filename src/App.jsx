import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CurrencyList } from "./components/CurrencyList/CurrencyList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Auth } from "./components/Auth/Auth";
import { Check } from "./components/Check/Check";
import { Exchange } from "./components/Exchange/Exchange";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLocalStorage } from "./const/localStorage";
import { NotFound } from "./components/NotFound/NotFound";

const App = () => {
  console.log();
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);

  const accessToken2 = getLocalStorage("accessToken");

  useEffect(() => {
    if (accessToken) return;

    if (accessToken) {
      console.log("accessTokenStorage", accessToken);
    }
  }, [dispatch, accessToken]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <main>{accessToken ? <CurrencyList /> : <Redirect to="/" />}</main>
          <Footer />
        </>
      ),
    },
    {
      path: "/auth",
      element: (
        <>
          <Header />
          <main>
            <Auth />
            {/* <CurrencyList /> */}
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/account/:id",
      element: (
        <>
          <Header />
          <main>
            <Check />
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/exchange",
      element: (
        <>
          <Header />
          <main>
            <Exchange />
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Header />
          <main>
            <NotFound />
          </main>
          <Footer />
        </>
      ),
    },
  ]);

  <RouterProvider router={router} />;
};

export default App;
