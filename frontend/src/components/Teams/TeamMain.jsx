import React, { Component } from 'react'
import { useEffect, useState, useRef } from 'react'
import {teamsNavPanelItems} from '../../data/PageNavbarItems'
import TeamMembersGen from './TeamMembersGen'


const StarField = () => {
    const canvasRef = useRef(null);
    const stars = [];
    const numStars = 50;
    const speed = 0.005;
    const fps = 1000; // Adjust the frame rate here
  
    useEffect(() => {
      let parentDiv = canvasRef.current.parentElement;
    parentDiv = parentDiv.parentElement;
      const screenH = parentDiv.clientHeight;
      const screenW = parentDiv.clientWidth;
  
      // Get the canvas context
      const context = canvasRef.current.getContext('2d');
      canvasRef.current.width = screenW;
      canvasRef.current.height = screenH;
  
      // Circle class with screenW and screenH as constructor parameters
      class Circle {
        constructor(x, y, radius, color) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.color = color;
        //   this.angle = Math.random() * 360; // Random starting angle
          this.opacity = Math.random(); // Random starting opacity
          this.opacityFactor = Math.random() > 0.5 ? -1 : 1; // Random direction for opacity change
        }
  
        update() {
        //   this.angle = 1;
          this.x = this.x + (Math.random() - 0.5) * 20 * speed;
          this.y = this.y + (Math.random() - 0.5) * 20 * speed;
  
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
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * screenW - 50;
        const y = Math.random() * screenH - 30;
        const radius = '20';
        const goldenShade = Math.floor(300 + Math.random() * 30); // Adjust the range to achieve an orangish golden hue
        const color = `${goldenShade}, ${goldenShade / 2}, 0`;
  
        // Create a new circle and draw
        const circle = new Circle(x, y, radius, color);
  
        // Add the circles to the stars array
        stars.push(circle);
      }
  
      // Animation loop with fps control
      let then = performance.now();
      const animate = () => {
        const now = performance.now();
        const elapsed = now - then;
  
        if (elapsed > 1000 / fps) {
          then = now - (elapsed % (1000 / fps));
  
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
        <div className='teams-main-body-lights-bg' style={{ position: 'relative', width: '100%'}}>
            <canvas ref={canvasRef} style={{ display: 'block', width: '100%'}} />
        </div>
    );
}



export default function TeamMain() {

    

    let [displayTeam, setDisplayTeam] = useState('current')
    let Team = teamsNavPanelItems["Team"]
    let Alumni = teamsNavPanelItems["alumni"]

    return (
        <div className='teams-main-body'>
            <StarField />
            <div className='teams-main-body-details-container'>
                <div className='teams-nav-panel'>
                    <div className='teams-nav-panel-items' onClick={()=>setDisplayTeam('current')}>
                        {Team.title}       
                    </div>

                    <div className='teams-nav-panel-items'>
                        {Alumni.title}
                        <ul className='teams-nav-drop-down-ul'>
                            {
                                Alumni.dropdown.map((item) =>(
                                    <button key= {item.id}className="teams-nav-dropdown-items" tabIndex={item.index} onClick={()=>setDisplayTeam(item.year)}>
                                        {item.year}
                                    </button>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <TeamMembersGen displayTeam={displayTeam} />
            </div>
        </div>
    )
}
