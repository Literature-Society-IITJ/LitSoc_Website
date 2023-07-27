import React, { Component } from 'react'
import { useEffect, useState, useRef, useCallback } from 'react'
import {teamsNavPanelItems} from '../../data/PageNavbarItems'
import TeamMembersGen from './TeamMembersGen'
import { RiArrowDownSLine } from 'react-icons/ri'


const StarField = () => {
    const canvasRef = useRef(null);
    const stars = [];
    const numStars = 30;
    const speed = 0.1;
    const fps = 60; // Adjust the frame rate here
  
    useEffect(() => {
        let parentDiv = canvasRef.current.parentElement;
        parentDiv = parentDiv.parentElement;
        const screenH = 2000;     //parentDiv.clientHeight;  // Increase the value if you want the stars to go farther down
        const screenW = parentDiv.clientWidth;
        
        // Get the canvas context
        const context = canvasRef.current.getContext('2d');
        canvasRef.current.width = screenW;
        canvasRef.current.height = screenH;
        // console.log(screenW, screenH)
  
        // Circle class with screenW and screenH as constructor parameters
        class Circle {
            constructor(x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = color;
            //   this.angle = Math.random() * 360; // Random starting angle
            this.opacity = Math.random()-0.2; // Random starting opacity
            this.opacityFactor = Math.random() > 0.5 ? -1 : 1; // Random direction for opacity change
        }
  
        update() {
            //   this.angle = 1;
            this.x = this.x + this.dx;
            this.y = this.y + this.dy;
    
            // Wrap around the canvas edges
            if (this.x < -this.radius) this.x = screenW + this.radius;
            else if (this.x > screenW + this.radius) this.x = -this.radius;
    
            if (this.y < -this.radius) this.y = screenH + this.radius;
            else if (this.y > screenH + this.radius) this.y = -this.radius;
    
            // Update opacity
            this.opacity += this.opacityFactor * 0.002; // Adjust the speed of opacity change
    
            // Reverse the opacity change direction when reaching the limits
            if (this.opacity <= 0 || this.opacity >= 1) {
                this.opacityFactor *= -1;
            }
        }
  
        draw(context) {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                context.closePath();
                context.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                //   context.shadowBlur = 20; // Adjust the blur intensity
                    // context.shadowColor = `rgba(${this.color}, ${this.opacity})`; // Adjust the shine color
                context.fill();
            }
        }
  
      // Create all the circles with random positions, orangish golden shades, and random opacity
        for (let i = 0; i < 50; i++) {
            for (let j = 0; j < numStars/10; j++) {
                // const x = Math.random() * screenW;
                const x = 40*i;
                const y = Math.random() * screenH;
                // const dx = (Math.random() - 0.5)*2 * speed;
                const dy = (Math.random() - 0.5)*2 * speed;
                const dx = 0;
                // const dy = 0;
                const radius = '25';
                const goldenShade = Math.floor(280 + Math.random() * 30); // Adjust the range to achieve an orangish golden hue
                const color = `${goldenShade}, ${goldenShade / 2}, 0`;
        
                // Create a new circle and draw
                const circle = new Circle(x, y, dx, dy, radius, color);
        
                // Add the circles to the stars array
                stars.push(circle);
            }
        }
  
      // Animation loop with fps control
        let then = performance.now();
        const animate = () => {
            const now = performance.now();
            const elapsed = now - then;
    
            if (elapsed > 60 / fps) {
                then = now - (elapsed % (60 / fps));
        
                context.clearRect(0, 0, screenW, screenH);
                stars.forEach((star) => {
                    star.update();
                    star.draw(context);
                });
            }
  
            requestAnimationFrame(animate);
        };
  
    animate();
  
    }, []);
    
  
    return (
        <div className='teams-main-body-lights-bg'>
        {/* style={{ position: 'relative', width: '100%', height: '100%'}}> */}
            <canvas ref={canvasRef} style={{width: '1000'}} />
        </div>
    );
}


function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

export default function TeamMain(props) {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // console.log(container);
    }, []);

    

    let [displayTeam, setDisplayTeam] = useState('current')
    let Team = teamsNavPanelItems["Team"]
    let Alumni = teamsNavPanelItems["alumni"]

    return (
        <div className='teams-main-body'>
            <StarField/>

            <div className='teams-main-body-details-container' id='teams-main-body-details-container'>
                <div className='teams-nav-panel'>
                    <div className="team-nav-panel-item-container">
                        <div className='team-nav-panel-item-rope'></div>
                        <div className='teams-nav-panel-item' style={{cursor: 'pointer'}} onClick={()=>{setDisplayTeam('current')
                                                                            props.setTaglineDisplay('Current Team (2022-23)')}}>
                                                                                
                            {Team.title}       
                        </div>
                    </div>
                        {
                            isTouchDevice() ? (
                                <div className="team-nav-panel-item-container">
                                    <div className='team-nav-panel-item-rope'></div>

                                    <select className='alumni-select-tag' name="team-year" id="year" onChange={
                                        () => {
                                            setDisplayTeam(document.getElementById('year').value)
                                            props.setTaglineDisplay(`Alumni Team (${document.getElementById('year').value})`)
                                        }
                                    }>
                                        <option style={{display:'none'}} hidden selected>ALUMNI</option>
                                        {
                                            Alumni.dropdown.map((item) => (
                                                <option value={item.year}>
                                                    {item.year}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            ) :
                            (
                                <div className="team-nav-panel-item-container">
                                    <div className='team-nav-panel-item-rope'></div>
                                    <div className='teams-nav-panel-item'>
                                        {Alumni.title}
                                        <RiArrowDownSLine className='nav-panel-drop-down-arrow-icon'/>
                                        <ul className='teams-nav-drop-down-ul'>
                                            {
                                                Alumni.dropdown.map((item) =>(
                                                    <div key= {item.id}className="team-nav-panel-dropdown-item-container" tabIndex={item.index}
                                                                onClick={()=>{setDisplayTeam(item.year)
                                                                props.setTaglineDisplay(`Alumni Team (${item.year})`)
                                                                }}>
                                                        <div className='team-nav-panel-item-rope'></div>
                                                        <div className='teams-nav-panel-item' style={{cursor: 'pointer'}}>
                                                            {item.year}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </ul>     
                                    </div>
                                </div>
                            )
                        }
                </div>
                <TeamMembersGen displayTeam={displayTeam} />
            </div>

        </div>
    )
}
