import { PostsSection } from '@/components/page/blocks/posts.section';
import { PageLayout } from '@/components/layout/page';
import { ExperienceSection } from '@/components/page/blocks/experience.section';
import { IntroSection } from '@/components/page/blocks/intro.section';
import { ProjectsSection } from '@/components/page/blocks/projects.section';
import { ContactSection } from '@/components/page/blocks/contact.section';

export default function Homepage() {
  return (
    <PageLayout>
      <IntroSection />
      <ProjectsSection />
      <ExperienceSection />
      <PostsSection />
      <ContactSection />
    </PageLayout>
  );
}
