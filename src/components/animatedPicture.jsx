import React, {useEffect, useState} from 'react'
import hoverEffect from 'hover-effect';
import overlay from '../assets/animationOverlay.jpeg'

const AnimatedPicture = React.forwardRef((props, ref) => {
    const [hoverDistort, setHoverDistort] = useState("");

    useEffect(()=> {
      setHoverDistort(new hoverEffect({
          parent: ref.current,
          // parent: document.querySelector(".myPic"),
          intensity: 0.3,
          image1: props.before,
          image2: props.after,
          displacementImage: overlay
      }))
    }, [])

    return (
        <div
            ref={ref}
            className="myPic"
            style={{width: props.width ? props.width : '100%', height: props.height ? props.height : '100%' }}>
        </div>
    )
});

export default AnimatedPicture
