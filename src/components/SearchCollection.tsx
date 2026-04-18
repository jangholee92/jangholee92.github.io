import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, onMount } from "solid-js"
import Fuse from "fuse.js"
import ArrowCard from "@components/ArrowCard"
import SearchBar from "@components/SearchBar"

type Props = {
  entry_name: string
  data: CollectionEntry<"news">[] | CollectionEntry<'projects'>[]
}

export default function SearchCollection({ entry_name, data }: Props) {
  const coerced = data.map((entry) => entry as CollectionEntry<'news'>);

  const [query, setQuery] = createSignal("");
  const [collection, setCollection] = createSignal<CollectionEntry<'news'>[]>([])
  const [descending, setDescending] = createSignal(false);

  const fuse = new Fuse(coerced, {
    keys: ["slug", "data.title", "data.summary"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  })

  createEffect(() => {
    const filtered = query().length < 2
      ? coerced
      : fuse.search(query()).map((result) => result.item);
    
    setCollection(descending() ? filtered.toReversed() : filtered)
  })

  function toggleDescending() {
    setDescending(!descending())
  }

  const onSearchInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setQuery(target.value)
  }

  onMount(() => {
    const wrapper = document.getElementById("search-collection-wrapper");
    if (wrapper) {
      wrapper.style.minHeight = "unset";
    }
  })

  return (
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <SearchBar onSearchInput={onSearchInput} query={query} setQuery={setQuery} placeholderText={`Search ${entry_name}`} />
        
        <div class="flex justify-between items-center w-full sm:w-auto gap-4">
          <div class="text-xs uppercase opacity-60">
            {collection().length} OF {data.length} {entry_name}
          </div>
          <button onClick={toggleDescending} class='flex items-center gap-1 text-xs uppercase opacity-60 hover:opacity-100 transition-opacity'>
            {descending() ? "DESCENDING" : "ASCENDING"}
            <svg class="size-4">
              <use href={`/ui.svg#sort-descending`} class={descending() ? "block" : "hidden"}></use>
              <use href={`/ui.svg#sort-ascending`} class={descending() ? "hidden" : "block"}></use>
            </svg>
          </button>
        </div>
      </div>

      <ul class="flex flex-col gap-3">
        {collection().map((entry) => (
          <li>
            <ArrowCard entry={entry} />
          </li>
        ))}
      </ul>
    </div>
  )
}
