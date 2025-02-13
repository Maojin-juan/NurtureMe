import { Helmet } from "react-helmet-async";
import Banner from "@/components/Home/Banner";
import Features from "@/components/Home/Features";
import Team from "@/components/Home/Team";
import Story from "@/components/Home/Story";
import GuardianHero from "@/components/Home/GuardianHero";

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

      <Features />
      <Team />
      <Story />
      <GuardianHero />
    </>
  );
}
