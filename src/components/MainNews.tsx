import Image from "next/image";
import Link from "next/link";

const MainNews = ({ news }) => {
    const [first, ...rest] = news;

    console.log(first, rest, "mainNews");

    return (
        <section className="my-6">
            <h2 className="mb-4 text-xl font-bold">
                {first.title}
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

                <Link
                    href={`/news/${first.id}`}
                    className="card bg-base-100 shadow-sm overflow-hidden md:col-span-2 md:row-span-2"
                >
                    <figure className="h-72 md:h-96">
                        {first.imageUrl ? (
                            <Image
                                height={600}
                                width={800}
                                src={first.imageUrl}
                                alt={first.title}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="h-full w-full bg-base-300" />
                        )}
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            {first.title}
                        </h2>

                        <p className="line-clamp-4">
                            {first.description}
                        </p>

                        <div className="card-actions justify-end">
                            <span className="btn btn-primary btn-sm">
                                বিস্তারিত
                            </span>
                        </div>
                    </div>
                </Link>

                {rest.map((article) => (
                    <div
                        key={article.id}
                        className="card bg-base-100 shadow-sm overflow-hidden"
                    >
                        <figure className="h-44">
                            {article.imageUrl ? (
                                <Image
                                    height={600}
                                    width={800}
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="h-full w-full bg-base-300" />
                            )}
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-base">
                                {article.title}
                            </h2>

                            <p className="line-clamp-2">
                                {article.description}
                            </p>

                            <div className="card-actions justify-end">
                                <Link
                                    href={`/news/${article.id}`}
                                    className="btn btn-primary btn-sm"
                                >
                                    বিস্তারিত
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MainNews;