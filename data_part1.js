// مصفوفة تحتوي على مجموعة من الدورات
const courses_list = [
  {
    course_id: "id_001", // معرف فريد لمنع التداخل
    course_name: "دورة البرمجة بلغة جافا",
    image_url: "https://example.com/java_cover.jpg",
    description: "تعلم أساسيات البرمجة الكائنية وتطوير تطبيقات الأندرويد.",
    episodes_count: 2,
    episodes: [
      {
        ep_id: 1,
        title: "المقدمة وتثبيت الأدوات",
        video_url: "https://youtube.com/watch?v=example1",
        duration: "10:00"
      },
      {
        ep_id: 2,
        title: "إنشاء أول تطبيق",
        video_url: "https://youtube.com/watch?v=example2",
        duration: "15:30"
      }
    ]
  },
  {
    course_id: "id_002", // معرف فريد للدورة الجديدة
    course_name: "دورة التصميم الفخم UI/UX",
    image_url: "https://example.com/design_cover.jpg",
    description: "كيفية تصميم واجهات مستخدم احترافية باستخدام ألوان الذهب والكحلي.",
    episodes_count: 2,
    episodes: [
      {
        ep_id: 1,
        title: "أساسيات اختيار الألوان الملكية",
        video_url: "https://youtube.com/watch?v=design1",
        duration: "12:45"
      },
      {
        ep_id: 2,
        title: "تنسيق الخطوط والعناصر",
        video_url: "https://youtube.com/watch?v=design2",
        duration: "18:20"
      }
    ]
  }
];
