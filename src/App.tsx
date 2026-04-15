import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactSplitEmail from '@/components/sections/contact/ContactSplitEmail';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesAlternatingSplit from '@/components/sections/features/FeaturesAlternatingSplit';
import FooterSimpleReveal from '@/components/sections/footer/FooterSimpleReveal';
import HeroFullBleedImage from '@/components/sections/hero/HeroFullBleedImage';
import NavbarCentered from '@/components/ui/NavbarCentered';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';

export default function App() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarCentered
          logo="Grand Horizon"
          navItems={[
            {
              name: "About",              href: "#about"},
            {
              name: "Amenities",              href: "#amenities"},
            {
              name: "Testimonials",              href: "#testimonials"},
          ]}
          ctaButton={{
            text: "Book Now",            href: "#contact"}}
        />
      </div>

      <div id="hero" data-section="hero" className="relative">
        <HeroFullBleedImage
          title="Experience Unrivaled Luxury"
          description="Escape to our breathtaking coastal sanctuary where elegance meets serenity. Discover timeless hospitality designed for your ultimate relaxation."
          primaryButton={{
            text: "Reserve Your Suite",            href: "#contact"}}
          imageSrc="https://pixabay.com/get/gd93b93dc58ee032dcbad5acb661ab26f95137275f1701e4108450b0b01699c41807f2c490d0e38b0e003d3dbd090f8456d02c3b51e23821f82f35e4d13bd62a8_1280.jpg"
        />
        <div className="hero-floating-card hero-card-3 hidden md:block" style={{ zIndex: 0 }}>
          <h3 className="text-lg font-semibold">Private Beach Access</h3>
          <p className="text-sm">Relax on our pristine, exclusive white-sand beach.</p>
          <a href="#about" className="text-sm font-semibold mt-2 text-accent hover:underline">
            Discover More &rarr;
          </a>
        </div>
      </div>

      <div id="about" data-section="about">
        <AboutTextSplit
          title="Our Legacy of Excellence"
          descriptions={[
            "Founded in 1985, Grand Horizon has become a beacon of refined hospitality. Our commitment to personalized service ensures every guest feels at home in our curated spaces.",            "Set against the backdrop of pristine coastlines, we offer a harmonious blend of modern architectural brilliance and traditional comfort, perfect for both tranquil retreats and memorable family vacations."]}
          primaryButton={{
            text: "Learn More",            href: "#"}}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeaturesAlternatingSplit
          tag="Elevated Comfort"
          title="Curated Experiences"
          description="Discover world-class facilities meticulously designed to elevate your stay."
          items={[
            {
              title: "Rejuvenating Spa & Wellness",              description: "Unwind in our holistic spa offering bespoke treatments inspired by local healing traditions.",              imageSrc: "https://pixabay.com/get/g1e6babbeb2e473cf46df540e714200f624d222ffd4e15c96451e07a489edec88e748d4f814fe2671796fa5f8c335fdca9eab79584a6136f2001d21302c8f7f70_1280.jpg"},
            {
              title: "Award-Winning Gastronomy",              description: "Savor authentic regional flavors expertly prepared by our Michelin-starred culinary team.",              imageSrc: "https://pixabay.com/get/g4a49aecd9ee09623656f010e7eb0c715d7852abb422129f3fa68fdae688e54a5e2cbf1c5255d54ca72fb6c90fe82e2f7138acdeebbe3377ae64b7872f8215325_1280.jpg"},
            {
              title: "Infinity Pool Retreat",              description: "Bathe in the serenity of our sunset infinity pool, overlooking the endless azure horizon.",              imageSrc: "https://pixabay.com/get/gd167ae739c9b15730f15deb1df54784e959a28e7e25dd3c5e39cd249068b43ccd58b46649657dbd9084bd973438b7ba34609b5dba95c1359d0ba69f284ec9bbf_1280.jpg"},
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialOverlayCards
          tag="Guest Stories"
          title="Moments to Remember"
          description="Read what our cherished guests have to say about their stay with us."
          testimonials={[
            {
              name: "Elena Rossi",              role: "Traveler",              company: "Milan, Italy",              rating: 5,
              imageSrc: "https://pixabay.com/get/g9515ffea30b1da5a408d1f695cb50d1fe047eb2d2db91ae5bef32ea67fc570437b09924b221e8b0a55cff07435d86e0a47cfc940f3057dd1fd738f16209003b9_1280.jpg"},
            {
              name: "Marcus Chen",              role: "Business Owner",              company: "Singapore",              rating: 5,
              imageSrc: "https://pixabay.com/get/ga872f5e72fc5ca6e5df892d33856f6936db8ed4a092ba12adca167a536687a9631a63896ff4cf8a36382cf598a852e9f_1280.jpg"},
            {
              name: "Sarah Jenkins",              role: "Designer",              company: "London, UK",              rating: 5,
              imageSrc: "https://pixabay.com/get/g9386f65a9d3a975a3cd47e331e0bd8babe1312f09bfbe2bcc5da9ab9cc80e59178be8f7f564daa3dc24999e32386a07dcaee965196e17df96940c55494dbb882_1280.jpg"},
            {
              name: "David Miller",              role: "Executive",              company: "New York, US",              rating: 5,
              imageSrc: "https://pixabay.com/get/gb78b54b50cbc75f6d8c07c7b90ff9e4002e037877af9320f236f19c5654d4032873ff029193687b238acac1fb5309819235b8d4c7fe4ffef6475d09e7d82022d_1280.jpg"},
            {
              name: "Aria Thorne",              role: "Blogger",              company: "Paris, France",              rating: 5,
              imageSrc: "https://pixabay.com/get/gee24b27f6b7ac9aabeeaf1d13487ec135873e6e28a6644382aecbc8fbfeb010e83ddfcc1e9dff65d575f1b595e04a4cddee1e1b465ddbddee52c3c700be68dc0_1280.jpg"},
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          tag="Common Questions"
          title="Plan Your Stay"
          description="Everything you need to know for a seamless arrival and stay."
          items={[
            {
              question: "What is the check-in time?",              answer: "Check-in begins at 3:00 PM local time."},
            {
              question: "Do you offer airport transfers?",              answer: "Yes, we provide private chauffeur services upon request."},
            {
              question: "Is breakfast included?",              answer: "Our premium packages include daily gourmet breakfast."},
            {
              question: "Are pets allowed?",              answer: "We are a pet-friendly property with specific suite options."},
          ]}
          imageSrc="https://pixabay.com/get/gd1533c87b4738f6efe91f656e893b185dc8f720d282d473ed7786ec47a7958fae030d3e137b2c1a5db4a3583515ad8012f9a397d9d726b933cc6459a82c713dc_1280.jpg"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitEmail
          tag="Reserve Your Stay"
          title="Begin Your Journey"
          description="Enter your email for exclusive offers and seasonal booking packages."
          inputPlaceholder="Enter your email address"
          buttonText="Inquire Now"
          imageSrc="https://pixabay.com/get/gbb27e11ab3e25f94ae87c86245c4f07fc673545e5bc206a91aa77b487a9909f1aa18879988e1a04ff888963702218c75b4e33d5d5927bbc58c35cd5292e02695_1280.jpg"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimpleReveal
          brand="Grand Horizon Resort & Spa"
          columns={[
            {
              title: "Explore",              items: [
                {
                  label: "Rooms",                  href: "#"},
                {
                  label: "Dining",                  href: "#"},
              ],
            },
            {
              title: "Legal",              items: [
                {
                  label: "Privacy",                  href: "#"},
                {
                  label: "Terms",                  href: "#"},
              ],
            },
          ]}
          copyright="© 2024 Grand Horizon Resort. All rights reserved."
          links={[
            {
              label: "Instagram",              href: "#"},
            {
              label: "LinkedIn",              href: "#"},
          ]}
        />
      </div>
    </>
  );
}
