import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webAppPortfolio,
} from "../../data";
import {Grid} from '@material-ui/core'


export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
  ];

  useEffect(() => {

    console.log( selected )

    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webAppPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  console.log( data )



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
          <li>Python, Django</li>
          <li>Javascript</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>Node</li>
          <li>Bootstrap</li>
          <li>TailwindCSS</li>
          <li>HTML, CSS</li>
          <li>Object Oriented Programming</li>
          <li>Test Driven Development</li>
          <li>Client/Server database management</li>
          </Grid>
          <hr/>
          <Grid
            className="grid-right"
            container
            direction="column"
            justify="center"
            float="right"
            max-width="50%"
            alignItems="center"
          >
            <p><strong>Kenzie Academy-2021-</strong><em>Full stack software engineering/web development</em><br/>
            <strong>University of Phoenix-2012-</strong><em>Associates of Applied Sci. Information Tech:Network Sys Admin</em></p>
            
          </Grid>
        </ol>
      </div>
    </div>
  );
}