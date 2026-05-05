const eventsDatabase = {
    1: {
        id: 1,
        title: 'مؤتمر التكنولوجيا والابتكار',
        image: 'images/event1.jpg',
        date: '15 مايو 2026',
        time: '10:00 صباحاً - 4:00 مساءً',
        location: 'القاعة الرئيسية',
        category: 'tech',
        categoryBadge: 'تقنية',
        categoryColor: 'bg-primary',
        description: 'اجتماع سنوي يجمع الخبراء والمتخصصين في مجال التكنولوجيا والابتكار. يتناول المؤتمر أحدث التطورات التكنولوجية والاتجاهات المستقبلية في مختلف المجالات.',
        fullDescription: 'اجتماع سنوي يجمع الخبراء والمتخصصين في مجال التكنولوجيا والابتكار. يتناول المؤتمر أحدث التطورات التكنولوجية والاتجاهات المستقبلية في مختلف المجالات.\n\nيشمل البرنامج محاضرات من متحدثين بارزين، جلسات نقاش تفاعلية، وورش عمل عملية. يوفر المؤتمر فرصة ممتازة للتواصل والتعاون مع المتخصصين في المجال.',
        organizer: 'الجامعة الافتراضية السورية',
        capacity: '500 شخص',
        fee: 'مجاني',
        status: 'متاح للتسجيل',
        registrations: 234,
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.0856254629316!2d36.20622!3d33.51349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413c0001%3A0x937f0b1d830faec7!2z2K_Yp9mF2YrYpyDYp9mE2K_Yp9iq2LHZiNiv!5e0!3m2!1sar!2s!4v1234567890',
        relatedEvents: [4, 5]
    },
    2: {
        id: 2,
        title: 'بطولة كرة القدم الجامعية',
        image: 'images/event2.jpg',
        date: '20 مايو 2026',
        time: '3:00 مساءً - 9:00 مساءً',
        location: 'الملعب الرياضي',
        category: 'sports',
        categoryBadge: 'رياضة',
        categoryColor: 'bg-danger',
        description: 'منافسة رياضية مثيرة بين فرق الجامعة المختلفة. تتنافس 8 فرق للفوز بالبطولة.',
        fullDescription: 'منافسة رياضية مثيرة بين فرق الجامعة المختلفة. تتنافس 8 فرق للفوز بالبطولة.\n\nتشمل البطولة مباريات تصفيات وحتى النهائي. سيتم توزيع جوائز قيمة على الفريق الفائز والفريق الثاني والثالث. الحضور مفتوح للجميع ومجاني.',
        organizer: 'إدارة الرياضة الجامعية',
        capacity: '2000 شخص',
        fee: 'مجاني',
        status: 'متاح للتسجيل',
        registrations: 450,
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.0856254629316!2d36.20622!3d33.51349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413c0001%3A0x937f0b1d830faec7!2z2K_Yp9mF2YrYpyDYp9mE2K_Yp9iq2LHZiNiv!5e0!3m2!1sar!2s!4v1234567890',
        relatedEvents: [6, 1]
    },
    3: {
        id: 3,
        title: 'حفل الموسيقى الكلاسيكية',
        image: 'images/event3.jpg',
        date: '25 مايو 2026',
        time: '7:00 مساءً - 10:00 مساءً',
        location: 'قاعة الحفلات',
        category: 'music',
        categoryBadge: 'موسيقى',
        categoryColor: 'bg-success',
        description: 'عرض موسيقي رائع يقدمه فنانون محترفون. برنامج متنوع من الموسيقى الكلاسيكية.',
        fullDescription: 'عرض موسيقي رائع يقدمه فنانون محترفون. برنامج متنوع من الموسيقى الكلاسيكية.\n\nسيقدم الفنانون أعمالاً كلاسيكية شهيرة من أساتذة الموسيقى العالميين. الحفل مناسب لجميع الأعمار ويوفر تجربة موسيقية فريدة.',
        organizer: 'قسم الفنون والثقافة',
        capacity: '300 شخص',
        fee: 'مجاني',
        status: 'متاح للتسجيل',
        registrations: 189,
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.0856254629316!2d36.20622!3d33.51349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413c0001%3A0x937f0b1d830faec7!2z2K_Yp9mF2YrYpyDYp9mE2K_Yp9iq2LHZiNiv!5e0!3m2!1sar!2s!4v1234567890',
        relatedEvents: [1, 5]
    },
    4: {
        id: 4,
        title: 'ندوة الذكاء الاصطناعي',
        image: 'images/event4.jpg',
        date: '10 مايو 2026',
        time: '2:00 مساءً - 5:00 مساءً',
        location: 'المدرج',
        category: 'tech',
        categoryBadge: 'تقنية',
        categoryColor: 'bg-primary',
        description: 'استكشف تطبيقات الذكاء الاصطناعي في العالم الحديث. ندوة تفاعلية مع خبراء متخصصين.',
        fullDescription: 'استكشف تطبيقات الذكاء الاصطناعي في العالم الحديث. ندوة تفاعلية مع خبراء متخصصين.\n\nتغطي الندوة أحدث التطورات في مجال الذكاء الاصطناعي، التعلم الآلي، والشبكات العصبية. ستتضمن الندوة عروض توضيحية عملية وجلسات أسئلة وأجوبة.',
        organizer: 'كلية الهندسة والتكنولوجيا',
        capacity: '400 شخص',
        fee: 'مجاني',
        status: 'متاح للتسجيل',
        registrations: 312,
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.0856254629316!2d36.20622!3d33.51349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413c0001%3A0x937f0b1d830faec7!2z2K_Yp9mF2YrYpyDYp9mE2K_Yp9iq2LHZiNiv!5e0!3m2!1sar!2s!4v1234567890',
        relatedEvents: [1, 2]
    },
    5: {
        id: 5,
        title: 'مسابقة الكتابة الإبداعية',
        image: 'images/event5.jpg',
        date: '12 مايو 2026',
        time: '11:00 صباحاً - 1:00 مساءً',
        location: 'القاعة الرئيسية',
        category: 'culture',
        categoryBadge: 'أدب',
        categoryColor: 'bg-info',
        description: 'فرصة لعرض مواهبك في الكتابة والإبداع. مسابقة مفتوحة لجميع الطلاب.',
        fullDescription: 'فرصة لعرض مواهبك في الكتابة والإبداع. مسابقة مفتوحة لجميع الطلاب.\n\nيمكن المشاركة بقصص قصيرة أو شعر أو مقالات إبداعية. سيتم تقييم الأعمال من قبل لجنة متخصصة وتوزيع جوائز للفائزين.',
        organizer: 'قسم اللغة العربية والآداب',
        capacity: '200 شخص',
        fee: 'مجاني',
        status: 'متاح للتسجيل',
        registrations: 156,
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.0856254629316!2d36.20622!3d33.51349!2m3!1f0!2f0!3f0!3m2!1i1024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413c0001%3A0x937f0b1d830faec7!2z2K_Yp9mF2YrYpyDYp9mE2K_Yp9iq2LHZiNiv!5e0!3m2!1sar!2s!4v1234567890',
        relatedEvents: [3, 4]
    },
    6: {
        id: 6,
        title: 'بطولة الشطرنج',
        image: 'images/event6.jpg',
        date: '18 مايو 2026',
        time: '4:00 مساءً - 8:00 مساءً',
        location: 'الملعب الرياضي',
        category: 'sports',
        categoryBadge: 'رياضة ذهنية',
        categoryColor: 'bg-warning',
        description: 'منافسة ذهنية مثيرة بين أفضل لاعبي الشطرنج. بطولة سنوية للجامعة.',
        fullDescription: 'منافسة ذهنية مثيرة بين أفضل لاعبي الشطرنج. بطولة سنوية للجامعة.\n\nتتنافس أفضل العقول في لعبة الشطرنج. البطولة تتضمن عدة جولات وسيتم تتويج الفائز الأول والثاني والثالث. مفتوح للجميع ومجاني.',
        organizer: 'نادي الشطرنج الجامعي',
        capacity: '150 شخص',
        fee: 'مجاني',
        status: 'متاح للتسجيل',
        registrations: 87,
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.0856254629316!2d36.20622!3d33.51349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413c0001%3A0x937f0b1d830faec7!2z2K_Yp9mF2YrYpyDYp9mE2K_Yp9iq2LHZiNiv!5e0!3m2!1sar!2s!4v1234567890',
        relatedEvents: [2, 1]
    }
};

// وظائف قاعدة البيانات 
function getEventById(eventId) {
    return eventsDatabase[eventId] || null;
}

function getAllEvents() {
    return Object.values(eventsDatabase);
}

function getRelatedEvents(eventId) {
    const event = getEventById(eventId);
    if (!event) return [];
    return event.relatedEvents.map(id => getEventById(id)).filter(e => e !== null);
}


// التهيئة عند تحميل الصفحة 
document.addEventListener('DOMContentLoaded', function() {
    console.log('SVU Events Guide loaded successfully');
    initializeSliders();
    initializeFilters();
    initializeTooltips();
});

// تهيئة أشرطة التمرير(السلايدر)
function initializeSliders() {
    const carousel = document.getElementById('eventsCarousel');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            keyboard: true
        });
    }
}

// تهيئة فلاتر البحث و التصنيف 
function initializeFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const locationFilter = document.getElementById('locationFilter');

    if (searchInput) {
        searchInput.addEventListener('input', filterEvents);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterEvents);
    }
    if (locationFilter) {
        locationFilter.addEventListener('change', filterEvents);
    }
}

// وظيفة فلترة الفعاليات 
function filterEvents() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const locationFilter = document.getElementById('locationFilter');
    const eventsList = document.getElementById('eventsList');

    if (!eventsList) return;

    const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
    const categoryValue = categoryFilter ? categoryFilter.value : '';
    const locationValue = locationFilter ? locationFilter.value : '';

    const events = eventsList.querySelectorAll('.col-md-6');

    events.forEach(event => {
        const title = event.querySelector('.card-title') ? event.querySelector('.card-title').textContent.toLowerCase() : '';
        const text = event.querySelector('.card-text') ? event.querySelector('.card-text').textContent.toLowerCase() : '';
        const badge = event.querySelector('.badge') ? event.querySelector('.badge').textContent.toLowerCase() : '';

        let matches = true;

        if (searchValue && !title.includes(searchValue) && !text.includes(searchValue)) {
            matches = false;
        }

        if (categoryValue && !badge.includes(categoryValue)) {
            matches = false;
        }

        if (locationValue) {
            const location = event.querySelector('.text-muted') ? event.querySelector('.text-muted').textContent.toLowerCase() : '';
            if (!location.includes(locationValue)) {
                matches = false;
            }
        }

        event.style.display = matches ? 'block' : 'none';
    });
}

// وظيفة التلميحات 
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// التمرير السلس للرةابط التي تنقل لداخل الصفحة
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// وظيفة الأضافة إلى التقويم 
function addToCalendar() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    const event = getEventById(parseInt(eventId));

    if (event) {
        alert(`تم إضافة "${event.title}" إلى تقويمك بنجاح!`);
    }
}

// وظيفة مشاركة الفعالية 
function shareEvent() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    const event = getEventById(parseInt(eventId));

    if (!event) return;

    if (navigator.share) {
        navigator.share({
            title: event.title,
            text: `اكتشف "${event.title}" - ${event.description}`,
            url: window.location.href
        });
    } else {
        alert('تم نسخ رابط الفعالية إلى الحافظة');
        navigator.clipboard.writeText(window.location.href);
    }
}

// وظيفة زر العودة إلى الأعلى
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// وظيفة الربط بين روابط الصفحات 
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// وظيفةتحميل تفاصيل الفعالية 
function loadEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    if (!eventId) {
        showErrorMessage();
        return;
    }

    const event = getEventById(parseInt(eventId));

    if (!event) {
        showErrorMessage();
        return;
    }

    document.title = event.title + ' - دليل الجامعة الافتراضية';
    document.getElementById('breadcrumbTitle').textContent = event.title;
    document.getElementById('eventImage').src = event.image;
    document.getElementById('eventImage').alt = event.title;
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventDate').textContent = event.date;
    document.getElementById('eventTime').textContent = event.time;
    document.getElementById('eventLocation').textContent = event.location;

    const badge = document.getElementById('eventBadge');
    badge.textContent = event.categoryBadge;
    badge.className = 'badge ' + event.categoryColor;

    document.getElementById('eventDescription').textContent = event.fullDescription;
    document.getElementById('eventMap').src = event.mapEmbedUrl;
    document.getElementById('eventOrganizer').textContent = event.organizer;
    document.getElementById('eventCapacity').textContent = event.capacity;
    document.getElementById('eventFee').textContent = event.fee;
    document.getElementById('eventStatus').textContent = event.status;
    document.getElementById('eventRegistrations').textContent = event.registrations;

    loadRelatedEvents(event.relatedEvents);
}

function loadRelatedEvents(relatedEventIds) {
    const container = document.getElementById('relatedEventsContainer');
    if (!container) return;

    container.innerHTML = '';

    relatedEventIds.forEach(eventId => {
        const event = getEventById(eventId);
        if (event) {
            const eventCard = `
                <div class="col-md-6">
                    <div class="card border-0 shadow-sm">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}" style="height: 150px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">${event.title}</h5>
                            <p class="text-muted"><small>📅 ${event.date}</small></p>
                            <a href="event.html?id=${event.id}" class="btn btn-sm btn-outline-primary">عرض التفاصيل</a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += eventCard;
        }
    });
}

function showErrorMessage() {
    const detailsSection = document.getElementById('eventDetailsSection');
    const errorSection = document.getElementById('errorSection');

    if (detailsSection) detailsSection.style.display = 'none';
    if (errorSection) errorSection.style.display = 'block';
}

// وظيفة تحميل فلتر الفئات 
function loadCategoryFilter() {
    const category = getUrlParameter('category');
    if (category) {
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = category;
            filterEvents();
        }
    }
}

// إضافة تأثيرات حركية عند التحريك للأسفل 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// مراقبة جميع البطاقات لتطيق وظيفة الظهور التلقائي 
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// معالجة أخطاء إرسال النماذج 
document.addEventListener('submit', function(e) {
    const form = e.target;

    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
        }
    });

    if (!isValid) {
        e.preventDefault();
    }
});

//  إزالة علامةا غير صالحة عند الكتابة داخل الحقل 
document.addEventListener('input', function(e) {
    if (e.target.classList.contains('is-invalid')) {
        if (e.target.value.trim()) {
            e.target.classList.remove('is-invalid');
        }
    }
});

// إختصار لوحة المفاتيح 
document.addEventListener('keydown', function(e) {
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    }

    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const locationFilter = document.getElementById('locationFilter');

        if (searchInput) searchInput.value = '';
        if (categoryFilter) categoryFilter.value = '';
        if (locationFilter) locationFilter.value = '';

        filterEvents();
    }
});

// تهيئة الوظائف الخاصة لكل صفحة 
if (document.body.contains(document.getElementById('eventsList'))) {
    loadCategoryFilter();
}

if (document.body.contains(document.querySelector('.event-details'))) {
    loadEventDetails();
}

console.log('SVU Events Guide - All scripts loaded successfully');