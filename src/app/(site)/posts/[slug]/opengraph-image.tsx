import { ImageResponse } from 'next/og'
import { reader } from '@/lib/reader'

type Props = {
	params: Promise<{ slug: string }>
}

export const size = {
	width: 1200,
	height: 600,
}

export async function generateImageMetadata(props: Props) {
	const params = await props.params;
	const slug = params.slug;

	const post = await reader.collections.posts.read(slug)

	if (!post) {
		return {
			size,
			alt: 'Post not found',
		}
	}
	return [{
		size,
		alt: post.title,
		contentType: 'image/png',
	}]
}

export default async function Image(props: Props) {
	const params = await props.params;
	const slug = params.slug;

	const post = await reader.collections.posts.read(slug)

	if (!post) {
		return new ImageResponse(<div>Post not found</div>)
	}
	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: "#111903",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					opacity: 0.07,
				}}
			>
				{Array.from({ length: 120 }).map((_, i) => (
					<div
						key={i.toString()}
						style={{
							width: "5px",
							height: `${Math.sin(i * 0.2) * 100 + 500}px`,
							background: "#B0FC31",
							margin: "0 8px",
							borderRadius: "2px",
						}}
					/>
				))}
			</div>
			<div>
				<h1>{post.title}</h1>
			</div>
		</div>,
		{
			...size,
		},
	)
}