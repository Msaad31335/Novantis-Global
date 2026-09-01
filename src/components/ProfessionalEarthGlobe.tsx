import React, { useEffect, useRef, useState } from 'react';

interface EarthGlobeProps {
  className?: string;
  size?: number;
}

export const ProfessionalEarthGlobe: React.FC<EarthGlobeProps> = ({ className = '', size = 520 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const rotationRef = useRef({ rotX: 0.2, rotY: 0 });
  const isDraggingRef = useRef(false);
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;

    // Global Hub Nodes (Coordinates: [lat, lon, name, color])
    const nodes = [
      { lat: 40.7128, lon: -74.006, name: 'New York', color: '#00E5FF' },
      { lat: 51.5074, lon: -0.1278, name: 'London', color: '#38BDF8' },
      { lat: 50.1109, lon: 8.6821, name: 'Frankfurt', color: '#00E5FF' },
      { lat: 25.2048, lon: 55.2708, name: 'Dubai', color: '#FBBF24' },
      { lat: 24.7136, lon: 46.6753, name: 'Riyadh', color: '#34D399' },
      { lat: 33.6844, lon: 73.0479, name: 'Islamabad (HQ)', color: '#00E5FF', isHq: true },
      { lat: 28.6139, lon: 77.209, name: 'New Delhi', color: '#38BDF8' },
      { lat: 1.3521, lon: 103.8198, name: 'Singapore', color: '#818CF8' },
      { lat: -33.8688, lon: 151.2093, name: 'Sydney', color: '#38BDF8' },
      { lat: 48.8566, lon: 2.3522, name: 'Paris', color: '#38BDF8' },
      { lat: 43.6532, lon: -79.3832, name: 'Toronto', color: '#38BDF8' },
    ];

    // Generate high-density mathematical dot-matrix landmass particles
    const landDots: { lat: number; lon: number; size: number }[] = [];
    const numDots = 1200;
    
    // Procedural continent distribution approximation (North America, Europe, Asia, Africa, South America, Australia)
    for (let i = 0; i < numDots; i++) {
      // Golden spiral distribution over sphere
      const y = 1 - (i / (numDots - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = i * 2.399963; // Golden angle

      const lat = Math.asin(y) * (180 / Math.PI);
      const lon = (theta * (180 / Math.PI)) % 360 - 180;

      // Filter into continent landmass shapes
      const isLand = 
        // Eurasia & Middle East
        (lat > 5 && lat < 70 && lon > -10 && lon < 140) ||
        // North America
        (lat > 15 && lat < 70 && lon > -165 && lon < -50) ||
        // South America
        (lat > -55 && lat < 12 && lon > -80 && lon < -35) ||
        // Africa
        (lat > -35 && lat < 36 && lon > -18 && lon < 50) ||
        // Australia
        (lat > -40 && lat < -10 && lon > 112 && lon < 154);

      if (isLand || Math.random() < 0.08) {
        landDots.push({
          lat,
          lon,
          size: isLand ? (Math.random() > 0.85 ? 1.8 : 1.2) : 0.8,
        });
      }
    }

    // Convert lat/lon to 3D Cartesian coordinates
    const latLonToVector3 = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return {
        x: -(r * Math.sin(phi) * Math.cos(theta)),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.sin(theta),
      };
    };

    // 3D Rotation Math
    const rotateX = (v: { x: number; y: number; z: number }, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: v.x,
        y: v.y * cos - v.z * sin,
        z: v.y * sin + v.z * cos,
      };
    };

    const rotateY = (v: { x: number; y: number; z: number }, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: v.x * cos + v.z * sin,
        y: v.y,
        z: -v.x * sin + v.z * cos,
      };
    };

    let time = 0;

    const render = () => {
      time += 0.015;
      
      // Auto-rotation around Y axis
      if (!isDraggingRef.current) {
        rotationRef.current.rotY += 0.0035;
      }

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const globeRadius = Math.min(width, height) * 0.38;

      // 1. Deep Space Cosmic Corona Glow
      const glowGrad = ctx.createRadialGradient(centerX, centerY, globeRadius * 0.7, centerX, centerY, globeRadius * 1.35);
      glowGrad.addColorStop(0, 'rgba(0, 229, 255, 0.08)');
      glowGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Earth Sphere Body Back Shadow
      const sphereGrad = ctx.createRadialGradient(centerX - globeRadius * 0.3, centerY - globeRadius * 0.3, globeRadius * 0.1, centerX, centerY, globeRadius);
      sphereGrad.addColorStop(0, '#0B1528');
      sphereGrad.addColorStop(0.6, '#040814');
      sphereGrad.addColorStop(1, '#000000');
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Grid Latitude & Longitude Wireframe Rings
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.08)';

      for (let lat = -60; lat <= 60; lat += 30) {
        const ringPoints: { x: number; y: number; z: number }[] = [];
        for (let lon = -180; lon <= 180; lon += 10) {
          const pt = latLonToVector3(lat, lon, globeRadius);
          const rot = rotateX(rotateY(pt, rotationRef.current.rotY), rotationRef.current.rotX);
          ringPoints.push(rot);
        }

        ctx.beginPath();
        let first = true;
        for (const p of ringPoints) {
          if (p.z > -globeRadius * 0.2) {
            const screenX = centerX + p.x;
            const screenY = centerY - p.y;
            if (first) {
              ctx.moveTo(screenX, screenY);
              first = false;
            } else {
              ctx.lineTo(screenX, screenY);
            }
          } else {
            first = true;
          }
        }
        ctx.stroke();
      }

      // 4. Render Landmass Dot Matrix
      for (const dot of landDots) {
        const vec = latLonToVector3(dot.lat, dot.lon, globeRadius);
        const rot = rotateX(rotateY(vec, rotationRef.current.rotY), rotationRef.current.rotX);

        // Only draw visible front hemisphere dots
        if (rot.z > -globeRadius * 0.15) {
          const depth = (rot.z + globeRadius) / (globeRadius * 2); // 0 to 1
          const alpha = Math.max(0.1, depth * 0.95);
          const screenX = centerX + rot.x;
          const screenY = centerY - rot.y;

          ctx.fillStyle = `rgba(0, 229, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, dot.size * (0.6 + depth * 0.6), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 5. Connect Global Hubs with Animated Arcs (e.g. Islamabad HQ to London, New York, Dubai, Frankfurt)
      const hqNode = nodes.find(n => n.isHq) || nodes[0];
      const hqVec = latLonToVector3(hqNode.lat, hqNode.lon, globeRadius);
      const hqRot = rotateX(rotateY(hqVec, rotationRef.current.rotY), rotationRef.current.rotX);

      for (const target of nodes) {
        if (target.isHq) continue;

        const targetVec = latLonToVector3(target.lat, target.lon, globeRadius);
        const targetRot = rotateX(rotateY(targetVec, rotationRef.current.rotY), rotationRef.current.rotX);

        if (hqRot.z > -globeRadius * 0.2 || targetRot.z > -globeRadius * 0.2) {
          const sx = centerX + hqRot.x;
          const sy = centerY - hqRot.y;
          const ex = centerX + targetRot.x;
          const ey = centerY - targetRot.y;

          // Midpoint arc control
          const midX = (sx + ex) / 2;
          const midY = (sy + ey) / 2 - 35;

          ctx.strokeStyle = 'rgba(0, 229, 255, 0.22)';
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 4]);
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.quadraticCurveTo(midX, midY, ex, ey);
          ctx.stroke();
          ctx.setLineDash([]);

          // Animated moving data packet particle along arc
          const progress = (time * 0.6 + Math.abs(target.lat) * 0.1) % 1;
          const t = progress;
          const px = (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * midX + t * t * ex;
          const py = (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * midY + t * t * ey;

          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#00E5FF';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // 6. Render Cities / Enterprise Tech Hubs
      for (const node of nodes) {
        const vec = latLonToVector3(node.lat, node.lon, globeRadius);
        const rot = rotateX(rotateY(vec, rotationRef.current.rotY), rotationRef.current.rotX);

        if (rot.z > -globeRadius * 0.1) {
          const depth = (rot.z + globeRadius) / (globeRadius * 2);
          const screenX = centerX + rot.x;
          const screenY = centerY - rot.y;

          // Pulsing radar ring
          const pulse = (time * 2 + Math.abs(node.lon) * 0.05) % 1;
          ctx.strokeStyle = `rgba(0, 229, 255, ${Math.max(0, 1 - pulse)})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(screenX, screenY, (node.isHq ? 8 : 5) + pulse * 12, 0, Math.PI * 2);
          ctx.stroke();

          // Hub Node Core
          ctx.fillStyle = node.isHq ? '#00E5FF' : node.color;
          ctx.shadowColor = node.color;
          ctx.shadowBlur = node.isHq ? 12 : 6;
          ctx.beginPath();
          ctx.arc(screenX, screenY, node.isHq ? 4 : 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Hub Name Label
          if (rot.z > globeRadius * 0.2) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.font = node.isHq ? 'bold 10px JetBrains Mono, monospace' : '9px JetBrains Mono, monospace';
            ctx.fillText(node.name, screenX + 7, screenY + 3);
          }
        }
      }

      // 7. Atmospheric Fresnel Rim Glow
      const rimGrad = ctx.createRadialGradient(centerX, centerY, globeRadius * 0.94, centerX, centerY, globeRadius * 1.02);
      rimGrad.addColorStop(0, 'rgba(0, 229, 255, 0)');
      rimGrad.addColorStop(0.6, 'rgba(0, 229, 255, 0.45)');
      rimGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = rimGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.02, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse Interaction Handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - mousePosRef.current.x;
      const dy = e.clientY - mousePosRef.current.y;
      rotationRef.current.rotY += dx * 0.006;
      rotationRef.current.rotX = Math.max(-0.6, Math.min(0.6, rotationRef.current.rotX - dy * 0.006));
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Outer Atmospheric Aura */}
      <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Interactive 3D Canvas */}
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="w-full h-full max-w-[680px] max-h-[680px] cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};
