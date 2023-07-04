import React, { useEffect } from 'react';

const SvgExtractor = ({ fileBlob}) => {
  const [svgCode, setSvgCode] = React.useState('');
  useEffect(() => {
    const fetchSvgCode = async () => {
      try {
        const response = await fetch(fileBlob);
        const blob = await response.blob();
        const svgCode = await blob.text();
        setSvgCode(svgCode);
      } catch (error) {
        console.error('Error retrieving SVG code:', error);
      }
    };

    fetchSvgCode();
  }, [fileBlob]);

  return  <div style={{ height: 150 }} dangerouslySetInnerHTML={{ __html: svgCode }} />;
};

export default SvgExtractor;
