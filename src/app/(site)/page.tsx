import { PostsSection } from '@/components/blocs/posts';
import { PageLayout } from '@/components/layout/page';
import { ExperienceSection } from '@/components/blocs/experience';
import { IntroSection } from '@/components/blocs/intro';
import { ProjectsSection } from '@/components/blocs/projects';
import { ContactSection } from '@/components/blocs/contact';

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
