export function swipingCards() {
  const switchRulesBtn = document.querySelector('#switch-rules');

  switchRulesBtn.addEventListener('click', () => {
    switchRulesBtn.disabled = true;

    const point = document.querySelector('.progress-bar__point');
    const rules = document.querySelectorAll('.rules__card');
    const ruleActiveIndex = Array.from(rules).findIndex(rule =>
      rule.classList.contains('rules__card_active'),
    );

    ruleActiveIndex === 11
      ? (point.style.left = 0)
      : (point.style.left = `${(ruleActiveIndex + 1) * 10}px`);

    rules[ruleActiveIndex].style.animation = 'fade 0.5s ease forwards';
    rules[ruleActiveIndex].style.position = 'absolute';

    try {
      rules[ruleActiveIndex + 1].classList.add('rules__card_active');
      rules[ruleActiveIndex + 1].style.animation = 'flip 1s ease forwards';
    } catch {
      rules[0].classList.add('rules__card_active');
      rules[0].style.animation = 'flip 1s ease forwards';
    }
    setTimeout(() => {
      rules[ruleActiveIndex].classList.remove('rules__card_active');
      rules[ruleActiveIndex].style.position = 'relative';
    }, 500);

    setTimeout(() => {
      switchRulesBtn.disabled = false;
    }, 500);
  });
}
