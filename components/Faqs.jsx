import React from "react";
import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
            Find answers to common questions about our platform
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-300 dark:border-gray-700"
              >
                <AccordionTrigger className="text-left text-gray-900 dark:text-gray-100 font-medium transition-colors duration-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/70">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
