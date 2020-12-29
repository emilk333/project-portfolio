import React from 'react';
import ReactDOM from 'react-dom';

//Look here for documentation https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/

function FadeInSection(props:any) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

export default FadeInSection;