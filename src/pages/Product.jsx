import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
  const [expandedProducts, setExpandedProducts] = useState({});
  const [showAllImages, setShowAllImages] = useState({});
  const [lightboxData, setLightboxData] = useState({ isOpen: false, productId: null, imageIndex: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  useEffect(() => {
    document.title = 'Our Products | EISTATECH - Innovative Software Solutions';
  }, []);

  const toggleVideo = () => {
    const currentVideo = isMaximized ? modalVideoRef.current : videoRef.current;
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMaximize = (e) => {
    e.stopPropagation();
    setIsMaximized(!isMaximized);
    // If we transition to maximized, keep play state consistent
    setTimeout(() => {
      const currentVideo = !isMaximized ? modalVideoRef.current : videoRef.current;
      if (currentVideo && isPlaying) {
        currentVideo.play().catch(() => setIsPlaying(false));
      }
    }, 50);
  };

  const toggleExpand = (id) => {
    setExpandedProducts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleShowAllImages = (id) => {
    setShowAllImages(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const products = [
    {
      id: 'geopunch',
      name: 'GeoPunch — Smart Geo-Fencing Attendance System',
      tagline: 'Accurate. Secure. Location-Verified Attendance for Modern Workforces.',
      shortDesc: 'GeoPunch is a SaaS-based attendance and workforce management system that uses advanced geo-fencing technology to ensure employees can mark attendance only from approved locations.',
      fullDesc: 'Designed for organizations with field staff, remote teams, and multi-site operations, GeoPunch eliminates proxy attendance and provides real-time visibility into workforce activity. It gives managers total control over where and when work begins, ensuring accountability and streamlining payroll processing.',
      features: [
        'Geo-fencing based attendance (location-verified check-in)',
        'Live selfie verification to prevent proxy punching',
        'On-demand presence check (inside / outside workplace)',
        'Offline attendance with automatic sync',
        'Task assignment & field visit tracking',
        'Start / End visit monitoring with location capture',
        'Geo-tagged photo proof of work completion',
        'Privacy-friendly live workforce tracking (optional)',
        'Fake GPS & proxy attendance prevention',
        'Smart employee management system',
        'Daily, monthly & payroll-ready reports',
        'Advanced productivity analytics & insights',
        'Powerful admin control dashboard',
        'Multi-location workforce support',
        'Cloud-based secure SaaS platform',
        'Real-time alerts & notifications',
        'Works on Android, iOS & Web',
        'Easy deployment — no extra hardware required'
      ],
      images: [
        '/App1.jpeg',
        '/App2.jpeg',
        '/App3.jpeg',
        '/App4.jpeg',
        '/App5.jpeg',
        '/app6.jpeg',
        '/App7.jpeg',
        '/App8.jpeg',
        '/App9.jpeg',
        '/App11.jpeg',
        '/web1.jpeg',
        '/web2.jpeg',
        '/web4.jpeg'
      ],
      links: {
        try: 'https://geopuncheistatech.netlify.app/',
        install: 'https://play.google.com/store/apps/details?id=com.eistatech.geopunch'
      }
    }
  ];

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const activeProduct = products.find(p => p.id === lightboxData.productId);
    if (!activeProduct || !activeProduct.images || lightboxData.imageIndex === 0) return;
    setLightboxData(prev => ({
      ...prev,
      imageIndex: prev.imageIndex - 1
    }));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const activeProduct = products.find(p => p.id === lightboxData.productId);
    if (!activeProduct || !activeProduct.images || lightboxData.imageIndex === activeProduct.images.length - 1) return;
    setLightboxData(prev => ({
      ...prev,
      imageIndex: prev.imageIndex + 1
    }));
  };

  return (
    <div className="product-page">
      <section className="product-hero hero-gradient">
        <div className="container">
          <div className="hero-content fade-in-up animate">
            <h1 className="hero-product-title">Our Products</h1>
            <p className="hero-product-subtitle">Innovative software solutions designed to simplify operations and improve productivity</p>
          </div>
        </div>
      </section>

      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card fade-in-up animate">
            <div className="product-card-content">
              <div className="product-info-left">
                <div className="product-item-header">
                  <img src="/Gallery/GeoPunch.png" alt="GeoPunch Logo" className="product-item-logo" />
                  <h2 className="product-item-name">{product.name}</h2>
                </div>
                <p className="product-item-tagline">{product.tagline}</p>
                <div className="product-short-description">
                  <p>{product.shortDesc}</p>
                </div>

                {expandedProducts[product.id] && (
                  <div className="product-expanded-content">
                    <p className="product-full-description">{product.fullDesc}</p>
                    <div className="product-features-video-section">
                      <div className="product-features-box">
                        <h3>Key Features</h3>
                        <ul className="product-features-list">
                          {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="product-video-frame">
                        <div className="video-placeholder" onClick={toggleVideo}>
                          <video ref={videoRef} loop playsInline>
                            <source src="/Gallery/fish.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className={`video-control-btn ${isPlaying ? 'playing' : 'paused'}`}>
                            {isPlaying ? '⏸' : '▶'}
                          </div>
                          <button className="video-maximize-btn" onClick={toggleMaximize} title="Maximize">
                            ⛶
                          </button>
                          <div className="video-overlay">Demo Video</div>
                        </div>
                      </div>
                    </div>
                    {/* App Screenshots Gallery */}
                    {product.images && product.images.length > 0 && (
                      <div className="product-gallery-section">
                        <h3>App Screenshots</h3>
                        <div className="product-gallery-grid">
                          {(showAllImages[product.id] ? product.images : product.images.slice(0, 4)).map((imgSrc, index) => {
                            const isWeb = imgSrc.toLowerCase().includes('web');
                            return (
                              <div
                                key={index}
                                className={`gallery-img-wrapper ${isWeb ? 'web-frame' : 'mobile-frame'}`}
                                onClick={() => setLightboxData({ isOpen: true, productId: product.id, imageIndex: index })}
                                title="Click to view full image"
                              >
                                <img src={imgSrc} alt={`${product.name} screenshot ${index + 1}`} className="gallery-img" loading="lazy" />
                              </div>
                            );
                          })}
                        </div>
                        {product.images.length > 4 && (
                          <div className="gallery-show-more-container">
                            <button
                              className="gallery-show-more-arrow"
                              onClick={() => toggleShowAllImages(product.id)}
                              title={showAllImages[product.id] ? 'Show Less' : 'Show All'}
                            >
                              {showAllImages[product.id] ? (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="18 15 12 9 6 15"></polyline>
                                </svg>
                              ) : (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div className="product-card-actions">
                  <button
                    className="view-more-btn"
                    onClick={() => toggleExpand(product.id)}
                  >
                    {expandedProducts[product.id] ? 'View Less' : 'View More Details'}
                  </button>
                  <div className="action-links">
                    <a
                      href={product.links.try}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!window.confirm("You are being redirected to the GeoPunch website. Do you want to continue?")) {
                          e.preventDefault();
                        }
                      }}
                    >
                      Try Now
                    </a>
                    <a href={product.links.install} className="btn btn-secondary">Install</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {isMaximized && (
        <div className="video-modal-overlay" onClick={toggleMaximize}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={toggleMaximize}>×</button>
            <video ref={modalVideoRef} controls autoPlay={isPlaying} loop>
              <source src="/Gallery/fish.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {lightboxData.isOpen && (() => {
        const activeProduct = products.find(p => p.id === lightboxData.productId);
        const currentImage = activeProduct?.images[lightboxData.imageIndex];
        if (!currentImage) return null;

        return (
          <div className="image-lightbox-overlay" onClick={() => setLightboxData({ isOpen: false, productId: null, imageIndex: 0 })}>
            <div className="image-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-lightbox-close" onClick={() => setLightboxData({ isOpen: false, productId: null, imageIndex: 0 })}>×</button>

              {lightboxData.imageIndex > 0 && (
                <button className="image-lightbox-nav prev" onClick={handlePrevImage} aria-label="Previous Image">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              )}

              <img src={currentImage} alt="Expanded Screenshot" className="lightbox-img" />

              {lightboxData.imageIndex < activeProduct.images.length - 1 && (
                <button className="image-lightbox-nav next" onClick={handleNextImage} aria-label="Next Image">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              )}

              <div className="lightbox-counter">
                {lightboxData.imageIndex + 1} / {activeProduct.images.length}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default Product;
