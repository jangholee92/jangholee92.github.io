import { createSignal, createMemo, For } from "solid-js"

type Publication = {
  title: string
  authors: string
  journal: string
  year: number
  acceptedDate?: string
  sortPriority?: number
  pdfUrl?: string
  doi?: string
  type: "Published" | "Under Review"
  status?: string
  tags?: string[]
}

type Props = {
  published: Publication[]
  underReview: Publication[]
}

export default function PublicationList(props: Props) {
  const [selectedTag, setSelectedTag] = createSignal<string>("All Topics")
  const pdfFileName = (url: string) => url.split("/").pop() || undefined

  const allTags = createMemo(() => {
    const tags = new Set<string>()
    props.published.forEach(p => p.tags?.forEach(t => tags.add(t)))
    props.underReview.forEach(p => p.tags?.forEach(t => tags.add(t)))
    return ["All Topics", ...Array.from(tags).sort()]
  })

  const filteredUnderReview = createMemo(() => {
    if (selectedTag() === "All Topics") return props.underReview
    return props.underReview.filter(p => p.tags?.includes(selectedTag()))
  })

  const filteredPublished = createMemo(() => {
    if (selectedTag() === "All Topics") return props.published
    return props.published.filter(p => p.tags?.includes(selectedTag()))
  })

  const totalPapers = props.published.length
  const leadAuthorCount = props.published.filter(p => {
    const authorsClean = p.authors.trim()
    const isFirst = authorsClean.startsWith("<span")
    const isCorresponding = authorsClean.includes("Lee, J.*</span>") || authorsClean.includes("Lee, J.*")
    return isFirst || isCorresponding
  }).length

  const publishedYears = createMemo(() => {
    const years = new Set<number>()
    filteredPublished().forEach(p => years.add(p.year))
    return Array.from(years).sort((a, b) => b - a)
  })
  
  return (
    <div class="space-y-10">
      {/* Header: Summary + Filter */}
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4 border-b border-black/5 dark:border-white/10">
        <div class="flex flex-col md:flex-row md:items-center gap-6">
          <div class="border border-black/10 dark:border-white/20 rounded-lg overflow-hidden w-fit bg-white dark:bg-black shrink-0 shadow-sm">
            <table class="text-sm">
              <thead class="bg-black/5 dark:bg-white/5 font-semibold">
                <tr>
                  <th class="px-4 py-1.5 text-left border-r border-black/10 dark:border-white/20">Total Papers</th>
                  <th class="px-4 py-1.5 text-left">Lead Author</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-1.5 border-r border-black/10 dark:border-white/20 font-bold text-lg text-blue-600 dark:text-blue-400">{totalPapers}</td>
                  <td class="px-4 py-1.5 font-bold text-lg text-blue-600 dark:text-blue-400">{leadAuthorCount}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-[10px] leading-tight opacity-60">
            <p><span class="font-bold">*</span> Corresponding author</p>
            <p><span class="underline decoration-[0.5px]">Name</span> Student mentee</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <label for="tag-filter" class="text-[10px] font-bold uppercase opacity-50 tracking-wider">Filter Topic:</label>
          <select 
            id="tag-filter"
            value={selectedTag()}
            onInput={(e) => setSelectedTag(e.currentTarget.value)}
            class="text-xs bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded px-2 py-1.5 outline-none focus:ring-1 focus:ring-blue-500/50 min-w-[160px] font-medium transition-all"
          >
            <For each={allTags()}>
              {(tag) => <option value={tag}>{tag}</option>}
            </For>
          </select>
        </div>
      </div>

      <div class="space-y-12">
        {/* Under Review Section */}
        {filteredUnderReview().length > 0 && (
          <section class="space-y-6">
            <h2 class="text-xl font-bold text-black dark:text-white flex items-center gap-2">
              <span class="w-1.5 h-6 bg-orange-500 rounded-full"></span>
              Under Review / Submitted
            </h2>
            <ul class="space-y-8">
              <For each={filteredUnderReview()}>
                {(pub) => (
                  <li class="group border-l-2 border-transparent hover:border-blue-500/30 pl-4 transition-all duration-300">
                    <div class="text-lg font-semibold text-black dark:text-white group-hover:text-blue-500 transition-colors">
                      {pub.title}
                    </div>
                    <div class="text-sm mt-1 italic opacity-80" innerHTML={pub.authors} />
                    <div class="text-sm mt-1 font-medium italic opacity-60">
                      {pub.journal} ({pub.year}) — <span class="text-orange-500 font-bold not-italic">Under Review</span>
                    </div>
                    <div class="flex flex-wrap gap-1.5 mt-3">
                      <For each={pub.tags}>
                        {(tag) => (
                          <span class="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded border border-black/5 dark:border-white/10 opacity-40 group-hover:opacity-100 transition-opacity">
                            {tag}
                          </span>
                        )}
                      </For>
                    </div>
                  </li>
                )}
              </For>
            </ul>
          </section>
        )}

        {/* Published Section */}
        <section class="space-y-12">
          <h2 class="text-xl font-bold text-black dark:text-white flex items-center gap-2">
            <span class="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            Published Articles
          </h2>
          
          <For each={publishedYears()}>
            {(year) => {
              const yearPubs = createMemo(() => filteredPublished().filter(p => p.year === year))
              return (
                <div class={yearPubs().length > 0 ? "space-y-6" : "hidden"}>
                  <h3 class="text-lg font-bold text-blue-500/80 border-b border-blue-500/10 pb-1">
                    {year}
                  </h3>
                  <ul class="space-y-8">
                    <For each={yearPubs()}>
                      {(pub) => (
                        <li class="group flex gap-4 border-l-2 border-transparent hover:border-blue-500/30 pl-2 transition-all duration-300">
                          <div class="text-xs font-mono opacity-20 mt-1.5 shrink-0 w-5">
                            {(props.published.indexOf(pub) + 1).toString().padStart(2, '0')}
                          </div>
                          <div class="w-full">
                            <div class="text-lg font-semibold text-black dark:text-white group-hover:text-blue-500 transition-colors">
                              {pub.title}
                            </div>
                            <div class="text-sm mt-1 italic opacity-80" innerHTML={pub.authors} />
                            <div class="text-sm mt-1 flex items-center gap-3">
                              <span class="font-medium text-xs opacity-75">{pub.journal}</span>
                              {pub.status && (
                                <span class="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-bold">
                                  {pub.status}
                                </span>
                              )}
                              {pub.pdfUrl && (
                                <a href={pub.pdfUrl} download={pdfFileName(pub.pdfUrl)} aria-label={`Download PDF: ${pub.title}`} class="text-[10px] bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded hover:bg-blue-500/20 transition-colors flex items-center gap-1 font-bold">
                                  PDF
                                </a>
                              )}
                            </div>
                            <div class="flex flex-wrap gap-1.5 mt-3">
                              <For each={pub.tags}>
                                {(tag) => (
                                  <span class="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded border border-black/5 dark:border-white/10 opacity-40 group-hover:opacity-100 transition-opacity">
                                    {tag}
                                  </span>
                                )}
                              </For>
                            </div>
                          </div>
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              )
            }}
          </For>
        </section>
      </div>
    </div>
  )
}
