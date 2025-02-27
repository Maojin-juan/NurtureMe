import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Team from "./components/Team";
import Story from "./components/Story";
import GuardianHero from "./components/GuardianHero";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>浪我包養</title>
        <meta name="description" content="毛孩子們的夢想樂園" />
      </Helmet>

      <main className="relative bg-primary-1">
        <Banner />
      </main>

      <section className="relative z-10 overflow-x-hidden">
        <Features />
        <Team />
      </section>

      <Story />
      <GuardianHero />
    </>
  );
}
