/**
 * ملف الفهرس المركزي - المختار التعليمي
 * يحتوي على روابط ملفات البيانات بصيغة Raw
 */

// قائمة الروابط (تم الاقتصار على الرابط الذي زودتني به)
const data_sources = [
  "https://raw.githubusercontent.com/abrahymbaqr678-collab/Repository-name/refs/heads/main/data_part1.js"
];

/**
 * دالة جلب البيانات ودمجها من الروابط
 * سيقوم التطبيق باستدعاء هذه الدالة لجلب الدورات من الملف المذكور أعلاه
 */
async function fetchAllCourses() {
    let all_courses = [];
    
    for (let url of data_sources) {
        try {
            // جلب محتوى ملف الـ JS من GitHub
            const response = await fetch(url);
            if (!response.ok) throw new Error('فشل جلب الملف من الرابط');
            
            const scriptContent = await response.text();
            
            // تنفيذ محتوى الملف لاستخراج مصفوفة courses_list
            eval(scriptContent); 
            
            // التأكد من وجود المصفوفة ودمجها في القائمة النهائية
            if (typeof courses_list !== 'undefined') {
                all_courses = all_courses.concat(courses_list);
            }
        } catch (error) {
            console.error("خطأ في جلب البيانات من: " + url, error);
        }
    }
    
    return all_courses;
}
