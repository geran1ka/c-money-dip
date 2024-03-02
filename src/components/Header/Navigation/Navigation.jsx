import { useDispatch } from "react-redux";
import s from "./Navigation.module.scss";
import { removeToken } from "../../../store/auth/auth.slice";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useResize } from "../../../hooks/hooks";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const dispatch = useDispatch();

  const [isShowMenu, setIsShowMenu] = useState(false);

  const isLaptop = useResize(540);

  const logOut = () => {
    dispatch(removeToken());
  };

  const navRef = useRef(null);
  const hadleClick = (e) => {
    const target = e.target;
    if (
      (target !== navRef.current && !target.closest(".navigation")) ||
      e.keyCode === 27
    ) {
      setIsShowMenu(false);
    }
  };

  const path = useLocation().pathname;

  useEffect(() => {
    document.addEventListener("keydown", hadleClick);
    document.addEventListener("click", hadleClick);
    return () => {
      document.removeEventListener("click", hadleClick);
      document.removeEventListener("keydown", hadleClick);
    };
  }, []);

  useEffect(() => {
    if (isLaptop) {
      setIsShowMenu(false);
    }
  }, [isLaptop]);

  return (
    <div>
      <div
        ref={navRef}
        className={classNames(s.menu, isShowMenu && s.change)}
        onClick={() => {
          setIsShowMenu(!isShowMenu);
        }}>
        <div className={s.line1}></div>
        <div className={s.line2}></div>
        <div className={s.line3}></div>
      </div>
      <nav className={classNames(s.navigation, isShowMenu && s.show)}>
        <ul className={s.nav}>
          <Link
            aria-current="page"
            className={classNames(s.link, path === "/" ? s.active : "")}
            to="/">
            Счета
          </Link>
          <Link
            className={classNames(s.link, path === "/exchange" ? s.active : "")}
            to="/exchange">
            Обмен
          </Link>
          <button className={classNames(s.exit, s.link)} onClick={logOut}>
            Выйти{" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={s.arrow}>
              <path
                d="M5.5675 9.6925L6.625 10.75L10.375 7L6.625 3.25L5.5675 4.3075L7.5025 6.25H0.25V7.75H7.5025L5.5675 9.6925ZM12.25 0.25H1.75C0.9175 0.25 0.25 0.925 0.25 1.75V4.75H1.75V1.75H12.25V12.25H1.75V9.25H0.25V12.25C0.25 13.075 0.9175 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V1.75C13.75 0.925 13.075 0.25 12.25 0.25Z"
                fill="currentColor"></path>
            </svg>
          </button>
        </ul>
      </nav>
    </div>
  );
};
