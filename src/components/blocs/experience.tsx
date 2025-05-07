import { reader } from "@/lib/reader";
import { Section } from "@/components/layout/section";
import { formatDateRange } from "@/lib/date";

export async function ExperienceSection() {
	const experiences = await reader().collections.experience.all();
	return (
		<Section>
			<h3 className="mb-3 text-lg font-medium">Experiences</h3>
			<div className="flex flex-col space-y-2">
				{experiences.map((experience) => {
					const company = experience.entry.company ?? "";
					const title = experience.entry.title ?? "";
					const link = experience.entry.link ?? "";
					const dateRange = formatDateRange(
						experience.entry.start,
						experience.entry.end,
						experience.entry.isPresent ?? false
					);

					return (
						<a
							className="rounded-2xl bg-card ring-1 ring-border ring-inset hover:bg-accent transition-colors"
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							key={experience.slug}
						>
							<div className="relative h-full w-full p-3">
								<dl className="flex flex-col sm:flex-row justify-between">
									<div>
										<h4 className="font-medium">{title}</h4>
										<dd className="text-muted-foreground">{company}</dd>
									</div>
									<dd className="text-muted-foreground text-sm">
										{dateRange}
									</dd>
								</dl>
							</div>
						</a>
					);
				})}
			</div>
		</Section>
	);
}
