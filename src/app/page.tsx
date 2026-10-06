import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
// import NewsCard from "@/components/NewsCard";
export default async function Home() {
  const res =await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  const otherSections = sections.slice(1)
  console.log(mainNews,'mainNews')
 

 return (
    <div>
      {/* <Marquee/> */}
      
      {/* Main container holding both news sections and the most read sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 px-4 mt-4">
        
        {/* news section (Takes 2 columns) */}
        <div className="lg:col-span-2">
          <MainNews news={mainNews} />
          
          <div className="grid gap-5 mt-5">
            {otherSections.map(os => (
              <div className="border-b-2 pb-1" key={os.curationId}>
                <h1 className="font-bold">{os.title}</h1>
                <div className="grid grid-cols-3">
                   {/* {
                   (os?.articles?.map(news => <NewsCard key={news.id} news={news}/> ))
                   } */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read Sidebar Section (Takes 1 column, placed inside the same grid) */}
        <div className="col-span-1">
          <MostRead />
        </div>

      </div>
    </div>
  );
}
