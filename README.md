
# Kamila Meghji - Personal Portfolio

A sleek, modern personal portfolio website showcasing my projects, experience, and professional background.

**Live Site**: https://kameghji.github.io

## About This Project

This is my personal portfolio website built with modern web technologies to showcase my work as a software developer. The site features:

- **Hero Section**: Professional introduction with social links
- **About**: Personal background and skills
- **Projects**: Showcase of my development work
- **Experience**: Professional background and resume
- **Contact**: Ways to get in touch

## Technologies Used

- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons

## GitHub Pages Deployment

This project is configured to be deployed directly from GitHub using GitHub Pages:

1. **Repository Setup**: The repository is named `kameghji.github.io` to enable GitHub Pages automatic deployment
2. **GitHub Actions**: Configured for automatic deployment on push to main branch
3. **Live URL**: The site is automatically available at https://kameghji.github.io

### Manual Deployment Steps

If you need to set up GitHub Pages manually:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The site will build and deploy automatically on each push to the main branch

## Local Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/kameghji/kameghji.github.io.git

# Navigate to project directory
cd kameghji.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero/landing section
│   ├── About.tsx       # About me section
│   ├── Projects.tsx    # Projects showcase
│   ├── Experience.tsx  # Work experience
│   └── Contact.tsx     # Contact information
├── pages/
│   └── Index.tsx       # Main page component
└── main.tsx           # Application entry point
```

## Customization

To customize this portfolio for your own use:

1. Update personal information in each component
2. Replace project data with your own projects
3. Update social media links in the Hero component
4. Modify the color scheme in `tailwind.config.ts`
5. Update contact information

## Contact

- **GitHub**: [@kameghji](https://github.com/kameghji)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/kamila-meghji)
- **Email**: [Contact me](mailto:your-email@example.com)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
