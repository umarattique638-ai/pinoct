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
      <Seo title="FAQ" description="Trusted, easy-to-understand answers about breast cancer, self-checks, screening, risk and treatment." />
      <PageHeader
        crumb="FAQ"
        eyebrow="Frequently asked questions"
        title="Everything you"
        accent="need to know."
        lead="Clear, trusted answers to the questions people ask most about breast cancer, self-checks and screening. Can't find yours? Reach us on WhatsApp or email."
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

      <CtaBanner title="Still have a question?" accent="We're here to help." text="Reach the Pinoct team on WhatsApp or email — or take the first step towards early detection with the 5-step self-check today." />
    </>
  );
}
