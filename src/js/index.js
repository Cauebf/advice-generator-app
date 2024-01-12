const adviceUpdateButton = document.querySelector('.btn-update-advice');
const adviceNumber = document.querySelector('.advice-id');
const adviceDescription = document.querySelector('.advice-text');

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceID = `advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    adviceNumber.innerHTML = adviceID;
    adviceDescription.innerHTML = adviceText
}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();