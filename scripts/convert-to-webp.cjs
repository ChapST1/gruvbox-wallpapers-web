const sharp = require('sharp')
const fs = require('node:fs/promises')
const { join } = require('node:path');

(async function () {
  /**
   *  get wallpaper folder
   */
  const wallpapers = await fs.readdir('wallpapers')

  for await (const category of wallpapers) {
    /** create category folder path => wallpapers/category */
    const categoryPath = join('wallpapers', category)

    /**
     *  Read folder - wallpapers
     *   ['1.png', '2.jpg', ...]
     */
    const currentCategoryImages = await fs.readdir(categoryPath)

    // create thumbnail folder
    await fs.mkdir(join('web-thumbnails', category), {
      recursive: true
    })

    currentCategoryImages.forEach(async (item) => {
      const [name] = item.split('.')

      /** Current wallpaper */
      const path = join(categoryPath, item)

      await sharp(path)
        .resize({
          width: 300
        })
        .webp({ lossless: false, quality: 100 })
        .toFile(`${join('web-thumbnails', category, name)}.webp`)
    })
  }
})()
