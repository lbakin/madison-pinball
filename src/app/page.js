import Hero from "@/components/Hero";
import HomeSections from "@/components/CopySection";
import CtaBar from "@/components/CtaBar";

function CopySection() {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <div className="space-y-6 text-gray-100 leading-relaxed">
          <h2 class="text-2xl text-center">Madison Pinball is a group of local pinball enthusiasts/collectors that teamed up back in 2014 with the goal of bringing quality pinball back to Madison, WI. <br/>Mission Accomplished!</h2>

          <p>
            Our continuing goal is to provide everyone the opportunity to play a wide variety of quality pinball games on location.  We strive to maintain games that play exceptionally well, and support the local community of pinball enthusiasts.  Simply put, "We buy, sell, collect, repair and play pinball - and we love doing it!"
          </p>

          <p>
            <a href="/locations">4 locations</a> currently feature a variety of our great playing games.  A handful of these locations feature friendly <a href="/monthly-meetups">Monthly Tournaments</a>.  We also run Launch Parties for almost every new game that comes out!
          </p>

          <p>
            Our goal is to keep all games clean and working properly.  However - it's pinball so one thing for sure is that they will break down or behave oddly from time to time.  That's just the way of the Silverball.
          </p>

          <p>
            If you do experience any issues with any of our games, please be sure to <a href="/report-a-problem">reach out to us</a> so we can get it resolved for you ASAP.
          </p>

          <p>
            Be sure to let these establishments know that you appreciate them allowing us to put pinball on location, and support them by purchasing some fine beverage and/or menu items!!
          </p>

          <p>
            We couldn't do this without the support of everyone that stops out to play - so THANK YOU!
          </p>

          <p>Hilton, Sean &amp; Garrett</p>
        </div>
      </div>
    </section>
  );
}


export default function HomePage() {
  return (
    <main className="bg-[var(--mp-ink)] text-[var(--mp-cream)]">
      <Hero />
      <CopySection />
      <CtaBar />
    </main>
  );
}
