import React, { useRef, useEffect } from 'react';

const ConstructionComp = () => {
  const constructionRef = useRef(null);

  useEffect(() => {
    if (constructionRef.current) {
      const height1 = constructionRef.current.clientHeight;     //border width excluded in the height
      const height2 = constructionRef.current.offsetHeight;     //border width included in the height
      // console.log('Height of ConstructionComp: Client', height1);
      // console.log('Height of ConstructionComp: Offset', height2);
    }
  }, []);

  return (
    <div ref={constructionRef} className='md:sticky top-0 z-50 h-10 bg-[#68BF7B] text-white flex justify-center items-center'>
      <p>This website is under construction</p>
    </div>
  );
};

export default ConstructionComp;
