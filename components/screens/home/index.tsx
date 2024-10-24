import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { ToolsList } from "@/components/tools/tools-list";

const Spacer = () => <div className="mt-6" />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>What if you were a CISO?</h1>
            <h2>The Ultimate CISO guide, tools and resources.
            </h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          <span className="font-medium">What if you were a CISO?</span>{" "}
          isn't just a guide; it includes curated details about real incidents and tools to help you learn.
          This collection of guides, examples, and resources is designed to kickstart your journey as a Chief Information Security Officer. 
          The idea for this guide arose after a recent incident where a CISO sold company data to a hacker. 
          It will help you understand the role of a CISO and the ethical responsibilities that come with it.
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Posts category="incidents" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <ToolsList />
      </FadeIn.Item>
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}