export const popUpAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
        scale: 0.5,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: 0.5, duration: 1.5, ease: "easeIn" },
    },
};

export const textAnimationvariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 1.2, ease: "easeIn" },
    }
};

export const textAnimationProps = {
    variants: textAnimationvariants,
    initial: "initial",
    whileInView: "animate",
    viewport: {
        once: true,
    },
};

export const easeInOutAnimationVariants = {
    initial: { opacity: 0, scale: 0.5, y: 80 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { delay: 1, duration: 1.5, ease: "easeInOut" },
};