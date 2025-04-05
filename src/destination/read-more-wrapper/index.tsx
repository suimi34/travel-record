"use client";

import dynamic from "next/dynamic";

const ReadMore = dynamic(() => import("../read-more"), { ssr: false });

export default function ReadMoreWrapper(props: { showReadMore: boolean }) {
  return <ReadMore showReadMore={props.showReadMore} />;
}
