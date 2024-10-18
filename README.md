# LCP Test

This project is designed to test and improve the Largest Contentful Paint (LCP) metric by experimenting with different image loading techniques.

## Description

The project includes multiple versions of a simple HTML page, each with different image loading strategies:
- Normal image loading
- Lazy loading
- Preloading
- Resized images
- Converted images (WebP, AVIF, Picture tag)

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/lcp-test.git
    cd lcp-test
    ```

2. Ensure you have a local server to serve the HTML files. You can use Python's built-in HTTP server:
    ```sh
    python3 -m http.server
    ```

3. Open your browser and navigate to `http://localhost:8000`.

## Usage

1. Open `index.html` in your browser.
2. Click on the different versions of the HTML pages listed to see how each technique affects the LCP metric.
3. The average LCP value for each version is stored in the session storage and displayed next to the corresponding link.

## File Structure

- `index.html`: Main page listing all versions.
- `css/`: Directory containing CSS files.
- `js/`: Directory containing JavaScript files.
- `images/`: Directory containing images used in the tests.

## Additional Information

- The project uses Bootstrap for styling.
- Chart.js is used to visualize the LCP metrics.
- jQuery is used for DOM manipulation.

## License

This project is licensed under the MIT License.
