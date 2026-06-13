function check(btn) {
  const opts = btn.parentElement;
  const btns = opts.querySelectorAll('button');
  const ans = opts.getAttribute('data-answer');
  const idx = Array.from(btns).indexOf(btn);
  const letters = ['a','b','c','d'];
  const fb = opts.nextElementSibling;
  btns.forEach(b => { b.classList.remove('correct','wrong'); b.disabled = true; });
  if (letters[idx] === ans) {
    btn.classList.add('correct');
    fb.textContent = 'Dobrze! \u2713';
    fb.className = 'feedback show correct-fb';
  } else {
    btn.classList.add('wrong');
    btns[letters.indexOf(ans)].classList.add('correct');
    fb.textContent = 'Nie. Poprawna odpowied\u017a: ' + ans + '. Wr\u00f3\u0107 do algorytmu nad quizem i wska\u017c krok, kt\u00f3ry rozstrzyga zadanie.';
    fb.className = 'feedback show wrong-fb';
  }
}
