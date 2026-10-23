export const screening = [
  {
    age: "20s – 30s",
    title: "Build breast awareness",
    points: ["Know your normal and report changes", "Clinical breast exam during routine check-ups", "Learn your family history"],
    tone: "soft",
  },
  {
    age: "40 – 49",
    title: "Start the conversation",
    points: ["Talk to your doctor about starting mammograms", "Many guidelines now recommend starting at 40", "Screening every 1–2 years"],
    tone: "mid",
  },
  {
    age: "50 – 74",
    title: "Regular mammograms",
    points: ["Mammogram every 1–2 years", "This is when most cases are diagnosed", "Keep reporting any changes in between"],
    tone: "strong",
  },
  {
    age: "75+",
    title: "Personalised decision",
    points: ["Decide with your doctor based on health", "Continue breast awareness", "Don't ignore new symptoms"],
    tone: "mid",
  },
];

export const screeningMethods = [
  { icon: "ScanLine", title: "Mammogram", text: "A low-dose X-ray of the breast. The main screening test for women of average risk — it can find cancers too small to feel.", tag: "Main screening test" },
  { icon: "Waves", title: "Breast ultrasound", text: "Uses sound waves, no radiation. Often used to look more closely at a lump or at dense breast tissue after a mammogram.", tag: "Follow-up / dense breasts" },
  { icon: "Magnet", title: "Breast MRI", text: "Uses magnets and contrast dye. Recommended together with mammograms for some women at high risk, such as BRCA carriers.", tag: "High risk" },
  { icon: "Stethoscope", title: "Clinical breast exam", text: "A doctor or nurse checks your breasts and underarms by look and touch, usually during a routine check-up.", tag: "Routine check-ups" },
];

export const mammogramSteps = [
  { title: "Before", text: "Book a week after your period if you still menstruate. On the day, skip deodorant, powder or lotion under the arms — they can show up on the X-ray." },
  { title: "During", text: "A technologist places each breast on a plate and gently compresses it for a few seconds per image. It can be uncomfortable, but it is brief." },
  { title: "After", text: "The whole visit usually takes about 20 minutes and you can go straight back to normal activities." },
  { title: "Results", text: "A radiologist reviews the images. Being called back for more pictures is common and usually does not mean cancer." },
];
