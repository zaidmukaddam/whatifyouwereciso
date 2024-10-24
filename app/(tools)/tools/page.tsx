import * as FadeIn from "@/components/motion/staggers/fade";
import { ToolsList } from "@/components/tools/tools-list";
import React from "react";

export function generateMetadata() {
  const title = "Security Tools";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default function Page() {
  return (
    <React.Fragment>
      <FadeIn.Item>
        <ToolsList />
      </FadeIn.Item>
    </React.Fragment>
  );
}