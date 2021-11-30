import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import ScrollingColorBackground from 'react-scrolling-color-background';
import berryThumbnail from '../assets/projects/thumbnails/berryThumbnail.png';
import vibingThumbnail from '../assets/projects/thumbnails/vibingThumbnail.png';
import shillyThumbnail from '../assets/projects/thumbnails/shillyThumbnail.png';
import rescaleLabThumbnail from '../assets/projects/thumbnails/rescaleLabThumbnail.png';

const Proj = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-gap: 60px;
    align-items: center;

    h2, h3 {
        font-weight: 500;
    }

    @media (max-width: 768px) {
        display: block;
        padding: 0 20px;
    }
`;

const Projects = () => {
    const bgPink = 'rgb(252, 233, 238)'; 
    const bgGrey = 'rgb(228, 236, 241)';
    const bgGreen = 'rgb(224, 245, 236)';
    const bgPurple = 'rgb(235, 222, 237)';

    const projects = [
        {name: "Shilly", desc: "Social platform connecting influencers and crypto coins", tags: "web, design, development", thumbnail: shillyThumbnail},
        {name: "vibing.", desc: "Creating personalized Spotify playlists for friends", tags: "web, design, development", thumbnail: vibingThumbnail},
        {name: "Rescale Lab", desc: "SaaS platform for entrepreneurs", tags: "web, design, development", thumbnail: rescaleLabThumbnail},
        {name: "berry", desc: "Tile-style shopping list mobile app", tags: "mobile, design, development", thumbnail: berryThumbnail},
    ];

    return (
        <section>
            <ScrollingColorBackground
                selector='.js-color-stop[data-background-color]'
                colorDataAttribute='data-background-color'
                initialRgb='rgb(0, 0, 0)'
            />
            <div
                data-background-color={bgPink}
                className='js-color-stop'
                style={{height: '100vh', position: 'relative'}}
            >
                <Proj>
                    <div>
                        <h3>{projects[0].name}</h3>
                        <h2>{projects[0].desc}</h2>
                        <p>{projects[0].tags}</p>
                    </div>
                    {/* <img src={projects[0].thumbnail} alt="" /> */}
                    <StaticImage 
                        className="img"
                        src={shillyThumbnail}
                        width={350}
                        formats={['AUTO', 'WEBP', 'AVIF']}
                        alt="Project thumbnail"
                    />
                </Proj>
            </div>
            <div
                data-background-color={bgGrey}
                className='js-color-stop'
                style={{minHeight: '90vh', position: 'relative', padding: '6rem 0'}}
            >
                <div style={{width: '1200px', margin: 'auto'}}>
                    <img src="../assets/me.png" alt="" />
                    <h3>Thisd is smthing</h3>
                </div>
            </div>
            <div
                data-background-color={bgGreen}
                className='js-color-stop'
                style={{height: '100vh'}}
            >Some content</div> 
            <div
                data-background-color={bgPurple}
                className='js-color-stop'
                style={{height: '100vh'}}
            >Some content</div>

        </section>
    )
}

export default Projects
