const goalAmount = 1000; // Set your donation goal
let currentAmount = 0; // This will be updated based on real-time donations

function updateProgress() {
    const progressBar = document.getElementById("progress");
    let progressPercent = (currentAmount / goalAmount) * 100;

    // Update the width of the progress bar
    progressBar.style.width = `${progressPercent}%`;
}

// Simulate donations (replace this with real data from Streamlabs)
setInterval(() => {
    if (currentAmount < goalAmount) {
        currentAmount += 100; // Simulate donations incrementing
        updateProgress();
    }
}, 2000); // Update every 2 seconds


