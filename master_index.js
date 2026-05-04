// استدعاء ملفات البيانات مباشرة
function loadExternalData() {
    const scripts = [
        "https://raw.githubusercontent.com/abrahymbaqr678-collab/Repository-name/main/data_part1.js"
    ];

    scripts.forEach(url => {
        let script = document.createElement('script');
        script.src = url;
        script.async = false; // لضمان الترتيب والسرعة
        document.head.appendChild(script);
    });
}

loadExternalData();
