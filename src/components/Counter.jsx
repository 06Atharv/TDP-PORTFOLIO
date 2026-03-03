import { useEffect, useRef, useState } from "react";

function Counter({ target, duration = 2000 }) {

    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    startCounting();
                }
            },
            {
                threshold: 0.5
            }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const startCounting = () => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
    };

    return(
        <span ref={ref}>
            {count}
        </span>
    );
}
export default Counter;