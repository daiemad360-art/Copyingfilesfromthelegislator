// تخزين اللغة الحالية
let currentLang = 'ar';

const translations = {
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'عن الشركة',
    navJobs: 'الوظائف',
    navTestimonials: 'آراء العملاء',
    navContact: 'اتصل بنا',
    title: 'شركة توظيف عمال',
    description: 'نحن شركة متخصصة في توفير العمالة المدربة للشركات والمصانع',
    btnWorker: 'قدّم على وظيفة',
    btnCompany: 'اطلب عمال',
    aboutTitle: 'عن الشركة',
    aboutDesc: 'نقدم خدمات توظيف شاملة مع ضمان جودة العمالة والاحترافية',
    feature1Title: 'عمالة مدربة',
    feature1Desc: 'عمال مدربون وذو خبرة عالية',
    feature2Title: 'سرعة التوظيف',
    feature2Desc: 'توفير عمال في الوقت المناسب',
    feature3Title: 'ضمان الجودة',
    feature3Desc: 'ضمان كامل برضاك عن الخدمة',
    formsTitle: 'ابدأ الآن',
    workerFormTitle: 'نموذج تقديم الطلب',
    companyFormTitle: 'طلب عمال',
    submitWorker: 'إرسال الطلب',
    submitCompany: 'إرسال الطلب',
    footerText: '© 2026 شركة توظيف عمال. جميع الحقوق محفوظة.',
    mainDesc: 'نقدم خدمات توظيف شاملة مع ضمان جودة العمالة والاحترافية',
    stat1Label: 'عميل مرضي',
    stat2Label: 'عامل موظف',
    stat3Label: 'سنوات الخبرة',
    stat4Label: 'رضا العملاء',
    featuresTitle: 'لماذا تختار شركتنا',
    ctaTitle: 'هل تريد الانضمام إلينا؟',
    ctaDesc: 'تقدم على وظيفة أو اطلب عمالة مدربة الآن',
    ctaBtn: 'اذهب إلى نماذج التوظيف',
    pageTitle: '🏢 اطلب عمال مدربين',
    pageSubtitle: 'نوفر لك أفضل العمالة المدربة والموثوقة لشركتك ومصنعك',
    infoTitle: '📋 معلومات مهمة',
    infoText: 'يرجى ملء جميع الحقول المطلوبة بعناية لتقديم طلبك',
    companyInfoTitle: 'معلومات الشركة',
    jobRequestTitle: 'تفاصيل الطلب',
    companyNameLabel: 'اسم الشركة',
    companyPhoneLabel: 'رقم الهاتف',
    companyEmailLabel: 'البريد الإلكتروني',
    companyAddressLabel: 'العنوان',
    jobTypeLabel: 'نوع الوظيفة',
    numWorkersLabel: 'عدد العمال المطلوبين',
    startDateLabel: 'تاريخ البدء المطلوب',
    durationLabel: 'مدة التوظيف (بالأيام)',
    requirementsLabel: 'متطلبات خاصة أو ملاحظات',
    submitBtn: 'إرسال الطلب',
    contactHelp: 'هل تحتاج إلى مساعدة؟',
    contactWays: 'اتصل بنا عبر الهاتف: 01013346497 أو البريد: daiemad360@gmail.com',
    workerPageTitle: '📋 قدّم على وظيفة',
    workerPageSubtitle: 'انضم إلى فريقنا واستمتع ببيئة عمل احترافية وأجور منافسة',
    workerInfoTitle: 'ℹ️ معلومات مهمة',
    workerInfoText: 'يرجى ملء جميع الحقول المطلوبة بعناية وبصدق',
    personalInfoTitle: 'البيانات الشخصية',
    skillsTitle: 'المهارات والخبرة',
    preferencesTitle: 'تفضيلات العمل',
    additionalTitle: 'معلومات إضافية',
    fullNameLabel: 'الاسم الكامل',
    ageLabel: 'السن',
    phoneLabel: 'رقم الهاتف',
    emailLabel: 'البريد الإلكتروني',
    cityLabel: 'المحافظة',
    addressLabel: 'العنوان بالتفصيل',
    jobTypeLabel: 'التخصص المطلوب',
    experienceLabel: 'سنوات الخبرة',
    certificateLabel: 'الشهادات والتدريبات',
    employmentTypeLabel: 'نوع العقد',
    availabilityLabel: 'توفرك للعمل',
    bioLabel: 'عن نفسك (قصة قصيرة)',
    supportTitle: '💡 نصيحة',
    supportText: 'كن صادقاً وصريحاً في ملء النموذج. هذا يساعدنا على اختيار أفضل موظف يناسب احتياجاتك المهنية وطموحاتك.',
    workerContactTitle: '📞 هل تحتاج إلى مساعدة؟',
    workerContactDesc: 'لا تتردد في التواصل معنا',
    successMsgWorker: 'تم إرسال طلبك بنجاح!',
    successTextWorker: 'شكراً لتقديمك على وظيفة معنا. سيقوم فريقنا بمراجعة بيانات طلبك والتواصل معك قريباً.',
    jobsPageTitle: '💼 الوظائف المتاحة',
    jobsPageSubtitle: 'استكشف فرص العمل المتاحة لديننا واختر ما يناسب مهاراتك وطموحاتك',
    filterAll: 'جميع الوظائف',
    filterElectrical: 'كهربائي',
    filterMechanical: 'ميكانيكي',
    filterConstruction: 'بناء',
    filterSecurity: 'أمن',
    applyNow: 'تقدم الآن',
    noJobsFound: 'لا توجد وظائف في هذه الفئة',
    selectCategory: 'يرجى اختيار فئة أخرى أو تفقد جميع الوظائف',
    testimonialsPageTitle: '⭐ آراء عملائنا',
    testimonialsPageSubtitle: 'اقرأ تجارب وآراء عملائنا الراضين عن خدماتنا',
    ratingSummaryTitle: 'تقييمات عملائنا',
    avgLabel: 'متوسط التقييم',
    reviewsLabel: 'عدد التقييمات',
    satisfactionLabel: 'رضا العملاء',
    filterTestAll: 'جميع التقييمات',
    filter5Stars: '⭐⭐⭐⭐⭐ ممتاز',
    filter4Stars: '⭐⭐⭐⭐ جيد جداً',
    filter3Stars: '⭐⭐⭐ جيد',
    noTestimonials: 'لا توجد تقييمات',
    selectRating: 'جاري البحث عن آراء بهذا التقييم',
    missionTitle: '🎯 رسالتنا',
    missionDesc: 'توفير عمالة مدربة واحترافية تلبي احتياجات سوق العمل المصري بأعلى معايير الجودة والاحترافية',
    visionTitle: '🌟 رؤيتنا',
    visionDesc: 'أن نكون الشركة الرائدة في توظيف العمالة المتخصصة في مصر والعالم العربي',
    feature4Title: 'احترافية عالية',
    feature4Desc: 'فريق احترافي يقدم أفضل الخدمات',
    jobsTitle: 'الوظائف المتاحة',
    testimonialsTitle: 'آراء عملائنا',
    testimonial1: 'خدمة ممتازة وعمال ذو كفاءة عالية جداً. أنصح بهم بشدة!',
    testimonial2: 'توظيف سريع واحترافي. تعاملهم رائع جداً!',
    testimonial3: 'أفضل شركة توظيف وظفت بها. جودة ممتازة وخدمة مثالية!',
    client1: 'أحمد محمد - مدير شركة',
    client2: 'فاطمة علي - مالكة مصنع',
    client3: 'محمود إبراهيم - صاحب مقاول',
    footerAbout: 'عن الشركة',
    footerAboutText: 'شركة متخصصة في توفير العمالة المدربة والموثوقة',
    footerLinks: 'الروابط السريعة',
    footerHome: 'الرئيسية',
    footerAboutLink: 'عن الشركة',
    footerContactLink: 'اتصل بنا',
    infoTitle: 'معلومات التواصل',
    phoneLabel: 'رقم الهاتف',
    emailLabel: 'البريد الإلكتروني',
    addressLabel: 'العنوان',
    btnCompany: 'اطلب عمال'
  },
  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navJobs: 'Jobs',
    navTestimonials: 'Testimonials',
    navContact: 'Contact',
    title: 'Employment Company',
    description: 'We specialize in providing trained workers for companies and factories',
    btnWorker: 'Apply for a Job',
    btnCompany: 'Request Workers',
    aboutTitle: 'About Us',
    aboutDesc: 'We provide comprehensive employment services with guaranteed quality and professionalism',
    feature1Title: 'Trained Workers',
    feature1Desc: 'Experienced and trained workers',
    feature2Title: 'Fast Hiring',
    feature2Desc: 'Provide workers on time',
    feature3Title: 'Quality Guarantee',
    feature3Desc: 'Full guarantee of your satisfaction',
    formsTitle: 'Get Started',
    workerFormTitle: 'Apply Now',
    companyFormTitle: 'Request Workers',
    submitWorker: 'Submit',
    submitCompany: 'Submit',
    footerText: '© 2026 Employment Company. All rights reserved.',
    mainDesc: 'We provide comprehensive employment services with guaranteed quality and professionalism',
    stat1Label: 'Happy Clients',
    stat2Label: 'Workers Employed',
    stat3Label: 'Years Experience',
    stat4Label: 'Client Satisfaction',
    featuresTitle: 'Why Choose Us',
    ctaTitle: 'Want to Join Us?',
    ctaDesc: 'Apply for a job or request trained workers now',
    ctaBtn: 'Go to Hiring Forms',
    pageTitle: '🏢 Request Trained Workers',
    pageSubtitle: 'We provide you with the best trained and reliable workers for your company and factory',
    infoTitle: '📋 Important Information',
    infoText: 'Please fill in all required fields carefully to submit your request',
    companyInfoTitle: 'Company Information',
    jobRequestTitle: 'Request Details',
    companyNameLabel: 'Company Name',
    companyPhoneLabel: 'Phone Number',
    companyEmailLabel: 'Email Address',
    companyAddressLabel: 'Address',
    jobTypeLabel: 'Job Type',
    numWorkersLabel: 'Number of Workers Needed',
    startDateLabel: 'Required Start Date',
    durationLabel: 'Employment Duration (Days)',
    requirementsLabel: 'Special Requirements or Notes',
    submitBtn: 'Submit Request',
    contactHelp: 'Need Help?',
    contactWays: 'Contact us via phone: 01013346497 or email: daiemad360@gmail.com',
    workerPageTitle: '📋 Apply for a Job',
    workerPageSubtitle: 'Join our team and enjoy a professional work environment and competitive salaries',
    workerInfoTitle: 'ℹ️ Important Information',
    workerInfoText: 'Please carefully and honestly fill in all required fields',
    personalInfoTitle: 'Personal Information',
    skillsTitle: 'Skills and Experience',
    preferencesTitle: 'Work Preferences',
    additionalTitle: 'Additional Information',
    fullNameLabel: 'Full Name',
    ageLabel: 'Age',
    phoneLabel: 'Phone Number',
    emailLabel: 'Email Address',
    cityLabel: 'Governorate',
    addressLabel: 'Detailed Address',
    jobTypeLabel: 'Preferred Job Type',
    experienceLabel: 'Years of Experience',
    certificateLabel: 'Certificates and Training',
    employmentTypeLabel: 'Employment Type',
    availabilityLabel: 'Your Availability',
    bioLabel: 'About Yourself (Short Story)',
    supportTitle: '💡 Tip',
    supportText: 'Be honest and transparent when filling out the form. This helps us find the best employee that matches your professional needs and aspirations.',
    workerContactTitle: '📞 Need Help?',
    workerContactDesc: 'Feel free to contact us',
    successMsgWorker: 'Your application was submitted successfully!',
    successTextWorker: 'Thank you for applying for a job with us. Our team will review your information and contact you soon.',
    jobsPageTitle: '💼 Available Jobs',
    jobsPageSubtitle: 'Explore available job opportunities and choose what suits your skills and aspirations',
    filterAll: 'All Jobs',
    filterElectrical: 'Electrician',
    filterMechanical: 'Mechanic',
    filterConstruction: 'Construction',
    filterSecurity: 'Security',
    applyNow: 'Apply Now',
    noJobsFound: 'No jobs in this category',
    selectCategory: 'Please select another category or view all jobs',
    testimonialsPageTitle: '⭐ Our Clients Testimonials',
    testimonialsPageSubtitle: 'Read the experiences and opinions of our satisfied clients',
    ratingSummaryTitle: 'Our Client Ratings',
    avgLabel: 'Average Rating',
    reviewsLabel: 'Number of Reviews',
    satisfactionLabel: 'Client Satisfaction',
    filterTestAll: 'All Ratings',
    filter5Stars: '⭐⭐⭐⭐⭐ Excellent',
    filter4Stars: '⭐⭐⭐⭐ Very Good',
    filter3Stars: '⭐⭐⭐ Good',
    noTestimonials: 'No testimonials',
    selectRating: 'Looking for testimonials with this rating',
    missionTitle: '🎯 Our Mission',
    missionDesc: 'To provide trained and professional workers that meet the needs of the Egyptian job market with the highest standards of quality and professionalism',
    visionTitle: '🌟 Our Vision',
    visionDesc: 'To be the leading company in specialized worker employment in Egypt and the Arab world',
    feature4Title: 'High Professionalism',
    feature4Desc: 'A professional team that provides the best services',
    jobsTitle: 'Available Jobs',
    testimonialsTitle: 'Our Clients Testimonials',
    testimonial1: 'Excellent service and highly skilled workers. I highly recommend them!',
    testimonial2: 'Fast and professional hiring. Their service is amazing!',
    testimonial3: 'Best employment company I have worked with. Excellent quality and perfect service!',
    client1: 'Ahmed Mohamed - Company Manager',
    client2: 'Fatima Ali - Factory Owner',
    client3: 'Mahmoud Ibrahim - Contractor',
    footerAbout: 'About Us',
    footerAboutText: 'A specialized company providing trained and reliable workers',
    footerLinks: 'Quick Links',
    footerHome: 'Home',
    footerAboutLink: 'About Us',
    footerContactLink: 'Contact Us',
    infoTitle: 'Contact Information',
    phoneLabel: 'Phone Number',
    emailLabel: 'Email Address',
    addressLabel: 'Address',
    btnCompany: 'Request Workers'
  }
};

function setLanguage(lang) {
  currentLang = lang;
  document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
  
  // تحديث ظهور/إخفاء أزرار اللغة
  const btnArabic = document.getElementById('btnArabic');
  const btnEnglish = document.getElementById('btnEnglish');
  
  if (lang === 'ar') {
    // إذا كانت اللغة عربية، اخفِ زرار العربي وأظهر الإنجليزي
    btnArabic.classList.add('hidden');
    btnEnglish.classList.remove('hidden');
  } else {
    // إذا كانت اللغة إنجليزية، أظهر زرار العربي واخفِ الإنجليزي
    btnArabic.classList.remove('hidden');
    btnEnglish.classList.add('hidden');
  }
  
  const t = translations[lang];
  
  // تحديث العناصر
  document.getElementById('navHome').innerText = t.navHome;
  document.getElementById('navAbout').innerText = t.navAbout;
  if (document.getElementById('navJobs')) document.getElementById('navJobs').innerText = t.navJobs;
  if (document.getElementById('navTestimonials')) document.getElementById('navTestimonials').innerText = t.navTestimonials;
  document.getElementById('navContact').innerText = t.navContact;
  document.getElementById('title').innerText = t.title;
  document.getElementById('description').innerText = t.description;
  if (document.getElementById('btnWorker')) document.getElementById('btnWorker').innerText = t.btnWorker;
  document.getElementById('aboutTitle').innerText = t.aboutTitle;
  document.getElementById('aboutDesc').innerText = t.aboutDesc;
  document.getElementById('statClients').innerText = t.statClients;
  document.getElementById('statWorkers').innerText = t.statWorkers;
  document.getElementById('statYears').innerText = t.statYears;
  document.getElementById('statSatisfaction').innerText = t.statSatisfaction;
  document.getElementById('missionTitle').innerText = t.missionTitle;
  document.getElementById('missionDesc').innerText = t.missionDesc;
  document.getElementById('visionTitle').innerText = t.visionTitle;
  document.getElementById('visionDesc').innerText = t.visionDesc;
  document.getElementById('feature1Title').innerText = t.feature1Title;
  document.getElementById('feature1Desc').innerText = t.feature1Desc;
  document.getElementById('feature2Title').innerText = t.feature2Title;
  document.getElementById('feature2Desc').innerText = t.feature2Desc;
  document.getElementById('feature3Title').innerText = t.feature3Title;
  document.getElementById('feature3Desc').innerText = t.feature3Desc;
  document.getElementById('feature4Title').innerText = t.feature4Title;
  document.getElementById('feature4Desc').innerText = t.feature4Desc;
  document.getElementById('formsTitle').innerText = t.formsTitle;
  document.getElementById('workerFormTitle').innerText = t.workerFormTitle;
  document.getElementById('companyFormTitle').innerText = t.companyFormTitle;
  document.getElementById('submitWorker').innerText = t.submitWorker;
  document.getElementById('submitCompany').innerText = t.submitCompany;
  document.getElementById('footerText').innerText = t.footerText;
  
  // عناصر الصفحة الرئيسية الإضافية
  if (document.getElementById('btnCompany')) document.getElementById('btnCompany').innerText = t.btnCompany;
  if (document.getElementById('jobsTitle')) document.getElementById('jobsTitle').innerText = t.jobsTitle;
  if (document.getElementById('testimonialsTitle')) document.getElementById('testimonialsTitle').innerText = t.testimonialsTitle;
  if (document.getElementById('testimonial1')) document.getElementById('testimonial1').innerText = t.testimonial1;
  if (document.getElementById('testimonial2')) document.getElementById('testimonial2').innerText = t.testimonial2;
  if (document.getElementById('testimonial3')) document.getElementById('testimonial3').innerText = t.testimonial3;
  if (document.getElementById('client1')) document.getElementById('client1').innerText = t.client1;
  if (document.getElementById('client2')) document.getElementById('client2').innerText = t.client2;
  if (document.getElementById('client3')) document.getElementById('client3').innerText = t.client3;
  if (document.getElementById('footerAbout')) document.getElementById('footerAbout').innerText = t.footerAbout;
  if (document.getElementById('footerAboutText')) document.getElementById('footerAboutText').innerText = t.footerAboutText;
  if (document.getElementById('footerLinks')) document.getElementById('footerLinks').innerText = t.footerLinks;
  if (document.getElementById('footerHome')) document.getElementById('footerHome').innerText = t.footerHome;
  if (document.getElementById('footerAboutLink')) document.getElementById('footerAboutLink').innerText = t.footerAboutLink;
  if (document.getElementById('footerContactLink')) document.getElementById('footerContactLink').innerText = t.footerContactLink;
  if (document.getElementById('infoTitle')) {
    const infoTitle = document.getElementById('infoTitle');
    if (infoTitle.textContent.includes('معلومات') && !infoTitle.textContent.includes('مهمة')) {
      infoTitle.innerText = t.infoTitle;
    }
  }
  if (document.getElementById('phoneLabel')) {
    const phoneLabel = document.getElementById('phoneLabel');
    if (phoneLabel.textContent.includes('هاتف') || phoneLabel.textContent.includes('Phone')) {
      phoneLabel.innerText = t.phoneLabel;
    }
  }
  if (document.getElementById('emailLabel')) {
    const emailLabel = document.getElementById('emailLabel');
    if (emailLabel.textContent.includes('بريد') || emailLabel.textContent.includes('Email')) {
      emailLabel.innerText = t.emailLabel;
    }
  }
  if (document.getElementById('addressLabel')) {
    const addressLabel = document.getElementById('addressLabel');
    if (addressLabel.textContent.includes('عنوان') || addressLabel.textContent.includes('Address')) {
      addressLabel.innerText = t.addressLabel;
    }
  }
  
  // عناصر صفحة About
  if (document.getElementById('mainDesc')) document.getElementById('mainDesc').innerText = t.mainDesc;
  if (document.getElementById('stat1Label')) document.getElementById('stat1Label').innerText = t.stat1Label;
  if (document.getElementById('stat2Label')) document.getElementById('stat2Label').innerText = t.stat2Label;
  if (document.getElementById('stat3Label')) document.getElementById('stat3Label').innerText = t.stat3Label;
  if (document.getElementById('stat4Label')) document.getElementById('stat4Label').innerText = t.stat4Label;
  if (document.getElementById('featuresTitle')) document.getElementById('featuresTitle').innerText = t.featuresTitle;
  if (document.getElementById('ctaTitle')) document.getElementById('ctaTitle').innerText = t.ctaTitle;
  if (document.getElementById('ctaDesc')) document.getElementById('ctaDesc').innerText = t.ctaDesc;
  if (document.getElementById('ctaBtn')) document.getElementById('ctaBtn').innerText = t.ctaBtn;
  
  // عناصر صفحة طلب العمال
  if (document.getElementById('pageTitle')) document.getElementById('pageTitle').innerText = t.pageTitle;
  if (document.getElementById('pageSubtitle')) document.getElementById('pageSubtitle').innerText = t.pageSubtitle;
  if (document.getElementById('infoTitle')) document.getElementById('infoTitle').innerText = t.infoTitle;
  if (document.getElementById('infoText')) document.getElementById('infoText').innerHTML = t.infoText + ' <span style="color: #e74c3c; font-weight: bold;">*</span>';
  if (document.getElementById('companyInfoTitle')) document.getElementById('companyInfoTitle').innerText = t.companyInfoTitle;
  if (document.getElementById('jobRequestTitle')) document.getElementById('jobRequestTitle').innerText = t.jobRequestTitle;
  if (document.getElementById('companyNameLabel')) document.getElementById('companyNameLabel').innerHTML = t.companyNameLabel + ' <span style="color: #e74c3c; font-weight: bold;">*</span>';
  if (document.getElementById('companyPhoneLabel')) document.getElementById('companyPhoneLabel').innerHTML = t.companyPhoneLabel + ' <span style="color: #e74c3c; font-weight: bold;">*</span>';
  if (document.getElementById('companyEmailLabel')) document.getElementById('companyEmailLabel').innerHTML = t.companyEmailLabel + ' <span style="color: #e74c3c; font-weight: bold;">*</span>';
  if (document.getElementById('companyAddressLabel')) document.getElementById('companyAddressLabel').innerHTML = t.companyAddressLabel + ' <span style="color: #e74c3c; font-weight: bold;">*</span>';
  if (document.getElementById('jobTypeLabel')) document.getElementById('jobTypeLabel').innerHTML = t.jobTypeLabel + ' <span style="color: #e74c3c; font-weight: bold;">*</span>';
  if (document.getElementById('numWorkersLabel')) document.getElementById('numWorkersLabel').innerHTML = t.numWorkersLabel + ' <span style="color: #e74c3c; font-weight: bold;">*</span>';
  if (document.getElementById('startDateLabel')) document.getElementById('startDateLabel').innerHTML = t.startDateLabel + ' <span style="color: #e74c3c; font-weight: bold;">*</span>';
  if (document.getElementById('durationLabel')) document.getElementById('durationLabel').innerHTML = t.durationLabel + ' <span style="color: #e74c3c; font-weight: bold;">*</span>';
  if (document.getElementById('requirementsLabel')) document.getElementById('requirementsLabel').innerText = t.requirementsLabel;
  if (document.getElementById('submitBtn')) document.getElementById('submitBtn').innerText = t.submitBtn;
  if (document.getElementById('contactHelp')) document.getElementById('contactHelp').innerText = t.contactHelp;
  if (document.getElementById('contactWays')) document.getElementById('contactWays').innerText = t.contactWays;
  
  // عناصر صفحة تقديم الطلب للعامل (worker.html)
  if (document.getElementById('pageTitle')) {
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle.textContent.includes('اطلب') || pageTitle.textContent.includes('Request')) {
      // هذه صفحة تقديم الطلب - لا نحدثها هنا
    } else {
      // تحديث لصفحة أخرى
    }
  }
  
  // تحديث عناصر worker.html
  if (document.getElementById('workerApplicationForm')) {
    if (document.getElementById('pageTitle')) document.getElementById('pageTitle').innerText = t.workerPageTitle;
    if (document.getElementById('pageSubtitle')) document.getElementById('pageSubtitle').innerText = t.workerPageSubtitle;
    if (document.getElementById('infoTitle')) document.getElementById('infoTitle').innerText = t.workerInfoTitle;
    if (document.getElementById('infoText')) document.getElementById('infoText').innerHTML = t.workerInfoText + ' <span class="required">*</span>';
    if (document.getElementById('personalInfoTitle')) document.getElementById('personalInfoTitle').innerText = t.personalInfoTitle;
    if (document.getElementById('skillsTitle')) document.getElementById('skillsTitle').innerText = t.skillsTitle;
    if (document.getElementById('preferencesTitle')) document.getElementById('preferencesTitle').innerText = t.preferencesTitle;
    if (document.getElementById('additionalTitle')) document.getElementById('additionalTitle').innerText = t.additionalTitle;
    if (document.getElementById('fullNameLabel')) document.getElementById('fullNameLabel').innerHTML = t.fullNameLabel + ' <span class="required">*</span>';
    if (document.getElementById('ageLabel')) document.getElementById('ageLabel').innerHTML = t.ageLabel + ' <span class="required">*</span>';
    if (document.getElementById('phoneLabel')) document.getElementById('phoneLabel').innerHTML = t.phoneLabel + ' <span class="required">*</span>';
    if (document.getElementById('emailLabel')) document.getElementById('emailLabel').innerText = t.emailLabel;
    if (document.getElementById('cityLabel')) document.getElementById('cityLabel').innerHTML = t.cityLabel + ' <span class="required">*</span>';
    if (document.getElementById('addressLabel')) document.getElementById('addressLabel').innerHTML = t.addressLabel + ' <span class="required">*</span>';
    if (document.getElementById('jobTypeLabel')) document.getElementById('jobTypeLabel').innerHTML = t.jobTypeLabel + ' <span class="required">*</span>';
    if (document.getElementById('experienceLabel')) document.getElementById('experienceLabel').innerHTML = t.experienceLabel + ' <span class="required">*</span>';
    if (document.getElementById('certificateLabel')) document.getElementById('certificateLabel').innerText = t.certificateLabel;
    if (document.getElementById('employmentTypeLabel')) document.getElementById('employmentTypeLabel').innerHTML = t.employmentTypeLabel + ' <span class="required">*</span>';
    if (document.getElementById('availabilityLabel')) document.getElementById('availabilityLabel').innerHTML = t.availabilityLabel + ' <span class="required">*</span>';
    if (document.getElementById('bioLabel')) document.getElementById('bioLabel').innerText = t.bioLabel;
    if (document.getElementById('supportTitle')) document.getElementById('supportTitle').innerText = t.supportTitle;
    if (document.getElementById('supportText')) document.getElementById('supportText').innerText = t.supportText;
    if (document.getElementById('submitBtn')) document.getElementById('submitBtn').innerText = t.submitBtn;
    if (document.getElementById('contactTitle')) document.getElementById('contactTitle').innerText = t.workerContactTitle;
    if (document.getElementById('contactDesc')) document.getElementById('contactDesc').innerText = t.workerContactDesc;
  }
  
  // تحديث عناصر صفحة الوظائف (jobs.html)
  if (document.getElementById('jobsPageTitle')) {
    document.getElementById('jobsPageTitle').innerText = t.jobsPageTitle;
    if (document.getElementById('jobsPageSubtitle')) document.getElementById('jobsPageSubtitle').innerText = t.jobsPageSubtitle;
    if (document.getElementById('filterAll')) document.getElementById('filterAll').innerText = t.filterAll;
    if (document.getElementById('filterElectrical')) document.getElementById('filterElectrical').innerText = t.filterElectrical;
    if (document.getElementById('filterMechanical')) document.getElementById('filterMechanical').innerText = t.filterMechanical;
    if (document.getElementById('filterConstruction')) document.getElementById('filterConstruction').innerText = t.filterConstruction;
    if (document.getElementById('filterSecurity')) document.getElementById('filterSecurity').innerText = t.filterSecurity;
  }

  // تحديث عناصر صفحة الشهادات (testimonials.html)
  if (document.getElementById('testimonialsPageTitle')) {
    document.getElementById('testimonialsPageTitle').innerText = t.testimonialsPageTitle;
    if (document.getElementById('testimonialsPageSubtitle')) document.getElementById('testimonialsPageSubtitle').innerText = t.testimonialsPageSubtitle;
    if (document.getElementById('ratingSummaryTitle')) document.getElementById('ratingSummaryTitle').innerText = t.ratingSummaryTitle;
    if (document.getElementById('avgLabel')) document.getElementById('avgLabel').innerText = t.avgLabel;
    if (document.getElementById('reviewsLabel')) document.getElementById('reviewsLabel').innerText = t.reviewsLabel;
    if (document.getElementById('satisfactionLabel')) document.getElementById('satisfactionLabel').innerText = t.satisfactionLabel;
  }
  
  // تحديث placeholder النماذج
  updateFormPlaceholders(lang);
  
  // re-render page-specific dynamic sections (jobs/testimonials) if present
  if (typeof renderJobs === 'function') renderJobs();
  if (typeof displayJobs === 'function') displayJobs(lang);
  if (typeof displayTestimonials === 'function') displayTestimonials(lang);
  
  // حفظ اللغة المختارة
  localStorage.setItem('language', lang);
}

function updateFormPlaceholders(lang) {
  if (lang === 'ar') {
    // Old form placeholders (for backward compatibility)
    if (document.getElementById('workerName')) {
      document.getElementById('workerName').placeholder = 'الاسم كاملاً';
    }
    if (document.getElementById('workerEmail')) {
      document.getElementById('workerEmail').placeholder = 'البريد الإلكتروني';
    }
    if (document.getElementById('workerPhone')) {
      document.getElementById('workerPhone').placeholder = 'رقم الهاتف';
    }
    if (document.getElementById('workerSkill')) {
      document.getElementById('workerSkill').innerHTML = `
        <option value="">اختر التخصص</option>
        <option value="electrical">كهربائي</option>
        <option value="mechanical">ميكانيكي</option>
        <option value="construction">عمال بناء</option>
        <option value="cleaning">نظافة</option>
        <option value="security">أمن وحراسة</option>
      `;
    }
    
    if (document.getElementById('companyName')) {
      document.getElementById('companyName').placeholder = 'اسم الشركة';
    }
    if (document.getElementById('companyEmail')) {
      document.getElementById('companyEmail').placeholder = 'البريد الإلكتروني';
    }
    if (document.getElementById('companyPhone')) {
      document.getElementById('companyPhone').placeholder = 'رقم الهاتف';
    }
    if (document.getElementById('jobType')) {
      document.getElementById('jobType').innerHTML = `
        <option value="">نوع الوظيفة المطلوبة</option>
        <option value="electrical">كهربائي</option>
        <option value="mechanical">ميكانيكي</option>
        <option value="construction">عمال بناء</option>
        <option value="cleaning">نظافة</option>
        <option value="security">أمن وحراسة</option>
      `;
    }
    if (document.getElementById('numWorkers')) {
      document.getElementById('numWorkers').placeholder = 'عدد العمال';
    }

    // New worker form placeholders
    if (document.getElementById('fullNameInput')) {
      document.getElementById('fullNameInput').placeholder = 'محمد أحمد علي';
    }
    if (document.getElementById('ageInput')) {
      document.getElementById('ageInput').placeholder = '25';
    }
    if (document.getElementById('phoneInput')) {
      document.getElementById('phoneInput').placeholder = '01099999999';
    }
    if (document.getElementById('emailInput')) {
      document.getElementById('emailInput').placeholder = 'example@email.com';
    }
    if (document.getElementById('cityInput')) {
      document.getElementById('cityInput').placeholder = 'القاهرة / الجيزة / الإسكندرية';
    }
    if (document.getElementById('addressInput')) {
      document.getElementById('addressInput').placeholder = 'الحي / الشارع / رقم المنزل';
    }
    if (document.getElementById('jobTypeSelect')) {
      document.getElementById('jobTypeSelect').innerHTML = `
        <option value="">اختر التخصص</option>
        <option value="electrical">كهربائي</option>
        <option value="mechanical">ميكانيكي</option>
        <option value="construction">عامل بناء</option>
        <option value="security">حارس أمن</option>
        <option value="cleaning">عامل نظافة</option>
        <option value="maintenance">عامل صيانة</option>
        <option value="driver">سائق</option>
        <option value="other">أخرى</option>
      `;
    }
    if (document.getElementById('experienceInput')) {
      document.getElementById('experienceInput').placeholder = '3';
    }
    if (document.getElementById('certificateInput')) {
      document.getElementById('certificateInput').placeholder = 'مثل: دورة كهربائية معتمدة';
    }
    if (document.getElementById('employmentTypeSelect')) {
      document.getElementById('employmentTypeSelect').innerHTML = `
        <option value="">اختر نوع العقد</option>
        <option value="permanent">دائم</option>
        <option value="temporary">مؤقت</option>
        <option value="flexible">مرن</option>
      `;
    }
    if (document.getElementById('availabilitySelect')) {
      document.getElementById('availabilitySelect').innerHTML = `
        <option value="">متى يمكنك البدء؟</option>
        <option value="immediately">فوراً</option>
        <option value="two_weeks">أسبوعين</option>
        <option value="one_month">شهر</option>
      `;
    }
    if (document.getElementById('bioInput')) {
      document.getElementById('bioInput').placeholder = 'اخبرنا عن نفسك وعن خبرتك وأسباب رغبتك في العمل معنا...';
    }

  } else {
    // Old form placeholders (for backward compatibility)
    if (document.getElementById('workerName')) {
      document.getElementById('workerName').placeholder = 'Full Name';
    }
    if (document.getElementById('workerEmail')) {
      document.getElementById('workerEmail').placeholder = 'Email';
    }
    if (document.getElementById('workerPhone')) {
      document.getElementById('workerPhone').placeholder = 'Phone Number';
    }
    if (document.getElementById('workerSkill')) {
      document.getElementById('workerSkill').innerHTML = `
        <option value="">Select Specialty</option>
        <option value="electrical">Electrician</option>
        <option value="mechanical">Mechanic</option>
        <option value="construction">Construction Workers</option>
        <option value="cleaning">Cleaning</option>
        <option value="security">Security</option>
      `;
    }
    
    if (document.getElementById('companyName')) {
      document.getElementById('companyName').placeholder = 'Company Name';
    }
    if (document.getElementById('companyEmail')) {
      document.getElementById('companyEmail').placeholder = 'Email';
    }
    if (document.getElementById('companyPhone')) {
      document.getElementById('companyPhone').placeholder = 'Phone Number';
    }
    if (document.getElementById('jobType')) {
      document.getElementById('jobType').innerHTML = `
        <option value="">Job Type Required</option>
        <option value="electrical">Electrician</option>
        <option value="mechanical">Mechanic</option>
        <option value="construction">Construction Workers</option>
        <option value="cleaning">Cleaning</option>
        <option value="security">Security</option>
      `;
    }
    if (document.getElementById('numWorkers')) {
      document.getElementById('numWorkers').placeholder = 'Number of Workers';
    }

    // New worker form placeholders
    if (document.getElementById('fullNameInput')) {
      document.getElementById('fullNameInput').placeholder = 'John Doe';
    }
    if (document.getElementById('ageInput')) {
      document.getElementById('ageInput').placeholder = '25';
    }
    if (document.getElementById('phoneInput')) {
      document.getElementById('phoneInput').placeholder = '+201099999999';
    }
    if (document.getElementById('emailInput')) {
      document.getElementById('emailInput').placeholder = 'example@email.com';
    }
    if (document.getElementById('cityInput')) {
      document.getElementById('cityInput').placeholder = 'Cairo / Giza / Alexandria';
    }
    if (document.getElementById('addressInput')) {
      document.getElementById('addressInput').placeholder = 'District / Street / House No.';
    }
    if (document.getElementById('jobTypeSelect')) {
      document.getElementById('jobTypeSelect').innerHTML = `
        <option value="">Select Specialty</option>
        <option value="electrical">Electrician</option>
        <option value="mechanical">Mechanic</option>
        <option value="construction">Construction Worker</option>
        <option value="security">Security Guard</option>
        <option value="cleaning">Cleaning Staff</option>
        <option value="maintenance">Maintenance Worker</option>
        <option value="driver">Driver</option>
        <option value="other">Other</option>
      `;
    }
    if (document.getElementById('experienceInput')) {
      document.getElementById('experienceInput').placeholder = '3';
    }
    if (document.getElementById('certificateInput')) {
      document.getElementById('certificateInput').placeholder = 'e.g.: Certified Electrical Course';
    }
    if (document.getElementById('employmentTypeSelect')) {
      document.getElementById('employmentTypeSelect').innerHTML = `
        <option value="">Employment Type</option>
        <option value="permanent">Permanent</option>
        <option value="temporary">Temporary</option>
        <option value="flexible">Flexible</option>
      `;
    }
    if (document.getElementById('availabilitySelect')) {
      document.getElementById('availabilitySelect').innerHTML = `
        <option value="">When can you start?</option>
        <option value="immediately">Immediately</option>
        <option value="two_weeks">Two Weeks</option>
        <option value="one_month">One Month</option>
      `;
    }
    if (document.getElementById('bioInput')) {
      document.getElementById('bioInput').placeholder = 'Tell us about yourself, your experience, and why you want to work with us...';
    }
  }
}

// معالجة نموذج العامل
document.getElementById('workerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = {
    name: document.getElementById('workerName').value,
    email: document.getElementById('workerEmail').value,
    phone: document.getElementById('workerPhone').value,
    skill: document.getElementById('workerSkill').value
  };
  
  const message = `طلب عمل جديد:\nالاسم: ${formData.name}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone}\nالتخصص: ${formData.skill}`;
  const whatsappMessage = encodeURIComponent(message);
  
  // فتح WhatsApp
  window.open(`https://wa.me/201013346497?text=${whatsappMessage}`, '_blank');
  
  // فتح البريد الإلكتروني
  window.open(`mailto:daiemad360@gmail.com?subject=طلب عمل جديد&body=${whatsappMessage}`, '_blank');
  
  console.log('Worker Application:', formData);
  alert(currentLang === 'ar' ? 'تم إرسال طلبك! سيتم التواصل معك قريباً' : 'Your application sent! We will contact you soon');
  this.reset();
});

// معالجة نموذج الشركة
document.getElementById('companyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = {
    company: document.getElementById('companyName').value,
    email: document.getElementById('companyEmail').value,
    phone: document.getElementById('companyPhone').value,
    jobType: document.getElementById('jobType').value,
    numWorkers: document.getElementById('numWorkers').value
  };
  
  const message = `طلب عمال جديد:\nاسم الشركة: ${formData.company}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone}\nنوع الوظيفة: ${formData.jobType}\nعدد العمال: ${formData.numWorkers}`;
  const whatsappMessage = encodeURIComponent(message);
  
  // فتح WhatsApp
  window.open(`https://wa.me/201013346497?text=${whatsappMessage}`, '_blank');
  
  // فتح البريد الإلكتروني
  window.open(`mailto:daiemad360@gmail.com?subject=طلب عمال جديد&body=${whatsappMessage}`, '_blank');
  
  console.log('Company Request:', formData);
  alert(currentLang === 'ar' ? 'تم إرسال طلبك! سيتم التواصل معك قريباً' : 'Your request sent! We will contact you soon');
  this.reset();
});

// إضافة click listeners للأزرار الرئيسية للتمرير إلى النماذج
document.getElementById('btnWorker').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    document.getElementById('workerForm').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('workerName').focus();
  }, 500);
});

document.getElementById('btnCompany').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    document.getElementById('companyForm').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('companyName').focus();
  }, 500);
});

// بيانات الوظائف المتاحة
const jobsData = {
  ar: [
    { title: 'كهربائي', salary: '3500 - 5000 جنيه', description: 'كهربائي ذو خبرة لشركات البناء والمصانع' },
    { title: 'ميكانيكي', salary: '4000 - 6000 جنيه', description: 'ميكانيكي متخصص للصيانة والتصليح' },
    { title: 'عامل بناء', salary: '2500 - 4000 جنيه', description: 'عمال بناء مدربون ومنظمون' },
    { title: 'حارس أمن', salary: '3000 - 5000 جنيه', description: 'حراس أمن مدربون محترفون' },
    { title: 'عامل نظافة', salary: '2000 - 3500 جنيه', description: 'عمال نظافة موثوقون ومنظمون' },
    { title: 'عامل صيانة', salary: '3500 - 5500 جنيه', description: 'متخصصو صيانة مباني وأنظمة' }
  ],
  en: [
    { title: 'Electrician', salary: '3500 - 5000 EGP', description: 'Experienced electrician for construction and factories' },
    { title: 'Mechanic', salary: '4000 - 6000 EGP', description: 'Specialized mechanic for maintenance and repair' },
    { title: 'Construction Worker', salary: '2500 - 4000 EGP', description: 'Trained and organized construction workers' },
    { title: 'Security Guard', salary: '3000 - 5000 EGP', description: 'Trained professional security guards' },
    { title: 'Cleaning Staff', salary: '2000 - 3500 EGP', description: 'Reliable and organized cleaning staff' },
    { title: 'Maintenance Worker', salary: '3500 - 5500 EGP', description: 'Specialized maintenance professionals' }
  ]
};

// بيانات الآراء
const testimonialsData = {
  ar: [
    { text: 'خدمة ممتازة وعمال ذو كفاءة عالية جداً. أنصح بهم بشدة!', client: 'أحمد محمد - مدير شركة' },
    { text: 'توظيف سريع واحترافي. تعاملهم رائع جداً!', client: 'فاطمة علي - مالكة مصنع' },
    { text: 'أفضل شركة توظيف وظفت بها. جودة ممتازة وخدمة مثالية!', client: 'محمود إبراهيم - صاحب مقاول' }
  ],
  en: [
    { text: 'Excellent service and highly skilled workers. I highly recommend them!', client: 'Ahmed Mohamed - Company Manager' },
    { text: 'Fast and professional hiring. Great customer service!', client: 'Fatima Ali - Factory Owner' },
    { text: 'Best employment company I have worked with. Excellent quality and perfect service!', client: 'Mahmoud Ibrahim - Contractor' }
  ]
};

// إضافة الترجمات الجديدة
translations.ar.aboutTitle = 'عن الشركة';
translations.ar.aboutDesc = 'نقدم خدمات توظيف شاملة مع ضمان جودة العمالة والاحترافية';
translations.ar.statClients = 'عميل مرضي';
translations.ar.statWorkers = 'عامل موظف';
translations.ar.statYears = 'سنوات خبرة';
translations.ar.statSatisfaction = 'رضا العملاء';
translations.ar.missionTitle = '🎯 رسالتنا';
translations.ar.missionDesc = 'توفير عمالة مدربة واحترافية تلبي احتياجات سوق العمل المصري بأعلى معايير الجودة والاحترافية';
translations.ar.visionTitle = '🌟 رؤيتنا';
translations.ar.visionDesc = 'أن نكون الشركة الرائدة في توظيف العمالة المتخصصة في مصر والعالم العربي';
translations.ar.feature4Title = 'احترافية عالية';
translations.ar.feature4Desc = 'فريق احترافي يقدم أفضل الخدمات';
translations.ar.testimonialsTitle = 'آراء عملائنا';
translations.ar.infoTitle = 'معلومات التواصل';
translations.ar.phoneLabel = 'رقم الهاتف';
translations.ar.phoneValue = '01013346497';
translations.ar.emailLabel = 'البريد الإلكتروني';
translations.ar.emailValue = 'daiemad360@gmail.com';
translations.ar.addressLabel = 'العنوان';
translations.ar.addressValue = 'كفر الشيخ - مركز سيدي سالم، مصر';
translations.ar.footerAbout = 'عن الشركة';
translations.ar.footerAboutText = 'شركة مصرية متخصصة في توفير العمالة المدربة والموثوقة';
translations.ar.footerLinks = 'الروابط السريعة';
translations.ar.footerHome = 'الرئيسية';
translations.ar.footerAboutLink = 'عن الشركة';
translations.ar.footerContact = 'اتصل بنا';

translations.en.aboutTitle = 'About Us';
translations.en.aboutDesc = 'We provide comprehensive employment services with guaranteed quality and professionalism';
translations.en.statClients = 'Happy Clients';
translations.en.statWorkers = 'Workers Employed';
translations.en.statYears = 'Years Experience';
translations.en.statSatisfaction = 'Client Satisfaction';
translations.en.missionTitle = '🎯 Our Mission';
translations.en.missionDesc = 'Providing trained and professional workers that meet the needs of the Egyptian labor market with the highest standards of quality and professionalism';
translations.en.visionTitle = '🌟 Our Vision';
translations.en.visionDesc = 'To be the leading company in employing specialized workers in Egypt and the Arab world';
translations.en.feature4Title = 'High Professionalism';
translations.en.feature4Desc = 'Professional team providing the best services';
translations.en.testimonialsTitle = 'Customer Reviews';
translations.en.infoTitle = 'Contact Information';
translations.en.phoneLabel = 'Phone Number';
translations.en.phoneValue = '01013346497';
translations.en.emailLabel = 'Email';
translations.en.emailValue = 'daiemad360@gmail.com';
translations.en.addressLabel = 'Address';
translations.en.addressValue = 'Kafr El-Sheikh - Sidi Salem, Egypt';
translations.en.footerAbout = 'About Us';
translations.en.footerAboutText = 'Egyptian company specialized in providing trained and reliable workers';
translations.en.footerLinks = 'Quick Links';
translations.en.footerHome = 'Home';
translations.en.footerAboutLink = 'About Us';
translations.en.footerContact = 'Contact Us';

// دالة عرض الوظائف
function displayJobs(lang) {
  const jobsList = document.getElementById('jobsList');
  const jobs = jobsData[lang];
  
  jobsList.innerHTML = jobs.map(job => `
    <div class="job-card">
      <div class="job-title">${job.title}</div>
      <div class="job-salary">${job.salary}</div>
      <div class="job-description">${job.description}</div>
    </div>
  `).join('');
}

// دالة عرض الآراء
function displayTestimonials(lang) {
  const testimonials = testimonialsData[lang];
  document.getElementById('testimonial1').innerText = testimonials[0].text;
  document.getElementById('client1').innerText = testimonials[0].client;
  document.getElementById('testimonial2').innerText = testimonials[1].text;
  document.getElementById('client2').innerText = testimonials[1].client;
  document.getElementById('testimonial3').innerText = testimonials[2].text;
  document.getElementById('client3').innerText = testimonials[2].client;
}


  
  // تحديث معلومات التواصل
  const t = translations[lang];
  if (document.getElementById('phoneLabel')) {
    document.getElementById('phoneLabel').innerText = t.phoneLabel;
    // تحديث الرابط للهاتف
    const phoneLink = document.getElementById('phoneValue').parentElement.querySelector('a');
    if (phoneLink) phoneLink.textContent = t.phoneValue;
    
    document.getElementById('emailLabel').innerText = t.emailLabel;
    // تحديث الرابط للبريد
    const emailLink = document.getElementById('emailValue').parentElement.querySelector('a');
    if (emailLink) emailLink.textContent = t.emailValue;
    
    document.getElementById('addressLabel').innerText = t.addressLabel;
    document.getElementById('addressValue').innerText = t.addressValue;
    document.getElementById('jobsTitle').innerText = t.jobsTitle;
    document.getElementById('testimonialsTitle').innerText = t.testimonialsTitle;
    document.getElementById('infoTitle').innerText = t.infoTitle;
    
    if (document.getElementById('footerAbout')) {
      document.getElementById('footerAbout').innerText = t.footerAbout;
      document.getElementById('footerAboutText').innerText = t.footerAboutText;
      document.getElementById('footerLinks').innerText = t.footerLinks;
      document.getElementById('footerHome').innerText = t.footerHome;
      document.getElementById('footerAboutLink').innerText = t.footerAboutLink;
      document.getElementById('footerContact').innerText = t.footerContact;
    }
  }
};

// تحميل اللغة المحفوظة عند فتح الموقع
window.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('language') || 'ar';
  setLanguage(savedLang);
  
  // إضافة click listeners للأزرار اللغة
  const btnArabic = document.getElementById('btnArabic');
  const btnEnglish = document.getElementById('btnEnglish');
  
  if (btnArabic) {
    btnArabic.addEventListener('click', function() {
      setLanguage('ar');
    });
  }
  
  if (btnEnglish) {
    btnEnglish.addEventListener('click', function() {
      setLanguage('en');
    });
  }
  
  // إضافة تأثيرات fade-in للبطاقات عند التحميل
  const cards = document.querySelectorAll('.feature-card, .job-card, .testimonial-card, .info-card, .form-box');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});