import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  bashPortfolio,
} from "../../data";
import {Grid} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'


export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "bash",
      title: "Bash",
    },
    
  ];

  useEffect(() => {


    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "bash":
        setData(bashPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);


  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

        {data.map((d) => (      
        <div className="container">    
          <div className="item">
            <img
              src={d.img}
              alt=""
              />
            <h3>{d.title}</h3>
          </div>
          <div className="deploy">
          <p><strong>{d.desc}</strong></p>
          <br/>
            <button><a href={d.url}>LAUNCH</a></button>
            <button><a href={d.code}>CODEBASE</a></button>
          </div>
        </div>
        ))}

      <div className="skills">
        <ol>
         <hr/>
        <Grid
          className="grid-left"
          container
          direction="column"
          justify="center"
          float="left"
          max-width="50%"
          alignItems="center"
          >
          <h2><strong>Skills:</strong></h2>
          <li>Python, Django  <Rating name="half-rating" defaultValue={4.0} precision={0.5} /></li>
          <li>Javascript   <Rating name="half-rating" defaultValue={3.5} precision={0.5} /></li>
          <li>MongoDB   <Rating name="half-rating" defaultValue={3.0} precision={0.5} /></li>
          <li>React    <Rating name="half-rating" defaultValue={3.5} precision={0.5} /></li>
          <li>Node    <Rating name="half-rating" defaultValue={2.5} precision={0.5} /></li>
          <li>Bootstrap    <Rating name="half-rating" defaultValue={3.5} precision={0.5} /></li>
          <li>TailwindCSS    <Rating name="half-rating" defaultValue={3.0} precision={0.5} /></li>
          <li>HTML, CSS    <Rating name="half-rating" defaultValue={4.5} precision={0.5} /></li>
          <li>Object Oriented Programming    <Rating name="half-rating" defaultValue={3.5} precision={0.5} /></li>
          <li>Test Driven Develop    <Rating name="half-rating" defaultValue={3.0} precision={0.5} /></li>
          <li>Client/Server database management    <Rating name="half-rating" defaultValue={3.5} precision={0.5} /></li>
          </Grid>
          <hr/>
          <Grid
            className="grid-right"            container
            direction="column"
            justify="center"
            float="right"
            max-width="50%"
            alignItems="center"
          >
            <p><strong>Kenzie Academy-2021-</strong><em>Full stack software engineering/web development</em><br/>
            <strong>University of Phoenix-2012-</strong><em>Bachelors of Applied Sci. Computer Science: Software Analysis and Design</em></p>
            
          </Grid>
        </ol>
      </div>
    </div>
  );
}