import { Star } from "lucide-react";

function getRandomStarNumber() {
  const numbers = [3, 4, 5];
  const randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}

const TestimonialCard = ({ name, text }) => (
    <div className=" p-4 rounded-lg border border-red-900  w-64 flex-shrink-0 mx-3 my-2">
      <p className=" mb-2 text-sm h-20 overflow-hidden">{text}</p>
      <p className="font-semibold text-sm">{name}</p>
      <div className="flex text-red-400 mt-1">
        {[...Array(getRandomStarNumber())].map((_, i) => (
          <Star key={i} size={12} fill="currentColor" />
        ))}
      </div>
    </div>
  );
  
  const TestimonialsRow = ({ testimonials, direction }) => (
    <div className="flex mb-4 overflow-hidden">
      <div className={`flex animate-scroll-${direction}`}>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
  
  const TestimonialsSection = () => {
    const allTestimonials = [
      { name: "Sarah Johnson", text: "StockMe has completely transformed how I approach stock market investments." },
      { name: "Michael Chen", text: "The AI predictions have helped me make more informed investment decisions." },
      { name: "David Smith", text: "An invaluable tool for both beginners and experienced investors." },
      { name: "Emily Davis", text: "StockMe has been a game-changer for my financial goals." },
      { name: "James Lee", text: "I've never been more confident in my investments with StockMe." },
      { name: "Patricia Brown", text: "StockMe has made my stock market journey easier and more enjoyable." },
      { name: "Oliver Green", text: "StockMe's insights have significantly boosted my portfolio." },
      { name: "Charlotte Wilson", text: "StockMe's AI predictions are remarkably accurate and helpful." },
      { name: "Liam Taylor", text: "Thanks to StockMe, I feel more in control of my investments." },
      { name: "Amelia Harris", text: "StockMe has turned my stock market fears into confidence." },
      { name: "Noah Martinez", text: "StockMe's tools are user-friendly and incredibly effective." },
      { name: "Sophia Anderson", text: "StockMe has provided me with invaluable investment strategies." },
      { name: "Mason Moore", text: "I'm seeing real growth in my investments thanks to StockMe." },
      { name: "Isabella Clark", text: "StockMe's analytics are top-notch and easy to understand." },
      { name: "Ethan Wright", text: "StockMe has given me the knowledge to invest wisely." },
      { name: "Mia Walker", text: "StockMe's customer support is exceptional and always ready to help." },
];

  
    // Shuffle and split testimonials into three groups
    const shuffled = allTestimonials.sort(() => 0.5 - Math.random());
    const testimonialGroups = [
      shuffled.slice(0, 5),
      shuffled.slice(5, 10),
      shuffled.slice(10, 15)
    ];
  
    return (
      <section className="overflow-hidden"
    //   style={{
    //     background: `url(${logo})`,
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundAttachment: 'fixed',
    // }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What our customers say</h2>
          <TestimonialsRow testimonials={testimonialGroups[0]} direction="left" />
          <TestimonialsRow testimonials={testimonialGroups[1]} direction="right" />
          <TestimonialsRow testimonials={testimonialGroups[2]} direction="left" />
        </div>
      </section>
    );
  };

export default TestimonialsSection;