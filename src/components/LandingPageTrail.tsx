import { useMediaQuery } from "react-responsive";
import Trail from "./Trail";

const LandingPageTrail = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });

  return (
    <div>
      <Trail open>
        <span
          style={
            isDesktopOrLaptop ? { fontSize: "6em" } : { fontSize: "4.5em" }
          }
        >
          Professor
        </span>
        <span
          style={
            isDesktopOrLaptop ? { fontSize: "6em" } : { fontSize: "4.5em" }
          }
        >
          Mother
        </span>
        <span
          style={
            isDesktopOrLaptop ? { fontSize: "6em" } : { fontSize: "4.5em" }
          }
        >
          Genius
        </span>
        <span
          className="primaryColor"
          style={
            isDesktopOrLaptop ? { fontSize: "6em" } : { fontSize: "4.5em" }
          }
        >
          Hero.
        </span>
      </Trail>
    </div>
  );
};

export default LandingPageTrail;
