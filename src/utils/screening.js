/**
 * General, non-diagnostic screening guidance for an average-risk woman.
 * Mirrors the public guidance shown on the Screening page.
 */
export function getScreeningAdvice(age, hasFamilyHistory = false) {
  const a = Number(age);
  if (!age || Number.isNaN(a) || a < 10 || a > 120) return null;

  let advice;
  if (a < 40) advice = { title: "Focus on breast awareness", text: "Do a monthly self-check and have a clinical breast exam at routine check-ups." };
  else if (a < 50) advice = { title: "Talk to your doctor about mammograms", text: "Many guidelines recommend starting screening mammograms at 40, every 1–2 years." };
  else if (a < 75) advice = { title: "Mammogram every 1–2 years", text: "This is the age group where screening has the strongest evidence of saving lives." };
  else advice = { title: "Personalised screening", text: "Decide with your doctor whether to continue, based on your overall health." };

  if (hasFamilyHistory) {
    advice.text += " Because of your family history, ask about starting earlier, genetic counselling, or additional imaging.";
  }
  return advice;
}
