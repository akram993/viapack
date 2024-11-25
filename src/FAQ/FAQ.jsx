import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For business customers, we also offer invoice payment options with agreed payment terms."
    },
    {
      question: "What is your delivery timeframe?",
      answer: "Standard delivery typically takes 2-4 business days within the mainland. Express delivery options are available for urgent orders. International shipping times vary by destination. You'll receive a tracking number once your order is dispatched."
    },
    {
      question: "Do you offer bulk pricing?",
      answer: "Yes, we offer competitive bulk pricing for large orders. The discount varies based on the quantity and products ordered. Please contact our sales team for a custom quote for your bulk order requirements."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most products in their original condition. Custom orders may have different terms. Please contact our customer service team before returning any items. Return shipping costs may apply."
    },
    {
      question: "Do you provide product training?",
      answer: "Yes, we offer product training sessions for certain equipment. This includes basic operation, maintenance, and safety guidelines. Training can be conducted on-site or virtually, depending on your requirements."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive an email with tracking information. You can also log into your account on our website to view real-time order status and tracking details."
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Yes, all our products come with a standard manufacturer's warranty. The warranty period varies by product type, ranging from 1 to 5 years. Extended warranty options are available for select products."
    },
    {
      question: "Can I request a product demonstration?",
      answer: "Yes, we offer product demonstrations for our industrial equipment. Please contact our sales team to schedule a demonstration at your facility or at our showroom."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0ea298] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Find answers to common questions about our products and services.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0">
            <button
              className="w-full py-4 text-left focus:outline-none group"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900 group-hover:text-[#0ea298] transition-colors">
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg
                    className="h-6 w-6 text-gray-500 group-hover:text-[#0ea298]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
            </button>
            <div
              className={`transition-all duration-200 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Still have questions?
        </h2>
        <p className="text-gray-600 mb-6">
          If you cannot find the answer to your question in our FAQ, please don't hesitate to contact our support team.
        </p>
        <button
          className="bg-[#0ea298] text-white px-6 py-3 rounded-full hover:bg-[#0c8b82] transition-colors"
          onClick={() => window.location.href = '/contact'}
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default FAQ;