import { memo } from "react";
import PropTypes from "prop-types";

const createWave = (path, height, name) => {
  const WaveComponent = memo(({ className }) => (
    <svg
      className={`absolute left-0 h-auto w-full ${className}`}
      width="1920"
      height={height}
      viewBox={`0 0 1920 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={path}
        fill="currentColor"
      />
    </svg>
  ));

  WaveComponent.propTypes = {
    className: PropTypes.string,
  };

  WaveComponent.displayName = name;

  return WaveComponent;
};

export const Wave1 = createWave(
  "M1919.93 62.1538C1919.93 62.1538 1749.67 80.2903 1596.96 79.1687C1444.25 78.0471 1163.04 69.1343 1003.2 71.9561C843.36 74.778 597.6 82.5346 417.12 79.1688C222.051 75.5308 81.12 53.5641 6.65315e-06 76.1033L0 0.000167852L1920 0L1919.93 62.1538Z",
  80,
  "Wave1",
);

export const Wave2 = createWave(
  "M0.073257 8.04649C0.073257 8.04649 296.907 28.5728 449.62 25.0739C602.333 21.575 640.365 20.5847 721.879 25.0739C803.393 29.563 1192.55 63.8032 1373.62 59.6517C1554.68 55.5002 1850.65 31.0281 1920 51.562V0H0L0.073257 8.04649Z",
  60,
  "Wave2",
);

export const Wave3 = createWave(
  "M1919.93 41.5633C1919.93 41.5633 1623.09 25.1422 1470.38 27.9414C1317.67 30.7405 1279.63 31.5327 1198.12 27.9413C1116.61 24.35 727.448 -3.04214 546.382 0.279024C365.317 3.60018 69.354 23.1778 3.60616e-06 6.7507L0 48.0003L1920 48.0005L1919.93 41.5633Z",
  48,
  "Wave3",
);

export const Wave4 = createWave(
  "M1919.93 26.2115C1919.93 26.2115 1749.67 -0.426334 1596.96 1.22101C1444.25 2.86836 1163.04 15.959 1003.2 11.8145C843.36 7.6699 597.6 -3.72267 417.12 1.22095C222.051 6.56418 81.12 38.8278 2.12232e-06 5.72337L0 29.9998L1920 30L1919.93 26.2115Z",
  30,
  "Wave4",
);
