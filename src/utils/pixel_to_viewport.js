const pixel_to_viewport = (size, width = 1440) => `${(size / width) * 100}vw`;

export default pixel_to_viewport;