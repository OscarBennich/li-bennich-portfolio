import "../index.css";
import React from "react";
import { useTrail, a } from "@react-spring/web";

interface TrailProps {
  open: boolean;
  children: React.ReactNode;
}

const Trail = ({ open, children }: TrailProps) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { duration: 800 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
