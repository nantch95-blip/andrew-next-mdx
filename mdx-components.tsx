// mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import React from 'react';

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // Headings = serif, tighter spacing up top
    h1: (p: any) => <h1 {...p} className={cx("font-serif text-3xl md:text-4xl font-semibold mt-6 mb-3", p.className)} />,
    h2: (p: any) => <h2 {...p} className={cx("font-serif text-2xl font-semibold mt-6 mb-2", p.className)} />,
    h3: (p: any) => <h3 {...p} className={cx("font-serif text-xl font-semibold mt-5 mb-2", p.className)} />,

    // Body = serif, relaxed leading + roomier paragraphs
    p:  (p: any) => <p  {...p} className={cx("font-serif text-[1.05rem] leading-loose my-5 text-neutral-900", p.className)} />,

    a:  (p: any) => <a  {...p} className={cx("underline underline-offset-2 hover:opacity-80", p.className)} />,
    ul: (p: any) => <ul {...p} className={cx("list-disc pl-6 my-4 space-y-1.5", p.className)} />,
    ol: (p: any) => <ol {...p} className={cx("list-decimal pl-6 my-4 space-y-1.5", p.className)} />,
    li: (p: any) => <li {...p} className={cx("leading-relaxed", p.className)} />,
    blockquote: (p: any) => <blockquote {...p} className={cx("border-l-4 pl-4 italic text-neutral-700 my-5", p.className)} />,
    hr: (p: any) => <hr {...p} className={cx("my-8 border-neutral-200", p.className)} />,
    code: (p: any) => <code {...p} className={cx("px-1.5 py-0.5 rounded bg-neutral-100", p.className)} />,
    pre: (p: any) => <pre  {...p} className={cx("p-4 rounded-lg bg-neutral-900 text-neutral-100 overflow-x-auto my-5", p.className)} />,
    img: (p: any) => <img  {...p} className={cx("my-5 rounded-lg", p.className)} />,

 

    // Optional: nicer details/summary
    details: (props: any) => (
      <details {...props} className={cx("my-4 rounded-xl border bg-white/60 p-4 open:shadow-sm", props.className)} />
    ),
    summary: (props: any) => (
      <summary {...props} className={cx("cursor-pointer select-none font-medium list-none flex items-center justify-between", props.className)} />
    ),

  };
}
