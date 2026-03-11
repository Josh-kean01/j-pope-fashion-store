import React, { useEffect, useRef, useState } from 'react';

const MIN_THUMB_HEIGHT = 40;
const VISIBILITY_TIMEOUT = 700;
const EDGE_ACTIVATION_WIDTH = 28;

const getScrollMetrics = () => {
  const doc = document.documentElement;
  return {
    scrollTop: window.scrollY || doc.scrollTop,
    scrollHeight: doc.scrollHeight,
    clientHeight: window.innerHeight,
  };
};

const OverlayScrollbar = () => {
  const [metrics, setMetrics] = useState({ scrollTop: 0, scrollHeight: 0, clientHeight: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isEdgeHovered, setIsEdgeHovered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const trackRef = useRef(null);
  const dragOffsetRef = useRef(0);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateEnabledState = () => {
      setIsEnabled(mediaQuery.matches);
    };

    updateEnabledState();
    mediaQuery.addEventListener('change', updateEnabledState);

    return () => {
      mediaQuery.removeEventListener('change', updateEnabledState);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const updateMetrics = () => {
      setMetrics(getScrollMetrics());
    };

    const showScrollbar = () => {
      window.clearTimeout(hideTimerRef.current);
      setIsActive(true);
      hideTimerRef.current = window.setTimeout(() => {
        setIsActive(false);
      }, VISIBILITY_TIMEOUT);
    };

    const handleScroll = () => {
      updateMetrics();
      showScrollbar();
    };

    const handleResize = () => {
      updateMetrics();
    };

    const handleMouseMove = (event) => {
      if (isDragging || event.clientX >= window.innerWidth - EDGE_ACTIVATION_WIDTH) {
        setIsEdgeHovered(true);
        showScrollbar();
        return;
      }

      setIsEdgeHovered(false);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    updateMetrics();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.clearTimeout(hideTimerRef.current);
    };
  }, [isDragging, isEnabled]);

  useEffect(() => {
    if (!isEnabled || !isDragging) return;

    const handleDrag = (event) => {
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const trackHeight = rect.height;
      const maxScroll = Math.max(metrics.scrollHeight - metrics.clientHeight, 0);
      const thumbHeight = Math.max((metrics.clientHeight / metrics.scrollHeight) * trackHeight, MIN_THUMB_HEIGHT);
      const maxThumbOffset = Math.max(trackHeight - thumbHeight, 0);
      const nextThumbOffset = Math.min(
        Math.max(event.clientY - rect.top - dragOffsetRef.current, 0),
        maxThumbOffset
      );
      const progress = maxThumbOffset === 0 ? 0 : nextThumbOffset / maxThumbOffset;

      window.scrollTo({
        top: progress * maxScroll,
        behavior: 'auto',
      });
    };

    window.addEventListener('mousemove', handleDrag);

    return () => {
      window.removeEventListener('mousemove', handleDrag);
    };
  }, [isDragging, isEnabled, metrics.clientHeight, metrics.scrollHeight]);

  const maxScroll = Math.max(metrics.scrollHeight - metrics.clientHeight, 0);

  if (!isEnabled || maxScroll <= 0) {
    return null;
  }

  const trackHeight = Math.max(metrics.clientHeight - 24, 0);
  const thumbHeight = Math.max((metrics.clientHeight / metrics.scrollHeight) * trackHeight, MIN_THUMB_HEIGHT);
  const maxThumbOffset = Math.max(trackHeight - thumbHeight, 0);
  const thumbOffset = maxScroll === 0 ? 0 : (metrics.scrollTop / maxScroll) * maxThumbOffset;
  const shouldRevealTrack = isDragging || isEdgeHovered;

  return (
    <div className="overlay-scrollbar fixed inset-y-0 right-0 z-[9998] w-6 select-none">
      <div
        ref={trackRef}
        className={`absolute bottom-3 right-2 top-3 rounded-full transition-colors duration-200 ${
          shouldRevealTrack ? 'bg-black/10' : 'bg-transparent'
        }`}
        style={{ width: shouldRevealTrack ? '8px' : '6px' }}
      >
        <button
          type="button"
          aria-label="Scroll page"
          className={`overlay-scrollbar-thumb absolute right-0 rounded-full border-none bg-black/40 transition-all duration-200 ${
            isActive || isDragging || isEdgeHovered ? 'opacity-100' : 'opacity-75'
          }`}
          style={{
            height: `${thumbHeight}px`,
            transform: `translateY(${thumbOffset}px)`,
            width: shouldRevealTrack ? '8px' : '6px',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
          onMouseDown={(event) => {
            if (!trackRef.current) return;

            const thumbRect = event.currentTarget.getBoundingClientRect();
            dragOffsetRef.current = event.clientY - thumbRect.top;
            setIsDragging(true);
            setIsActive(true);
            event.preventDefault();
          }}
        />
      </div>
    </div>
  );
};

export default OverlayScrollbar;
