import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const NewsCard = ({ news }: { news: News }) => {
    

  return (
    <Link href={`/news/${news.id}`}>
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          height={600}
          width={600}
          src={news.imageUrl}
          alt={news.imageAlt}
        />
      </figure>

      <div className="card-body">
        <p className="text-red-600 font-bold">{news.category}</p>
        <h2 className="card-title">{news.title}</h2>
        <p>{news.description}</p>
      </div>
    </div>
    </Link>
  );
};

export default NewsCard;

// import Image from "next/image";

// const NewsCard = () => {
//     return (
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
//             <div className="card bg-base-100 shadow-sm overflow-hidden md:col-span-2 md:row-span-2">

                
//                 <figure className="h-72 md:h-96">
//                     {news.imageUrl ? (
//                         <Image
//                             height={600}
//                             width={800}
//                             src={news.imageUrl}
//                             alt={news.title}
//                             className="h-full w-full object-cover"
//                         />
//                     ) : (
//                         <div className="h-full w-full bg-base-300" />
//                     )}
//                 </figure>
               

//                 <div className="card-body">
                    
//                     <h2 className="card-title text-2xl">{news.title}</h2>
//                     <p className="line-clamp-4">{news.description}</p>
//                     <div className="card-actions justify-end">
//                         <Link
//                             href={news.url || "#"}
//                             className="btn btn-primary btn-sm"
//                         >
//                             বিস্তারিত
//                         </Link>
//                     </div>
                   
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default NewsCard;

