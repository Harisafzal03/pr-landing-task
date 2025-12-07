import React, { useState } from 'react';
import image from '../../../src/assets/image/image.png'

const LeadGenerationPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>(image);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/basier-circle');
        
        body {
          font-family: 'Basier Circle', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .body-text {
          font-family: 'Basier Circle', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 400;
          font-size: 17px;
          line-height: 160%;
          letter-spacing: 0%;
          color: #6485A8;
        }
        
        .heading-text {
          font-family: 'Basier Circle', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 700;
          font-size: 38px;
          line-height: 124%;
          letter-spacing: 0%;
        }
        
        @media (max-width: 768px) {
          .heading-text {
            font-size: 28px;
          }
          
          .body-text {
            font-size: 15px;
          }
        }
      `}</style>
      
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-yellow-500 text-sm font-medium tracking-wide uppercase">
            HOW IT WORKS
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Text Content */}
          <div className="w-full">
            <h1 className="heading-text text-gray-900 mb-8">
              Hand-curated Auto/Home Leads - Delivered to you digitally, exclusively.
            </h1>

            <div className="space-y-6 body-text">
              <p>
                Most lead vendors fall into one of two categories: they either have high quality at an expensive low volume, or high volume and low quality. ProspectRoute has spent hundreds of thousands of dollars to develop the next generation in insurance marketing: a high volume system that delivers prospects that close.
              </p>

              <p>
                Most lead vendors fall into one of two categories: they either have high quality at an expensive low volume, or high volume and low quality. ProspectRoute has spent hundreds of thousands of dollars to develop the next generation in insurance marketing: a high volume system that delivers prospects that close.
              </p>

              <p>
                ProspectRoute uses leads from several sources - social media, web, lead lists and more - and prequalifies each lead by phone to ensure it's a perfect match for your agency. We collect essential information such as the address, location, driver information, vehicle information, driving history (self-reported) and more and if the lead matches your criteria we pass it along to you, digitally.
              </p>

              <p>
                If you use our optional CRM, called the PR-CRM, to manage your leads the CRM instantly places a call to that lead and connects your producer with the opportunity. If no producer is available the CRM will connect the call immediately when the next producer is available.
              </p>

              <p>
                PR's position is that generating the lead is only half the battle. If you choose, you can receive the PR-CRM free with ProspectRoute when you're enrolled to receive leads. PR-CRM's technology is built on the Unifyy platform and helps automate sales from many lead vendors, not just ProspectRoute.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Click to read less
               <span className="text-lg">↓</span>

              </button>
              <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                Get pricing
              </button>
            </div>
          </div>

          {/* Right Column - Image and Description */}
          <div className="space-y-8 w-full">
            
            {/* Image Area (Asset + Upload support) */}
            <div className="bg-white w-full max-w-[577px] mx-auto lg:mx-0">

              <div className="relative w-full aspect-[577/485]">
                <img 
                  src={imageUrl} 
                  alt="Illustration" 
                  className="w-full h-full object-contain"
                />

              


                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Description Text */}
            <div className="body-text space-y-6 w-full">
              <p>
                The PR-CRM prioritizes calls in many ways but what really makes it amazing when it's used with ProspectRoute. This is because when PR generates a lead, the PR-CRM immediately connects your producer with the prospect by phone when it comes online. This means it's the fastest way to get prospects on the phone.
              </p>

              <p>
                You can connect any lead vendor with the PR-CRM so you can use it even when you're not actively using ProspectRoute for your marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGenerationPage;
