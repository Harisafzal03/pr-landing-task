import React, { useState } from 'react';

const InfoCardsSection: React. FC = () => {
  const [isLeftExpanded, setIsLeftExpanded] = useState(false);
  const [isRightExpanded, setIsRightExpanded] = useState(false);

  // Helper function to truncate text to approximately 76 words
  const truncateText = (text: string, wordLimit: number = 76): string => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '... ';
  };

  const leftCardFullText = `The ProspectRoute CRM is a very robust and effective tool created specifically and exclusively for insurance agents. PR-CRM automates and prioritizes calls, leads, emails, and SMS. It can be easily configured to run your entire agency, just a part of it, or to only work with ProspectRoute leads. 

However, we're positive that once you start using it, you'll decide to use it for your entire agency and all your lead vendors. 

What makes PR-CRM so good? 

When used in agency mode PR-CRM enforces high contact rates and high outreach so your producers and staff never have downtime. Additionally, PR-CRM acts as an air traffic control center (ATCC) for agencies, managing recent leads that need followup, old leads needing some love, and existing customer service calls. 

Producers and agency employees who use PR-CRM spend an average of 40% more time closing per day, make 50% more calls per day, and close 25% more business in a month than if they were using legacy insurance management products. This is what happens when you integrate and unify all communication methods.

If you want to limit PR-CRM's role in your agency that works too. PR-CRM can be used by just a few producers or can be used as a communications-free system that just organizes your leads and tells your producers who should be called next.

Worried about phone system stuff?

If you're in a situation where you can't have PR-CRM make its own calls, PR-CRM can integrate with your existing phone system with 0 interruption or configuration needed by anyone. The PR-CRM can route all of its inbound and outbound calls through your existing phone system regardless of who the provider is. Remember, PR-CRM is still pretty effective without any communication abilities.

The best part: it is FREE.

When you buy leads from ProspectRoute you get PR-CRM free for any week where you have an active order. On weeks when you want to take a break PR-CRM is very reasonably priced.`;

  const rightCardFullText = `ProspectRoute can deliver as many leads as you want per day. It has the ability to keep all of your producers busy all day long. They will go home tired, but satisfied their commissions are increasing.

We turn over rocks looking for leads and sources. We contact web leads old and new that our system predicts your underwriting will be competitive with. We have a nice but quick conversation with them to collect just enough information to make it a quality lead. We do this to lessen the friction of having the lead reject you. 

Typically we collect the primary's name, email, phone, address or partial address, basic vehicle information, and homeowner status and information. If our system believes this information is a match for your carrier(s), it will send it.  This information is passed to you as an API or code.

When paired with the PR-CRM leads are twice as likely to close.`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F8F9' }}>
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
        
        .card-heading {
          font-family: 'Basier Circle', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 700;
          font-size: 24px;
          line-height: 130%;
          letter-spacing: 0%;
        }
        
        . card-shadow {
          box-shadow: 0px 4px 11px 0px #657A8B1A;
        }
        
        @media (max-width: 1024px) {
          .card-heading {
            font-size: 20px;
          }
          
          .body-text {
            font-size: 15px;
          }
        }
        
        @media (max-width: 640px) {
          .card-heading {
            font-size: 18px;
          }
          
          . body-text {
            font-size: 14px;
          }
        }
      `}</style>
      
      <div className="py-8 sm:py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto max-xl:mx-4 py-8 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Left Card */}
            <div className="bg-white rounded-2xl overflow-hidden card-shadow">
              <div className="h-2 bg-yellow-400"></div>
              <div className="px-6 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10">
                <p className="text-yellow-500 text-xs font-medium tracking-wide uppercase mb-3 sm:mb-4">
                  THE PR-CRM
                </p>
                <h2 className="card-heading text-gray-900 mb-4 sm:mb-5">
                  Get double the return on your marketing dollars. Best of all, the PR-CRM is free.
                </h2>
                
                <div className="space-y-3 sm:space-y-4 body-text whitespace-pre-line">
                  {isLeftExpanded ? leftCardFullText : truncateText(leftCardFullText, 76)}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <button 
                    onClick={() => setIsLeftExpanded(!isLeftExpanded)}
                    className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {isLeftExpanded ? 'Click to read less' : 'Click to read more'}
                    <span className="text-lg">{isLeftExpanded ? '↑' : '↓'}</span>
                  </button>
                  <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-yellow-400 text-gray-900 text-sm font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                    Get pricing
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-2xl overflow-hidden card-shadow">
              <div className="h-2 bg-yellow-400"></div>
              <div className="px-6 sm:px-8 md:px-10 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10">
                <p className="text-yellow-500 text-xs font-medium tracking-wide uppercase mb-3 sm:mb-4">
                  OUR LEADS
                </p>
                <h2 className="card-heading text-gray-900 mb-4 sm:mb-5">
                  WARNING: Our leads may cause a sense of euphoria, relief, or satisfaction. Seek medical attention. 
                </h2>
                
                <div className="space-y-3 sm:space-y-4 body-text whitespace-pre-line">
                  {isRightExpanded ?  rightCardFullText : truncateText(rightCardFullText, 76)}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <button 
                    onClick={() => setIsRightExpanded(!isRightExpanded)}
                    className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {isRightExpanded ? 'Click to read less' : 'Click to read more'}
                    <span className="text-lg">{isRightExpanded ? '↑' : '↓'}</span>
                  </button>
                  <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-yellow-400 text-gray-900 text-sm font-semibold rounded-lg hover:bg-yellow-500 transition-colors">
                    Get pricing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCardsSection;