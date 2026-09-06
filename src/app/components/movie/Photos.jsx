import Image from "next/image";

export default function Photos({ photos }) {
  return (
    <div className="mx-auto max-w-5xl rounded px-3 ">
      {photos.length > 4 && (
        <div className="grid grid-cols-2 sm:grid-cols-5 border-3 rounded ">
          {photos.map((p) => (
            <Image
              key={p.file_path}
              src={`https://image.tmdb.org/t/p/w342${p.file_path}`}
              className="hover:scale-125 duration-300 hover:rounded border"
              width={400}
              height={100}
              alt=""
            />
          ))}
        </div>
      )}
    </div>
  );
}
