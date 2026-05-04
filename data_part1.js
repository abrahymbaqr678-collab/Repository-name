// إذا لم تكن المصفوفة موجودة، يتم إنشاؤها
if (typeof all_courses_data === 'undefined') {
    var all_courses_data = [];
}

// إضافة البيانات مباشرة للمصفوفة العالمية
all_courses_data.push({
    course_id: "id_001",
    course_name: "دورة البرمجة بلغة جافا",
    image_url: "https://example.com/java_cover.jpg",
    description: "تعلم أساسيات البرمجة وتطوير تطبيقات الأندرويد.",
    episodes: [
        { title: "المقدمة", video_url: "https://youtube.com/watch?v=1" },
        { title: "الدرس الأول", video_url: "https://youtube.com/watch?v=2" }
    ]
});
