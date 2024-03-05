import { Container } from "../Container/Container";
import { Logo } from "../UI/Logo/Logo";
import s from "./Footer.module.scss";

export const Footer = () => (
  <footer className={s.footer}>
    <Container>
      <div className={s.container}>
        <Logo />
        <span className={s.copy}>© C-Money, 2024</span>
      </div>
    </Container>
  </footer>
);
