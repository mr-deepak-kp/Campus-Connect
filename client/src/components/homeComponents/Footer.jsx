import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/admissions" className="hover:text-yellow-400 transition">Admissions</a></li>
            <li><a href="/academics" className="hover:text-yellow-400 transition">Academics</a></li>
            <li><a href="/research" className="hover:text-yellow-400 transition">Research</a></li>
            <li><a href="/global" className="hover:text-yellow-400 transition">Global</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Road No. 19, CampusConnect Building,</li>
            <li>MP Nagar, Bhopal</li>
            <li>Phone: +91-XXXXXXXXXX</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Twitter</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Instagram</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; 2025 CampusConnect. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;