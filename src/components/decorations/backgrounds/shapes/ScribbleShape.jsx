import { memo } from "react";
import PropTypes from "prop-types";
import { scribblePaths } from "./paths";

const ScribbleShape = memo(({ variant, className }) => {
  const shapeData = scribblePaths[variant];

  return (
    <svg
      className={`absolute h-auto ${className}`}
      width={shapeData.width}
      height={shapeData.height}
      viewBox={`0 0 ${shapeData.width} ${shapeData.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {shapeData.paths.map((pathData, index) => (
        <path
          key={index}
          fillRule="evenodd"
          clipRule="evenodd"
          d={pathData.d}
          fill="currentColor"
        />
      ))}
    </svg>
  );
});

ScribbleShape.propTypes = {
  variant: PropTypes.oneOf(Object.keys(scribblePaths)).isRequired,
  className: PropTypes.string,
};

ScribbleShape.displayName = "ScribbleShape";

export const ScribbleShape1 = memo((props) => (
  <ScribbleShape variant="scribble1" {...props} />
));
ScribbleShape1.displayName = "ScribbleShape1";

export const ScribbleShape2 = memo((props) => (
  <ScribbleShape variant="scribble2" {...props} />
));
ScribbleShape2.displayName = "ScribbleShape2";

export const ScribbleShape3 = memo((props) => (
  <ScribbleShape variant="scribble3" {...props} />
));
ScribbleShape3.displayName = "ScribbleShape3";

export default ScribbleShape;
