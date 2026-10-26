import { useMemo, useState } from "react";
import { ArrowRight, MessageCircle, Search } from "lucide-react";
import { Accordion, Button, CtaBanner, PageHeader, Section, Seo, Tabs } from "@/components/common";
import { FAQ_CATEGORIES, faqs } from "@/data/faqs";
import { PATHS } from "@/routes/paths";

const ALL = { value: "all", label: "All" };

export default function Faq() {
  const [category, setCategory] = useState(ALL.value);
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter(
      (f) => (category === ALL.value || f.category === category) && (!q || `${f.q} ${f.a}`.toLowerCase().includes(q))
    );
  }, [category, query]);

  return (
    <>
      <Seo title="FAQ" description="Trusted, easy-to-understand answers about breast cancer, self-checks, screening, risk and treatment." />
      {/* <PageHeader
        crumb="FAQ"
        eyebrow="Frequently asked questions"
        title="Everything you"
        accent="need to know."
        lead="Clear, trusted answers to the questions people ask most about breast cancer, self-checks and screening. Can't find yours? Send us an email."
      /> */}

      <Section>
        <div className="mx-auto max-w-[880px]">
          {/* Search + category filter — centred */}
          <div className="mb-10 flex flex-col items-center gap-4">
            <label className="flex h-[52px] w-full max-w-[520px] items-center gap-2.5 rounded-full border border-line bg-white px-5 shadow-soft transition focus-within:border-pink focus-within:shadow-ring">
              <Search className="w-[18px] text-muted" aria-hidden="true" />
              <span className="sr-only">Search questions</span>
              <input
                type="search"
                placeholder="Search questions…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-ink outline-none"
              />
            </label>
            <Tabs tabs={[ALL, ...FAQ_CATEGORIES]} value={category} onChange={setCategory} label="FAQ category" className="mb-0 flex-wrap justify-center rounded-[22px]" />
          </div>

          {items.length ? (
            <div className="rounded-[26px] border border-line bg-white px-6 py-2 shadow-soft md:px-10">
              <Accordion key={`${category}-${query}`} items={items} className="[&>*:last-child]:border-b-0" />
            </div>
          ) : (
            <div className="py-10 text-center text-muted">
              <p>No questions match “{query}”.</p>
              <Button to={PATHS.CONTACT} icon={ArrowRight} className="mt-4">Ask us directly</Button>
            </div>
          )}

          {/* <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center text-[15px] text-muted">
            <MessageCircle className="w-[18px] text-pink" aria-hidden="true" />
            Still unsure? Our team is happy to help —
            <Button to={PATHS.CONTACT} variant="ghost" size="sm">Contact Pinoct</Button>
          </p> */}
        </div>
      </Section>

      <CtaBanner
        title="Still have a question?"
        accent="We're here to help."
        text="Email the Pinoct team — or take the first step towards early detection with the 5-step self-check today."
      />
    </>
  );
}
