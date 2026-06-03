import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Stats.css";

function Counter({
  end,
  startAnimation,
  duration = 2000,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, startAnimation]);

  return count.toLocaleString();
}

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { value: 500, suffix: "+", label: "Retail Partners" },
    { value: 10000, suffix: "+", label: "Happy Customers" },
    { value: 50, suffix: "+", label: "Distribution Areas" },
    { value: 5, suffix: "+", label: "Years of Excellence" },
  ];

  return (
    <section className="stats" ref={ref}>
      {stats.map((item, index) => (
        <div className="stat-box" key={index}>
          <h2>
            <Counter
              end={item.value}
              startAnimation={inView}
            />
            {item.suffix}
          </h2>

          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}