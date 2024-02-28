import { Container } from "../Container/Container";
import s from "./Main.module.scss";
import { CurrencyList } from "../CurrencyList/CurrencyList";
import { Auth } from "../Auth/Auth";
import { Check } from "../Check/Check";

export const Main = () => {
  console.log("main");

  return (
    <main className={s.main}>
      {/* <Auth /> */}
      <Container>
        {/* <CurrencyList /> */}
        <Check />
      </Container>
    </main>
  );
};
