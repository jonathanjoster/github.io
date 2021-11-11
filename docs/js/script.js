function accordion(button) {
  const wrapper = button.nextElementSibling;
  const children = wrapper.children;
  wrapper.classList.toggle('is-active');
  if (wrapper.classList.contains('is-active')) {
    const childrenLength = getChildrenLength(children);
    wrapper.style.height = childrenLength + 'px';

    const sequence = getRandomSeqence(children.length);
    for (let i=0; i<sequence.length; i++) {
        appearContent(children[sequence[i]], i);
    }
  } else {
    wrapper.style.height = '0rem';
    for (let i=0; i<children.length; i++) {
      hideContent(children[i]);
    }
  }
}

function getChildrenLength(children) {
  let sum = 0;
  for (let child of children) {
    sum += child.clientHeight;
  }
  return sum;
}

/**
 * getRandomSequence(4); // [1, 0, 3, 2]
 * @param {int} length the length of the sequence
 * @return {array} sequence mixed range()-like array
 */
function getRandomSeqence(length) {
  let count = length;
  let sequence = [];
  while (count--) {
    let r;
    while (true) {
      r = Math.floor(Math.random() * length);
      if (!sequence.includes(r)) { break; }
    }
    sequence.push(r);
  }
  return sequence;
}

function appearContent(content, delay) {
  const delaySec = (delay+1) * 0.15;
  content.style.transition = `all 0.5s ${delaySec}s ease`;
  content.style.opacity = 1;
  content.style.visibility = 'visible';
}

function hideContent(content) {
  content.style.transition = 'all 0.1s 0s ease';
  content.style.opacity = 0;
  content.style.visibility = 'hidden';
}

const button = document.querySelectorAll('.unwrap-button');
for (let btn of button) {
  btn.addEventListener('click', () => {
    accordion(btn);
  });
}
