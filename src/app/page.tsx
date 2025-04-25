// pages/about-us.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Statistics data
const stats = [
  { count: '144', label: 'Donations' },
  { count: '60', label: 'Mission Done' },
  { count: '189', label: 'Volunteers' },
  { count: '12', label: 'New Projects' },
];

// Partners data
const partners = [
  { name: 'Stonehill', logo: 'https://cdn.pixabay.com/photo/2016/03/17/07/02/starbucks-1262392_1280.jpg' },
  { name: 'Partner 2', logo: 'https://cdn.pixabay.com/photo/2012/12/11/21/28/great-69521_1280.jpg' },
  { name: 'Shiram', logo: 'https://cdn.pixabay.com/photo/2015/07/21/06/59/nikon-853641_1280.jpg' },
  { name: 'Partner 4', logo: 'https://cdn.pixabay.com/photo/2020/09/05/16/01/butterfly-5546907_1280.jpg' },
];

// Featured In logos
const featuredIn = [
  { name: 'Channel NewsAsia', logo: 'https://cdn.pixabay.com/photo/2015/02/04/11/29/tissue-623649_1280.jpg' },
  { name: 'ST', logo: 'https://cdn.pixabay.com/photo/2012/10/10/04/46/oldtimer-60521_1280.jpg' },
  { name: 'Asia One', logo: 'https://cdn.pixabay.com/photo/2018/04/23/21/26/auto-3345601_1280.jpg' },
  { name: 'Today', logo: 'https://cdn.pixabay.com/photo/2017/06/08/23/00/apple-2385198_1280.jpg' },
];

// Testimonials
const testimonials = [
  {
    quote: "Joyful Minds is doing a fantastic job in the field of education, our school children get to know so many things during this program",
    author: "Aditya Birla",
    designation: "Principal, Sun Elementary School",
    avatar: "/images/testimonials/aditya.jpg"
  },
  {
    quote: "Their dedicated approach to child welfare has transformed countless lives in our community",
    author: "Priya Sharma",
    designation: "Education Department Head",
    avatar: "/images/testimonials/priya.jpg"
  }
];

// Gallery images
const galleryImages = [
  { src: 'https://cdn.pixabay.com/photo/2022/04/06/13/58/woman-7115624_1280.jpg', alt: 'Children with volunteer' },
  { src: 'https://cdn.pixabay.com/photo/2023/03/02/19/37/tunnel-7826204_1280.jpg', alt: 'Rural education initiative' },
  { src: 'https://cdn.pixabay.com/photo/2016/11/14/04/25/umbrella-1822586_1280.jpg', alt: 'Donation distribution' },
  { src: 'https://cdn.pixabay.com/photo/2020/12/23/03/14/men-5853759_1280.jpg', alt: 'Child in need' },
  { src: 'https://cdn.pixabay.com/photo/2019/03/12/12/47/people-4050698_1280.jpg', alt: 'Children playing' },
  { src: 'https://cdn.pixabay.com/photo/2017/12/27/14/02/happy-holidays-3042751_1280.jpg', alt: 'Volunteer with children' },
];

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Joyful Minds</title>
        <meta name="description" content="Learn about Joyful Minds and our mission to help children" />
      </Head>

      {/* Hero Banner Section */}
      <div className="relative h-96 bg-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-yellow-50/80">
          <Image
            src="https://children-charity.cmsmasters.net/wp-content/uploads/2017/05/children.png"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                About Us
              </h1>
              <div className="w-32 h-1 bg-blue-500 mb-6" />
            </div>
            <div className="relative h-64 md:h-full">
              {/* <Image
                src="/images/about-hero-illustration.svg"
                alt="Education illustration"
                layout="fill"
                objectFit="contain"
                className="transform translate-y-4"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-2 ">
          Grow Up Humanity
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          At Joyful Minds, we believe that every child deserves the opportunity to live a life full of joy, growth, and possibility. 
          It is our mission to fulfill basic needs, nurturing them thrive and flourish.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold  mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-6">
              Our organization is wholeheartedly dedicated to brightening the lives of children from diverse backgrounds across society. We are driven by an unwavering determination to empower these young minds, creating a safe, joyful, and nurturing environment for their growth and development.
            </p>

            <h3 className="text-2xl font-bold  mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 mb-6">
              Our mission at Joyful Minds is to positively impact the lives of every child, addressing their needs in healthcare, education, and emotional support. We are dedicated to creating a nurturing environment where each child feels safe, cherished, and empowered to explore and develop their unique talents, personality, and skills. Our ultimate goal is to enable every child to blossom into a joyful, well-rounded individual, ready to contribute to a better and happier society.
            </p>

            <h3 className="text-2xl font-bold  mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Our mission at Joyful Minds is to positively impact the lives of every child, addressing their needs in healthcare, education, and emotional support. We are dedicated to creating a nurturing environment where each child feels safe, cherished, and empowered to explore and develop their unique talents, personality, and skills.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://cdn.pixabay.com/photo/2020/07/03/06/12/people-5365324_1280.jpg"
                alt="Children with volunteers"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center  mb-8">
            Our Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold  mb-2">
                Empathy & Understanding
              </h4>
              <p className="text-gray-600">
                We approach each child cautiously and with an understanding of their unique circumstances.
              </p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold mb-2">
                Transparency
              </h4>
              <p className="text-gray-600">
                We believe in Integrity and Accountability, and, hence, we ensure that our donors, supporters and our beneficiaries are all well aware of our work and its impact.
              </p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold mb-2">
                Inclusivity
              </h4>
              <p className="text-gray-600">
                We ensure that children from all walks of life, ethnicity or ability are welcomed and given the support and love they deserve.
              </p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold mb-2">
                Empowerment
              </h4>
              <p className="text-gray-600">
                We believe in empowering children so that they can become independent citizens and are able to stand up for themselves.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-4">
            Join Us
          </h3>
          <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto">
            We are currently situated in 20 states and 3 Union Territories of India and have impacted the lives of over 48,000 children positively with the collective efforts of our whole team, volunteers and donors.
          </p>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            At Joyful Minds, we firmly believe that positive change requires collective efforts. We sincerely invite you to join hands with us in nurturing young minds and shaping the future of our world. Your support, in any capacity, will make a significant difference. Whether you choose to volunteer your time, raise awareness about our initiatives, or contribute to our projects, your involvement will impact the lives of countless children. Together, let&apos;s create a world where every child has the opportunity to live, learn, pursue their dreams, and above all, find happiness!
          </p>
          
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center mx-auto">
              Get Involved
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Trust Gallery Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Trust Gallery
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Images that capture our journey, mission, and impact across communities.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative py-16 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/stats-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.count}
                </p>
                <p className="text-lg text-gray-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            What the world thinks about us
          </h3>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div>
                  <p className="text-4xl text-blue-500 mb-4">&quot;</p>
                  <p className="text-gray-600 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-500">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured In Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            As Featured In
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {featuredIn.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="relative h-16 w-full grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Our Partners
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We collaborate with organizations that share our vision of creating a better future for children.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="relative h-20 w-full hover:shadow-md transition-shadow duration-300 p-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-yellow-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h4 className="text-white font-bold text-xl md:text-2xl mb-2">
                Join our mission to improve children&apos;s future
              </h4>
              <p className="text-white/90">
                Your support can make a significant difference in the lives of many children.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}