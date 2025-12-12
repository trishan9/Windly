# Windly

Windly - a modern, minimalistic approach to managing Tailwind classes. It keeps long `class` and `className` values readable by grouping utilities by intent and formatting them into tidy multiline blocks.

## What it does

- Groups Tailwind tokens into logical buckets (layout, flex/grid, spacing, border, background, text, effects, transforms, transitions, interactivity, other).
- Sorts related flex/grid and spacing utilities so important primitives (like `flex`) lead the group.
- Works on every `class`/`className` attribute inside your selection, so parents and children are formatted in one run.
- React/JSX uses `clsx()` by default for cleaner conditionals; plain HTML stays as multiline strings. Already-formatted `clsx()` blocks are left untouched.
- Skips short class lists; by default, only values with 10 or more utilities are regrouped to avoid noisy diffs.
- Only runs in common Tailwind authoring languages (JS/TS, React, HTML, Vue, Svelte, Astro) and ignores other files like CSS/Markdown.

## Usage

1. Select a Tailwind class string or any block of markup/JSX containing `class`/`className` attributes.
2. Run **Windly: Group Tailwind Classes** from the Command Palette (Ctrl + Shift + P) or bind a shortcut.
3. Windly rewrites the selection into grouped, multiline output.

<img src="https://github.com/trishan9/Github_Assets/raw/main/Windly-Demo.gif"/>

### Configuration

- `windly.preferClsxWrapper` (default: `true`): For JSX, keep classes inside `clsx()`. For HTML, leave as multiline strings. (Legacy `twSense.preferClsxWrapper` is still read if present.)

### clsx helper

Windly prompts to install `clsx` when your selection outputs a `clsx()` call. It auto-detects npm, pnpm, yarn, or bun lockfiles and runs the matching install command in a terminal.

## Examples

**Input**

```jsx
<select className="border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed" />
```

**Output**

```jsx
<select
  className={clsx(
    "h-9 min-w-0 w-full",
    "pr-9 px-3 py-2",
    "border border-input rounded-md",
    "bg-transparent dark:bg-input/30 dark:hover:bg-input/50 selection:bg-primary",
    "placeholder:text-muted-foreground selection:text-primary-foreground text-sm",
    "shadow-xs",
    "transition-[color,box-shadow]",
    "disabled:cursor-not-allowed disabled:pointer-events-none",
    "appearance-none outline-none"
  )}
/>
```

### Real-world snippet

The `examples/` folder contains heavier fixtures. A trimmed sample:

```jsx
// before
className="inline-flex items-center justify-center gap-3 rounded-2xl border border-cyan-400/60 bg-cyan-400 text-slate-950 px-6 py-4 text-base font-semibold shadow-[0_20px_80px_-40px_rgba(34,211,238,0.9)] hover:-translate-y-1 transition-transform duration-200"

// after (Windly)
className={clsx(
  "inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold",
  "rounded-2xl border border-cyan-400/60",
  "bg-cyan-400 text-slate-950",
  "shadow-[0_20px_80px_-40px_rgba(34,211,238,0.9)] transition-transform duration-200 hover:-translate-y-1"
)}
```

See `examples/before.tsx` and `examples/after.tsx` for full code examples.

## License

MIT
