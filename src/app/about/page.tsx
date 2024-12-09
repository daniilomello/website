import { Header } from "@/components/header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "About Me",
  description: "Learn more about me and my background.",
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <Header />
      <Link href="/" className="flex items-center gap-2 mb-4 px-8 sm:px-0 hover:text-rose-500 transition">
        <FaArrowLeft size={12} /> Go back
      </Link>

      <section id="blog" className="blog h-min-screen px-8 sm:px-0 sm:max-w-2xl pb-8">
        <h1 className="font-bold text-3xl mb-8 text-purple-100">
          Who Am I?
        </h1>

        <article>
          <p>Well, let me tell you.</p>

          <p>First, welcome to this little corner of my world! I&apos;m glad you&apos;re here.</p>

          <p>I&apos;ve been thinking a lot about who I am, what drives me, and what I&apos;m building toward. Life has been a mix of growth and self-discovery, and honestly, I&apos;ve loved every messy part of it, even the bad ones.</p>

          <p>When it comes to work, I&apos;m someone who goes all in. I want to grow, not just as an engineer but as someone who can lead, inspire, and make an impact.</p>

          <p>I wanna be part of a place where I can be useful in any role, learn like crazy, and eventually take on leadership, to inspire others like the leaders who inspired me.</p>

          <p>A place where my ideas and skills go beyond just code and ripple out into something meaningful for the whole team and company.</p>

          <p>Recently, I&apos;ve been diving into personal projects that light me up. I built a Groceries app with React Native, looks amazing! You have to see it. (Altough, I'm still figuring out the publishing hurdles, but hey, that&apos;s part of the journey, right?). </p>

          <p>Right now, I&apos;m experimenting with AngularJS and playing around on AWS. I love the thrill of learning something new and figuring out how it all fits together.</p>

          <p>Every job I&apos;ve had so far has taught me something invaluable. But now? I&apos;m ready for something bigger!</p>

          <p>Working with a team outside of Brazil, speaking a new language, and stepping into the global stage. I know I can bring value, but more importantly, I know there&apos;s so much I can learn, too.</p>

          <p>Here&apos;s the dream: A place where the work feels exciting and the culture feels human. A role that challenges me, respects me, and gives me space to grow. A team that collaborates like friends, leaders who inspire trust, and projects that make a difference. Flexibility to balance life and work, with a focus on well-being. That's what I'm looking for, and I will do my best to find it.</p>

          <p>I&apos;ll admit, though, it&apos;s not always easy. I&apos;ve had moments of doubt, wondering if I&apos;m doing enough, if I&apos;m pushing hard enough. Perseverance doesn&apos;t come naturally to me, but it&apos;s something I&apos;m working on.</p>

          <p>What keeps me grounded is my love of learning, of solving problems, and of treating others with kindness and respect.</p>

          <p>At the end of the day, I&apos;m just someone who loves diving into ideas, creating things that matter, and connecting with people who share that same spark.</p>

          <p>If you&apos;re here reading this, I hope you know how much potential you have, too.</p>

          <p>We&apos;re all figuring it out, step by step. Let&apos;s keep building something amazing.</p>

          <p>Thanks for being part of this.</p>
        </article>
      </section>
    </main>
  );
}

