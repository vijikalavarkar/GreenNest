import { useAuth } from '../../store/auth'
import './Home.css'


const Home = () => {

    const { user } = useAuth();
    console.log('User is', user);
    
    return (
        <>
            <div className="verify-email">
                
            </div>

            <header class="hero">
                <div class="container">
                    <div class="hero-content">
                        <h1>Bring Nature Inside</h1>
                        <p>Discover our curated collection of beautiful indoor plants that bring life and freshness to your space.</p>
                        <button class="cta-button">Explore Collection</button>
                    </div>
                    <div class="hero-image">
                        <img src="https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg" alt="Beautiful indoor plant" />
                    </div>
                </div>
            </header>


            <section class="features">
                <div class="container">
                    <div class="feature-card">
                        <div class="feature-icon">🌿</div>
                        <h3>Easy Care Plants</h3>
                        <p>Perfect for beginners and busy plant parents</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🌱</div>
                        <h3>Premium Quality</h3>
                        <p>Carefully selected and nurtured plants</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">☀️</div>
                        <h3>Expert Guidance</h3>
                        <p>Detailed care instructions for every plant</p>
                    </div>
                </div>
            </section>


            <section class="featured-plants">
                <div class="container">
                    <h2>Featured Plants</h2>
                    <div class="plant-grid">
                        <div class="plant-card">
                            <img src="https://images.pexels.com/photos/3097770/pexels-photo-3097770.jpeg" alt="Monstera Deliciosa" />
                            <div class="plant-info">
                                <h3>Monstera Deliciosa</h3>
                                <div class="price-action">
                                    <span class="price">$45</span>
                                    <button class="learn-more">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="plant-card">
                            <img src="https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg" alt="Snake Plant" />
                            <div class="plant-info">
                                <h3>Snake Plant</h3>
                                <div class="price-action">
                                    <span class="price">$35</span>
                                    <button class="learn-more">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="plant-card">
                            <img src="https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg" alt="Peace Lily" />
                            <div class="plant-info">
                                <h3>Peace Lily</h3>
                                <div class="price-action">
                                    <span class="price">$30</span>
                                    <button class="learn-more">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="newsletter">
                <div class="container">
                    <h2>Join Our Green Community</h2>
                    <p>Get plant care tips and exclusive offers straight to your inbox</p>
                    <div class="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button class="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </section>


            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h4>About GreenThumb Haven</h4>
                            <p>We're passionate about bringing the beauty of nature into your home with our carefully curated collection of indoor plants.</p>
                        </div>
                        <div class="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#shop">Shop Plants</a></li>
                                <li><a href="#care">Plant Care</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h4>Customer Service</h4>
                            <ul>
                                <li><a href="#shipping">Shipping Info</a></li>
                                <li><a href="#returns">Returns</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="#track">Track Order</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h4>Connect With Us</h4>
                            <div class="social-links">
                                <a href="#" class="social-link">Facebook</a>
                                <a href="#" class="social-link">Instagram</a>
                                <a href="#" class="social-link">Pinterest</a>
                                <a href="#" class="social-link">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2024 GreenThumb Haven. All rights reserved.</p>
                        <div class="footer-bottom-links">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Home