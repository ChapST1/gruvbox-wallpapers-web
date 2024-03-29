const fs = require('node:fs/promises')
const { join } = require('node:path')
const sharp = require('sharp');

(async function () {
  const wallpapers = await fs.readdir('wallpapers')
  const totalInfo = []

  for await (const category of wallpapers) {
    /** create category folder path => wallpapers/category */
    const categoryPath = join('wallpapers', category)
    const currentCategoryImages = await fs.readdir(categoryPath)

    const currentCategoryData = {
      category,
      data: []
    }

    for await (const item of currentCategoryImages) {
      const currentImagePath = join('wallpapers', category, item)
      const [name] = item.split('.')

      const { width, height } = await sharp(currentImagePath).metadata()

      const githubImage = generateGithubImageUrl({
        category,
        dir: 'wallpapers',
        image: item
      })

      const githubThumbImage = generateGithubImageUrl({
        category,
        dir: 'web-thumbnails',
        image: `${name}.webp`
      })

      currentCategoryData.data = [...currentCategoryData.data, {
        full: githubImage,
        fullWidth: width,
        fullHeight: height,
        thumb: githubThumbImage
      }]
    }

    totalInfo.push(currentCategoryData)
  }

  await fs.writeFile(join('web', 'public', 'data.json'), JSON.stringify(totalInfo))
})()

function generateGithubImageUrl ({ dir, category, image }) {
  /**
   * ? https://raw.githubusercontent.com/ChapST1/gruvbox-wallpapers-web/master/wallpapers/videogame-3d-art/3.jpg
   */
  return `https://raw.githubusercontent.com/ChapST1/gruvbox-wallpapers-web/master/${dir}/${category}/${image}`
}
