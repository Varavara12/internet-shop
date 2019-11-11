module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('./dev/pug/pages/*.pug')
            .pipe($.gp.pug({
                locals : {
                    nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                    content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8')),
                    indexSlider: JSON.parse($.fs.readFileSync('./data/index/slider.json', 'utf8')),
                    popularBrands: JSON.parse($.fs.readFileSync('./data/index/popular.json', 'utf8')),
                    productPrev: JSON.parse($.fs.readFileSync('./data/module/product-prev.json', 'utf8')),
                    newsPrev: JSON.parse($.fs.readFileSync('./data/promo-news/news.json', 'utf8')),
                    promoPrev: JSON.parse($.fs.readFileSync('./data/promo-news/promo.json', 'utf8'))
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
