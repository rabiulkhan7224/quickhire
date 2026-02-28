import { Categories } from "@/components/Categories";
import { Companies } from "@/components/Companies";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
   <div className="">
      <Hero />
      <Companies />
      <Categories />
   </div>
  );
}
