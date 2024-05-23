
import gsap from 'gsap';

const useAnimationBanner = (triggerRef, targetBg, targetHead) => {
    if (!triggerRef || !targetBg || !targetHead) {
        console.warn("Missing triggerRef || targetBg || targetHead  missing in useAnimationBanner");
        return;
    }
    const timelineSection = gsap.timeline({
        scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: 'bottom top',
           // markers: true,
            scrub: true,
        },
        ease: 'power2.out'
    });

    timelineSection.to(targetBg, {
        backgroundPositionY: '120%'
    }).to(targetHead, {
        y:200
    }, '<');

};

export default useAnimationBanner;
