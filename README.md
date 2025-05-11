# Shashwat Shahi - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Machine Learning Engineer at Novartis, featuring my research projects, skills, and professional experience.

![Portfolio Preview](assets/img/portfolio-preview.png)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dynamic Projects Section**: Show/Hide functionality for project cards
- **Categorized Projects**: Projects filtered by ML/AI, NLP/LLM, Computer Vision, and Web Applications
- **Elegant UI/UX**: Modern design with smooth animations and transitions
- **Icon-based Design**: Professional icons for skills and projects
- **Interactive Elements**: Hover effects, animated buttons, and smooth scrolling

## 🛠️ Technologies Used

- **Frontend Framework**: Bootstrap 4.5
- **JavaScript Libraries**: 
  - jQuery
  - Typed.js (for typing animation)
  - Isotope (for portfolio filtering)
  - Owl Carousel (for testimonials)
  - AOS (Animate On Scroll)
- **Icon Libraries**: 
  - BoxIcons
  - IcoFont
- **CSS**: Custom styles with gradients and animations
- **Fonts**: Google Fonts (Open Sans, Raleway, Poppins)

## 📋 Sections

1. **Hero Section**: Introduction with typing animation
2. **About**: Professional summary and expertise
3. **Patents & Publications**: Research contributions
4. **Skills & Technologies**: Technical skills organized by category
5. **Resume**: Education and professional experience
6. **Projects**: Portfolio of ML/AI and web projects
7. **Certifications**: Professional achievements
8. **Contact**: Contact information and location

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local web server (optional, for local development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shashwat-shahi/shashwat-shahi.github.io.git
   ```

2. Navigate to the project directory:
   ```bash
   cd shashwat-shahi.github.io
   ```

3. Open `index.html` in your web browser or serve it using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## 📁 Project Structure

```
portfolio-website/
├── index.html           # Main HTML file
├── error.html          # 404 error page
├── assets/
│   ├── css/
│   │   ├── style.css   # Main stylesheet
│   │   └── error.css   # Error page styles
│   ├── js/
│   │   └── main.js     # Main JavaScript file
│   ├── img/
│   │   ├── profile-img_comp.jpg
│   │   ├── hero-bg.jpg
│   │   └── portfolio/  # Project thumbnails
│   └── vendor/         # Third-party libraries
├── README.md           # Project documentation
└── LICENSE            # License file
```

## 🎨 Customization

### Adding New Projects

1. Add a new project card in the portfolio section:
   ```html
   <div class="col-lg-4 col-md-6 portfolio-item filter-[category]">
     <div class="portfolio-wrap">
       <div class="portfolio-header [category]-header">
         <div class="portfolio-icon">
           <i class="icofont-[icon-name]"></i>
         </div>
         <h5 class="portfolio-title">Project Name</h5>
         <p class="portfolio-category">Category</p>
       </div>
       <div class="portfolio-content">
         <p>Project description</p>
         <a href="github-link" class="portfolio-link" target="_blank">
           View Project <i class="icofont-arrow-right"></i>
         </a>
       </div>
     </div>
   </div>
   ```

### Updating Skills

Skills are organized in card format in the Skills & Technologies section. To add or modify skills, update the relevant `icon-box` div.

### Changing Colors

The project uses gradient backgrounds for different categories:
- ML/AI: Purple gradient
- NLP: Pink gradient
- Computer Vision: Blue gradient
- Web: Green gradient

These can be modified in the `style.css` file.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Acknowledgments

- Template originally from [BootstrapMade](https://bootstrapmade.com/)
- Icons from [BoxIcons](https://boxicons.com/) and [IcoFont](https://icofont.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Contact

Shashwat Shahi - [LinkedIn](https://www.linkedin.com/in/shashwat-shahi/) - shahi.sh1028@gmail.com

Project Link: [https://github.com/shashwat-shahi/shashwat-shahi.github.io](https://github.com/shashwat-shahi/shashwat-shahi.github.io)

---

Made with ❤️ by Shashwat Shahi