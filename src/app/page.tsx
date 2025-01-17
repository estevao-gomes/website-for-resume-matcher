import { CalltoAction } from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { Features2 } from "@/components/Features2";
import Image from "next/image";

function Title() {
  return (
    <>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-600 to-blue-700">
        Resume <br className="block sm:hidden" />
        <span className="sm:whitespace-nowrap">Matcher</span>
      </span>
    </>
  );
}

function Subtitle() {
  return (
    <>
      Ready to take your job search to the next level 🚀 Give Resume Matcher a
      try today and see the difference it can make!
    </>
  );
}
export default function Home() {
  return (
    <main>
      <Features
        highlight="Goal"
        title="Our Mission"
        subtitle="Our goal is to empower developers with a deeper understanding of their resumes and skill sets. By comparing your resume to a range of job descriptions, we highlight the similarities and differences, enabling you to make informed, data-driven decisions."
        items={[
          [
            {
              title: 'Natural Language Processing',
              description:
                'We leverage state-of-the-art natural language processing techniques to extract and comprehend the context of resumes and job descriptions. This technology allows us to provide you with precise and meaningful insights.',
              icon: 'mdi:check-decagram',
            },
            {
              title: 'Vector Similarity - Upcoming Feature',
              description:
                'In our continuous effort to enhance your experience, we are planning to incorporate Weaviate Vector Database, Qdrant Vector Search, and Milvus support into our project. These additions will further refine our ability to match your resume with job descriptions.',
              icon: 'mdi:arrow-collapse',
            },
            {
              title: 'Data Visualization',
              description:
                'We believe in the power of data. Our platform generates comprehensive data visualizations, enabling you to make decisions based on concrete information rather than mere heuristics.',
              icon: 'mdi:chart-donut',
            },
          ],
          [
            {
              title: 'User-Friendly Interface',
              description:
                'We understand the importance of a seamless user experience. Our web page is designed to be intuitive and user-friendly, allowing you to interact with the project with ease.',
              icon: 'mdi:web',
            },
            {
              title: 'Text Similarity',
              description:
                'Our text similarity feature provides a detailed comparison between your resume and job descriptions. This feature helps you identify the areas where your resume aligns with the job requirements and where it needs improvement.',
              icon: 'mdi:format-list-text',
            },
            {
              title: 'Python-Based',
              description:
                'Our project is currently written in Python, a powerful and versatile programming language known for its readability and efficiency.',
              icon: 'mdi:language-python',
            },
          ],
        ]}
      />
      <Features2
        title="Join the Innovation"
        subtitle="Resume Matcher, a free open-source project, is built by developers for developers. We aim to simplify resume creation and invite innovative ideas to accelerate job searches. Your unique contributions are always welcome!"
        highlight="Open to ideas"
        items={[
          {
            title: 'Leverage Large Language Models (LLMs)',
            description:
              'With the rise of LLMs, generating resumes has become significantly easier. If you have expertise in this area, you could help us integrate LLMs into our platform. ',
            icon: 'flat-color-icons:radar-plot',
          },
          {
            title: 'Develop a User-Friendly Front-End',
            description:
              "A streamlined, intuitive dashboard can greatly enhance the user experience. If you're skilled in front-end development, particularly with frameworks like React or Vue, you could help us create a more user-friendly interface.",
            icon: 'flat-color-icons:gallery',
          },
          {
            title: 'Create a Docker Image',
            description:
              "Docker images can simplify the deployment process, making it easier for users to try and use our project. If you're familiar with Docker, you could help us create a Docker image for ResumeMatcher.",
            icon: 'flat-color-icons:command-line',
          },
          {
            title: 'Enhance Data Visualization',
            description:
              'Data visualization is key to helping users understand the insights we provide. If you have a knack for creating clear, compelling data visualizations, your skills could greatly enhance our platform.',
            icon: 'flat-color-icons:combo-chart',
          },
          {
            title: 'Improve Text Similarity Algorithms',
            description:
              'Our text similarity feature is central to our tool. If you have expertise in natural language processing or machine learning, you could help us refine our text similarity algorithms, making our insights even more precise and valuable.',
            icon: 'flat-color-icons:statistics',
          },
          {
            title: 'Expand Language Support',
            description:
              "To make our tool accessible to as many users as possible, we aim to support multiple languages.  If you're multilingual and have experience in localization, you could help us expand our language support.",
            icon: 'flat-color-icons:voice-presentation',
          },
          {
            title: 'Improve Documentation',
            description:
              'Good documentation is crucial for any open-source project. If you have a knack for clear, concise writing, you could help us improve our documentation. This would make it easier for new contributors to understand our project and get involved.',
            icon: 'flat-color-icons:document',
          },
          {
            title: 'Enhance UI/UX Design',
            description:
              'The user interface and user experience (UI/UX) are key to making our tool accessible and enjoyable to use. If you have skills in UI/UX design, you could help us make our landing page and overall platform more intuitive and visually appealing.',
            icon: 'flat-color-icons:close-up-mode',
          },
          {
            title: 'Remember',
            description:
              ' We welcome all ideas that can enhance Resume Matcher and help users land their dream jobs faster. Join us in revolutionizing the job search process!',
            icon: 'flat-color-icons:rating',
          },
        ]}
      />
      <CalltoAction
        callToAction={{
          text: "GitHub",
          href: "https://github.com/srbhr/Resume-Matcher/",
          icon: "mdi:github",
        }}
        subtitle={<Subtitle />}
        title={<Title />}
      />
    </main>
  );
}
