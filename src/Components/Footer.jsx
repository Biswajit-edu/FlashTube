import React from 'react';

function Footer() {
  return (
    <div className="mt-20 mx-7 sm:mx-20 lg:mx-40">
      <hr  />
      <div className="flex justify-center items-center sm:py-5">
        <p className="text-white text-base">Stay Updated. Stay Simplified.</p>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands mx-2 text-xl text-white fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands text-black bg-white p-0.5 rounded-sm fa-linkedin"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands mx-2 text-black bg-white p-0.5 rounded-sm fa-facebook"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer