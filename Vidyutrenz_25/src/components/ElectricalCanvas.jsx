import React, { useEffect, useRef } from 'react';

const ElectricalCanvas = ({ targetRef, onHit }) => {
  const canvasRef = useRef(null);
  const bolts = useRef([]); 

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let targetRect = null;

    // Update target position (The Title Text)
    const updateTargetRect = () => {
        if (targetRef.current) {
            targetRect = targetRef.current.getBoundingClientRect();
        }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateTargetRect();
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', updateTargetRect);
    resizeCanvas();

    const random = (min, max) => Math.random() * (max - min) + min;

    class LightningBolt {
      constructor(startX, startY, endX, endY, isTargeting = false) {
        this.path = [{x: startX, y: startY}];
        this.endX = endX;
        this.endY = endY;
        this.isTargeting = isTargeting;
        this.life = 1; 
        this.decay = random(0.03, 0.08); // Speed of fade
        this.hasHit = false;
        this.generatePath(startX, startY, endX, endY);
      }

      generatePath(x1, y1, x2, y2, displace = 80) {
        if (displace < 2) {
            this.path.push({x: x2, y: y2});
            return;
        }
        let midX = (x1 + x2) / 2;
        let midY = (y1 + y2) / 2;
        midX += (Math.random() - 0.5) * displace;
        midY += (Math.random() - 0.5) * displace;
        this.generatePath(x1, y1, midX, midY, displace / 2);
        this.generatePath(midX, midY, x2, y2, displace / 2);
      }

      update() {
        this.life -= this.decay;
        // Trigger Hit Callback exactly once when bolt is fresh
        if (this.isTargeting && !this.hasHit && this.life > 0.8) {
            this.hasHit = true;
            if (onHit) onHit(); // SHAKE THE TEXT!
        }
      }

      draw(ctx) {
        if (this.life <= 0) return;
        ctx.beginPath();
        ctx.moveTo(this.path[0].x, this.path[0].y);
        for (let i = 1; i < this.path.length; i++) {
            ctx.lineTo(this.path[i].x, this.path[i].y);
        }
        
        // Electric Blue/White Bolt
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.life})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Blue Glow
        ctx.strokeStyle = `rgba(0, 242, 255, ${this.life * 0.8})`;
        ctx.lineWidth = 6;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00f2ff';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Impact Flash
        if (this.isTargeting && this.life > 0.5) {
             ctx.beginPath();
             ctx.fillStyle = `rgba(255, 255, 255, ${this.life})`;
             ctx.arc(this.endX, this.endY, random(10, 30) * this.life, 0, Math.PI * 2);
             ctx.fill();
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn Bolts
      if (Math.random() < 0.08) { // Lightning Frequency
        let startX, startY, endX, endY, isTargeting;

        // 40% chance to hit the Title Text
        if (targetRect && Math.random() < 0.4) {
            isTargeting = true;
            // Pick a random side
            const side = Math.floor(Math.random() * 4);
            if (side === 0) { startX = random(0, canvas.width); startY = 0; } 
            else if (side === 1) { startX = canvas.width; startY = random(0, canvas.height); }
            else if (side === 2) { startX = random(0, canvas.width); startY = canvas.height; }
            else { startX = 0; startY = random(0, canvas.height); }
            
            // Aim for a random spot INSIDE the text box
            endX = random(targetRect.left, targetRect.right);
            endY = random(targetRect.top, targetRect.bottom);
        } else {
            // Random ambient lightning
            isTargeting = false;
            startX = random(0, canvas.width);
            startY = 0;
            endX = random(0, canvas.width);
            endY = canvas.height;
        }
        
        bolts.current.push(new LightningBolt(startX, startY, endX, endY, isTargeting));
      }

      for (let i = bolts.current.length - 1; i >= 0; i--) {
        const bolt = bolts.current[i];
        bolt.update();
        bolt.draw(ctx);
        if (bolt.life <= 0) bolts.current.splice(i, 1);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateTargetRect);
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetRef, onHit]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 15, // On top of background, below text
      }}
    />
  );
};

export default ElectricalCanvas;