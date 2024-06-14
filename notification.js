// this is the faq page 

import React, { useState } from 'react';

const Notification = () => {
  const [question, setQuestion] = useState('');

  const handleRaiseQuestion = () => {
    // TO DO: implement the logic to send the question to the server or database
    alert(`You asked: ${question}`);
    setQuestion('');
  };

  return (
    <div className="container bg-opacity-45 bg-white mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-4xl font-bold mb-4 mt-8">Frequently Asked Questions</h1>
      <hr className="my-4 border-2 border-blue-500" />
      <ul>
        <li className="mb-4">
          <h2 className="text-lg font-bold">What is an entrepreneur?</h2>
          <p className="text-gray-600">An entrepreneur is an individual who creates and/or invests in one or more businesses, bearing most of the risks and enjoying most of the rewards.
          </p>
        </li>
        <li className="mb-4">
          <h2 className="text-lg font-bold">How do I start a business?</h2>
          <p className="text-gray-600">Starting a business involves identifying a business idea, conducting market research, writing a business plan, securing funding, choosing a business structure, registering your business, and launching your product or service.
          </p>
        </li>
        <li className="mb-4">
          <h2 className="text-lg font-bold">What is a business plan?</h2>
          <p className="text-gray-600">A business plan is a formal written document that outlines the goals of the business, the strategy for achieving them, the target market, financial projections, and operational structure.
          </p>
        </li>
        <li className="mb-4">
          <h2 className="text-lg font-bold">Where can I get funding for my startup?</h2>
          <p className="text-gray-600">Funding can be obtained from various sources including personal savings, family and friends, angel investors, venture capitalists, bank loans, government grants, and crowdfunding platforms</p>
        </li>
        <li className="mb-4">
          <h2 className="text-lg font-bold">What are the common challenges faced by entrepreneurs?</h2>
          <p className="text-gray-600">Common challenges include securing funding, managing cash flow, hiring and retaining employees, marketing and sales, staying competitive, and handling legal issues.
          </p>
        </li>
        <li className="mb-4">
          <h2 className="text-lg font-bold">How do I choose the right business structure?</h2>
          <p className="text-gray-600">The right business structure depends on factors such as the size and type of your business, liability concerns, tax implications, and administrative requirements. Common structures include sole proprietorship, partnership, limited liability company (LLC), and corporation.</p>
        </li>
        <li className="mb-4">
          <h2 className="text-lg font-bold">How can I scale my business?</h2>
          <p className="text-gray-600">Scaling a business involves expanding your product or service offerings, entering new markets, optimizing operations, leveraging technology, and securing additional funding to support growth.</p>
        </li>
        <li className="mb-4">
          <h2 className="text-lg font-bold">What are the legal requirements for starting a business?</h2>
          <p className="text-gray-600">Legal requirements can include registering your business name, obtaining business licenses and permits, complying with local zoning laws, setting up a business bank account, and adhering to employment laws.</p>
        </li>

        <li className="mb-4">
          <h2 className="text-lg font-bold">How important is market research for my business?</h2>
          <p className="text-gray-600">Market research is crucial as it helps you understand your target audience, identify market needs, evaluate competitors, and reduce risks by making informed decisions.</p>
        </li>
      </ul>
      <div className="mt-8 text-center">
        <div className='flex border-grey-600'>
            <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question..."
            className="w-full p-2 pl-10 text-sm text-gray-700 "
            />
            <button
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleRaiseQuestion}
            >
            Raise a Question
            </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;



