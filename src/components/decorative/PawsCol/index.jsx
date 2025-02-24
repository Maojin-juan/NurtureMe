import PropTypes from "prop-types";

export function PawsCol({ className }) {
  return (
    <div className={`${className} absolute -z-10`}>
      <div className="bg-pawsColShort h-[925px] w-[228px] bg-contain bg-no-repeat" />
    </div>
  );
}

PawsCol.propTypes = {
  className: PropTypes.string,
};
