interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  return (
    <section aria-labelledby="video-heading" className="px-4 md:px-8 py-12">
      <h2
        id="video-heading"
        className="font-serif text-2xl md:text-3xl text-text-primary font-semibold mb-6"
      >
        {title}
      </h2>
      <div className="aspect-video w-full bg-black rounded overflow-hidden">
        <video
          controls
          aria-label={`Video explicativo: ${title}`}
          className="w-full h-full"
        >
          <source src={videoUrl} type="video/mp4" />
          <p className="p-6 text-white font-sans text-base">
            El video no está disponible en este momento.
          </p>
        </video>
      </div>
    </section>
  );
}
