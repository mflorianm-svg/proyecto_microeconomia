import pdfUrl from './assets/document.pdf';
import videoUrl from './assets/video.mp4';
import HeaderSection from './components/HeaderSection';
import HeroSection from './components/HeroSection';
import MembersSection from './components/MembersSection';
import PDFViewer from './components/PDFViewer';
import ProjectOverview from './components/ProjectOverview';
import VideoPlayer from './components/VideoPlayer';
import { members } from './data/members';
import { projectData } from './data/projectData';

export default function App() {
  return (
    <div className="bg-page-bg text-text-primary min-h-screen font-sans">
      {/* Sticky navigation header */}
      <HeaderSection data={projectData} />

      {/* Main content */}
      <main className="max-w-content mx-auto bg-body-bg">
        {/* Hero — project identity */}
        <HeroSection data={projectData} />

        <hr className="border-t border-neutral-divider mx-4 md:mx-8" />

        {/* Project overview / synthesis */}
        <ProjectOverview />

        <hr className="border-t border-neutral-divider mx-4 md:mx-8" />

        {/* Document viewer */}
        <PDFViewer pdfUrl={pdfUrl} documentTitle={projectData.topic} />

        <hr className="border-t border-neutral-divider mx-4 md:mx-8" />

        {/* Explanatory video */}
        <VideoPlayer videoUrl={videoUrl} title={`Video Explicativo: ${projectData.topic}`} />

        <hr className="border-t border-neutral-divider mx-4 md:mx-8" />

        {/* Group members */}
        <MembersSection members={members} />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-divider mt-8">
        <div className="max-w-content mx-auto px-4 md:px-8 py-6">
          <p className="font-sans text-sm text-text-muted text-center">
            {projectData.institution} — {projectData.period}
          </p>
        </div>
      </footer>
    </div>
  );
}
