import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";

const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="pt-pt-10 max-w-5xl mx-auto px-6 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">About</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Ex - Senior Data & Machine Learning Engineer, Building Generative AI solutions (Language Model, RAG, and Computer Vision).
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-6 px-5 py-2 border rounded-md flex items-center gap-2 hover:bg-gray-100"
      >
        {expanded ? (
          <>
            <ChevronUp size={20} /> Show Less
          </>
        ) : (
          <>
            <ChevronDown size={20} /> More About Me
          </>
        )}
      </button>

      {expanded && (
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-in fade-in slide-in-from-bottom duration-500 mt-6">
          {/* Journey */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 inline-block pb-1">
              My Journey in AI
            </h3>
            <p className="text-gray-700 leading-relaxed">
              My fascination with AI began during my early undergraduate years when I first explored the intersection of 
              computer vision and natural language processing. What started as curiosity quickly evolved into a passion 
              for building practical AI solutions that solve real-world problems.
            </p>
          </section>

          {/* Vision-Language */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 inline-block pb-1">
              The Vision-Language Connection
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              I've always been intrigued by how machines can understand and interpret visual and textual information 
              simultaneously. This interest led me to specialize in <strong>Vision-Language Models (VLMs)</strong>, 
              exploring how these multimodal systems can transform industries from healthcare documentation to 
              creative content generation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My work at the <strong>Indian Institute of Science</strong> provided me with a strong research foundation, 
              allowing me to experiment with cutting-edge approaches to multimodal learning and representation. 
              The experience of working in a top-tier research environment shaped my understanding of what makes 
              AI systems robust and useful in practical settings.
            </p>
          </section>

          {/* Language Tech */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 inline-block pb-1">
              Language Technology for Everyone
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              One of my proudest achievements has been contributing to the development of language technologies for 
              under-resourced languages. With <strong>Ambari-7b</strong>, we created one of India’s first bilingual LLMs 
              with strong performance in Kannada, demonstrating that language technology shouldn't be limited to just 
              globally dominant languages.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This project taught me the importance of data curation, tokenization strategies specific to 
              morphologically rich languages, and efficient fine-tuning techniques when working with limited 
              computational resources.
            </p>
          </section>

          {/* Research to Production */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 inline-block pb-1">
              From Research to Production
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              My philosophy is that AI research should translate into real-world impact. At <strong>Cognitivelab</strong>, 
              I've had the opportunity to bridge this gap by developing <strong>Cognitune</strong>, a platform that makes 
              LLM deployment and fine-tuning accessible to organizations without specialized ML infrastructure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Working with enterprise clients has given me valuable insights into the challenges of deploying AI in 
              production environments — from monitoring and evaluation to addressing specific business requirements 
              and scale concerns.
            </p>
          </section>

          {/* Technical Approach */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 inline-block pb-1">
              Technical Approach
            </h3>
            <p className="text-gray-700 mb-3">I believe in pragmatic AI development:</p>
            <ul className="space-y-2 text-gray-700 ml-5">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Understanding the fundamentals:</strong> Strong theoretical knowledge helps make better architectural decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Data-centric mindset:</strong> Great models start with great data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Efficient implementation:</strong> Optimizing for both performance and computational efficiency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Continuous evaluation:</strong> Rigorous testing against diverse metrics and real-world scenarios</span>
              </li>
            </ul>
          </section>

          {/* Current Focus */}
          <div className=" p-6 rounded-xl border-l-4 border-blue-600 mb-8">
            <p className="text-gray-800 italic font-medium">
              <strong>Current Focus:</strong> Building efficient multimodal agents, exploring parameter-efficient 
              fine-tuning methods, and creating deployment pipelines that balance performance with resource constraints.
            </p>
          </div>

          {/* Close Button */}
          <div className="text-center">
            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
            >
              <ArrowLeft size={20} /> Back to Summary
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMe;
