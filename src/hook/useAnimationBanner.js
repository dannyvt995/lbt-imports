
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const useAnimationBanner = (triggerRef, targetBg, targetHead) => {
    if (!triggerRef || !targetBg || !targetHead) {
        console.warn("Missing triggerRef || targetBg || targetHead  missing in useAnimationBanner");
        return;
    }
    const timelineSection = gsap.timeline({
        scrollTrigger: {
            trigger: targetBg,
            start: 'top top',
            end: 'bottom top',
           // markers: true,
            scrub: true,
        }
    });

    timelineSection.to(targetBg, {
        backgroundPositionY: '120%'
    }).to(targetHead, {
        y:-400
    }, '<');

};

export default useAnimationBanner;
