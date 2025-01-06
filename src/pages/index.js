import FoodTabel from "@/components/FoodTabel";
import About from "@/container/About";
import BarMenu from "@/container/BarMenu";
import ChefRecommend from "@/container/ChefRecommend";
import DailyOfferMenu from "@/container/DailyOfferMenu";
import Feature from "@/container/Feature";
import FoodCategory from "@/container/FoodCategory";
import Footer from "@/container/Footer";
import HeroSection from "@/container/HeroSection";
import MenuList from "@/container/MenuList";
import Navbar from "@/container/Navbar";
import ReviewSection from "@/container/ReviewSection";
import SubFooter from "@/container/SubFooter";
import ViedoSection from "@/container/ViedoSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <ChefRecommend />
      <ReviewSection />
      <FoodTabel />
      <Feature />
      <MenuList />
      <ViedoSection />
      <FoodCategory />
      <DailyOfferMenu />
      <BarMenu />
      <SubFooter />
      <Footer />
    </div>
  );
}
