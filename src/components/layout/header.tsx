import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";
export function Header() {
	return (
		<header className="flex items-center justify-between">
			<div>
				<Link href="/" className="font-medium">
					Cécé Lucien Loua
				</Link>
				<TextEffect
					as="p"
					preset="fade"
					per="char"
					className="text-muted-foreground"
					delay={0.5}
				>
					Web Interface Designer
				</TextEffect>
			</div>
		</header>
	);
}