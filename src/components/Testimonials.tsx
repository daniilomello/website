export function Testimonials() {
  const data = [
    {
      name: "Amazing Person",
      job: "Tech Lead",
      company: "Amazing Company",
      description:
        "Dan is an exceptional professional with whom I have worked on several projects. He has always demonstrated excellent design and front-end skills, as well as a proactive and problem-solving approach. In every project he has shown the ability to improve the final delivery. I highly recommend him.",
      avatar: "https://github.com/daniilomello.png",
    }
  ];

  return (
    <section className="py-2 mb-[10rem]">
      <div>
        {data.map((item) => (
          <article key={item.name} className="flex flex-col items-center">
            <img
              src={item.avatar}
              alt={item.name}
              className="h-24 w-24 rounded-full"
            />
            <blockquote className="mt-4 text-center w-[65%] flex flex-col gap-3">
              <p className="font-light">{item.description}</p>
              <p className="font-bold">{item.name}</p>
              <p className="text-xs -mt-2">{item.job} at <span className="font-bold">{item.company}</span></p>
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}
