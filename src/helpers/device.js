export const isMobile = () => {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

export const hasTouchSupport = () => {
    return window.ontouchstart !== undefined;
}