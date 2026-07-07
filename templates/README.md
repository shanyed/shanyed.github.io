# Article template

This folder keeps the shared shape for future posts. Existing HTML pages are still supported; the generated metadata lives in `../site-data/posts.json`.

Recommended fields for each new article:

- `title`
- `date` in `YYYY-MM-DD`
- `section`: 随笔 / 梦境 / 札记 / Research
- `summary`: one sentence
- `tags`: optional manual tags, excluding the section name when possible
- `image`: optional relative image path

How to create a new article:

1. Copy `article-template.html` into the matching content folder.
2. Rename it with your preferred file name, for example `a_11new-note.html`.
3. Replace the `{{...}}` placeholders; keep `Archive · {{section}}` as the category line.
4. Write the body HTML in `{{content}}`.
5. Add custom tags in `../site-data/manual-tags.json` only when you want tags beyond 随笔 / 梦境 / 札记 / Research.
6. Run the upgrade script again so RSS, sitemap, search data, prev/next, and metadata are refreshed.

Current generated article count: 61
