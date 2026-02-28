import { Categories } from "@/components/Categories";
import { Companies } from "@/components/Companies";
import { CTA } from "@/components/CTA";
import { FeaturedJobs } from "@/components/FeaturedJobs";
import { Hero } from "@/components/hero";
import { LatestJobs } from "@/components/LatestJobs";

export default function Home() {
  return (
   <div className="">
      <Hero />
      <Companies />
      <Categories />
      <CTA/>
      <FeaturedJobs />
      <LatestJobs />

   </div>
  );
}
