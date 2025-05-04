import { Spotlight } from "@/components/ui/spotlight";
import { reader } from "@/lib/reader";
import { Section } from "@/components/layout/section";

export async function ExperienceSection() {
	const experiences = await reader.collections.experience.all();
	return (
		<Section>
			<h3 className="mb-5 text-lg font-medium">Experience</h3>
			<div className="flex flex-col space-y-2">
				{experiences.map((experience) => {
					const company = experience.entry.company ?? "";
					const title = experience.entry.title ?? "";
					const link = experience.entry.link ?? "";
					const start = experience.entry.start ?? "";
					const end = experience.entry.end ?? "";

					return (
						<a
							className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							key={experience.slug}
						>
							<Spotlight
								className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
								size={64}
							/>
							<div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
								<div className="relative flex w-full flex-row justify-between">
									<div>
										<h4 className="font-normal dark:text-zinc-100">{title}</h4>
										<p className="text-zinc-500 dark:text-zinc-400">
											{company}
										</p>
									</div>
									<p className="text-zinc-600 dark:text-zinc-400">
										{start} - {end}
									</p>
								</div>
							</div>
						</a>
					);
				})}
			</div>
		</Section>
	);
}
