import { useSelector } from "react-redux";
import { Container } from "../Container/Container";
import { Logo } from "../UI/Logo/Logo";
import s from "./Header.module.scss";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
  const { accessToken } = useSelector((state) => state.auth);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <Logo />
          {accessToken && <Navigation />}
        </div>
      </Container>
    </header>
  );
};
