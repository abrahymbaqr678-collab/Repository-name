/**
 * ملف الفهرس المركزي (Master Index)
 * وظيفة هذا الملف: الربط بين التطبيق وملفات البيانات المرفوعة على GitHub
 */

// قائمة بروابط الملفات (استخدم دائماً روابط RAW من GitHub)
const data_sources = [
  "https://raw.githubusercontent.com/username/repo/main/data_part1.js",
  "https://raw.githubusercontent.com/username/repo/main/data_part2.js",
  "https://raw.githubusercontent.com/username/repo/main/data_part3.js",
  "https://raw.githubusercontent.com/username/repo/main/data_part4.js"
];

/**
 * دالة برمجية جاهزة لجلب ودمج البيانات
 * يمكنك استدعاؤها داخل تطبيقك لجلب كافة الدورات من الروابط أعلاه
 */
async function fetchAllCourses() {
    let all_courses = [];
    
    for (let url of data_sources) {
        try {
            const response = await fetch(url);
            const scriptContent = await response.text();
            
            // تنفيذ الكود المستلم لاستخراج مصفوفة courses_list
            eval(scriptContent); 
            
            // دمج الدورات في المصفوفة النهائية
            if (typeof courses_list !== 'undefined') {
                all_courses = all_courses.concat(courses_list);
            }
        } catch (error) {
            console.error("فشل الوصول إلى الملف: " + url);
        }
    }
    
    return all_courses;
}
