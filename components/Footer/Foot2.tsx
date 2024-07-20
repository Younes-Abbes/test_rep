export default function Foot2() {
  return (
    <div className="mr-24 flex justify-end gap-16 py-10">
      <SocialMedia />
      <Information />
      <Download />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="max-w-80">
      <div className="mb-4 flex items-center space-x-3">
        <img src="\assets\others/GraduationCap.png" alt="LOGO pic" />
        <h1 className="text-3xl text-white">E-tutor</h1>
      </div>
      <p className="text-gray-600">
        Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
        mattis odio at.
      </p>
      <div className="mt-10 flex space-x-4">
        <button className="max-w-10 bg-gray-300 p-2 transition-all duration-500 hover:bg-orange-500">
          <img src="/assets/others/Social.png" alt="facebook logo" />
        </button>
        <button className="max-w-10 bg-gray-300 p-2 transition-all duration-500 hover:bg-orange-500">
          <img src="/assets/others/Instragarm.png" alt="instagram logo" />
        </button>
        <button className="max-w-10 bg-gray-300 p-2 transition-all duration-500 hover:bg-orange-500">
          <img src="/assets/others/Linkedin.png" alt="linkedin logo" />
        </button>
        <button className="max-w-10 bg-gray-300 p-2 transition-all duration-500 hover:bg-orange-500">
          <img src="/assets/others/Twitter.png" alt="twitter logo" />
        </button>
        <button className="max-w-10 bg-gray-300 p-2 transition-all duration-500 hover:bg-orange-500">
          <img src="/assets/others/Frame 74.png" alt="youtube logo" />
        </button>
      </div>
    </div>
  );
}

function Information() {
  return (
    <>
      <div>
        <h1 className="text-white">Top 4 categories</h1>
        <ul className="mt-2 text-gray-600">
          <li>Development</li>
          <li>Finance and Accounting</li>
          <li>Desing</li>
          <li>Business</li>
        </ul>
      </div>
      <div>
        <h1 className="text-white">Quick Links</h1>
        <ul className="mt-2 text-gray-600">
          <li>About</li>
          <li>Become Instructor</li>
          <li>Contact</li>
          <li>Career</li>
        </ul>
      </div>
      <div>
        <h1 className="text-white">Support</h1>
        <ul className="mt-2 text-gray-600">
          <li>Help Center</li>
          <li>FAQs</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </>
  );
}

function Download() {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-white">Download our App</h1>
      <button className="">
        <img src="\assets\others/Download our app.png" alt="first" />
      </button>
      <button>
        <img src="\assets\others/Download our app (1).png" alt="second" />
      </button>
    </div>
  );
}
