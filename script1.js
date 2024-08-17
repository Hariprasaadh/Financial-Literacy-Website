document.addEventListener('DOMContentLoaded', function() {
    // Sample course data
    const courses = [
        { 
            title: 'Budgeting Basics', 
            image: 'budgeting.jpg', 
            description: 'Learn the fundamentals of budgeting and take control of your finances.',
            duration: '4 weeks',
            level: 'Beginner'
        },
        { 
            title: 'Investing 101', 
            image: 'investing.jpg', 
            description: 'Understand how to start investing and grow your wealth over time.',
            duration: '6 weeks',
            level: 'Intermediate'
        },
        { 
            title: 'Debt Management', 
            image: 'debt.jpg', 
            description: 'Discover effective strategies to manage and reduce your debt.',
            duration: '4 weeks',
            level: 'Beginner'
        },
        { 
            title: 'Saving for the Future', 
            image: 'saving.jpg', 
            description: 'Learn how to set financial goals and save for major life events.',
            duration: '5 weeks',
            level: 'Beginner'
        }
    ];

    // Populate courses
    const courseGrid = document.querySelector('.course-grid');
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
    <img src="${course.image}" alt="${course.title}">
    <div class="course-card-content">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p><strong>Level:</strong> ${course.level}</p>
        <a href="#" class="cta-button">Enroll Now</a>
    </div>
`;
        courseGrid.appendChild(courseCard);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});