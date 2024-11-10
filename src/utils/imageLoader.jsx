const IMAGE_CATEGORIES = {
    IMC: 'imc',
    SITEI: 'sitei',
    EARTH_WOMEN: 'earthwomen',
    TLP: 'tlp',
    PLI: 'pli',
    SEV: 'sev',
    HBC: 'hbc',
    UBOMI: 'ubomi',
    ASIDO: 'asido',
    CADA: 'cada',
    SPARTAN: 'spartan',
    SERIES: 'series',
    JUNIOR_GOLF: 'juniorgolf',
  };
  
  export const importImagesFromContext = (context) => {
    const images = Object.values(IMAGE_CATEGORIES).reduce((acc, category) => {
      acc[category] = [];
      return acc;
    }, {});
  
    try {
      context.keys().forEach(key => {
        // Extract filename without extension
        const filename = key.split('/').pop().split('.')[0].toLowerCase();
        
        // Find matching category
        const category = Object.values(IMAGE_CATEGORIES).find(cat => 
          filename.startsWith(cat)
        );
        
        if (category) {
          images[category].push({
            src: context(key),
            name: filename,
            index: parseInt(filename.replace(category, '')) || 0
          });
        }
      });
  
      // Sort images by index within each category
      Object.keys(images).forEach(category => {
        images[category].sort((a, b) => a.index - b.index);
      });
  
      return images;
    } catch (error) {
      console.error('Error importing images:', error);
      return images;
    }
  };