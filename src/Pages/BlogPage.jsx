import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Empowering Nurses: The Nacto Care Initiative",
      image:
        "https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=2048x2048&w=is&k=20&c=74qcL_JCd7JRrYJsHJHT-6RXt_TMk0BF0jPbQBDKUTY=",
      content:
        "Welcome to Nacto Care! We are on a mission to address the critical shortage of nurses in India while simultaneously revolutionizing the way healthcare services are delivered. With a focus on empowering nurses and enhancing healthcare accessibility, Nacto Care strives to make a meaningful impact in the world's largest democracy. Our initiative involves partnering with nursing schools and institutions across the country to provide scholarships, training programs, and career advancement opportunities for aspiring and practicing nurses. By investing in the professional development and well-being of nurses, we aim to create a sustainable healthcare workforce that can meet the evolving needs of India's population.",
      author: "Nacto Care Team",
      publication_date: "2024-05-01",
    },
    {
      id: 2,
      title: "Improving Healthcare Access in India: Nacto Care's Approach",
      content:
        "At Nacto Care, we believe that every individual deserves access to quality healthcare. That's why we're dedicated to leveraging technology and innovation to bridge the gap in healthcare access across India. Our approach involves the development of a comprehensive telemedicine platform that connects patients with healthcare providers, including doctors, nurses, and specialists, regardless of their geographical location. Through our platform, patients can receive remote consultations, medical advice, and even access to diagnostic tests and prescriptions, making healthcare more accessible and convenient for everyone. Additionally, we work closely with local communities and organizations to establish healthcare clinics and mobile medical units in underserved areas, ensuring that even the most remote populations have access to essential healthcare services.",
      author: "Nacto Care Team",
      publication_date: "2024-05-05",
      image:
        "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Nacto Care: Transforming Healthcare Delivery",
      content:
        "Discover how Nacto Care is redefining healthcare delivery in India. Through our innovative platform, we connect skilled nurses with patients in need, providing convenient and affordable healthcare solutions. Join us in our mission to make healthcare accessible to all. Our platform utilizes cutting-edge technology, including artificial intelligence and machine learning algorithms, to match patients with the most suitable nurses based on their healthcare needs, preferences, and location. This ensures that patients receive personalized care tailored to their individual requirements, leading to improved health outcomes and patient satisfaction. Additionally, our platform offers features such as appointment scheduling, medication reminders, and remote monitoring tools, empowering patients to take control of their health and well-being.",
      author: "Nacto Care Team",
      publication_date: "2024-05-10",
      image:
        "https://images.pexels.com/photos/6303590/pexels-photo-6303590.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Nacto Care: Empowering Nurses Through Technology",
      content:
        "Learn how Nacto Care harnesses the power of technology to empower nurses across India. Our platform provides nurses with opportunities for professional growth, education, and career advancement, ultimately contributing to a stronger healthcare workforce. Through our online learning portal, nurses can access a wide range of training modules, workshops, and certifications to enhance their clinical skills and knowledge. Additionally, our platform facilitates networking and collaboration among nurses, allowing them to share best practices, seek mentorship, and connect with job opportunities. By leveraging technology to support and empower nurses, we aim to build a resilient and empowered nursing workforce that can drive positive change in healthcare delivery.",
      author: "Nacto Care Team",
      publication_date: "2024-05-15",
      image:
        "https://images.pexels.com/photos/4021798/pexels-photo-4021798.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Join the Nacto Care Movement: Become a Healthcare Changemaker",
      content:
        "Are you passionate about making a difference in healthcare? Join the Nacto Care movement and become a part of a community dedicated to transforming healthcare delivery in India. Together, we can create positive change and improve the lives of millions. Whether you're a healthcare professional, technology enthusiast, or social activist, there are many ways to get involved and contribute to our mission. You can volunteer your time and skills to support our initiatives, participate in fundraising events and awareness campaigns, or simply spread the word about Nacto Care's work. By joining forces with like-minded individuals and organizations, we can drive meaningful impact and create a healthier future for all.",
      author: "Nacto Care Team",
      publication_date: "2024-05-20",
      image:
        "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "Nacto Care's Impact: Stories of Healthcare Transformation",
      content:
        "Discover the real-life stories of individuals whose lives have been transformed by Nacto Care. From patients receiving timely medical care to nurses finding fulfilling careers, explore the profound impact of our initiatives on communities across India. Meet Rajesh, a farmer from a remote village who was able to receive life-saving treatment for his heart condition thanks to Nacto Care's telemedicine platform. Hear from Priya, a newly graduated nurse who found her dream job through Nacto Care's online job portal, allowing her to support her family and pursue her passion for healthcare. These are just a few examples of the countless lives that have been touched and improved by Nacto Care's efforts. Join us in our mission to create a healthier and happier society for all.",
      author: "Nacto Care Team",
      publication_date: "2024-05-25",
      image:
        "https://images.pexels.com/photos/4167539/pexels-photo-4167539.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      title: "Nacto Care: Bridging Gaps in Rural Healthcare",
      content:
        "Rural areas often face significant challenges in accessing quality healthcare. Nacto Care is committed to bridging these gaps by deploying healthcare resources to underserved regions, ensuring that every individual, regardless of location, receives the care they deserve. Our rural healthcare initiative involves partnering with local communities, NGOs, and government agencies to establish healthcare clinics and mobile medical units in remote villages and tribal areas. These clinics provide essential primary healthcare services, preventive screenings, maternal and child health programs, and health education to residents who would otherwise have limited or no access to medical care. By bringing healthcare closer to home, we aim to improve health outcomes, reduce healthcare disparities, and empower rural communities to lead healthier lives.",
      author: "Nacto Care Team",
      publication_date: "2024-06-01",
      image:
        "https://images.pexels.com/photos/4006979/pexels-photo-4006979.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      title:
        "Investing in the Future: Nacto Care's Commitment to Healthcare Education",
      content:
        "Education is key to improving healthcare outcomes. Nacto Care invests in the future by providing educational opportunities for nurses and healthcare professionals, equipping them with the knowledge and skills needed to deliver high-quality care to communities across India. Our education initiatives include scholarships, continuing education programs, and mentorship opportunities for aspiring nurses and healthcare workers. We also collaborate with academic institutions and vocational training centers to develop curriculum and training modules that align with industry standards and best practices. By investing in healthcare education, we not only empower individuals to pursue rewarding careers in healthcare but also strengthen the overall healthcare system by ensuring a skilled and competent workforce.",
      author: "Nacto Care Team",
      publication_date: "2024-06-05",
      image:
        "https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      title:
        "Nacto Care's Commitment to Quality Care: A Patient-Centered Approach",
      content:
        "At Nacto Care, patients are at the heart of everything we do. Discover how our patient-centered approach ensures that every individual receives personalized care tailored to their unique needs, fostering positive health outcomes and patient satisfaction. Our approach to care delivery emphasizes empathy, communication, and collaboration between patients and healthcare providers. We prioritize active listening, respect for patient autonomy, and cultural sensitivity to ensure that patients feel heard, valued, and respected throughout their healthcare journey. Additionally, we continuously monitor and evaluate our services to identify areas for improvement and ensure that we are meeting the highest standards of quality and safety. By putting patients first, we strive to build trust, confidence, and lasting relationships that empower individuals to take charge of their health and well-being.",
      author: "Nacto Care Team",
      publication_date: "2024-06-10",
      image:
        "https://images.pexels.com/photos/5214955/pexels-photo-5214955.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      title:
        "Advancing Healthcare Equity: Nacto Care's Social Impact Initiatives",
      content:
        "Healthcare equity is a fundamental human right. Explore how Nacto Care is addressing healthcare disparities through targeted social impact initiatives, working towards a future where everyone has equal access to quality healthcare services. Our social impact initiatives focus on vulnerable and marginalized populations, including women, children, the elderly, and individuals from low-income backgrounds. We collaborate with community-based organizations, NGOs, and government agencies to design and implement programs that address the social determinants of health, such as poverty, education, housing, and nutrition. Through initiatives such as free health camps, community health workers training, and health literacy programs, we aim to empower individuals and communities to overcome barriers to healthcare access and achieve better health outcomes. By advocating for healthcare equity, we strive to create a more just and inclusive society where everyone has the opportunity to live a healthy and fulfilling life.",
      author: "Nacto Care Team",
      publication_date: "2024-06-15",
      image:
        "https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 11,
      title: "Nacto Care: Fostering Innovation in Healthcare Delivery",
      content:
        "Innovation drives progress in healthcare. Learn how Nacto Care embraces innovation to optimize healthcare delivery, from telemedicine solutions to AI-powered diagnostics, revolutionizing the way healthcare services are accessed and delivered. Our innovation initiatives focus on leveraging emerging technologies and digital solutions to address healthcare challenges and improve patient outcomes. We collaborate with technology partners, startups, and research institutions to develop and pilot new tools, platforms, and models of care delivery. From remote patient monitoring devices to predictive analytics algorithms, we are at the forefront of innovation in healthcare, constantly seeking new ways to enhance efficiency, effectiveness, and affordability. By fostering a culture of innovation and experimentation, we aim to drive positive change and shape the future of healthcare in India and beyond.",
      author: "Nacto Care Team",
      publication_date: "2024-06-20",
      image:
        "https://images.pexels.com/photos/7583382/pexels-photo-7583382.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 12,
      title:
        "The Role of Nurses in Transforming Healthcare: Nacto Care's Perspective",
      content:
        "Nurses play a pivotal role in healthcare transformation. Join us as we explore the invaluable contributions of nurses in driving positive change and improving healthcare outcomes, and how Nacto Care supports and empowers nursing professionals. Nurses are the backbone of the healthcare system, providing compassionate care, clinical expertise, and advocacy for patients and families. At Nacto Care, we recognize and celebrate the vital role that nurses play in delivering high-quality, patient-centered care. Through our various initiatives and programs, we aim to empower nurses to reach their full potential, whether through professional development opportunities, leadership training, or mentorship programs. By investing in nursing excellence, we can strengthen the entire healthcare ecosystem and ensure better health outcomes for all.",
      author: "Nacto Care Team",
      publication_date: "2024-06-25",
      image:
        "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 13,
      title: "Nacto Care: A Vision for the Future of Healthcare",
      content:
        "What does the future hold for healthcare in India? Join Nacto Care as we envision a future where healthcare is accessible, affordable, and equitable for all. Together, let's work towards building a healthier and brighter tomorrow. Our vision for the future of healthcare in India is one where every individual, regardless of their background or circumstances, has access to high-quality, patient-centered care. We envision a healthcare system that prioritizes prevention, early intervention, and holistic wellness, rather than just treating diseases and symptoms. Through collaboration, innovation, and a commitment to social justice, we believe that we can overcome the challenges facing healthcare in India and create a system that meets the needs of all citizens. Join us in our journey towards a healthier, more equitable future for all.",
      author: "Nacto Care Team",
      publication_date: "2024-06-30",
      image:
        "https://images.pexels.com/photos/3985299/pexels-photo-3985299.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // Add more blog objects as needed
  ]);

  return (
    <>
      <h1 class="text-3xl font-bold mb-4 mt-10 text-center">Latest Blogs</h1>
      <div class="container mx-auto px-4 py-8 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] mx-auto">
          {blogs.map((blog) => {
            return (
              <Link to={`/blog/${blog.id}/`}>
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    className="w-full h-52 object-cover"
                    src={blog.image}
                    alt="Blog Image"
                  />
                  <div class="p-4 flex flex-col gap-1">
                    <h2 class="font-bold text-xl mb-2">{blog.title}</h2>
                    <p class="text-gray-700">{blog.content}</p>
                    <div class="mt-4 flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src="https://imgs.search.brave.com/g2CJldyVpLs0sy-8TKaPqzJiC1DwIWh0fglnNnFqmSA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NlL2Y4/L2I1L2NlZjhiNWNl/ZDAwMjM0MzE3MmZk/MDRkNTljYjJlMTcy/LmpwZw"
                        alt="Author Image"
                      />
                      <div>
                        <p class="text-gray-900 font-semibold">{blog.author}</p>
                        <p class="text-gray-600">{blog.publication_date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
