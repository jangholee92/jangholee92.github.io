import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE } from "@consts"

export async function GET(context: any) {
  const news = await getCollection("news")
  const projects = await getCollection("projects")

  const items = [...news, ...projects]

  items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  })
}
