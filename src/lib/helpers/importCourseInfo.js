const imports = Object.entries(import.meta.glob('../content/courses/*.md'));

export const courseInfo = await Promise.all(
  imports.map(async ([path, resolver]) => {
    const { metadata } = await resolver()

    return { ...metadata }
  })
)