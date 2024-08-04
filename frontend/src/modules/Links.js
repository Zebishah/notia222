import React from "react";

const Links = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="w-full mb-4 text-2xl font-semibold text-center text-purple-600">
        Links
      </h2>
      <ul className="space-y-2">
        <li>
          <a
            href="https://example.com"
            className="text-purple-600 hover:underline"
          >
            Example Link 1
          </a>
        </li>
        <li>
          <a
            href="https://example2.com"
            className="text-purple-600 hover:underline"
          >
            Example Link 2
          </a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Links;
