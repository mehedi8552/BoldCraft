
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What services does your digital agency offer?",
    answer: "Our digital agency offers a wide range of services including web design and development, digital marketing, SEO optimization, social media management, content creation, and brand strategy."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines can vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a more complex digital marketing campaign could take 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with small businesses or only large corporations?",
    answer: "We work with businesses of all sizes! From startups and small local businesses to large corporations, we tailor our services to meet the unique needs and budgets of each client."
  },
  {
    question: "Can you help improve our website's search engine rankings?",
    answer: "We offer comprehensive SEO services to improve your website's visibility in search engine results. This includes keyword research, on-page optimization, content strategy, and link building."
  },
  {
    question: "How do you measure the success of your digital marketing campaigns?",
    answer: "We use a variety of metrics and analytics tools to measure campaign success. This includes website traffic, conversion rates, engagement metrics, ROI, and more. We provide regular reports and insights to keep you informed of your campaign's performance."
  }
]

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; toggleOpen: () => void }> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={toggleOpen}
      >
        <span className={cn("text-xl font-medium", isOpen && "text-primary")}>{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={cn("h-5 w-5 text-gray-500", isOpen && "text-primary")} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-2 text-gray-600">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                item={faq}
                isOpen={index === openIndex}
                toggleOpen={() => setOpenIndex(index === openIndex ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}