import Article from "@/app/components/Article";
import Modules from "@/app/assets/modules.json";
import { readFileSync } from "fs";

export function generateStaticParams() {
  return Modules["modules"].map((mod) => ({ module: String(mod["id"]) }));
}

export default function ArticlePage({
  params,
}: {
  params: { module: number };
}) {
  const mod = Modules["modules"][params.module];
  let mdarticle;
  try {
    mdarticle = readFileSync(
      `@/app/assets/modules/${mod["id"]}/article.md`,
      "utf8"
    );
  } catch (e) {
    console.log(e);
  }
  if (!mdarticle) {
    return <div>Article not found</div>;
  }
  return (
    <Article
      articleName={mod["articleName"]}
      authors={mod["authors"]}
      body={mdarticle}
    />
  );
}