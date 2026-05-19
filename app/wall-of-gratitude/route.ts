import { readFileSync } from "node:fs";
import path from "node:path";

export const dynamic = "force-static";

const previewPath = path.join(
  process.cwd(),
  "app",
  "wall-of-gratitude",
  "PREVIEW-bold.html"
);

function normalizeHtml(html: string) {
  return html
    .replace(/<div class="preview-banner">[\s\S]*?<\/div>\s*/i, "")
    .replaceAll('src="img/', 'src="/img/')
    .replaceAll('href="img/', 'href="/img/')
    .replaceAll('poster="img/', 'poster="/img/')
    .replaceAll("url(img/", "url(/img/")
    .replaceAll("'img/", "'/img/")
    .replaceAll('"img/', '"/img/')
    .replaceAll('src="video/', 'src="/video/')
    .replaceAll('href="video/', 'href="/video/')
    .replaceAll("url(video/", "url(/video/")
    .replaceAll("'video/", "'/video/")
    .replaceAll('"video/', '"/video/')
    .replaceAll(
      "https://awakenedacademy.com/certification",
      "https://awakenedacademy.com/spiritual-life-coach-certification"
    );
}

export function GET() {
  const html = normalizeHtml(readFileSync(previewPath, "utf8"));

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
