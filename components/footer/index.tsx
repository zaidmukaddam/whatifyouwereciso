import Link from "@/components/link";
import { AppThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between border-border border-t pt-2">
      <div className="px-[2px] text-muted text-small">
        Built with <Link href="https://nextjs.org/" text="Next.js" underline />. Find Source Code on{" "}
        <Link href="https://github.com/zaidmukaddam/whatifyouwereciso" text="GitHub" underline />.
        Sponsor this project{" "}
        <Link href="https://github.com/sponsors/zaidmukaddam" text="here" underline />.
      </div>
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </div>
  );
};

export { Footer };
