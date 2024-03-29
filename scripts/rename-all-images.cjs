const fs = require('node:fs/promises')
const { join, extname } = require('node:path');

(async function () {
  const categoryImages = await fs.readdir('wallpapers')

  for await (const category of categoryImages) {
    const categoryPath = join('wallpapers', category)
    const categoryDir = await fs.readdir(categoryPath)

    categoryDir.forEach(async (item, index) => {
      const ext = extname(item)

      const imagePath = join('wallpapers', category, item)
      const newImagePath = join('wallpapers', category, `${index + 1}${ext}`)

      await fs.rename(imagePath, newImagePath)
      console.log(imagePath + ' 👉 ' + newImagePath + ' success!!! ')
    })
  }
})()
