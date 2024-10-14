import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './style.css';

export default function App() {
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          html2canvas(ref.current).then((canvas) => {
            console.log('canvas', canvas);
            try {
              const imgData = canvas.toDataURL('image/png');
              const pdf = new jsPDF();
              pdf.addImage(imgData, 'JPEG', 0, 0);
              pdf.output('dataurlnewwindow');
              pdf.save('download.pdf');
            } catch (e) {
              console.error(e);
            }
          });
        }}
      >
        download
      </button>
      <div ref={ref}>
        <h1 style={{ background: 'red' }}>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        {/* {Canvas && <Canvas />} */}
      </div>
    </div>
  );
}
