import solid from "solid-start/vite"
import { type PluginOption, defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import remarkFrontmatter from "remark-frontmatter"

export default defineConfig({
	plugins: [
		{
			...mdx({
				jsx: true,
				jsxImportSource: "solid-js",
				providerImportSource: "solid-mdx",
				remarkPlugins: [remarkFrontmatter],
			}),
			enforce: "pre",
		} as PluginOption,
		solid({
			extensions: [".mdx", ".md"],
			routesDir: "../content",
		}),
	],
})
