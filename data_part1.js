// مصفوفة الروابط التي سيتم تحميلها كـ Scripts
var data_sources = [
  "https://raw.githubusercontent.com/abrahymbaqr678-collab/Repository-name/main/data_part1.js"
];

// دالة التحميل التلقائي
data_sources.forEach(function(url) {
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
});
