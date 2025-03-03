import PropTypes from "prop-types";

const TeamSlide = ({ img, members, description, teamImages }) => (
  <div className="swiper-slide">
    <img
      className="mx-auto mb-4 size-40 rounded-full object-cover xl:mb-6 xl:size-[200px]"
      src={teamImages[img]}
      alt={members}
    />
    <div className="px-3 xl:px-4">
      <h6 className="mb-3 border-b border-primary-4 pb-3 text-center text-h7 text-primary-1 xl:text-h4">
        {members}
      </h6>
      <p className="rounded-xl text-fs-6 text-primary-3 xl:text-fs-4">
        {description}
      </p>
    </div>
  </div>
);

TeamSlide.propTypes = {
  img: PropTypes.oneOf(["expert", "sponsor", "vet"]).isRequired,
  members: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teamImages: PropTypes.shape({
    expert: PropTypes.string.isRequired,
    sponsor: PropTypes.string.isRequired,
    vet: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamSlide;
