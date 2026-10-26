export const signs = [
  { icon: "CircleDot", title: "New lump", text: "A lump or hard knot in the breast or underarm area." },
  { icon: "Waves", title: "Thickening or swelling", text: "Thickening or swelling of part of the breast." },
  { icon: "Grip", title: "Skin dimpling", text: "Dimpling or puckering of the skin, sometimes like orange peel." },
  { icon: "Flame", title: "Redness or flaking", text: "Redness, scaling or flaky skin on the nipple or breast." },
  // { icon: "ArrowDownToDot", title: "Inverted nipple", text: "Pulling in of the nipple, or pain in the nipple area." },
  // { icon: "Droplet", title: "Nipple discharge", text: "Discharge other than breast milk, including blood." },
  // { icon: "Scaling", title: "Size or shape change", text: "Any change in the size or the shape of the breast." },
  // { icon: "Zap", title: "Persistent pain", text: "Pain in any area of the breast that does not go away." },

];

export const risks = {
  fixed: [
    { title: "Getting older", text: "Most breast cancers are diagnosed after age 50.", level: 3 },
    { title: "Genetic mutations", text: "Inherited changes in genes such as BRCA1 and BRCA2 raise risk significantly.", level: 3 },
    { title: "Family history", text: "A mother, sister or daughter with breast or ovarian cancer increases risk.", level: 3 },
    { title: "Dense breast tissue", text: "Dense breasts have more connective tissue and can make tumours harder to see on a mammogram.", level: 2 },
    { title: "Reproductive history", text: "Periods starting before 12 or menopause after 55 means longer hormone exposure.", level: 1 },
    { title: "Previous radiation", text: "Radiation therapy to the chest or breasts before age 30.", level: 2 },
  ],
  changeable: [
    { title: "Physical inactivity", text: "Regular activity — ~150 minutes a week — is linked to lower risk.", level: 2 },
    { title: "Weight after menopause", text: "Higher body weight after menopause is associated with higher risk.", level: 2 },
    { title: "Alcohol", text: "Risk rises with the amount of alcohol consumed.", level: 2 },
    { title: "Hormone therapy", text: "Some forms of hormone replacement therapy taken during menopause.", level: 1 },
    { title: "Reproductive choices", text: "First pregnancy after 30, not breastfeeding, or never having a full-term pregnancy.", level: 1 },
    { title: "Smoking", text: "Tobacco use is linked to many cancers, including breast cancer.", level: 1 },
  ],
};

export const stages = [
  { n: "0", name: "In situ", text: "Abnormal cells are contained inside the milk duct (DCIS) and have not spread into surrounding tissue. Highly treatable.", group: "Localized", survival: ">99%", pct: 99 },
  { n: "I", name: "Early", text: "A small tumour (up to about 2 cm) with no, or only microscopic, spread to nearby lymph nodes.", group: "Localized", survival: "~99%", pct: 99 },
  { n: "II", name: "Growing", text: "The tumour is larger, or has spread to a few lymph nodes under the arm.", group: "Localized / Regional", survival: "86–99%", pct: 92 },
  { n: "III", name: "Regional", text: "Cancer has spread to more lymph nodes, or to the chest wall or the skin of the breast.", group: "Regional", survival: "~86%", pct: 86 },
  { n: "IV", name: "Metastatic", text: "Cancer has spread to distant organs such as bones, lungs, liver or brain. Treatment focuses on control and quality of life.", group: "Distant", survival: "~32%", pct: 32 },
];

export const myths = [
  ["Only women with a family history get breast cancer.", "Most people diagnosed (about 85%) have no family history of the disease."],
  ["A lump always means cancer.", "Most breast lumps are benign (like cysts or fibroadenomas) — but every new lump should be checked."],
  ["Men can't get breast cancer.", "Men have breast tissue too. About 1 in 100 breast cancers is found in a man."],
  ["Young women don't need to worry.", "Risk rises with age, but breast cancer can occur in your 20s and 30s. Know your normal at any age."],
  ["Mammograms cause cancer to spread.", "A mammogram uses a very low dose of radiation and the compression does not spread cancer."],
  ["Deodorants and underwire bras cause it.", "There is no scientific evidence linking antiperspirants or bras to breast cancer."],
  ["If it doesn't hurt, it's not serious.", "Breast cancer is often painless in early stages. Painless changes should still be checked."],
  ["Breast cancer is a death sentence.", "Found early, the 5-year survival rate is around 99%. Treatment has improved enormously."],
];
