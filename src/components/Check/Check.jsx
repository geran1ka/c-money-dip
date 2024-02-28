import classNames from "classnames";
import { Container } from "../Container/Container";
import s from "./Check.module.scss";

export const Check = () => {
  console.log("Check");

  return (
    <Container>
      <div className={s.Account_container__bOskA}>
        <div className={s.Account_container__header__MABYz}>
          <h2 className={s.Account_title__oytHW}>
            Счет №24051911200915061003240821
          </h2>
          <a
            className={classNames(s.Account_button__3jGkT, "button")}
            href="/currencies">
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.83 5.5L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.09L3.83 7.5L16 7.5V5.5L3.83 5.5Z"
                fill="white"></path>
            </svg>
            Вернуться
          </a>
        </div>
        <div className="Account_dynamic__q70XE">
          <div className="Account_dynamic__header__iCPTa">
            <h3 className="Account_dynamic__title__JwsS2">Динамика</h3>
            <span className="Account_dynamic__year__22YBJ">2022</span>
            <select className="Account_dynamic__select__7zXlN">
              <option hidden="">Год</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>
        </div>
        <div className="Account_history__qgCwN">
          <h3 className="Account_history__title__X1e2S">История переводов</h3>
          <div className="Table_table__container__-ExoA">
            <table className="Table_table__lsukp">
              <thead className="Table_thead__tkFEQ">
                <tr>
                  <th className="Table_th__yQviT">Счет</th>
                  <th className="Table_th__yQviT">Сумма</th>
                  <th className="Table_th__yQviT">Дата</th>
                </tr>
              </thead>
              <tbody className="Table_tbody__-S3Fd">
                <tr>
                  <td className="Table_td__HXWLH undefined">
                    78533416338616366622402206
                  </td>
                  <td className="Table_td__HXWLH Table_td_middle__bXwqs">
                    725.03
                  </td>
                  <td className="Table_td__HXWLH Table_td__date__0bfUN">
                    23.07.2022
                  </td>
                </tr>
                <tr>
                  <td className="Table_td__HXWLH undefined">
                    03076315655672621035503853
                  </td>
                  <td className="Table_td__HXWLH Table_td_middle__bXwqs">
                    754.63
                  </td>
                  <td className="Table_td__HXWLH Table_td__date__0bfUN">
                    23.07.2022
                  </td>
                </tr>
                <tr>
                  <td className="Table_td__HXWLH undefined">
                    77143036472230035143835017
                  </td>
                  <td className="Table_td__HXWLH Table_td_middle__bXwqs">
                    575.73
                  </td>
                  <td className="Table_td__HXWLH Table_td__date__0bfUN">
                    23.07.2022
                  </td>
                </tr>
                <tr>
                  <td className="Table_td__HXWLH undefined">
                    06815665521313043767184340
                  </td>
                  <td className="Table_td__HXWLH Table_td_middle__bXwqs">
                    128.14
                  </td>
                  <td className="Table_td__HXWLH Table_td__date__0bfUN">
                    23.07.2022
                  </td>
                </tr>
                <tr>
                  <td className="Table_td__HXWLH undefined">
                    08045754042622752807473705
                  </td>
                  <td className="Table_td__HXWLH Table_td_middle__bXwqs">
                    602.33
                  </td>
                  <td className="Table_td__HXWLH Table_td__date__0bfUN">
                    23.07.2022
                  </td>
                </tr>
                <tr>
                  <td className="Table_td__HXWLH undefined">
                    38623857350546387857144303
                  </td>
                  <td className="Table_td__HXWLH Table_td_middle__bXwqs">
                    318.7
                  </td>
                  <td className="Table_td__HXWLH Table_td__date__0bfUN">
                    23.07.2022
                  </td>
                </tr>
                <tr>
                  <td className="Table_td__HXWLH undefined">
                    37557537730030217658338836
                  </td>
                  <td className="Table_td__HXWLH Table_td_middle__bXwqs">
                    358.79
                  </td>
                  <td className="Table_td__HXWLH Table_td__date__0bfUN">
                    23.07.2022
                  </td>
                </tr>
                <tr>
                  <td className="Table_td__HXWLH undefined">
                    16866556611742274532042336
                  </td>
                  <td className="Table_td__HXWLH Table_td_middle__bXwqs">
                    518.05
                  </td>
                  <td className="Table_td__HXWLH Table_td__date__0bfUN">
                    23.07.2022
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="Account_transaction__fgGIA">
          <h3 className="Account_title__oytHW Account_transaction__title__5k3f-">
            Перевод
          </h3>
          <form className="Account_transaction__form__mKYvj">
            <div className="Account_transaction__input-wrap__ORoWP">
              <label className="Account_transaction__label__rsShR">Счет</label>
              <input className="Account_transaction__input__rH-Ae" name="to" />
            </div>
            <div className="Account_transaction__input-wrap__ORoWP">
              <label className="Account_transaction__label__rsShR">Сумма</label>
              <input
                className="Account_transaction__input__rH-Ae"
                name="amount"
              />
            </div>
            <button className="Account_button__3jGkT button">Перевести</button>
          </form>
        </div>
      </div>
    </Container>
  );
};
