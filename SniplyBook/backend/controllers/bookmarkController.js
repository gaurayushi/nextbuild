import Bookmark from '../models/Bookmark.js'
import fetch    from 'node-fetch'


async function getSummary(url) {
  try {
    const isHttps = url.startsWith('https://')
    const scheme  = isHttps ? 'https://' : 'http://'

    const stripped = url.replace(/^https?:\/\//, '')
    const target   = encodeURIComponent(stripped)

    const res = await fetch(`https://r.jina.ai/${scheme}${target}`)
    if (!res.ok) {
      console.warn(`Jina AI returned ${res.status}`)
      return null
    }

    const text = await res.text()
    if (text.length > 500) {
      const idx = text.lastIndexOf('.', 500)
      return text.slice(0, idx > 0 ? idx + 1 : 500) + '…'
    }
    return text

  } catch (err) {
    console.error('Summary fetch failed:', err)
    return null
  }
}

export async function createBookmark(req, res) {
  const { url } = req.body
  try {
    const pageRes = await fetch(url)
    const html    = await pageRes.text()
    const title   = html.match(/<title>(.*?)<\/title>/i)?.[1] || url

    const favicon = new URL('/favicon.ico', url).href

    const summary = await getSummary(url)

    const bm = await new Bookmark({
      user:    req.user.id,
      url,
      title,
      favicon,
      summary: summary ?? 'Summary temporarily unavailable.'
    }).save()

    return res.status(201).json(bm)

  } catch (err) {
    console.error('Error creating bookmark:', err)
    return res.status(500).json({ msg: 'Error creating bookmark' })
  }
}

export async function getBookmarks(req, res) {
  try {
    const list = await Bookmark
      .find({ user: req.user.id })
      .sort({ createdAt: -1 })
    return res.json(list)
  } catch (err) {
    console.error('Error fetching bookmarks:', err)
    return res.status(500).json({ msg: 'Error fetching bookmarks' })
  }
}

export async function deleteBookmark(req, res) {
  try {
    await Bookmark.deleteOne({ _id: req.params.id, user: req.user.id })
    return res.json({ msg: 'Deleted' })
  } catch (err) {
    console.error('Error deleting bookmark:', err)
    return res.status(500).json({ msg: 'Error deleting bookmark' })
  }
}

export async function reorderBookmarks(req, res) {
  const { ids } = req.body
  try {
    await Promise.all(ids.map((id, i) =>
      Bookmark.updateOne({ _id: id, user: req.user.id }, { order: i })
    ))
    return res.json({ msg: 'Reordered' })
  } catch (err) {
    console.error('Error reordering bookmarks:', err)
    return res.status(500).json({ msg: 'Error reordering bookmarks' })
  }
}
