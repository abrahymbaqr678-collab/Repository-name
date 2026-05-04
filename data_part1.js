// تعريف المصفوفة إذا لم تكن موجودة
if (typeof all_courses_data === 'undefined') {
    var all_courses_data = [];
}

// إضافة بيانات الدورة
all_courses_data.push({
    course_id: "id_001",
    course_name: "دورة البرمجة بلغة جافا",
    image_url: "https://example.com/java_cover.jpg", // ضع رابط صورة حقيقي هنا
    description: "تعلم أساسيات البرمجة وتطوير تطبيقات الأندرويد من الصفر.",
    episodes: [
        { title: "المقدمة وتثبيت الأدوات", video_url: "https://youtube.com/watch?v=example1" },
        { title: "إنشاء أول تطبيق أندرويد", video_url: "https://youtube.com/watch?v=example2" }
    ]
});
