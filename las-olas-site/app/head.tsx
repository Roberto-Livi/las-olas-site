export default function Head() {
  return (
    <>
      <link
        rel="preload"
        href="/videos/las-olas-intro-720p.mp4"
        as="video"
        type="video/mp4"
        media="(max-width: 768px)"
      />
      <link
        rel="preload"
        href="/videos/las-olas-intro.mp4"
        as="video"
        type="video/mp4"
        media="(min-width: 769px)"
      />
    </>
  );
}
