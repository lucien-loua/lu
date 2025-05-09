import {
	CodeBlock,
	SandBox,
	Snippet,
	IphoneBlock,
	SafariBlock,
	AndroidBlock,
	VideoBlock,
	ImageBlock,
} from '@/modules/keystatic/blocs';
import { collection, fields } from '@keystatic/core';

export const posts = collection({
	label: 'Posts',
	slugField: 'title',
	path: 'src/contents/posts/*',
	format: { contentField: 'content' },
	previewUrl: `/posts/{slug}`,
	schema: {
		title: fields.slug({ name: { label: 'Title' } }),
		description: fields.text({
			label: "Description",
			multiline: true,
		}),
		content: fields.markdoc({
			label: 'Content',
			components: {
				SandBox,
				Snippet,
				CodeBlock,
				IphoneBlock,
				AndroidBlock,
				SafariBlock,
				VideoBlock,
				ImageBlock,
			}
		}),
	},
})
