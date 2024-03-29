import { FadeLoader } from "react-spinners";

export const Preloader = ({ inTable }) => {
  const cssProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transforme: "translate(-50%, -50%)",
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
