import {
  HeroSection,
  FeaturedProperties,
  ValueProps,
  WaveBallSection,
  SellersSection,
  Testimonials,
  LeadFormSection,
  CTASection,
  CinematicDivider,
} from "@/components/sections"

export default function Home() {
  return (
    <>
      <HeroSection />

      <FeaturedProperties />

      {/* Cinematic break - Hill Country aerial (light above → dark below for ValueProps) */}
      <CinematicDivider
        image="/images/hero/hill-country-aerial.jpg"
        height="sm"
        overlay="green"
        topBlend="light"
        bottomBlend="dark"
      />

      <ValueProps />

      <WaveBallSection />

      {/* Cinematic break - Luxury interior (light above, dark below) */}
      <CinematicDivider
        image="/images/hero/luxury.jpg"
        height="md"
        overlay="warm"
        topBlend="light"
        bottomBlend="dark"
      >
        <div className="text-center px-4">
          <p className="text-white/60 text-sm tracking-[0.3em] uppercase font-medium mb-3">Austin, Texas</p>
          <p className="text-white text-2xl md:text-3xl font-display font-normal tracking-tight">
            Where every home tells a story
          </p>
        </div>
      </CinematicDivider>

      <SellersSection />
      <Testimonials />

      {/* Cinematic break - Lady Bird Lake (dark above, dark below) */}
      <CinematicDivider
        image="/images/hero/austin-ladybird-lake.jpg"
        height="sm"
        overlay="dark"
        edgeBlend="dark"
      />

      <LeadFormSection />
      <CTASection />
    </>
  )
}
