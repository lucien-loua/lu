import { MAIN_URL } from "@/lib/contant";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/keystatic/",
		},
		sitemap: `${MAIN_URL}/sitemap.xml`,
	};
}
