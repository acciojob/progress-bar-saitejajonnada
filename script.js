 let currentStep = 1;
        const circles = document.querySelectorAll('.circle');
        const progress = document.getElementById('progress');
        const nextBtn = document.getElementById('next');
        const prevBtn = document.getElementById('prev');

        function updateProgress() {
            circles.forEach((circle, index) => {
                if (index < currentStep) {
                    circle.classList.add('active');
                } else {
                    circle.classList.remove('active');
                }
            });
            progress.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + '%';
            prevBtn.disabled = currentStep === 1;
            nextBtn.disabled = currentStep === circles.length;
        }

nextBtn.addEventListener('click', () => {
	    if (currentStep < circles.length) {
            currentStep++;
            updateProgress();
		}
});
prevBtn.addEventListener('click', () =>
	{
		if (currentStep > 1) {
            currentStep--;
            updateProgress();
        }
});


         