import React from "react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black text-white p-6">
      <div className="container mx-auto grid grid-cols-4 gap-6 text-center">
        {/* Download App Section */}
        <div>
          <h2 className="font-bold text-lg mb-2   inline-block p-1">Download our App</h2>
          <p className="mb-2">Download App for Android and iOS mobile phone.</p>
          <div className="flex justify-center space-x-2">
            <img src="/google-play.png" alt="Google Play" className="w-32" />
            <img src="/app-store.png" alt="App Store" className="w-32" />
          </div>
        </div>

        {/* Company Purpose */}
        <div>
          <img src="/logo.png" alt="RedStore Logo" className="mx-auto w-32 mb-2" />
          <p className="  inline-block p-1">Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="font-bold text-lg mb-2   inline-block p-1">Useful Links</h2>
          <ul>
            <li className="mb-1"><a href="#" className="  inline-block p-1">Coupons</a></li>
            <li className="mb-1"><a href="#" className="  inline-block p-1">Blog Post</a></li>
            <li className="mb-1"><a href="#" className="  inline-block p-1">Return Policy</a></li>
            <li><a href="#" className="  inline-block p-1">Join Affiliate</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="font-bold text-lg mb-2   inline-block p-1">Follow us</h2>
          <ul>
            <li className="mb-1"><a href="#" className="  inline-block p-1">Facebook</a></li>
            <li className="mb-1"><a href="#" className="  inline-block p-1">Twitter</a></li>
            <li className="mb-1"><a href="#" className="  inline-block p-1">Instagram</a></li>
            <li><a href="#" className="  inline-block p-1">Youtube</a></li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-700 my-4" />
      <p className="text-center   inline-block p-1">Copyright {new Date().getFullYear()} - Rahul Kumar Sinha</p>
    </footer>
  );
};

export default Footer;
