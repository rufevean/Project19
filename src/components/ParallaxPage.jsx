import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import "../styles/parallax.css";

const ParallaxPage = () => {
  const layer1Props = useSpring({
    from: { opacity: 0, transform: "scale(1.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 20 },
  });

  const layer2Props = useSpring({
    from: { opacity: 0, transform: "scale(1.2)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 200, friction: 20 },
  });

  const textProps = useSpring({
    from: { opacity: 1, transform: "translateY(0%)" },
    to: async (next, cancel) => {
      await next({ opacity: 1, transform: "translateY(0%)" });
      await next({ opacity: 1, transform: "translateY(-5%)" });
    },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="ParallaxPage">
      <Parallax pages={5} className="ParallaxAnimation">
        <ParallaxLayer offset={0} speed={3} depth={0.6}>
          <animated.div className="layer1 layer" id="layer3" style={layer1Props}></animated.div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-10}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <animated.h1 className="project-text" style={textProps}>
            PROJECT 19
          </animated.h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={4} depth={0.4}>
          <animated.div className="layer1 layer" id="layer2" style={layer2Props}></animated.div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={12} depth={0.2}>
          <animated.div className="layer1 layer" id="layer1" style={layer1Props}></animated.div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxPage;
