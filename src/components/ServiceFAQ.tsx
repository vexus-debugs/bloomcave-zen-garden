
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "q1",
    question: "How early should I arrive for my appointment?",
    answer: "We recommend arriving 15-20 minutes before your scheduled appointment time. This allows you to check in, change into a robe, and begin relaxing before your treatment begins."
  },
  {
    id: "q2",
    question: "What should I wear during my spa treatment?",
    answer: "We provide robes and slippers for your comfort. During treatments, you'll be professionally draped to maintain your privacy. Wear whatever is comfortable for you underneath the robe."
  },
  {
    id: "q3",
    question: "Can I request a specific therapist?",
    answer: "Yes, you can request a specific therapist when booking your appointment. If your preferred therapist is available during your desired time slot, we'll be happy to schedule you with them."
  },
  {
    id: "q4",
    question: "What if I need to cancel my appointment?",
    answer: "We require 24 hours notice for cancellations. Cancellations made with less than 24 hours notice may be subject to a cancellation fee of 50% of the service price."
  },
  {
    id: "q5",
    question: "Are there any health conditions I should mention before my treatment?",
    answer: "Yes, please inform us of any health conditions, allergies, injuries, or if you are pregnant when booking your appointment. This information helps us tailor your treatment for safety and comfort."
  },
  {
    id: "q6",
    question: "Do you offer gift certificates?",
    answer: "Yes, we offer gift certificates for all of our services and packages. They can be purchased in person at our spa or through our website."
  },
  {
    id: "q7",
    question: "Is tipping expected?",
    answer: "Tipping is at your discretion. If you enjoyed your service, a 15-20% tip is customary and greatly appreciated by our therapists."
  }
];

const ServiceFAQ = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
            Frequently Asked <span className="text-spa-gold">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-spa-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Find answers to common questions about our services, policies, and what to expect during your visit.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-playfair text-lg hover:text-spa-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-spa-dark/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 p-6 bg-spa-beige/20 rounded-lg border border-spa-beige/40">
            <h3 className="font-playfair font-semibold mb-2 text-spa-dark">Still have questions?</h3>
            <p className="mb-4">Our friendly team is here to help with any other questions you may have.</p>
            <a 
              href="/contact" 
              className="inline-flex items-center text-spa-gold hover:text-spa-dark transition-colors"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
