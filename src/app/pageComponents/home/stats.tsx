"use client";
import CountUp from "react-countup";

const stats = [
  {
    number: 0,
    key: "Completed Projects",
  },
  {
    number: 2,
    key: "Ongoing Projects",
  },
  {
    number: 3,
    key: "Team Members",
  },
  {
    number: 5,
    key: "Years of Excellence",
  },
];

const Stats = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map(({ number, key }) => {
            return (
              <div
                key={key}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    key.length > 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-black/80`}
                >
                  {key}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
