import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
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
  console.log("accessToken: ", accessToken);

  const accessToken2 = getLocalStorage("accessToken");
  console.log("accessToken2: ", accessToken2);

  useEffect(() => {
    if (accessToken) return;

    if (accessToken) {
    }
  }, [dispatch, accessToken]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <main>
            {accessToken ? <CurrencyList /> : <Navigate to="/auth" />}
          </main>
          <Footer />
        </>
      ),
    },
    {
      path: "/auth",
      element: (
        <>
          <Header />
          <main>{accessToken ? <Navigate to="/" /> : <Auth />}</main>
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

  return <RouterProvider router={router} />;
};

export default App;
