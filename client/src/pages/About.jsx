import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Welcome to JobSearch, your trusted companion in the pursuit of career excellence. We are dedicated to simplifying the job search process for job seekers and employers alike. JobSearch understands the challenges that come with finding the perfect job or the ideal candidate, and we are here to make this journey seamless, efficient, and successful. Our primary mission is to empower job seekers by offering an intuitive, all-encompassing platform featuring a diverse array of job listings across various sectors. We firmly believe that everyone should have access to their dream career, and we're committed to making this vision a reality.


          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        For employers, we provide a powerful, precise means of connecting with potential talent. We recognize the critical role of selecting the right candidate for your organization's growth and success. With our innovative tools and resources, you can optimize your recruitment process, ensuring that you find the ideal match for your team. At JobSearch, we are unwavering in our dedication to excellence. We prioritize quality and relevance, guaranteeing that job listings and candidates align with each other's requirements. Our platform boasts user-friendliness, streamlining the job search and hiring process for everyone. We embrace diversity and inclusivity, creating an equal opportunity environment for all. We firmly believe that diverse perspectives foster innovation and prosperity, and we warmly invite candidates and employers from all backgrounds to engage on our platform.Embrace the journey to career success with JobSearch. Your professional aspirations are our foremost concern, and we're here to champion your advancement. Embark on your path to career excellence with JobSearch, where opportunity meets ambition.
        </p>
      </div>
    </div>
  );
};

export default About;
