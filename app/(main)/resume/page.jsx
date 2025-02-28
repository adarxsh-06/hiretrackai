
// import dynamic from "next/dynamic";
import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/ResumeBuilder";

// import dynamic from "next/dynamic";

// const ResumeBuilder = dynamic(() => import("./_components/ResumeBuilder"), {
//   ssr: false,
// });

  
export default async function ResumePage() {
  const resume = await getResume();

  return (
    <div className="container mx-auto py-6">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
}