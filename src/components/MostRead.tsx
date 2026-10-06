interface MostReadNews {
    id:string;
    title: string;
};

const MostRead = async () => {
const res =await fetch('https://news-api-v2.vercel.app/api/news/most-read')
const data =await res.json()
const news:MostReadNews[] = data.data

return (
    <div>
      <div className="card p-2 bg-base-100 border border-gray-300">
        <h1 className='font-bold text-red-700'> সর্বাধিক পঠিত </h1> 
      </div>
      <div className='grid gap-3 col-span-1 mt-2'>
         {news.map((n, index) => (
           <div key={n.id} className="flex gap-2 items-start border-b border-gray-100 pb-2">
             <span className="text-red-600 font-bold">{index + 1}.</span>
             <h2 className="text-sm hover:text-red-600 cursor-pointer">{n.title}</h2>
           </div>
         ))} 
      </div>
    </div>
  );
};

export default MostRead;