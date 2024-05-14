import React from "react";
import "./Visualizations.css";
import { FaPython, FaJava, FaHtml5 } from "react-icons/fa";

import { SiRstudio, SiJupyter, SiHtml5, SiTwitter, SiAlteryx, SiAzurefunctions, SiMicrosoftazure, SiAdobeillustrator, SiTableau, SiPowerbi } from "react-icons/si";
import { DiDatabase } from "react-icons/di"; 
import { AiOutlineRobot } from "react-icons/ai"; 

export const Visualizations = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Visualizations</h2>
        <div className="allVisualizations">
          
          {/* Example Visualization Container */}
          <div className="visualization_container" data-aos="fade-right">
            <div className="visualization">
              <div className="visualization_videocontainer">
                <div>
                  <img src="https://github.com/khushishetty22/Spotify-Analysis/blob/f6b64ffa50b43180871e857665c6a2240ba6b34f/spotify.jpg?raw=true" 
                       alt="Description of Visualization" />
                </div>
              </div>
              <div className="visualization_information">
                <h2>Spotify Personal Playback Dashboard</h2>
                <p>
                The image showcases a Spotify Personal Playback Dashboard, designed to analyze music preferences. It features sections including "Top 5 Tracks by Popularity," "Playlist Analysis" for a 'Party' playlist, genre distribution pie chart, release date heat map, and audio features bar graphs for different moods. The dashboard uses Spotify’s green and black colors, providing a detailed and visually appealing insight into listening trends.</p>
                <div>
                  {/* Add relevant icons here */}
                  <SiTableau/>
                </div>
                <div>
                  <a href="https://public.tableau.com/app/profile/khushi.shetty/viz/Spotify_17137343331650/Dashboard1?publish=yes"
                     target="_blank"
                     rel="noreferrer">
                    <span type="button" className="btns onbt">
                      View Visualization
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* More visualization containers can be added here */}
          <div className="visualization_container" data-aos="fade-right">
            <div className="visualization">
              <div className="visualization_videocontainer">
                <div>
                  <img src="https://raw.githubusercontent.com/khushishetty22/stock-data-pipeline/38da990cefcb376990ac627d7a9895954892d8ed/Stock.jpg" 
                       alt="Description of Visualization" />
                </div>
              </div>
              <div className="visualization_information">
                <h2>Comprehensive Financial Dashboard</h2>
                <p>
                This dashboard offers a concise overview of financial market trends and company performances, highlighting closing prices of indices like the Wilshire 5000, Dow Jones, and NASDAQ over a decade. It includes sector breakdowns for the S&P 500 and NASDAQ, emphasizing Information Technology and Health Care, and details individual metrics for companies like Microsoft and Amazon, such as closing prices, volume, and financials. This visualization combines historical data and current metrics to aid strategic investment decisions.</p>
                <div>
                  {/* Add relevant icons here */}
                  <SiPowerbi/>
                </div>
                <div>
                  <a href="https://app.powerbi.com/links/6VLrx5a0Vv?ctid=4278a402-1a9e-4eb9-8414-ffb55a5fcf1e&pbi_source=linkShare"
                     target="_blank"
                     rel="noreferrer">
                    <span type="button" className="btns onbt">
                      View Visualization
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      
    </>
  );
};