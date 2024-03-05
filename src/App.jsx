import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Auth } from "./components/Auth/Auth";
import { Check } from "./components/Check/Check";
import { Exchange } from "./components/Exchange/Exchange";
import { NotFound } from "./components/NotFound/NotFound";
import { useSelector } from "react-redux";
import { AccountsList } from "./components/AccountsList/AccountsList";

const App = () => {
  const { accessToken } = useSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <main>
            {accessToken ? <AccountsList /> : <Navigate to="/auth" />}
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
