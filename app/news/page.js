import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage(){
  return(
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {/* <li>
          <Link href="/news/first-news">First News</Link>
        </li>
        <li>
          <Link href="/news/second-news">Second News</Link>
        </li>
        <li>
          <Link href="/news/third-news">Third News</Link>
        </li> */}

        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img 
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}