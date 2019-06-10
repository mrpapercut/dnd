export const changeWallpaperRandomly = () => {
    setWallpaper(`./img/wallpaper${Math.ceil(Math.random() * 14)}.jpg`);
}

const setWallpaper = filename => {
    document.body.parentElement.style.background = `url(${filename}) no-repeat center center`;
}