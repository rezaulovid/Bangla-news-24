import Link from 'next/link';
import React from 'react';

interface Navs {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

const NavLinks = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/categories",
        {
            headers: {
                "User-Agent": "Mozilla/5.0",
            },
        }
    );

    if (!res.ok) {
        throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();

    const navs: Navs[] = data.data;

    const filterData = navs.filter((nav) => nav.scrapable);

    console.log(filterData);
    console.log(navs);

    return (
        <div className="flex gap-5 justify-center mt-5">
            <Link href="/">হোম</Link>

            {filterData.map((n, i) => (
                <Link key={i} href={`/category/${n.slug}`}>
                    {n.title}
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;


// import Link from 'next/link';
// import React from 'react';
// interface Navs {
    
// slug:string
// title: string
// topicId: string | null
// url: string
// scrapable: boolean
// }

// const NavLinks = async () => {
//     const res = await fetch(
//         "https://news-api-v2.vercel.app/api/categories"
//     );
// if (!res.ok) {
//     throw new Error(`API Error: ${res.status}`);}
// const data = await res.json();
//    const navs:Navs[]= data.data
//    const filterData= navs.filter(nav=>nav.scrapable) 
//    console.log(filterData);
//     console.log(navs);
    

//     return (
//         <div className='flex gap-5 justify-center mt-5'>

//         <Link href={'/'}>হোম</Link>

//             {filterData.map((n, i) => (
//                 <Link key={i} href={`/category/${n.slug}`}>
//                     {n.title}
//                 </Link>
//             ))}
//         </div>
//     );
// };

// export default NavLinks;