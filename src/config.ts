export const CATEGORY_ORDER = [
  { id: "layout", label: "Layout" },
  { id: "flexGrid", label: "Flex & Grid" },
  { id: "size", label: "Size" },
  { id: "spacing", label: "Spacing" },
  { id: "border", label: "Border" },
  { id: "background", label: "Background" },
  { id: "typography", label: "Text" },
  { id: "effects", label: "Effects" },
  { id: "transform", label: "Transforms" },
  { id: "transition", label: "Transitions" },
  { id: "interactivity", label: "Interactivity" },
  { id: "other", label: "Other" }
] as const;

export type CategoryId = (typeof CATEGORY_ORDER)[number]["id"];

export const CATEGORY_RULES: Record<CategoryId, RegExp[]> = {
  layout: [
    /^(absolute|relative|fixed|sticky)$/,
    /^(top|right|bottom|left|inset)-/,
    /^z-/,
    /^(block|inline|inline-block|contents|hidden)$/
  ],
  flexGrid: [
    /^flex(-.*)?$/,
    /^inline-flex$/,
    /^grid(-.*)?$/,
    /^inline-grid$/,
    /^(place|items|justify|content|self)-/,
    /^gap-/,
    /^(col|row)-span-/,
    /^auto-cols-/,
    /^auto-rows-/
  ],
  size: [/^(w|h|min-w|max-w|min-h|max-h|size)-/, /^aspect-/],
  spacing: [/^-?m[trblxy]?-/, /^-?p[trblxy]?-/, /^space-[xy]-/, /^gap-/],
  border: [/^border(-.*)?$/, /^rounded(-.*)?$/, /^divide-/, /^ring-/],
  background: [/^bg-/, /^(from|via|to)-/, /^fill-/, /^stroke-/],
  typography: [
    /^text-/,
    /^font-/,
    /^leading-/,
    /^tracking-/,
    /^whitespace-/,
    /^break-/,
    /^list-/,
    /^placeholder:/
  ],
  effects: [/^shadow-/, /^drop-shadow-/, /^blur/, /^backdrop-/, /^opacity-/, /^mix-blend-/],
  transform: [/^transform$/, /^origin-/, /^scale-/, /^rotate-/, /^translate-/, /^skew-/],
  transition: [/^transition/, /^duration-/, /^ease-/, /^animate-/],
  interactivity: [/^cursor-/, /^select-/, /^pointer-events-/, /^resize-/, /^scroll-/, /^snap-/],
  other: []
};

export const SORT_RULES: Partial<Record<CategoryId, RegExp[]>> = {
  flexGrid: [
    /^flex$/,
    /^inline-flex$/,
    /^grid$/,
    /^inline-grid$/,
    /^flex-(row|col|wrap|nowrap|row-reverse|col-reverse)/,
    /^flex-/,
    /^(items|content|justify|place|self)-/,
    /^gap-/,
    /^(col|row)-span-/,
    /^auto-cols-/,
    /^auto-rows-/
  ],
  spacing: [/^-?m[trblxy]?/, /^-?p[trblxy]?/, /^space-[xy]-/, /^gap-/]
};

// Minimum class tokens required before Windly reformats a value.
export const CLASS_TOKEN_THRESHOLD = 10;
// Long single-token values (like gradients) should still be wrapped even if there are
// fewer than CLASS_TOKEN_THRESHOLD tokens.
export const CLASS_LENGTH_THRESHOLD = 120;

// Languages where Tailwind class formatting makes sense.
export const SUPPORTED_LANGUAGE_IDS = new Set([
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact",
  "html",
  "vue",
  "svelte",
  "astro"
]);
