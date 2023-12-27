export const fetchData = async (endpoint, options) => {
  const res = await fetch(
    `https://api.blog.redberryinternship.ge/api/${endpoint}`,
    {
      ...options,
    }
  )
  if (!res.ok) {
    if (res.body) {
      const error = await res.json()
      throw new Error(JSON.stringify(error))
    }
    throw new Error('General Error')
  }

  return res.status == 204 ? { succes: true } : res.json()
}
