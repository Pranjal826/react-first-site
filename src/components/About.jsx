
import React from 'react';
import { Footerbot } from './Footerbot';
const About = () => {
  return (
    <div>
      <div className="container mx-auto p-8">
        <div className="flex justify-center items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-6xl font-bold mb-4 caveat">Welcome to Our Hotel</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              tortor mi. Nunc ac augue nec felis dapibus blandit. Fusce
              ullamcorper, nisi ut pellentesque fringilla, felis velit
              accumsan justo, eget bibendum velit leo vel nisi.
            </p>
          </div>
          <div className="flex items-center justify-center mt-[10%]">
            <img
              src="https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" // Replace with the path to your hotel image
              alt="Hotel"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-5xl font-bold mb-4 text-center caveat">Our Mission</h2>
          <p className="text-gray-700 text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-5xl font-bold mb-4 text-center caveat">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sample team member cards */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" // Replace with the path to team member image
                alt="Team Member 1"
                className="w-20 h-20 rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold mb-2 text-center">John Doe</h3>
              <p className="text-gray-700 text-center">Marketing Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" // Replace with the path to team member image
                alt="Team Member 1"
                className="w-20 h-20 rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold mb-2 text-center">John Doe</h3>
              <p className="text-gray-700 text-center">Marketing Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" // Replace with the path to team member image
                alt="Team Member 1"
                className="w-20 h-20 rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold mb-2 text-center">John Doe</h3>
              <p className="text-gray-700 text-center">Marketing Manager</p>
            </div>

          </div>
        </div>
      </div>
      <Footerbot/>
    </div>
  );
};

export default About;
