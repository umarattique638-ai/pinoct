export const FAQ_CATEGORIES = [
  { value: "basics", label: "The basics" },
  { value: "self-check", label: "Self-check" },
  { value: "screening", label: "Screening" },
  { value: "treatment", label: "Risk & treatment" },
];

export const faqs = [
  { category: "basics", q: "What is breast cancer?", a: "Breast cancer is a disease in which cells in the breast grow out of control. It usually starts in the milk ducts or the lobules (milk-producing glands). If not found and treated, it can spread to other parts of the body." },
  { category: "basics", q: "Can men get breast cancer?", a: "Yes. Around 1% of breast cancers occur in men. Men should also report any lump, nipple change or discharge to a doctor." },
  { category: "basics", q: "Is breast cancer always painful?", a: "No. Early breast cancer is often painless, which is why painless changes should still be checked and why screening matters." },
  { category: "self-check", q: "How often should I do a self-check?", a: "Once a month is a good habit. If you menstruate, a few days after your period ends is best, when breasts are least tender and swollen. If not, pick the same date every month." },
  { category: "self-check", q: "I found a lump. What should I do?", a: "Don't panic — most lumps are not cancer. But do book an appointment with a doctor soon, rather than waiting to see if it goes away. Your doctor may recommend an ultrasound, mammogram, or biopsy." },
  { category: "self-check", q: "Does a self-check replace a mammogram?", a: "No. Self-checks help you know your normal and notice changes, but mammograms can find cancers long before they can be felt. Use both." },
  { category: "screening", q: "What is a mammogram and does it hurt?", a: "A mammogram is a low-dose X-ray of the breast. The breast is pressed between two plates for a few seconds, which can be uncomfortable but is brief. The whole appointment usually takes about 20 minutes." },
  { category: "screening", q: "When should I start mammograms?", a: "For women at average risk, many guidelines now recommend discussing screening from age 40, with a mammogram every 1–2 years. Women at higher risk may need to start earlier. Guidelines differ between countries, so ask your doctor." },
  { category: "screening", q: "Should I get genetic testing?", a: "Genetic counselling and testing (e.g. for BRCA1/BRCA2) may be recommended if you have several close relatives with breast or ovarian cancer, a relative diagnosed young, or a known family mutation. Ask your doctor." },
  { category: "treatment", q: "Can I lower my risk?", a: "You can't change age or genes, but staying active, keeping a healthy weight, limiting alcohol, not smoking, and breastfeeding if you can are all linked to lower risk. Screening on schedule is the biggest step for early detection." },
  { category: "treatment", q: "What are the main treatment options?", a: "Treatment depends on the type and stage and may include surgery (lumpectomy or mastectomy), radiation therapy, chemotherapy, hormone therapy, targeted therapy and immunotherapy — often in combination." },
  { category: "treatment", q: "Is breast cancer curable?", a: "Many breast cancers are curable, especially when found early: the 5-year relative survival for cancer that hasn't spread beyond the breast is around 99%." },
];

/** A short, curated set for the home page. */
export const featuredFaqs = faqs.filter((f) =>
  ["What is breast cancer?", "How often should I do a self-check?", "I found a lump. What should I do?", "When should I start mammograms?", "Can men get breast cancer?"].includes(f.q)
);
