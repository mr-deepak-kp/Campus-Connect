import React from 'react';
import { Link } from 'react-router-dom';

function Global() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Global Impact</h1>
          <p className="text-lg text-gray-600">
            Discover our international initiatives and global partnerships
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">International Programs</h2>
            <p className="text-gray-600 mb-4">
              Explore our global academic programs and opportunities
            </p>
            <Link
              to="/programs"
              className="inline-block text-blue-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Global Research</h2>
            <p className="text-gray-600 mb-4">
              Discover our international research collaborations
            </p>
            <Link
              to="/research"
              className="inline-block text-blue-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Study Abroad</h2>
            <p className="text-gray-600 mb-4">
              Experience global education opportunities
            </p>
            <Link
              to="/study-abroad"
              className="inline-block text-blue-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Global;