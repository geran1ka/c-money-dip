import { Container } from "../Container/Container";
import s from "./Exchange.module.scss";
import { Course } from "./Course/Course";
import { MyCurrency } from "./MyCurrency/MyCurrency";
import { ChangeCurrency } from "./ChangeCurrency/ChangeCurrency";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Exchange = () => {
  console.log();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/auth");
    }
  }, [navigate, accessToken]);
  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>Обмен валюты</h2>

        <div className={s.wrapper}>
          <Course />
          <div className={s.rightWrapper}>
            <ChangeCurrency />
            <MyCurrency />
          </div>
        </div>
      </div>
    </Container>
  );
};
