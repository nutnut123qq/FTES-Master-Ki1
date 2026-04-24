import {
  LandingAudience,
  LandingBenefits,
  LandingFaq,
  LandingFooter,
  LandingFtes,
  LandingHero,
  LandingMentor,
  LandingNav,
  LandingSchedule
} from "./sections";

/** Port of Stitch screen `FTES Master Kì 1 Landing Page` — sections match HTML order in `stitch-export/ftes-master-k1-landing-reference.html`. */
export function FtesMasterLanding() {
  return (
    <div className="bg-st-surface font-sans text-st-on-background antialiased stitch-aurora-bg">
      <LandingNav />
      <main className="pt-24">
        <LandingHero />
        <LandingBenefits />
        <LandingAudience />
        <LandingSchedule />
        <LandingMentor />
        <LandingFaq />
        <LandingFtes />
      </main>
      <LandingFooter />
    </div>
  );
}
