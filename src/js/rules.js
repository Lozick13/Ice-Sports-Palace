export function swipingCards() {
  const switchRulesBtn = document.querySelector('#switch-rules');
  const point = document.querySelector('.progress-bar__point');
  const rules = document.querySelectorAll('.rules__card');

  switchRulesBtn.addEventListener('click', () => {
    const ruleActiveIndex = Array.from(rules).findIndex(rule =>
      rule.classList.contains('rules__card_active'),
    );
    const nextRuleIndex = (ruleActiveIndex + 1) % rules.length;

    switchRulesBtn.disabled = true;
    point.style.left = `${nextRuleIndex * 10}px`;

    rules[ruleActiveIndex].style.animation = 'fade 0.5s ease forwards';
    rules[ruleActiveIndex].style.position = 'absolute';

    rules[nextRuleIndex].classList.add('rules__card_active');
    rules[nextRuleIndex].style.animation = 'flip 1s ease forwards';

    setTimeout(() => {
      rules[ruleActiveIndex].classList.remove('rules__card_active');
      rules[ruleActiveIndex].style.position = 'relative';
    }, 500);

    setTimeout(() => {
      switchRulesBtn.disabled = false;
    }, 1000);
  });
}
