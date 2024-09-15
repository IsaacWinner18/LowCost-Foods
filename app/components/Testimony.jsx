import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    { id: 1, name: 'John L', content: '“ Lowcost has become my go-to spot for lunch. The variety on the menu is impressive, and every dish I’ve tried has been delicious. What stands out the most is the combination of amazing quality and unbeatable prices. Its rare to find such value in a restaurant these days. I highly recommend it to anyone in Johannesburg looking for a tasty, affordable meal.' },

    { id: 2, name: 'Stella V', content: '“ As someone who enjoys dining out frequently, Lowcost offers a perfect balance of great food, fast service, and affordability. Whether you’re grabbing a quick bite or sitting down with friends, it’s always a pleasant experience. The atmosphere is warm, and the staff goes above and beyond to make you feel welcome. I can’t wait to come back! ultricies purus.' },

    { id: 3, name: 'Mary Ameh', content: '“ I recently visited Lowcost and was blown away by the quality of the food! Despite the affordable prices, the meals are bursting with flavor, and the portions are generous. The staff were incredibly friendly, making the dining experience even more enjoyable. If you’re looking for great food on a budget, this is the place to be!.' },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!isReversing) {
        if (currentIndex < slides.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsReversing(true);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsReversing(false);
        }
      }
    }, currentIndex === slides.length - 2 && isReversing ? 1000 : 12000);

    return () => clearInterval(interval);
  }, [currentIndex, isReversing, slides.length, isPaused]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full h-full p-4"
          >
            <div className="space-y-6 mx-4">
              <div>{slide.content}</div>
              <div className="flex gap-5 items-center">
                <div className="rounded-full bg-orange-300">
                  <Image
                    src="/testimonialOn.JPG"
                    alt={slide.name}
                    width={90}
                    height={90}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <b>{slide.name}</b>
                    
                  </div>
                  <div>
                    <p>{slide.id} / {slides.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
