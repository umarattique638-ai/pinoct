import { createContext, useContext } from "react";

/** "default" | "tint" | "dark" — lets children (headers, eyebrows) adapt their colours. */
export const SectionToneContext = createContext("default");
export const useSectionTone = () => useContext(SectionToneContext);
