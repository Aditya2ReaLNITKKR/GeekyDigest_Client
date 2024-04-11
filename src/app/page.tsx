import FeaturedContent from "@/components/FeaturedContent";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <main className="min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
    {/* <h1 className="text-4xl text-center text-cyan-50 font-bold">Geeky Digest</h1> */}
     
     <HeroSection/>
     <FeaturedContent/>
    </main>
  );
}
