import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseAlpha: number;
  radius: number;
}

export const ThreePlexusBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let animationFrameId: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Number of plexus nodes based on screen size
    const count = Math.min(Math.floor((width * height) / 9500), 110);
    const points: Point3D[] = [];

    const fov = 450; // Camera perspective depth

    for (let i = 0; i < count; i++) {
      points.push({
        x: (Math.random() - 0.5) * width * 1.25,
        y: (Math.random() - 0.5) * height * 1.25,
        z: Math.random() * 500 - 150,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        vz: (Math.random() - 0.5) * 0.45,
        baseAlpha: Math.random() * 0.5 + 0.35,
        radius: Math.random() * 1.8 + 1.2
      });
    }

    // Mouse tracking
    let mouse = { x: -10000, y: -10000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left - width / 2;
      mouse.y = e.clientY - rect.top - height / 2;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const getAccentRgb = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'teal';
      if (theme === 'amber') return '245, 158, 11';
      if (theme === 'titanium') return '241, 245, 249';
      return '45, 212, 191'; // mint teal
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const accent = getAccentRgb();
      const cx = width / 2;
      const cy = height / 2;

      // Update positions
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Boundaries with bounce/wrap
        const halfW = (width * 1.2) / 2;
        const halfH = (height * 1.2) / 2;

        if (p.x < -halfW) p.x = halfW;
        else if (p.x > halfW) p.x = -halfW;

        if (p.y < -halfH) p.y = halfH;
        else if (p.y > halfH) p.y = -halfH;

        if (p.z < -200) p.z = 350;
        else if (p.z > 350) p.z = -200;

        // Mouse interaction in 2D projected space
        if (mouse.active) {
          const scale = fov / (fov + p.z);
          const px = p.x * scale;
          const py = p.y * scale;
          const dx = mouse.x - px;
          const dy = mouse.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const force = (1 - dist / 140) * 3;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }
      }

      // Project & Draw connecting lines
      const projected = points.map(p => {
        const scale = fov / (fov + p.z);
        return {
          px: cx + p.x * scale,
          py: cy + p.y * scale,
          scale,
          p
        };
      });

      // Draw lines
      const maxDist = 125;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (p1.scale <= 0) continue;

        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          if (p2.scale <= 0) continue;

          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.28 * Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(${accent}, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      for (let i = 0; i < projected.length; i++) {
        const item = projected[i];
        if (item.scale <= 0) continue;

        const r = item.p.radius * item.scale;
        const alpha = item.p.baseAlpha * Math.min(1.2, item.scale);

        ctx.beginPath();
        ctx.arc(item.px, item.py, Math.max(0.7, r), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent}, ${alpha})`;
        ctx.fill();

        // Subtle node glow for closer points
        if (item.scale > 1.1) {
          ctx.beginPath();
          ctx.arc(item.px, item.py, r * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${accent}, ${alpha * 0.15})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.88
      }}
      aria-hidden="true"
    />
  );
};
