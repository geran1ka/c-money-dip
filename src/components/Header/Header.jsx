import { Container } from "../Container/Container";
import { Logo } from "../UI/Logo/Logo";
import s from "./Header.module.scss";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
  console.log("header");

  return (
    <header className={s.header}>
      <Container className={s.container}>
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
};