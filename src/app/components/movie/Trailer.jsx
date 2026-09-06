
export default function Trailer({ trailers }) {
    
  return (
    <div className="mt-8 p-4 overflow-hidden rounded-xl flex justify-center">
      {trailers && (
        <iframe
          className="aspect-video w-1/2"
          src={`https://www.youtube.com/embed/${trailers.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
