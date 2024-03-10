import { FadeLoader, MoonLoader } from "react-spinners";

export const Preloader = ({ inTable }) => {
  const cssProperties = {
    position: "absolute",
    top: "calc(50% - 50px)",
    left: "calc(50% - 50px)",
  };

  const tableCssProperties = {
    display: "block",
    position: "relative",
    top: "50px",
    left: "calc(50% - 50px)",
  };

  return (
    <FadeLoader
      color="#36d7b7"
      size={inTable ? 50 : 100}
      cssOverride={inTable ? tableCssProperties : cssProperties}
    />
  );
};
