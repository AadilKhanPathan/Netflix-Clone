
export default function Trailer({ trailers }) {
    
  return (
    <div className="mt-8 p-4 overflow-hidden flex justify-center">
      {trailers && (
        <iframe
          className="aspect-video md:w-1/2 border-2 rounded"
          src={`https://www.youtube.com/embed/${trailers.key}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
