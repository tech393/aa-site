/**
 * Audio asset URL helper.
 *
 * Why: MP3s in public/audio/** are Git LFS-tracked. Vercel doesn't pull LFS
 * objects on deploy, so it serves the 133-byte pointer file with audio/mpeg
 * content-type and the <audio> element fails silently. The 108 MB Advanced
 * Law Of Attraction file also exceeds GitHub's 100 MB per-file hard limit,
 * so it can't be un-LFS'd into regular git.
 *
 * Fix: host MP3s on an external CDN (Cloudflare R2 / Bunny / S3) under the
 * same /audio/<section>/<file>.mp3 key structure, then set
 * NEXT_PUBLIC_AUDIO_CDN to the bucket base URL in Vercel.
 *
 * Local dev: leave NEXT_PUBLIC_AUDIO_CDN unset — paths fall through to
 * /audio/... and Next serves the LFS-hydrated files from public/.
 */
const CDN_BASE = (process.env.NEXT_PUBLIC_AUDIO_CDN ?? '').replace(/\/$/, '');

export function audioUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return CDN_BASE + normalized;
}
