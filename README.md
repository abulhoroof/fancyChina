# Suppliers Directory

A modern web application showcasing a directory of suppliers across various industries. Built with Vite and vanilla JavaScript.

## Features

- Responsive design
- Category-based supplier filtering
- Detailed supplier information including:
  - Company name
  - Description
  - Product images
  - Website links
  - Industry tags

## Categories

The directory includes suppliers from various categories:
- Shoes
- Bags
- Sports & Recreational
- Clothing
- Jewelry
- Kitchen
- Furniture
- Automotive & Industrial
- Others

## Project Structure

```
├── public/
│   ├── images/
│   │   └── suppliers/    # Supplier images
│   └── suppliers.json    # Supplier data
├── src/
├── index.html
├── main.js
├── style.css
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Data Structure

The suppliers data is stored in `public/suppliers.json` with the following structure:

```json
{
  "title": "Company Name",
  "desc": "Company Description",
  "image": "/images/suppliers/image.jpg",
  "imageFilename": "image.jpg",
  "url": "https://company-website.com",
  "tags": ["category1", "category2"]
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🪪 License

FancyChina is dual-licensed:

- **AGPLv3** — for personal and non-commercial use. See [`LICENSE`](./LICENSE)
- **Commercial Use** — Pay what you want (buy me a coffee ☕). See [`COMMERCIAL-LICENSE.md`](./COMMERCIAL-LICENSE.md)

If you're using this in a commercial project, we kindly ask that you support the work 🙏  
→ [Buy me a coffee](https://www.buymeacoffee.com/hanoote)