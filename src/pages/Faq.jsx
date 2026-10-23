import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
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
      <Seo title="FAQ" description="Answers to common questions about breast cancer, self-checks, mammograms, risk and treatment." />
      <PageHeader
        crumb="FAQ"
        eyebrow="Frequently asked questions"
        title="Everything you"
        accent="need to know."
        lead="Clear answers to the questions people ask most. Can't find yours? Send us a message."
      />

      <Section>
        <div className="faq-toolbar">
          <Tabs tabs={[ALL, ...FAQ_CATEGORIES]} value={category} onChange={setCategory} label="FAQ category" />
          <label className="faq-search">
            <Search aria-hidden="true" />
            <span className="sr-only">Search questions</span>
            <input type="search" placeholder="Search questions…" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
        </div>

        <div className="faq-list">
          {items.length ? (
            <Accordion key={`${category}-${query}`} items={items} />
          ) : (
            <div className="empty">
              <p>No questions match “{query}”.</p>
              <Button to={PATHS.CONTACT} icon={ArrowRight}>Ask us directly</Button>
            </div>
          )}
        </div>
      </Section>

      <CtaBanner title="Still have a question?" accent="We're here to help." text="Send the Pinoct team a message, or start with the 5-step self-check today." />
    </>
  );
}
