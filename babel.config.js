module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
    };
};
//đây là file giúp cho bạn dịch code từ taiscript sang javascript
//tự động chèn import React form 'react' cho các bạn