const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apikey: 'fa7f67f0f7bce2d2b1c21cc3092a1312',
    originalImage:(imgpath)=>`https://image.tmdb.org/t/p/original/${imgpath}`,
    w500Image:(imgpath)=>`https://image.tmdb.org/t/p/w500/${imgpath}`,
};

export default apiConfig;