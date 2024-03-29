import useWebSocket from "react-use-websocket";
// import { rates } from "../../../data/rates";
import s from "./Course.module.scss";
import { useState } from "react";
import { WS_URL_API } from "../../../const/const";

export const Course = () => {
  const [changes, setChanges] = useState([]);
  useWebSocket(`${WS_URL_API}/currency-feed`, {
    onMessage: (messageEvent) => {
      const message = JSON.parse(messageEvent.data);
      if (message.type !== "EXCHANGE_RATE_CHANGE" || !message.change) return;
      if (changes.length > 6) {
        changes.shift();
      }
      setChanges((changes) => [...changes, message]);
    },
    shouldReconnect: () => true,
  });

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Изменение курса в режиме реального времени</h3>
      <div className={s.tbody}>
        {changes.length ?
          changes.map((change, index) => (
              <div className={s.row} key={index}>
                <span className={s.cellFirst}>
                  {change.from}/{change.to}
                </span>
                <span className={s.cellSecond}>{change.rate}</span>
                <span className={s.cellThird}>
                  {change.currency}
                  {change.change === 1 && (
                    <svg
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.5 0.5L8.39711 6.5H0.602886L4.5 0.5Z"
                        fill="#0EFF0A"></path>
                    </svg>
                  )}
                  {change.change === -1 && (
                    <svg
                      width="9"
                      height="7"
                      viewBox="0 0 9 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.5 6.5L0.602886 0.5H8.39711L4.5 6.5Z"
                        fill="#F10000"></path>
                    </svg>
                  )}
                </span>
              </div>
            )) :
          ""}
      </div>
    </div>
  );
};
