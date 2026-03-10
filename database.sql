-- إنشاء قاعدة البيانات و الجداول لموقع HR Connect Egypt

CREATE DATABASE IF NOT EXISTS hr_connect_egypt CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE hr_connect_egypt;

-- إنشاء جدول العمال
CREATE TABLE IF NOT EXISTS workers (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    age INT(3) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    governorate VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    experience_years INT(2) NOT NULL,
    certificates VARCHAR(255),
    employment_type ENUM('permanent', 'temporary', 'flexible') NOT NULL,
    availability ENUM('immediately', 'two_weeks', 'one_month') NOT NULL,
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- إنشاء جدول الشركات
CREATE TABLE IF NOT EXISTS companies (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    job_type VARCHAR(100) NOT NULL,
    num_workers INT(4) NOT NULL,
    start_date DATE NOT NULL,
    duration_days INT(3) NOT NULL,
    special_requirements TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- إنشاء جدول الوظائف (اختياري لعرض الوظائف)
CREATE TABLE IF NOT EXISTS jobs (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    specialization VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    salary_range VARCHAR(100),
    requirements TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- إدراج بعض الوظائف التجريبية
INSERT INTO jobs (title, description, specialization, location, salary_range, requirements) VALUES
('كهربائي محترف', 'مطلوب كهربائي ذو خبرة في تركيب وصيانة الأنظمة الكهربائية', 'electrical', 'القاهرة', '3000-5000 ج.م', 'خبرة 3 سنوات على الأقل، شهادة كهربائي'),
('ميكانيكي سيارات', 'مطلوب ميكانيكي سيارات لورشة صيانة', 'mechanical', 'الإسكندرية', '2500-4000 ج.م', 'خبرة في صيانة السيارات، أدوات خاصة'),
('عامل بناء', 'مطلوب عمال بناء لمشاريع إنشائية', 'construction', 'كفر الشيخ', '2000-3500 ج.م', 'خبرة في البناء، لياقة بدنية جيدة'),
('حارس أمن', 'مطلوب حراس أمن للمباني والمنشآت', 'security', 'الجيزة', '2200-3200 ج.م', 'خبرة في الأمن، رخصة أمنية'),
('عامل نظافة', 'مطلوب عمال نظافة للمكاتب والمنازل', 'cleaning', 'مختلف المحافظات', '1800-2800 ج.م', 'خبرة في النظافة، جدية في العمل'),
('فني صيانة', 'مطلوب فني صيانة للمعدات والأجهزة', 'maintenance', 'القاهرة', '2800-4500 ج.م', 'خبرة في الصيانة، معرفة بالأدوات');