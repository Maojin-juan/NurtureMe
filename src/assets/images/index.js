/* HOME */
import homeHero from "./home/hero/hero.svg";
import homeFeaturesOnlineSponsor from "./home/features/online.jpg";
import homeFeaturesInteract from "./home/features/interact.jpg";
import homeTeamVet from "./home/team/vet.jpg";
import homeTeamSponsor from "./home/team/sponsor.jpg";
import homeTeamExpert from "./home/team/expert.jpg";
import homeStoryBegin from "./home/story/begin.jpg";
import homeStoryGrow from "./home/story/grow.jpg";
import homeStoryOnline from "./home/story/online.jpg";
import homeStoryStartup from "./home/story/startup.jpg";

/* ABOUT */
import aboutStory1 from "./about/story/story-1.jpg";
import aboutStory2 from "./about/story/story-2.jpg";
import aboutStory3 from "./about/story/story-3.jpg";
import aboutStory4 from "./about/story/story-4.jpg";
import aboutSupportAdopt from "./about/support/adoption.png";
import aboutSupportDonation from "./about/support/donation.png";
import aboutSupportHover from "./about/support/hover.png";

/* ADOPTION */
import goldenRetriever from "./adoption/golden-retriever.jpg";
import pet1 from "./adoption/pet-1.jpg";
import pet2 from "./adoption/pet-2.jpg";
import pet3 from "./adoption/pet-3.jpg";

/* DONATION */
import food from "./donation/food.jpg";
import donate from "./donation/donate.jpg";
import store from "./donation/store.jpg";
import adopt from "./donation/adopt.jpg";
import warm from "./donation/warm.svg";

/* NEWS */
import banner from "./adoption/banner.jpg";
import cat1 from "./adoption/cat1.jpg";
import cat2 from "./adoption/cat2.jpg";
import cat3 from "./adoption/cat3.jpg";
import cat4 from "./adoption/cat4.png";
import dog1 from "./adoption/dog1.jpg";
import dog2 from "./adoption/dog2.jpg";
import dog3 from "./adoption/dog3.jpg";
import dog4 from "./adoption/dog4.png";
import dog5 from "./adoption/dog5.jpg";


export default {
  HOME: {
    HOME_HERO: homeHero,
    FEATURES: {
      INTERACT: homeFeaturesInteract,
      ONLINE_SPONSOR: homeFeaturesOnlineSponsor,
    },
    TEAM: {
      VET: homeTeamVet,
      SPONSOR: homeTeamSponsor,
      EXPERT: homeTeamExpert,
    },
    STORY: {
      BEGIN: homeStoryBegin,
      STARTUP: homeStoryGrow,
      GROW: homeStoryOnline,
      ONLINE: homeStoryStartup,
    },
  },

  ABOUT: {
    STORY: {
      STORY_1: aboutStory1,
      STORY_2: aboutStory2,
      STORY_3: aboutStory3,
      STORY_4: aboutStory4,
    },
    SUPPORT: {
      ADOPT: aboutSupportAdopt,
      DONATION: aboutSupportDonation,
      HOVER: aboutSupportHover,
    },
  },

  ADOPTION: {
    GOLDEN_RETRIEVER: goldenRetriever,
    PET_1: pet1,
    PET_2: pet2,
    PET_3: pet3,
    BANNER: banner,
    CATS: {
      CAT1: cat1,
      CAT2: cat2,
      CAT3: cat3,
      CAT4: cat4,
    },
    DOGS: {
      DOG1: dog1,
      DOG2: dog2,
      DOG3: dog3,
      DOG4: dog4,
      DOG5: dog5,
    }
  },

  DONATION: {
    FOOD: food,
    DONATE: donate,
    STORE: store,
    ADOPT: adopt,
    WARM: warm,
  },

};
