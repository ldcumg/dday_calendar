// 기능2: 공유하기
document.getElementById('shareButton').addEventListener('click', async () => {
  try {
    // Check if the Web Share API is available
    if (!navigator.share) {
      alert('Web Share API is not available on your browser.');
      return;
    }

    // Your share data
    const shareData = {
      title: 'Web Share Example',
      text: 'Check out this web share example!',
      url: window.location.href
    };

    // Invoke the share dialog
    await navigator.share(shareData);
    console.log('Data was shared successfully');
  } catch (err) {
    console.error('Share failed:', err.message);
  }
});