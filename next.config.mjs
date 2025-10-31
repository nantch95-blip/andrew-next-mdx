// next.config.mjs
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      [remarkFootnotes, { inlineNotes: true }],
    ],
  },
});

const nextConfig = {
  // Turn OFF mdxRs so remark/rehype plugins run
  experimental: { mdxRs: false },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
