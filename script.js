    
    <div class="container">
    <div class="card">
      <img src="assets/Rewards.png" img-align: center; alt="Rewards" width="100%" height="50%" />
      <h2><span style="color: rgb(255, 255, 255);">Tailored Rewards</span></h2>
      <p>Enjoy customized perks and discounts based on visit history and preferences.<p>
    </div>
    <div class="card">
      <img src="assets/soc.png" img-align: center; alt="Rewards" width="100%" height="50%" />
      <h2><span style="color: rgb(255, 255, 255);">Social Media Incentives</span></h2>
      <p>Get rewarded for sharing venue experiences on social platforms.</p>
    </div>
    <div class="card">
      <img src="assets/vers.png" img-align: center; alt="Rewards" width="100%" height="50%" />
      <h2><span style="color: rgb(255, 255, 255);">VIP Community Feel</span></h2>
      <p>Experience the exclusivity and special treatment of being part of a select community.</p>
    </div>
    <div class="card">
      <img src="assets/vip.png" img-align: center; alt="Rewards" width="100%" height="50%" />
      <h2><span style="color: rgb(255, 255, 255);">Versatile Subscriptions</span></h2>
      <p>Subscribe not just to food and drinks, but also to unique experiences like surprise dates.</p>
    </div>
    <div class="card">
      <img src="assets/imp.png" img-align: center; alt="Rewards" width="100%" height="50%" />
      <h2><span style="color: rgb(255, 255, 255);">Impactful Feedback</span></h2>
      <p>Your feedback improves experiences - have a say in your next visit.</p>
    </div>
  </div>
  <script src="script.js"></script>
  <style>
    /* CSS styles for container and cards */
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    

    .card {
        width: 200px;
        background-color: #2c2c2c;
        border-radius: 1px;
        padding: 70px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        animation: none; /* Initially no animation */
    }

    h1, h2 {
        margin: 0;
        margin-bottom: 10px;
    }

    p {
        margin: 0;
    }

    /* CSS animations */
  

    @keyframes pop {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
</style>
</head>
<body>
<!-- Your container and card elements -->

<script>
    window.addEventListener('scroll', function() {
        var cards = document.querySelectorAll('.card');
        var scrollTop = window.scrollY;

        cards.forEach(function(card, index) {
            var cardOffset = card.offsetTop;
            var cardHeight = card.offsetHeight;

            if (scrollTop > cardOffset - window.innerHeight + cardHeight / 2 &&
                scrollTop < cardOffset + cardHeight - cardHeight / 2) {
                // Apply animation when card is in the middle of the viewport
                card.style.animation = 'glow 2s infinite alternate, pop 1s';
            } else {
                // Remove animation when card is not in the middle of the viewport
                card.style.animation = 'none';
            }
        });
    });
</script>    