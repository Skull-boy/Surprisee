# Love Surprise Website

This is a responsive, animated, and colorful website designed to surprise your loved one with a collection of your favorite photos together.

## How to Use

1. **Add Your Photos**: 
   - Create an `images` folder if it doesn't exist already
   - Add your photos to the `images` folder
   - Update the `script.js` file to use your photos instead of the placeholders

2. **Customize Messages**:
   - Edit the love messages in the `script.js` file to personalize them
   - Update the text in the love letter section in `index.html`

3. **View the Website**:
   - Open `index.html` in any web browser
   - The slideshow will automatically cycle through your photos
   - Hover over images to see your love messages
   - Click the heart at the top for a special surprise

## Features

- Responsive design that works on all devices
- Beautiful animations and transitions
- Auto-advancing slideshow with navigation controls
- Customizable love messages for each photo
- Floating hearts animation
- Special surprise when clicking the heart

## How to Replace Placeholder Images

In the `script.js` file, find this section:

```javascript
const placeholderImages = [
    { url: 'https://source.unsplash.com/random/800x500/?couple', message: loveMessages[0] },
    // more placeholders...
];
```

Replace it with your own images:

```javascript
const placeholderImages = [
    { url: 'images/photo1.jpg', message: loveMessages[0] },
    { url: 'images/photo2.jpg', message: loveMessages[1] },
    // Add more of your photos here
];
```

Enjoy creating a beautiful surprise for your loved one!