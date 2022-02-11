import React from 'react'
import { useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Piechart = () => {

  useEffect(() => {
    window.initChart()
  }, [])

  return (
    <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
      <div>
        <canvas id="myChart" width="1200" height="400"></canvas>
      </div>
    </ScrollAnimation>
  );
}
export default Piechart