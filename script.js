function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const toggle = element.querySelector('.faq-toggle');
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer && item.classList.contains('active')) {
            item.classList.remove('active');
            item.previousElementSibling.querySelector('.faq-toggle').textContent = '+';
            item.previousElementSibling.querySelector('.faq-toggle').classList.remove('minus');
        }
    });
        answer.classList.toggle('active');
    if (answer.classList.contains('active')) {
        toggle.textContent = '−';
        toggle.classList.add('minus');
    } else {
        toggle.textContent = '+';
        toggle.classList.remove('minus');
    }
}
