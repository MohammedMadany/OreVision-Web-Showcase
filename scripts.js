// Product data for OreVision Hub
const products = [
    {
        id: 1,
        image: "images/feldspar.jpg",
        en: {
            name: "Feldspar",
            description: "High-quality feldspar for ceramics and glass production, sourced from Egyptian quarries.",
            price: "$200 per ton",
            specifications: [
                "Chemical Composition: KAlSi₃O₈",
                "Purity: 98%",
                "Color: White to Pink",
                "Grain Size: 0.5-2 mm"
            ]
        },
        ar: {
            name: "الفلسبار",
            description: "فلسبار عالي الجودة لإنتاج السيراميك والزجاج، مصدره محاجر مصرية.",
            price: "200 دولار للطن",
            specifications: [
                "التركيب الكيميائي: KAlSi₃O₈",
                "النقاء: 98%",
                "اللون: أبيض إلى وردي",
                "حجم الحبيبات: 0.5-2 مم"
            ]
        }
    },
    {
        id: 2,
        image: "images/quartz.jpg",
        en: {
            name: "Quartz",
            description: "High-purity quartz for electronics, optics, and construction industries, ideal for industrial applications.",
            price: "$250 per ton",
            specifications: [
                "Chemical Composition: SiO₂",
                "Purity: 99.5%",
                "Color: Transparent to White",
                "Grain Size: 1-3 mm"
            ]
        },
        ar: {
            name: "الكوارتز",
            description: "كوارتز عالي النقاء للصناعات الإلكترونية والبصرية والبناء، مثالي للتطبيقات الصناعية.",
            price: "250 دولار للطن",
            specifications: [
                "التركيب الكيميائي: SiO₂",
                "النقاء: 99.5%",
                "اللون: شفاف إلى أبيض",
                "حجم الحبيبات: 1-3 مم"
            ]
        }
    },
    {
        id: 3,
        image: "images/manganese.jpg",
        en: {
            name: "Manganese Ore",
            description: "High-grade manganese ore for steel production and chemical industries, ensuring robust performance.",
            price: "$300 per ton",
            specifications: [
                "Mn Content: 40-50%",
                "Purity: 95%",
                "Color: Black to Brown",
                "Grain Size: 10-50 mm"
            ]
        },
        ar: {
            name: "خام المنجنيز",
            description: "خام منجنيز عالي الجودة لإنتاج الصلب والصناعات الكيميائية، يضمن أداءً قويًا.",
            price: "300 دولار للطن",
            specifications: [
                "محتوى المنجنيز: 40-50%",
                "النقاء: 95%",
                "اللون: أسود إلى بني",
                "حجم الحبيبات: 10-50 مم"
            ]
        }
    },
    {
        id: 4,
        image: "images/talc.jpg",
        en: {
            name: "Talc",
            description: "Fine talc powder for cosmetics, plastics, and paper industries, offering superior quality.",
            price: "$180 per ton",
            specifications: [
                "Chemical Composition: Mg₃Si₄O₁₀(OH)₂",
                "Purity: 97%",
                "Color: White to Greenish",
                "Fineness: 325 mesh"
            ]
        },
        ar: {
            name: "التلك",
            description: "مسحوق تلك ناعم للصناعات التجميلية والبلاستيكية والورقية، يوفر جودة فائقة.",
            price: "180 دولار للطن",
            specifications: [
                "التركيب الكيميائي: Mg₃Si₄O₁₀(OH)₂",
                "النقاء: 97%",
                "اللون: أبيض إلى مخضر",
                "النعومة: 325 شبكة"
            ]
        }
    },
    {
        id: 5,
        image: "images/magnetite.jpg",
        en: {
            name: "Magnetite",
            description: "Magnetite ore for iron production and heavy media separation, optimized for industrial efficiency.",
            price: "$220 per ton",
            specifications: [
                "Chemical Composition: Fe₃O₄",
                "Fe Content: 60-65%",
                "Color: Black",
                "Grain Size: 5-20 mm"
            ]
        },
        ar: {
            name: "الماجنتيت",
            description: "خام الماجنتيت لإنتاج الحديد والفصل الإعلامي الثقيل، محسّن للكفاءة الصناعية.",
            price: "220 دولار للطن",
            specifications: [
                "التركيب الكيميائي: Fe₃O₄",
                "محتوى الحديد: 60-65%",
                "اللون: أسود",
                "حجم الحبيبات: 5-20 مم"
            ]
        }
    },
    {
        id: 6,
        image: "images/fluorite.jpg",
        en: {
            name: "Fluorite",
            description: "Fluorite for metallurgy, ceramics, and chemical industries, ensuring high performance.",
            price: "$280 per ton",
            specifications: [
                "Chemical Composition: CaF₂",
                "Purity: 85-95%",
                "Color: Green to Purple",
                "Grain Size: 10-40 mm"
            ]
        },
        ar: {
            name: "الفلوريت",
            description: "فلوريت للمعادن والسيراميك والصناعات الكيميائية، يضمن أداءً عاليًا.",
            price: "280 دولار للطن",
            specifications: [
                "التركيب الكيميائي: CaF₂",
                "النقاء: 85-95%",
                "اللون: أخضر إلى بنفسجي",
                "حجم الحبيبات: 10-40 مم"
            ]
        }
    },
    {
        id: 7,
        image: "images/ilmenite.jpg",
        en: {
            name: "Ilmenite",
            description: "Ilmenite for titanium dioxide production and pigments, ideal for high-quality coatings.",
            price: "$260 per ton",
            specifications: [
                "Chemical Composition: FeTiO₃",
                "TiO₂ Content: 45-50%",
                "Color: Black",
                "Grain Size: 0.1-1 mm"
            ]
        },
        ar: {
            name: "الإلمنيت",
            description: "إلمنيت لإنتاج ثاني أكسيد التيتانيوم والأصباغ، مثالي للطلاءات عالية الجودة.",
            price: "260 دولار للطن",
            specifications: [
                "التركيب الكيميائي: FeTiO₃",
                "محتوى TiO₂: 45-50%",
                "اللون: أسود",
                "حجم الحبيبات: 0.1-1 مم"
            ]
        }
    },
    {
        id: 8,
        image: "images/aswan_clay.jpg",
        en: {
            name: "Aswan Clay",
            description: "High-purity Aswan clay for ceramics and refractory materials, sourced from Egypt’s finest deposits.",
            price: "$160 per cubic meter",
            specifications: [
                "Chemical Composition: Kaolinite",
                "Al₂O₃ Content: 30-35%",
                "Color: White to Light Red",
                "Plasticity: High"
            ]
        },
        ar: {
            name: "طين الأسواني",
            description: "طين أسواني عالي النقاء للسيراميك والمواد المقاومة للحرارة، مصدره أفضل رواسب مصر.",
            price: "160 دولار لكل متر مكعب",
            specifications: [
                "التركيب الكيميائي: الكاولينيت",
                "محتوى Al₂O₃: 30-35%",
                "اللون: أبيض إلى أحمر فاتح",
                "اللزوجة: عالية"
            ]
        }
    },
    {
        id: 9,
        image: "images/phosphate.jpg",
        en: {
            name: "Phosphate Rock",
            description: "Phosphate rock for fertilizers and chemical industries, supporting agricultural productivity.",
            price: "$190 per ton",
            specifications: [
                "Chemical Composition: Ca₅(PO₄)₃",
                "P₂O₅ Content: 28-32%",
                "Color: Gray to Brown",
                "Grain Size: 5-30 mm"
            ]
        },
        ar: {
            name: "صخر الفوسفات",
            description: "صخر فوسفاتي للأسمدة والصناعات الكيميائية، يدعم الإنتاجية الزراعية.",
            price: "190 دولار للطن",
            specifications: [
                "التركيب الكيميائي: Ca₅(PO₄)₃",
                "محتوى P₂O₅: 28-32%",
                "اللون: رمادي إلى بني",
                "حجم الحبيبات: 5-30 مم"
            ]
        }
    },
    {
        id: 10,
        image: "images/hematite.jpg",
        en: {
            name: "Hematite",
            description: "High-grade hematite for iron production, sourced from Egyptian deposits.",
            price: "$150 per ton",
            specifications: [
                "Chemical Composition: Fe₂O₃",
                "Fe Content: 65-70%",
                "Color: Red to Black",
                "Grain Size: 5-30 mm"
            ]
        },
        ar: {
            name: "الهيماتيت",
            description: "هيماتيت عالي الجودة لإنتاج الحديد، مصدره رواسب مصرية.",
            price: "150 دولار للطن",
            specifications: [
                "التركيب الكيميائي: Fe₂O₃",
                "محتوى الحديد: 65-70%",
                "اللون: أحمر إلى أسود",
                "حجم الحبيبات: 5-30 مم"
            ]
        }
    }

    // Add new Products here
];

// Translations for English and Arabic
const translations = {
    en: {
        home: "Home",
        about: "About",
        technology: "Technology",
        benefits: "Benefits",
        hub: "OreVision Hub",
        contact: "Contact",
        register: "Register",
        hero_title: "Revolutionizing Mining with AI-Powered Ore Sorting",
        hero_subtitle: "Boost efficiency, reduce waste, and maximize profits with OreVision.",
        contact_us: "Contact Us",
        about_title: "About OreVision",
        about_text1: "OreVision pioneers AI-powered ore sorting solutions, revolutionizing mining in Egypt and beyond. Our technology enhances efficiency, precision, and sustainability.",
        about_text2: "Founded in 2025 by Mohammed Madany, we focus on empowering SMEs with affordable, scalable sorting services.",
        technology_title: "Our Technology",
        technology_text1: "Our AI-driven system uses computer vision and deep learning to sort minerals like feldspar and quartz in real-time, ensuring high accuracy.",
        technology_text2: "Scalable and adaptable, our technology reduces costs and environmental impact, tailored for MENA’s mining challenges.",
        how_it_works: "How It Works",
        step1: "Image Capture: Industrial cameras scan ores on a conveyor.",
        step2: "AI Analysis: Deep learning identifies valuable minerals.",
        step3: "Automated Sorting: Robots separate ores from waste.",
        benefits_title: "Why Choose OreVision",
        flexibility: "Flexibility",
        flexibility_text: "Adapts to various mineral types and quarry sizes.",
        productivity: "Productivity",
        productivity_text: "Increases sorting speed by up to 30%.",
        quality: "Quality",
        quality_text: "Ensures high-purity mineral output.",
        waste_prevention: "Waste Prevention",
        waste_prevention_text: "Reduces material loss with precise sorting.",
        contact_title: "Contact Us",
        first_name: "First Name*",
        last_name: "Last Name*",
        email: "Email*",
        phone: "Phone Number",
        company: "Company Name",
        country: "Country/Region*",
        select_country: "Please Select",
        message: "Message*",
        submit: "Submit",
        available_minerals: "Available Minerals",
        view_details: "View Details",
        specifications: "Specifications",
        price: "Price",
        payment_options: "Payment Options",
        inquiry: "Request Form",
        company_name: "Company Name*",
        contact_person: "Contact Person*",
        location: "Manufacturing Location*",
        quantity: "Quantity (tons)*",
        select_quantity: "Select quantity",
        custom_quantity: "More than 600 tons",
        submit_inquiry: "Submit Request",
        quick_links: "Quick Links",
        follow_us: "Follow Us",
        copyright: "© 2025 OreVision. All rights reserved.",
        back_to_top: "Top",
        register_title: "Register Your Business",
        license_number: "Business License Number*",
        tax_id: "Tax ID*",
        address: "Address*",
        password: "Password*",
        confirm_password: "Confirm Password*",
        agree_privacy: "I agree to the Privacy Policy and consent to OreVision storing and processing my personal information.",
        password_mismatch: "Passwords do not match.",
        invalid_quantity: "Quantity must be a multiple of 120 tons.",
        map_link: "Google Maps Link (Optional)",
        register_subtext: "Join our B2B platform to access exclusive ores/minerals trading.",
        detect: "Detect Minerals",
        detect_title: "Discover Minerals with AI",
        detect_subtitle: "Upload an image to identify minerals like Baryte, Calcite, Fluorite, and Pyrite using our AI model.",
        upload_image: "Upload Image*",
        results: "Detection Results",
        no_results: "No image uploaded yet.",
        detect_now: "Detect Now",
        no_confident_detections: "No confident mineral detections. Try a clearer, brighter, or closer image.",
        confidence: "Confidence",
        no_description: "No description available.",
        error_message: "Error",
        analyzing: "Analyzing image...",
        no_image_selected: "Please upload an image before detecting.",
        summary: "Summary",
        total_detections: "Total Detections",
        mineral_descriptions: {
            baryte: "Baryte is a mineral used in oil and gas drilling as a weighting agent, and in paints and plastics.",
            calcite: "Calcite is widely used in construction, agriculture, and as a raw material for lime production.",
            fluorite: "Fluorite is essential in metallurgy, ceramics, and chemical industries for its flux properties.",
            pyrite: "Pyrite, known as fool's gold, is used in sulfuric acid production and as a decorative stone."
        }
    },
    ar: {
        home: "الرئيسية",
        about: "عن الشركة",
        technology: "التكنولوجيا",
        benefits: "الفوائد",
        hub: "مركز OreVision",
        contact: "اتصل بنا",
        register: "التسجيل",
        hero_title: "إحداث ثورة في التعدين باستخدام فرز الخام المدعوم بالذكاء الاصطناعي",
        hero_subtitle: "عزز الكفاءة، قلل الهدر، وزد الأرباح مع أوريفيجن.",
        contact_us: "اتصل بنا",
        about_title: "عن OreVision",
        about_text1: "OreVision رائدة في حلول فرز المعادن باستخدام الذكاء الاصطناعي، مما يحدث ثورة في التعدين في مصر وخارجها. تعزز تقنيتنا الكفاءة والدقة والاستدامة.",
        about_text2: "تأسست في عام 2025 على يد محمد مدني، ونركز على تمكين الشركات الصغيرة والمتوسطة بخدمات فرز ميسورة التكلفة وقابلة للتطوير.",
        technology_title: "تكنولوجيتنا",
        technology_text1: "نظامنا المعتمد على الذكاء الاصطناعي يستخدم الرؤية الحاسوبية والتعلم العميق لفرز المعادن مثل الفلسبار والكوارتز في الوقت الفعلي، مما يضمن دقة عالية.",
        technology_text2: "تقنيتنا قابلة للتطوير والتكيف، تقلل التكاليف والأثر البيئي، ومصممة لتحديات التعدين في منطقة الشرق الأوسط وشمال إفريقيا.",
        how_it_works: "كيف يعمل",
        step1: "التقاط الصور: كاميرات صناعية تفحص المعادن على الحزام الناقل.",
        step2: "تحليل الذكاء الاصطناعي: التعلم العميق يحدد المعادن القيمة.",
        step3: "الفرز الآلي: الروبوتات تفصل المعادن عن النفايات.",
        benefits_title: "لماذا تختار OreVision",
        flexibility: "المرونة",
        flexibility_text: "يتكيف مع أنواع المعادن المختلفة وأحجام المحاجر.",
        productivity: "الإنتاجية",
        productivity_text: "يزيد سرعة الفرز بنسبة تصل إلى 30%.",
        quality: "الجودة",
        quality_text: "يضمن إنتاج معادن عالية النقاء.",
        waste_prevention: "منع الهدر",
        waste_prevention_text: "يقلل من فقدان المواد مع الفرز الدقيق.",
        contact_title: "اتصل بنا",
        first_name: "الاسم الأول*",
        last_name: "اسم العائلة*",
        email: "البريد الإلكتروني*",
        phone: "رقم الهاتف",
        company: "اسم الشركة",
        country: "الدولة/المنطقة*",
        select_country: "يرجى الاختيار",
        message: "الرسالة*",
        submit: "إرسال",
        available_minerals: "المعادن المتوفرة",
        view_details: "عرض التفاصيل",
        specifications: "المواصفات",
        price: "السعر",
        payment_options: "خيارات الدفع",
        inquiry: "نموذج الطلب",
        company_name: "اسم الشركة*",
        contact_person: "شخص الاتصال*",
        location: "موقع التصنيع*",
        quantity: "الكمية (طن)*",
        select_quantity: "اختر الكمية",
        custom_quantity: "أكثر من 600 طن",
        submit_inquiry: "إرسال الطلب",
        quick_links: "روابط سريعة",
        follow_us: "تابعنا",
        copyright: "© 2025 OreVision. جميع الحقوق محفوظة.",
        back_to_top: "الأعلى",
        register_title: "سجل شركتك",
        license_number: "رقم الرخصة التجارية*",
        tax_id: "الرقم الضريبي*",
        address: "العنوان*",
        password: "كلمة المرور*",
        confirm_password: "تأكيد كلمة المرور*",
        agree_privacy: "أوافق على سياسة الخصوصية وأسمح لـ OreVision بتخزين ومعالجة معلوماتي الشخصية.",
        password_mismatch: "كلمات المرور غير متطابقة.",
        invalid_quantity: "يجب أن تكون الكمية مضاعفة لـ 120 طن.",
        map_link: "رابط خرائط جوجل (اختياري)",
        register_subtext: "انضم إلى منصتنا التجارية للوصول إلى خدمات تداول الخامات/المعادن الحصرية.",
        detect: "اكتشاف المعادن",
        detect_title: "اكتشف المعادن باستخدام الذكاء الاصطناعي",
        detect_subtitle: "قم برفع صورة لتحديد المعادن مثل الباريت، الكالسيت، الفلوريت، والبيريت باستخدام الذكاء الاصطناعي.",
        upload_image: "رفع الصورة*",
        results: "نتائج الكشف",
        no_results: "لم يتم رفع صورة بعد.",
        detect_now: "اكتشف الآن",
        no_confident_detections: "لا توجد اكتشافات معدنية واثقة. جرب صورة أوضح أو أكثر إضاءة أو أقرب.",
        confidence: "الثقة",
        no_description: "لا توجد وصف متاح.",
        error_message: "خطأ",
        analyzing: "جاري تحليل الصورة...",
        no_image_selected: "يرجى رفع صورة قبل الكشف.",
        summary: "الملخص",
        total_detections: "إجمالي الاكتشافات",
        mineral_descriptions: {
            baryte: "الباريت معدن يُستخدم في حفر النفط والغاز كعامل وزن، وفي الدهانات والبلاستيك.",
            calcite: "الكالسيت يُستخدم على نطاق واسع في البناء، الزراعة، وكمادة خام لإنتاج الجير.",
            fluorite: "الفلوريت ضروري في المعادن والسيراميك والصناعات الكيميائية لخصائصه كعامل صهر.",
            pyrite: "البيريت، المعروف بذهب الأحمق، يُستخدم في إنتاج حمض الكبريتيك وكحجر زخرفي."
        }
    }
};

// Function to update language across the page
function updateLanguage(language) {
    // Store selected language in localStorage
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    
    // Set direction based on language (RTL for Arabic)
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Update Bootstrap CSS for RTL support
    const bootstrapLink = document.getElementById('bootstrap-css');
    bootstrapLink.href = language === 'ar' ?
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css' :
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';

    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[language][key] || key;
    });

    updateFooterLinks(language);
}

// Function to render products in hub.html
function renderProducts(language) {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    productList.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product[language].name}" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">${product[language].name}</h5>
                    <p class="card-text">${product[language].price}</p>
                    <a href="product.html?id=${product.id}" class="btn btn-primary" data-i18n="view_details">${translations[language].view_details}</a>
                </div>
            </div>
        `;
        productList.appendChild(card);
    });
}

// Function to load product details in product.html
function loadProduct(productId, language) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        document.getElementById('product-name').textContent = 'Product Not Found';
        return;
    }

    document.getElementById('product-name').textContent = product[language].name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-description').textContent = product[language].description;
    document.getElementById('product-price').textContent = product[language].price;
    document.getElementById('product_id').value = product.id;

    const specsList = document.getElementById('product-specifications');
    specsList.innerHTML = '';
    product[language].specifications.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });
}

function updateFooterLinks(language) {
    const footerLinks = document.querySelector('footer .col-md-6 ul');
    if (!footerLinks) return;

    footerLinks.innerHTML = `
        <li><a href="index.html#home" class="text-white" data-i18n="home">${translations[language].home}</a></li>
        <li><a href="index.html#about" class="text-white" data-i18n="about">${translations[language].about}</a></li>
        <li><a href="index.html#technology" class="text-white" data-i18n="technology">${translations[language].technology}</a></li>
        <li><a href="hub.html" class="text-white" data-i18n="hub">${translations[language].hub}</a></li>
        <li><a href="detect.html" class="text-white" data-i18n="detect">${translations[language].detect}</a></li>
        <li><a href="index.html#contact" class="text-white" data-i18n="contact">${translations[language].contact}</a></li>
    `;
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle language switcher
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.value = localStorage.getItem('language') || 'en';
        languageSwitcher.addEventListener('change', function() {
            const language = this.value;
            updateLanguage(language);
            // Re-render products if on hub.html
            if (document.getElementById('product-list')) {
                renderProducts(language);
            }
            // Reload product details if on product.html
            if (document.getElementById('product-details')) {
                const urlParams = new URLSearchParams(window.location.search);
                const productId = parseInt(urlParams.get('id'));
                loadProduct(productId, language);
            }
            // Update detection results if on detect.html
            if (document.getElementById('detection-results')) {
                // Clear results to avoid mismatch
                document.getElementById('results-results').innerHTML = '';
                document.getElementById('no-results').classList.remove('d-none');
                document.getElementById('result-image').classList.add('d-none');
            }
        });
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button functionality
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});