import "./testimonials.scss";


export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Lorenzo Ginyard",
      title: "Software Engineer",
      img: "sharedscreenshot.jpg",
      icon: "",
      desc:
        "Jen is an awesome programmer and is great at problem solving and managing projects! ! While studying at Kenzie Academy she was able to help me with assessments and point out key issues in my project that always led to a solution. I would recommend her to any employer because she is hard-working and have a true passion for programming and helping people solve problems whether big or small.",
    },
  ]

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}